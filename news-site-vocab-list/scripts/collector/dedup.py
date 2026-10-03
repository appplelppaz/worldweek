"""重複判定：URL正規化、記事ID、本文ハッシュ、本文SimHash（ほぼ同じ本文）。"""
from __future__ import annotations

import hashlib
import re
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

_TRACKING = re.compile(r"^(utm_|at_|ns_|fbclid|gclid|ocid|cmp|ito|int_|xtor|ref|src|source|mc_)", re.I)


def normalize_url(url: str) -> str:
    p = urlsplit(url.strip())
    host = p.netloc.lower().removeprefix("www.")
    path = re.sub(r"/{2,}", "/", p.path).rstrip("/") or "/"
    path = re.sub(r"\.amp$|/amp$", "", path)
    q = [(k, v) for k, v in parse_qsl(p.query) if not _TRACKING.match(k)]
    return urlunsplit(("https", host, path, urlencode(sorted(q)), ""))


def article_key(url: str) -> str:
    """URLに含まれる記事IDらしきもの（同じ記事が別URLで配信される場合の検出用）。"""
    p = urlsplit(url)
    path = p.path.rstrip("/")
    m = (re.search(r"/articles/([a-z0-9]{8,})", path)           # BBC
         or re.search(r"(\d{8}[a-z]{2}\d{3,})", path)             # NHK 20261001de53736
         or re.search(r"[-_/](\d{6,})(?:\.html?)?$", path)        # 末尾の数値ID
         or re.search(r"-([a-z0-9]{6,})_\d+\.html$", path))
    if not m:
        return ""
    if not m.group(1).isdigit():  # BBC・NHK の英数字IDはドメイン違い（bbc.com / bbc.co.uk）でも同じ記事
        return m.group(1)
    return f"{p.netloc.lower().removeprefix('www.')}:{m.group(1)}"


def _norm_text(text: str) -> str:
    return re.sub(r"\W+", "", text.lower())


def text_hash(text: str) -> str:
    return hashlib.sha1(_norm_text(text).encode()).hexdigest()


def simhash(text: str, n: int = 4) -> int:
    """文字 n-gram の 64bit SimHash。分かち書き不要なので中国語にも使える。"""
    s = _norm_text(text)
    if len(s) < n:
        return 0
    v = [0] * 64
    for i in range(0, len(s) - n + 1):
        h = int.from_bytes(hashlib.blake2b(s[i:i + n].encode(), digest_size=8).digest(), "big")
        for b in range(64):
            v[b] += 1 if (h >> b) & 1 else -1
    out = 0
    for b in range(64):
        if v[b] > 0:
            out |= 1 << b
    return out - (1 << 64) if out >= (1 << 63) else out  # SQLite の符号付き64bitに収める


def hamming(a: int, b: int) -> int:
    return bin((a ^ b) & ((1 << 64) - 1)).count("1")


def norm_title(t: str) -> str:
    t = re.split(r"\s[|\-–—]\s", t)[0]  # 「タイトル - サイト名」
    return _norm_text(t)


def para_fingerprints(text: str) -> set[str]:
    """段落ごとの指紋。転載・一部だけの再配信（段落の多くが同じ）を見つけるため。"""
    out = set()
    for p in text.split("\n\n"):
        k = _norm_text(p)
        if len(k) >= 40:
            out.add(hashlib.sha1(k.encode()).hexdigest()[:16])
    return out


def overlap(a: set[str], b: set[str]) -> float:
    if not a or not b:
        return 0.0
    return len(a & b) / min(len(a), len(b))
