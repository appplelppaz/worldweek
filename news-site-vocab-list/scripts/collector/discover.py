"""記事候補の発見：RSS/Atom → 公式JSON → サイトマップ → トップページの自動検出。Claudeは使わない。"""
from __future__ import annotations

import json
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from urllib.parse import urljoin

from lxml import etree, html as lhtml

from .fetch import Fetcher, FetchError


@dataclass
class Candidate:
    url: str
    title: str = ""
    published: datetime | None = None


def _parse_date(s: str | None) -> datetime | None:
    if not s:
        return None
    s = s.strip()
    try:
        d = parsedate_to_datetime(s)
    except (TypeError, ValueError):
        d = None
    if d is None:
        try:
            d = datetime.fromisoformat(s.replace("Z", "+00:00"))
        except ValueError:
            if s.isdigit() and len(s) >= 12:  # epoch ミリ秒（NHK）
                d = datetime.fromtimestamp(int(s) / 1000, tz=timezone.utc)
            else:
                return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=timezone.utc)
    return d


def _local(tag) -> str:
    return etree.QName(tag).localname if isinstance(tag, str) else ""


def _child_text(el, *names: str) -> str:
    for c in el:
        if _local(c.tag) in names and c.text:
            return c.text.strip()
    return ""


def parse_feed(content: bytes, base: str) -> list[Candidate]:
    """RSS 2.0 / RSS 1.0 (RDF) / Atom / sitemap / NHK形式JSON を読む。"""
    stripped = content.lstrip()
    if stripped[:1] in (b"{", b"["):
        return _parse_json(json.loads(content), base)
    parser = etree.XMLParser(recover=True, resolve_entities=False, no_network=True, huge_tree=True)
    root = etree.fromstring(content, parser)
    if root is None:
        return []
    kind = _local(root.tag)
    out: list[Candidate] = []
    if kind in ("urlset",):
        for u in root:
            loc = _child_text(u, "loc")
            date = title = ""
            for c in u.iter():
                n = _local(c.tag)
                if n in ("publication_date", "lastmod") and c.text and not date:
                    date = c.text
                elif n == "title" and c.text:
                    title = c.text.strip()
            if loc:
                out.append(Candidate(loc, title, _parse_date(date)))
        return out
    if kind == "sitemapindex":
        # 子サイトマップのURLだけを返す（呼び出し側で新しいものから読む）
        return [Candidate(_child_text(s, "loc"), "__sitemap__", _parse_date(_child_text(s, "lastmod")))
                for s in root if _child_text(s, "loc")]
    for item in root.iter():
        n = _local(item.tag)
        if n not in ("item", "entry"):
            continue
        link = _child_text(item, "link")
        if not link:  # Atom: <link href="..."/>
            for c in item:
                if _local(c.tag) == "link" and c.get("href") and c.get("rel", "alternate") == "alternate":
                    link = c.get("href")
                    break
        if not link:
            link = _child_text(item, "guid")
        if not link:
            continue
        title = _child_text(item, "title")
        date = _child_text(item, "pubDate", "published", "updated", "date")
        out.append(Candidate(urljoin(base, link.strip()), title, _parse_date(date)))
    return out


def _parse_json(data, base: str) -> list[Candidate]:
    items = data.get("data", []) if isinstance(data, dict) else data
    out = []
    for it in items if isinstance(items, list) else []:
        if not isinstance(it, dict):
            continue
        link = it.get("page_url") or it.get("url") or it.get("link")
        if not link:
            continue
        if it.get("videos"):  # 動画ニュース
            continue
        out.append(Candidate(urljoin(base, link), it.get("title", ""),
                             _parse_date(str(it.get("public_at") or it.get("updated_at") or ""))))
    return out


def autodiscover(fetcher: Fetcher, home: str) -> list[str]:
    """トップページの <link rel=alternate type=rss/atom> と robots.txt の Sitemap を探す。"""
    found: list[str] = []
    try:
        r = fetcher.get(home)
        doc = lhtml.fromstring(r.content)
        for link in doc.xpath('//link[@rel="alternate"][@href]'):
            if re.search(r"rss|atom|xml", link.get("type", ""), re.I):
                found.append(urljoin(r.url, link.get("href")))
    except (FetchError, etree.ParserError, ValueError):
        pass
    rp = fetcher._robots_for(home)
    for sm in (rp.site_maps() or []) if rp else []:
        if re.search(r"news", sm, re.I):
            found.append(sm)
    return found


def discover(fetcher: Fetcher, site: dict, log) -> list[Candidate]:
    """登録された方法を順に試し、記事候補を返す。1つも取れなければ空リスト。"""
    sources = list(site.get("feeds", [])) + list(site.get("sitemaps", []))
    tried_auto = False
    seen: set[str] = set()
    out: list[Candidate] = []
    i = 0
    while True:
        if i >= len(sources):
            if out or tried_auto:
                break
            tried_auto = True
            sources += [s for s in autodiscover(fetcher, site["home"]) if s not in sources]
            if i >= len(sources):
                break
        src = sources[i]
        i += 1
        try:
            r = fetcher.get(src)
            cands = parse_feed(r.content, r.url)
        except (FetchError, etree.XMLSyntaxError, json.JSONDecodeError, ValueError) as e:
            log.warning("[%s] 候補取得失敗 %s: %s", site["id"], src, e)
            continue
        subs = [c for c in cands if c.title == "__sitemap__"]
        if subs:  # サイトマップの目次 → 新しい子サイトマップ2つだけ読む
            subs.sort(key=lambda c: c.published or datetime.min.replace(tzinfo=timezone.utc), reverse=True)
            sources[i:i] = [c.url for c in subs[:2] if c.url not in sources]
            continue
        for c in cands:
            if c.url not in seen:
                seen.add(c.url)
                out.append(c)
    if not out:
        out = homepage_links(fetcher, site["home"])
        if out:
            log.info("[%s] フィードなし → トップページのリンク %d 件を候補にする", site["id"], len(out))
    return out


_ARTICLE_PATH = re.compile(r"/(19|20)\d{2}[/-]?\d{2}|\d{6,}|/[a-z0-9]+(-[a-z0-9]+){3,}", re.I)


def homepage_links(fetcher: Fetcher, home: str) -> list[Candidate]:
    """最後の手段：トップページ（公式記事一覧）から記事らしいURLを集める。"""
    try:
        r = fetcher.get(home)
        doc = lhtml.fromstring(r.content)
    except (FetchError, etree.ParserError, ValueError):
        return []
    host = re.sub(r"^www\.", "", r.url.split("/")[2])
    out, seen = [], set()
    for a in doc.xpath("//a[@href]"):
        url = urljoin(r.url, a.get("href")).split("#")[0]
        if host not in url.split("/")[2] or url in seen or not _ARTICLE_PATH.search(url):
            continue
        seen.add(url)
        out.append(Candidate(url, " ".join(a.text_content().split())))
    return out
