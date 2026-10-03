"""Claudeに渡す前に機械的に判断できる不要ページの除外。語彙の難易度など言語的な判断はしない。"""
from __future__ import annotations

import re

from .extract import Extracted

# 取得前にURLだけで除外できるもの（動画・音声・写真ギャラリー・ライブ・ログイン・一覧ページ）
_SKIP_URL = re.compile(
    r"/(videos?|av|live|sounds|audio|podcasts?|gallery|galleries|in-pictures|in-pics|photos?|fotos?"
    r"|fotogalerias?|diaporama|direct|en-direct|en-vivo|directo|programmes|iplayer|weather"
    r"|login|signin|sign-in|register|subscribe|subscription|abonnement|suscripcion|account|newsletters?"
    r"|tags?|topics?|authors?|autor|auteur|search|recherche|buscar|horoscopo|horoscope|jeux|games"
    r"|crosswords?|puzzles?|obituaries)(/|$|\?|-)",
    re.I,
)
_SKIP_EXT = re.compile(r"\.(jpg|jpeg|png|gif|mp4|mp3|m4a|pdf)(\?|$)", re.I)


def skip_url(url: str) -> str | None:
    if _SKIP_EXT.search(url):
        return "media_file"
    if _SKIP_URL.search(url):
        return "non_article_url"
    path = re.sub(r"^https?://[^/]+", "", url).split("?")[0].strip("/")
    if not path or path.count("/") == 0 and len(path) < 12:
        return "index_page"
    return None


# 購読・会員制限（SKILL.md の「制限にかかったとき」と同じ判定）
PAYWALL = re.compile(
    r"subscribe to (read|continue)|sign in to (keep|continue) reading|this is not a paywall"
    r"|already a subscriber|réservé aux abonnés|il vous reste \d+ ?% de cet article"
    r"|la suite est réservée aux abonnés|regístrate gratis para seguir leyendo"
    r"|suscríbete para seguir leyendo|contenido exclusivo para suscriptores"
    r"|you have reached your (article )?limit|vous avez atteint",
    re.I,
)
_ERROR_TITLE = re.compile(r"\b(404|not found|page introuvable|página no encontrada|error)\b|页面不存在|找不到", re.I)
_VIDEO_TYPES = ("video", "video.other", "video.movie")

_CJK = re.compile(r"[一-鿿]")
_STOP = {
    "en": {"the", "and", "of", "to", "in", "is", "that", "for", "was", "with"},
    "fr": {"le", "la", "les", "de", "des", "et", "est", "une", "dans", "pour", "que", "du"},
    "es": {"el", "la", "los", "las", "de", "y", "que", "en", "del", "por", "una", "para"},
}


def _lang_ok(text: str, lang: str) -> bool:
    sample = text[:3000]
    if lang == "zh":
        return len(_CJK.findall(sample)) / max(1, len(re.sub(r"\s", "", sample))) > 0.4
    words = re.findall(r"[^\W\d_]+", sample.lower())
    if len(words) < 30:
        return True
    scores = {k: sum(w in v for w in words) for k, v in _STOP.items()}
    return max(scores, key=scores.get) == lang


def judge(ex: Extracted | None, lang: str, min_chars: int) -> tuple[str, str | None, bool]:
    """戻り値: (status, reason, blocked)。status は ready / rejected。
    購読制限の記事でも、読めた冒頭部分が十分長ければ使う（SKILL.md の方針どおり）。"""
    if ex is None or not ex.text:
        return "rejected", "no_body", False
    blocked = bool(PAYWALL.search(ex.text[-1500:]) or PAYWALL.search(ex.raw_title))
    if blocked:  # 制限の案内文そのものは本文から落とす
        ex.paragraphs = [p for p in ex.paragraphs if not PAYWALL.search(p)]
        ex.text = "\n\n".join(ex.paragraphs)
    if _ERROR_TITLE.search(ex.raw_title or "") and len(ex.text) < 2000:
        return "rejected", "error_page", blocked
    if ex.page_type in _VIDEO_TYPES and len(ex.text) < min_chars * 2:
        return "rejected", "video_page", blocked
    body = sum(len(p) for p in ex.paragraphs if not p.startswith(("## ", "[写真]")))
    if body < min_chars:
        return "rejected", ("blocked_short" if blocked else "too_short"), blocked
    # 中国語は1文字あたりの情報量が多く段落も短いので基準を下げる
    min_avg = 20 if lang == "zh" else 45
    if len(ex.paragraphs) >= 8 and body / len(ex.paragraphs) < min_avg:
        return "rejected", "list_or_gallery", blocked  # 短い行の羅列（一覧・写真ギャラリー）
    if not _lang_ok(ex.text, lang):
        return "rejected", "wrong_language", blocked
    return "ready", None, blocked
