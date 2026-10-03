"""HTTP取得：robots.txt の確認、ホストごとのアクセス間隔、タイムアウト、再試行上限。"""
from __future__ import annotations

import threading
import time
import urllib.robotparser
from urllib.parse import urlsplit

import requests


class FetchError(Exception):
    """取得失敗。kind: robots / http_client(4xx) / http(5xx・429) / timeout / network"""

    def __init__(self, kind: str, message: str):
        super().__init__(message)
        self.kind = kind


class Fetcher:
    def __init__(self, cfg: dict):
        h = cfg["http"]
        self.ua = cfg["user_agent"]
        self.timeout = (h["connect_timeout"], h["read_timeout"])
        self.max_retries = h["max_retries"]
        self.backoff = h["backoff_seconds"]
        self.min_interval = h["min_interval_seconds"]
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": self.ua,
            "Accept-Language": "en,fr,es,zh;q=0.8",
        })
        self._robots: dict[str, urllib.robotparser.RobotFileParser | None] = {}
        self._last: dict[str, float] = {}
        self._host_locks: dict[str, threading.Lock] = {}
        self._lock = threading.Lock()
        self._cache: dict[str, requests.Response] = {}  # 同じ実行内で同じURLを再取得しない

    # --- robots.txt -------------------------------------------------------
    def _robots_for(self, url: str) -> urllib.robotparser.RobotFileParser | None:
        parts = urlsplit(url)
        origin = f"{parts.scheme}://{parts.netloc}"
        with self._lock:
            if origin in self._robots:
                return self._robots[origin]
        rp = urllib.robotparser.RobotFileParser()
        try:
            r = self._raw_get(origin + "/robots.txt")
            if r.status_code in (401, 403):
                rp.disallow_all = True
            elif r.status_code >= 400:
                rp.allow_all = True
            else:
                rp.parse(r.text.splitlines())
        except FetchError:
            rp = None  # robots.txt が取れない → このホストは取得しない
        with self._lock:
            self._robots[origin] = rp
        return rp

    def allowed(self, url: str) -> bool:
        rp = self._robots_for(url)
        return bool(rp and rp.can_fetch(self.ua, url))

    # --- 取得 -------------------------------------------------------------
    def _wait_turn(self, host: str) -> threading.Lock:
        with self._lock:
            lock = self._host_locks.setdefault(host, threading.Lock())
        lock.acquire()
        rp = self._robots.get(f"https://{host}") or self._robots.get(f"http://{host}")
        interval = self.min_interval
        if rp:
            delay = rp.crawl_delay(self.ua)
            if delay:
                interval = max(interval, float(delay))
        wait = self._last.get(host, 0) + interval - time.monotonic()
        if wait > 0:
            time.sleep(wait)
        return lock

    def _raw_get(self, url: str) -> requests.Response:
        host = urlsplit(url).netloc
        last_exc: FetchError | None = None
        for attempt in range(self.max_retries + 1):
            lock = self._wait_turn(host)
            try:
                r = self.session.get(url, timeout=self.timeout, allow_redirects=True)
            except requests.Timeout as e:
                last_exc = FetchError("timeout", f"{url}: {e}")
            except requests.RequestException as e:
                last_exc = FetchError("network", f"{url}: {e}")
            else:
                if r.status_code == 429 or r.status_code >= 500:
                    last_exc = FetchError("http", f"{url}: HTTP {r.status_code}")
                else:
                    return r
            finally:
                self._last[host] = time.monotonic()
                lock.release()
            if attempt < self.max_retries:
                time.sleep(self.backoff * (2 ** attempt))
        assert last_exc
        raise last_exc

    def get(self, url: str) -> requests.Response:
        """robots.txt を守って取得する。4xx は FetchError('http') にする。"""
        if url in self._cache:
            return self._cache[url]
        if not self.allowed(url):
            raise FetchError("robots", f"{url}: robots.txt で禁止")
        r = self._raw_get(url)
        if r.status_code >= 400:
            raise FetchError("http_client", f"{url}: HTTP {r.status_code}")
        if not r.encoding or r.encoding.lower() == "iso-8859-1":
            r.encoding = r.apparent_encoding
        self._cache[url] = r
        return r
