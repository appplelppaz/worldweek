"""Claudeへ渡すバッチ作成。渡すのは 言語・記事ID・タイトル・本文 だけ。"""
from __future__ import annotations

import os
from datetime import datetime, timezone

from .store import Store, now


def _trim(text: str, limit: int) -> str:
    """段落の切れ目で limit 文字以内に収める。"""
    if len(text) <= limit:
        return text
    out, n = [], 0
    for p in text.split("\n\n"):
        if n + len(p) > limit and out:
            break
        out.append(p[:limit] if not out else p)
        n += len(p) + 2
    return "\n\n".join(out)


def _interleave(rows):
    """サイトが偏らないよう交互に並べる（各サイト内は新しい順）。"""
    by_site: dict[str, list] = {}
    for r in rows:
        by_site.setdefault(r["site"], []).append(r)
    out = []
    while any(by_site.values()):
        for k in list(by_site):
            if by_site[k]:
                out.append(by_site[k].pop(0))
    return out


def next_batch(cfg: dict, lang: str, store: Store, out_dir: str,
               max_articles: int | None = None, max_chars: int | None = None) -> tuple[str, list[int], int] | None:
    b = cfg["batch"]
    max_articles = max_articles or b["max_articles"]
    max_chars = max_chars or b["max_chars"][lang]
    per_article = b["article_max_chars"][lang]
    rows = store.q("SELECT id, site, title, text FROM articles WHERE lang=? AND status='ready' "
                   "ORDER BY COALESCE(published, fetched_at) DESC", (lang,))
    if not rows:
        return None
    picked, parts, total = [], [], 0
    for r in _interleave(rows):
        body = _trim(r["text"], per_article)
        if picked and total + len(body) > max_chars:
            continue
        picked.append(r["id"])
        parts.append(f"### a{r['id']} | {r['title'] or ''}\n\n{body}")
        total += len(body)
        if len(picked) >= max_articles:
            break
    batch_id = f"{lang}-{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}"
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, f"{batch_id}.txt")
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"lang: {lang}\n\n" + "\n\n".join(parts) + "\n")
    store.x(f"UPDATE articles SET status='batched', batch_id=?, batched_at=? "
            f"WHERE id IN ({','.join('?' * len(picked))})", (batch_id, now(), *picked))
    return path, picked, total
