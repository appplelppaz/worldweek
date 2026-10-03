"""記事収集CLI。

  python -m collector collect    --lang en [--sites bbc,guardian] [--per-site 15] [--max-total N]
  python -m collector next-batch --lang en [--max-articles 5] [--max-chars 22000]
  python -m collector done       --batch en-20261003120000
  python -m collector release    --batch en-20261003120000   # 処理できなかったバッチを未処理に戻す
  python -m collector status     --lang en
  python -m collector show       --id 17                      # 抽出結果の確認用（人が見る）

履歴・ログ・バッチの置き場所は --home か環境変数 VOCAB_COLLECTOR_HOME（既定 ~/.vocab-collector）。
"""
from __future__ import annotations

import argparse
import logging
import os
import sys

import yaml

from .batch import next_batch
from .collect import collect
from .store import Store, now

HERE = os.path.dirname(os.path.abspath(__file__))


def main(argv=None):
    ap = argparse.ArgumentParser(prog="collector")
    ap.add_argument("--home", default=os.environ.get("VOCAB_COLLECTOR_HOME", "~/.vocab-collector"))
    ap.add_argument("--config", default=os.path.join(HERE, "config.yaml"))
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("collect")
    p.add_argument("--lang", required=True, choices=["en", "fr", "zh", "es"])
    p.add_argument("--sites", help="カンマ区切りのサイトID（省略時は登録順に全サイト）")
    p.add_argument("--per-site", type=int)
    p.add_argument("--max-total", type=int, help="この本数の新しい記事が集まったら止める")
    p = sub.add_parser("next-batch")
    p.add_argument("--lang", required=True, choices=["en", "fr", "zh", "es"])
    p.add_argument("--max-articles", type=int)
    p.add_argument("--max-chars", type=int)
    for name in ("done", "release"):
        sub.add_parser(name).add_argument("--batch", required=True)
    sub.add_parser("status").add_argument("--lang", choices=["en", "fr", "zh", "es"])
    sub.add_parser("show").add_argument("--id", type=int, required=True)
    a = ap.parse_args(argv)

    home = os.path.expanduser(a.home)
    os.makedirs(home, exist_ok=True)
    logging.basicConfig(
        level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s",
        handlers=[logging.FileHandler(os.path.join(home, "collector.log"), encoding="utf-8")],
    )
    for noisy in ("trafilatura", "htmldate", "urllib3", "charset_normalizer", "courlan"):
        logging.getLogger(noisy).setLevel(logging.ERROR)
    with open(a.config, encoding="utf-8") as f:
        cfg = yaml.safe_load(f)
    store = Store(os.path.join(home, "history.sqlite3"))

    if a.cmd == "collect":
        sites = a.sites.split(",") if a.sites else None
        res = collect(cfg, a.lang, sites, a.per_site, a.max_total, store)
        ready = store.q("SELECT COUNT(*) n FROM articles WHERE lang=? AND status='ready'", (a.lang,))[0]["n"]
        for sid, st in res.items():
            print(f"{sid}: " + ", ".join(f"{k}={v}" for k, v in st.items()))
        print(f"READY {ready}")
    elif a.cmd == "next-batch":
        r = next_batch(cfg, a.lang, store, os.path.join(home, "batches"), a.max_articles, a.max_chars)
        if r is None:
            print("NO_READY_ARTICLES")
        else:
            path, ids, chars = r
            print(f"BATCH {os.path.basename(path)[:-4]} articles={len(ids)} chars={chars}\n{path}")
    elif a.cmd in ("done", "release"):
        if a.cmd == "done":
            cur = store.x("UPDATE articles SET status='processed', processed_at=? WHERE batch_id=? "
                          "AND status='batched'", (now(), a.batch))
        else:
            cur = store.x("UPDATE articles SET status='ready', batch_id=NULL, batched_at=NULL "
                          "WHERE batch_id=? AND status='batched'", (a.batch,))
        print(f"{a.cmd.upper()} {cur.rowcount}")
    elif a.cmd == "status":
        where, args = ("WHERE lang=?", (a.lang,)) if a.lang else ("", ())
        for r in store.q(f"SELECT lang, site, status, COUNT(*) n FROM articles {where} "
                         f"GROUP BY lang, site, status ORDER BY lang, site, status", args):
            print(f"{r['lang']}\t{r['site']}\t{r['status']}\t{r['n']}")
    elif a.cmd == "show":
        r = store.q("SELECT * FROM articles WHERE id=?", (a.id,))
        if not r:
            sys.exit("not found")
        r = r[0]
        print(f"{r['url']}\n{r['site']} {r['status']} {r['reason'] or ''} chars={r['chars']}\n"
              f"# {r['title']}\n\n{r['text'] or ''}")


if __name__ == "__main__":
    main()
