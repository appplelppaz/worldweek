"""サイトごとの収集処理。1サイトで何が起きても、そのサイトだけ打ち切って次へ進む。"""
from __future__ import annotations

import logging
import threading
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone

from . import dedup
from .discover import discover
from .extract import extract
from .fetch import Fetcher, FetchError
from .filters import judge, skip_url
from .store import Store, now

log = logging.getLogger("collector")


class Budget:
    """複数サイト合計で「あと何本あればよいか」を数える（目標に届いたら全サイト停止）。"""

    def __init__(self, total: int | None):
        self.left = total
        self.lock = threading.Lock()

    def done(self) -> bool:
        return self.left is not None and self.left <= 0

    def take(self):
        with self.lock:
            if self.left is not None:
                self.left -= 1


def collect_site(cfg: dict, lang: str, site: dict, fetcher: Fetcher, store: Store,
                 per_site: int, budget: Budget) -> dict:
    c = cfg["collect"]
    min_chars = cfg["filter"]["min_chars"][lang]
    stats = dict(candidates=0, fetched=0, ready=0, rejected=0, duplicates=0, blocked=0, errors=0, outcome="ok")
    max_fetch = int(per_site * 1.5) + 1  # 除外が出ても取りすぎないよう、ダウンロード数にも上限
    try:
        cands = discover(fetcher, site, log)
        cutoff = datetime.now(timezone.utc) - timedelta(days=c["max_age_days"])
        cands = [x for x in cands if x.published is None or x.published >= cutoff]
        # 新しい記事を優先（日付不明は後ろ）
        cands.sort(key=lambda x: x.published or datetime.min.replace(tzinfo=timezone.utc), reverse=True)
        stats["candidates"] = len(cands)
        if not cands:
            stats["outcome"] = "no_candidates"
            log.warning("[%s] 記事候補が見つからない → このサイトをスキップ", site["id"])

        for cand in cands:
            if budget.done() or stats["ready"] >= per_site or stats["fetched"] >= max_fetch:
                break
            if stats["fetched"] >= c["blocked_min_sample"] and \
                    stats["blocked"] / stats["fetched"] >= c["blocked_ratio_to_skip"]:
                stats["outcome"] = "paywalled"
                log.warning("[%s] 半分以上が購読制限 → 次のサイトへ", site["id"])
                break
            url_n = dedup.normalize_url(cand.url)
            key = dedup.article_key(cand.url)
            base = dict(url_norm=url_n, url=cand.url, article_key=key, lang=lang, site=site["id"],
                        title=cand.title, published=cand.published.isoformat() if cand.published else None)
            reason = skip_url(cand.url)
            if reason:
                continue  # URLだけで除外できるものはダウンロードも記録もしない
            if store.known(url_n, key, c["max_error_attempts"]):
                continue
            try:
                r = fetcher.get(cand.url)
            except FetchError as e:
                stats["errors"] += 1
                permanent = e.kind in ("robots", "http_client")  # 再試行しても変わらないもの
                store.upsert(**base, status="rejected" if permanent else "error", reason=f"{e.kind}: {e}")
                log.warning("[%s] %s", site["id"], e)
                if e.kind == "robots":
                    continue
                if stats["errors"] >= 4 and stats["ready"] == 0:
                    stats["outcome"] = "too_many_errors"
                    log.warning("[%s] エラーが続く → このサイトをスキップ", site["id"])
                    break
                continue
            stats["fetched"] += 1
            final_n = dedup.normalize_url(r.url)
            if final_n != url_n and store.known(final_n, key, c["max_error_attempts"]):
                continue  # リダイレクト先が取得済み
            ex = extract(r.content, r.url)
            status, why, blocked = judge(ex, lang, min_chars)
            stats["blocked"] += int(blocked)
            title = (ex.title if ex and ex.title else cand.title) or ""
            base["title"] = title
            if status != "ready":
                stats["rejected"] += 1
                store.upsert(**base, status="rejected", reason=why, blocked=int(blocked))
                log.info("[%s] 除外 %s: %s", site["id"], why, cand.url)
                continue
            th = dedup.text_hash(ex.text)
            sh = dedup.simhash(ex.text)
            tn = dedup.norm_title(title)
            dup = store.find_duplicate(lang, ex.text, th, sh, tn, cfg["filter"]["near_duplicate_hamming"])
            if dup:
                stats["duplicates"] += 1
                store.upsert(**base, status="duplicate", reason=dup, text_hash=th, simhash=sh, title_norm=tn)
                log.info("[%s] 重複 %s: %s", site["id"], dup, cand.url)
                continue
            store.upsert(**base, status="ready", blocked=int(blocked), text_hash=th, simhash=sh,
                         title_norm=tn, chars=len(ex.text), text=ex.text, reason="partial" if blocked else None)
            stats["ready"] += 1
            budget.take()
    except Exception as e:  # ページ構造の変更など想定外のエラーも、このサイトだけ止める
        stats["outcome"] = f"site_error: {type(e).__name__}: {e}"
        log.exception("[%s] 予期しないエラー → このサイトをスキップ", site["id"])
    store.x("INSERT INTO site_runs (run_at, lang, site, candidates, fetched, ready, rejected, duplicates, "
            "blocked, errors, outcome) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
            (now(), lang, site["id"], stats["candidates"], stats["fetched"], stats["ready"],
             stats["rejected"], stats["duplicates"], stats["blocked"], stats["errors"], stats["outcome"]))
    return stats


def collect(cfg: dict, lang: str, site_ids: list[str] | None, per_site: int | None,
            max_total: int | None, store: Store) -> dict[str, dict]:
    sites = cfg["sites"][lang]
    if site_ids:
        unknown = set(site_ids) - {s["id"] for s in sites}
        if unknown:
            raise SystemExit(f"未登録のサイトID: {', '.join(sorted(unknown))}")
        sites = [s for sid in site_ids for s in sites if s["id"] == sid]
    per_site = per_site or cfg["collect"]["per_site_limit"]
    fetcher = Fetcher(cfg)
    budget = Budget(max_total)
    workers = max(1, int(cfg["http"]["parallel_sites"]))
    results: dict[str, dict] = {}
    if max_total is not None:
        workers = 1  # 目標本数が決まっているときは登録順に1サイトずつ（必要以上に取らない）

    def run(site):
        if budget.done():
            return site["id"], dict(outcome="not_needed")
        return site["id"], collect_site(cfg, lang, site, fetcher, store, per_site, budget)

    with ThreadPoolExecutor(workers) as ex:
        for sid, st in ex.map(run, sites):
            results[sid] = st
    return results
