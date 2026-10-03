"""記事ページから本文だけを取り出し、段落構造を保ったプレーンテキストにする。"""
from __future__ import annotations

import re
import unicodedata
from dataclasses import dataclass, field

import trafilatura
from lxml import html as lhtml

# 本文中に混ざりやすい定型文（行単位で除去）。本文の文章そのものは消さないよう、短い行だけを対象にする。
_BOILERPLATE = re.compile(
    r"^(・?(published|updated|posted)( \d.*)?|\d+ (minutes?|hours?|days?) ago|save|listen|getty images"
    r"|advertisement|advert|sponsored|share( this)?( article| on .+)?|follow us.*|sign up.*newsletter.*"
    r"|read more:?.*|related( articles| stories| topics)?:?|more on this story|top stories|most read"
    r"|watch:.*|listen:.*|image (source|caption),.*|getty images|reuters|afp|pa media|ap"
    r"|publicité|partager|lire aussi.*|à lire aussi.*|voir aussi.*|abonnez-vous.*|newsletter.*"
    r"|publicidad|compartir|lee también.*|leer más.*|te puede interesar.*|más información.*|suscríbete.*"
    r"|广告|分享|相关新闻.*|相关报道.*|延伸阅读.*|推荐阅读.*|热门.*|订阅.*|图像来源.*|图片来源.*)$",
    re.I,
)
# BBC の著者情報ブロック（Article Information / Author, … / Role, … / Reporting from, … / 阅读时间: n 分钟）
_BYLINE = re.compile(
    r"^・?(article information|(author|role|reporting from)\s*[,，].*|(阅读|閱讀)时间\s*[:：].*|閱讀時間\s*[:：].*)$",
    re.I,
)
_MD_IMAGE = re.compile(r"!\[[^\]]*\]\([^)]*\)")
_MD_LINK = re.compile(r"\[([^\]]*)\]\([^)]*\)")
_CTRL = re.compile(r"[\u0000-\u0008\u000b-\u001f\u007f-\u009f​-‏  ﻿]")


@dataclass
class Extracted:
    title: str
    text: str                 # 見出しは "## " で始まる行、段落は空行区切り
    paragraphs: list[str] = field(default_factory=list)
    page_type: str = ""       # og:type など
    raw_title: str = ""       # <title>


def _clean_line(line: str) -> str:
    line = _MD_IMAGE.sub("", line)
    line = _MD_LINK.sub(r"\1", line)
    line = line.replace("**", "").replace("__", "")
    line = re.sub(r"\s*,? external\b(?=[\s.,;:)]|$)", "", line)  # BBC の外部リンク表示
    line = _CTRL.sub("", unicodedata.normalize("NFC", line))
    line = re.sub(r"[ \t 　]+", " ", line).strip()
    if line.startswith(("- ", "* ")):
        line = "・" + line[2:]
    return line


def _figcaptions(doc) -> list[str]:
    caps = []
    for fc in doc.xpath("//article//figcaption | //main//figcaption"):
        t = " ".join(fc.text_content().split())
        t = re.sub(r"^(image|figure|media|photo) caption,?\s*", "", t, flags=re.I)
        if re.match(r"(watch|listen|video|audio|regarder|vidéo|ver|vídeo|视频|观看)\b", t, re.I):
            continue  # 動画・音声への誘導文
        if 15 <= len(t) <= 300:
            caps.append(t)
    return caps


def extract(content: bytes, url: str) -> Extracted | None:
    md = trafilatura.extract(
        content, url=url, output_format="markdown", include_comments=False,
        include_tables=False, include_images=False, include_links=False,
        include_formatting=True, favor_precision=True, deduplicate=True,
    )
    meta = trafilatura.extract_metadata(content, default_url=url)
    title = (meta.title if meta and meta.title else "").strip()
    try:
        doc = lhtml.fromstring(content)
        og = doc.xpath('string(//meta[@property="og:type"]/@content)').strip().lower()
        raw_title = doc.xpath("string(//title)").strip()
        captions = _figcaptions(doc)
    except Exception:
        og, raw_title, captions = "", "", []
    if not md:
        return Extracted(title, "", [], og, raw_title)

    paragraphs: list[str] = []
    seen: set[str] = set()
    for line in md.splitlines():  # trafilatura の markdown は1行1段落
        text = _clean_line(line)
        if not text:
            continue
        heading = text.startswith("#")
        text = text.lstrip("#").strip()
        if len(text) < 80 and _BYLINE.match(text):
            continue
        if len(text) < 60 and _BOILERPLATE.match(text):
            continue
        key = re.sub(r"\W+", "", text.lower())
        if not key or key in seen:  # 同じ文章の重複表示
            continue
        if heading and key == re.sub(r"\W+", "", title.lower()):
            continue  # 本文冒頭に繰り返されたタイトル
        seen.add(key)
        paragraphs.append(("## " + text) if heading else text)

    # 本文に入らなかった画像キャプションのうち、記事理解に役立ちそうなもの（長めの文）だけ補う
    body_keys = re.sub(r"\W+", "", " ".join(paragraphs).lower())
    for cap in captions[:3]:
        k = re.sub(r"\W+", "", cap.lower())
        if k not in body_keys and not _BOILERPLATE.match(cap) and len(cap) >= 40:
            paragraphs.append("[写真] " + cap)
            body_keys += k

    return Extracted(title, "\n\n".join(paragraphs), paragraphs, og, raw_title)
