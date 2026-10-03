"""取得履歴（SQLite）。本文・内部データはここだけに置き、Claude には渡さない。"""
from __future__ import annotations

import sqlite3
import threading
from datetime import datetime, timezone

SCHEMA = """
CREATE TABLE IF NOT EXISTS articles (
  id           INTEGER PRIMARY KEY,
  url_norm     TEXT UNIQUE NOT NULL,
  url          TEXT NOT NULL,
  article_key  TEXT,
  lang         TEXT NOT NULL,
  site         TEXT NOT NULL,
  title        TEXT,
  title_norm   TEXT,
  published    TEXT,
  fetched_at   TEXT,
  status       TEXT NOT NULL,   -- ready / batched / processed / rejected / duplicate / error
  reason       TEXT,            -- 除外理由・エラー内容
  blocked      INTEGER DEFAULT 0,
  attempts     INTEGER DEFAULT 0,
  text_hash    TEXT,
  simhash      INTEGER,
  chars        INTEGER,
  text         TEXT,
  batch_id     TEXT,
  batched_at   TEXT,
  processed_at TEXT
);
CREATE INDEX IF NOT EXISTS ix_lang_status ON articles(lang, status);
CREATE INDEX IF NOT EXISTS ix_hash ON articles(text_hash);
CREATE INDEX IF NOT EXISTS ix_key ON articles(article_key);
CREATE TABLE IF NOT EXISTS site_runs (
  id INTEGER PRIMARY KEY, run_at TEXT, lang TEXT, site TEXT,
  candidates INTEGER, fetched INTEGER, ready INTEGER, rejected INTEGER,
  duplicates INTEGER, blocked INTEGER, errors INTEGER, outcome TEXT
);
"""


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


class Store:
    def __init__(self, path: str):
        self.db = sqlite3.connect(path, check_same_thread=False)
        self.db.row_factory = sqlite3.Row
        self.db.executescript(SCHEMA)
        self.lock = threading.RLock()

    def q(self, sql: str, args=()):
        with self.lock:
            return self.db.execute(sql, args).fetchall()

    def x(self, sql: str, args=()):
        with self.lock:
            cur = self.db.execute(sql, args)
            self.db.commit()
            return cur

    # 取得済みか（成功・除外・重複は二度と取りに行かない。エラーは上限回数まで再試行）
    def known(self, url_norm: str, key: str, max_attempts: int) -> bool:
        r = self.q("SELECT status, attempts FROM articles WHERE url_norm=?", (url_norm,))
        if r:
            return not (r[0]["status"] == "error" and r[0]["attempts"] < max_attempts)
        if key:
            return bool(self.q("SELECT 1 FROM articles WHERE article_key=? AND status!='error' LIMIT 1", (key,)))
        return False

    def find_duplicate(self, lang: str, text: str, thash: str, sh: int, title_norm: str, max_dist: int) -> str | None:
        from .dedup import hamming, overlap, para_fingerprints
        r = self.q("SELECT id FROM articles WHERE text_hash=? LIMIT 1", (thash,))
        if r:
            return f"same_text_as:{r[0]['id']}"
        if title_norm and len(title_norm) >= 12:
            r = self.q("SELECT id FROM articles WHERE lang=? AND title_norm=? AND status IN "
                       "('ready','batched','processed') LIMIT 1", (lang, title_norm))
            if r:
                return f"same_title_as:{r[0]['id']}"
        mine = para_fingerprints(text)
        for row in self.q("SELECT id, simhash, text FROM articles WHERE lang=? AND simhash IS NOT NULL AND status IN "
                          "('ready','batched','processed') ORDER BY id DESC LIMIT 2000", (lang,)):
            if hamming(row["simhash"], sh) <= max_dist:
                return f"near_duplicate_of:{row['id']}"
            if row["text"] and overlap(mine, para_fingerprints(row["text"])) >= 0.6:
                return f"same_paragraphs_as:{row['id']}"
        return None

    def upsert(self, **f):
        f.setdefault("fetched_at", now())
        f["attempts"] = 1
        cols = ", ".join(f)
        marks = ", ".join("?" * len(f))
        upd = ", ".join(f"{k}=excluded.{k}" for k in f if k not in ("url_norm", "attempts"))
        self.x(f"INSERT INTO articles ({cols}) VALUES ({marks}) "
               f"ON CONFLICT(url_norm) DO UPDATE SET {upd}, attempts=articles.attempts+1",
               tuple(f.values()))
