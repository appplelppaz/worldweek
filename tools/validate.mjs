#!/usr/bin/env node
/* 号データの整合性チェック
   使い方: node tools/validate.mjs [content/issues/2026-w36]            */
import { loadIssue, markedKeys } from './load.mjs';

const dir = process.argv[2] || 'content/issues/2026-w36';
const { data, articles } = loadIssue(dir);

const errors = [];
const warns = [];
const LANGS = ['en', 'zh', 'es', 'fr'];

/* --- 号の骨格 --- */
for (const k of ['meta', 'sectionTitles', 'cover', 'worldThisWeek', 'feature', 'lab', 'conversation', 'shadowing', 'review']) {
  if (!data[k]) errors.push(`issue: 必須項目 "${k}" がありません`);
}
for (const l of LANGS) {
  if (!data.sectionTitles?.[l]) errors.push(`issue: sectionTitles.${l} がありません`);
  if (!articles.some(a => a.lang === l)) errors.push(`issue: ${l} の記事が1本もありません（4言語すべて必要）`);
}

/* --- 記事 --- */
const seen = new Set();
let sentences = 0, vocab = 0, grammar = 0, sources = 0;

for (const a of articles) {
  const at = `article "${a.id}"`;
  if (!a.id) errors.push('id のない記事があります');
  if (seen.has(a.id)) errors.push(`${at}: id が重複しています`);
  seen.add(a.id);
  if (!LANGS.includes(a.lang)) errors.push(`${at}: lang が不正です (${a.lang})`);
  if (!a.headline?.orig || !a.headline?.ja) errors.push(`${at}: headline.orig / headline.ja が必要です`);
  if (!a.why) warns.push(`${at}: why（なぜ今この話題か）がありません`);
  if (!a.guide?.length) warns.push(`${at}: guide（日本語ガイド）がありません`);
  if (!a.body?.length) errors.push(`${at}: body が空です`);

  /* 出典 — 捏造防止のためもっとも厳しく見る */
  if (!a.sources?.length) errors.push(`${at}: sources がありません（出典必須）`);
  for (const s of a.sources || []) {
    sources++;
    for (const k of ['outlet', 'title', 'date', 'url', 'accessed']) {
      if (!s[k]) errors.push(`${at}: source に "${k}" がありません`);
    }
    if (s.url && !/^https:\/\//.test(s.url)) errors.push(`${at}: source.url が https:// で始まっていません (${s.url})`);
    if (s.date && !/^\d{4}-\d{2}-\d{2}$/.test(s.date)) errors.push(`${at}: source.date は YYYY-MM-DD 形式にしてください (${s.date})`);
    if (s.accessed && !/^\d{4}-\d{2}-\d{2}$/.test(s.accessed)) errors.push(`${at}: source.accessed は YYYY-MM-DD 形式にしてください`);
  }

  /* 本文の文ごと */
  const ids = new Set();
  for (const s of a.body || []) {
    sentences++;
    const st = `${at} / sentence "${s.id}"`;
    if (!s.id) errors.push(`${at}: id のない文があります`);
    if (ids.has(s.id)) errors.push(`${st}: 文 id が重複しています`);
    ids.add(s.id);
    if (!s.text) errors.push(`${st}: text がありません`);
    if (!s.ja) errors.push(`${st}: ja（日本語訳）がありません — 原文のすぐ隣に訳を出すのが本誌の要件です`);

    const terms = new Set((s.vocab || []).map(v => String(v.term).toLowerCase()));
    for (const key of markedKeys(s.text)) {
      if (!terms.has(key)) errors.push(`${st}: {{${key}}} に対応する vocab エントリがありません`);
    }
    for (const v of s.vocab || []) {
      vocab++;
      if (!v.ja) errors.push(`${st}: vocab "${v.term}" に ja がありません`);
      if (a.lang === 'zh' && !v.pinyin) warns.push(`${st}: 中国語の vocab "${v.term}" に pinyin がありません`);
      if (v.pinyin) {
        const chars = Array.from(String(v.term)).filter(c => /[一-鿿]/.test(c)).length;
        const syl = String(v.pinyin).trim().split(/\s+/).length;
        if (chars && syl !== chars) {
          warns.push(`${st}: "${v.term}" の pinyin 音節数(${syl})が漢字数(${chars})と一致しません — ルビは語全体に付きます`);
        }
      }
    }
    grammar += (s.grammar || []).length;
    if (!(s.vocab || []).length && !(s.grammar || []).length) {
      warns.push(`${st}: 語彙・文法の注記がどちらもありません`);
    }
  }

  /* 演習・会話 */
  for (const q of a.tryit || []) if (!q.a) errors.push(`${at}: tryit に解答例 (a) がありません`);
  for (const t of a.talk || []) if (!t.q || !t.a || !t.qj || !t.aj) errors.push(`${at}: talk は q / qj / a / aj すべて必要です`);
}

/* --- 号の後半セクション --- */
for (const r of data.review || []) {
  if (!r.a || !r.why) errors.push(`review: 「${String(r.q).slice(0, 24)}…」に解答または解説がありません（答えだけで終わらせない）`);
}
for (const s of data.shadowing || []) {
  if (!s.tip) warns.push(`shadowing: 「${String(s.text).slice(0, 20)}…」に音読のヒントがありません`);
}

/* --- 結果 --- */
const perLang = LANGS.map(l => `${l}:${articles.filter(a => a.lang === l).length}`).join(' ');
console.log(`\n📚 ${dir}`);
console.log(`   記事 ${articles.length}本 (${perLang}) / 原文 ${sentences}文 / 語彙 ${vocab}項目 / 文法 ${grammar}項目 / 出典 ${sources}件`);
console.log(`   今週の世界 ${data.worldThisWeek.length} / 会話 ${data.conversation.length} / 音読 ${data.shadowing.length} / 復習 ${data.review.length}\n`);

for (const w of warns) console.log(`  ⚠️  ${w}`);
if (warns.length) console.log('');
for (const e of errors) console.log(`  ❌ ${e}`);

if (errors.length) {
  console.log(`\n❌ エラー ${errors.length}件。修正してください。\n`);
  process.exit(1);
}
console.log(`✅ 検証を通過しました（警告 ${warns.length}件）\n`);
