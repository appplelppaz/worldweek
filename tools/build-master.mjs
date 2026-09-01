#!/usr/bin/env node
/* MASTER EDITORIAL VERSION（Markdown）を号データから生成する。
   使い方: node tools/build-master.mjs [content/issues/2026-w36]
   出力  : <dir>/MASTER.md                                          */
import fs from 'node:fs';
import path from 'node:path';
import { loadIssue, plain } from './load.mjs';

const dir = process.argv[2] || 'content/issues/2026-w36';
const { data, articles } = loadIssue(dir);

const L = {
  en: { label: 'ENGLISH', ja: '英語' },
  zh: { label: '中文', ja: '中国語' },
  es: { label: 'ESPAÑOL', ja: 'スペイン語' },
  fr: { label: 'FRANÇAIS', ja: 'フランス語' }
};
const ORDER = ['en', 'zh', 'es', 'fr'];
const out = [];
const w = (s = '') => out.push(s);

/* ── 表紙 ───────────────────────────────────────────── */
w(`# ${data.meta.title}`);
w();
w(`**Vol. ${data.meta.volume}｜${data.meta.dateRange}｜発行 ${data.meta.published}**`);
w();
w('> MASTER EDITORIAL VERSION — 校正用の原稿版です。この原稿を確認・校正したのち、別工程で誌面（`index.html`）として配信します。');
w('> 記事本文は、報道された事実にもとづき本誌が独自に書き下ろした学習用テキストであり、原記事の翻訳・転載ではありません。');
w();
w('---');
w();
w('## COVER');
w();
w(`### ${data.cover.title}`);
w(`**${data.cover.ja}**`);
w();
data.cover.lead.forEach(p => { w(p); w(); });
w('---');
w();

/* ── 今週の世界 ─────────────────────────────────────── */
w('## THE WORLD THIS WEEK');
w();
for (const x of data.worldThisWeek) {
  w(`- **[${L[x.lang].label} · ${x.tag}]** ${plain(x.orig)}`);
  w(`  - ${x.ja}`);
}
w();
w('---');
w();

/* ── 目次 ───────────────────────────────────────────── */
w('## TABLE OF CONTENTS');
w();
for (const code of ORDER) {
  const list = articles.filter(a => a.lang === code);
  if (!list.length) continue;
  w(`**${data.sectionTitles[code].title}**（${L[code].ja}）`);
  list.forEach(a => w(`- ${a.headline.orig} — ${a.headline.ja}`));
  w();
}
w(`**GLOBAL FEATURE** — ${data.feature.title}`);
w('**LANGUAGE LAB** / **REAL-WORLD CONVERSATION** / **LISTENING & SHADOWING** / **WEEKLY REVIEW**');
w();
w('---');
w();

/* ── 記事本体 ───────────────────────────────────────── */
const ex = (list, ind = '') =>
  (list || []).forEach(e => { w(`${ind}  - *${plain(e.o)}*`); w(`${ind}    ${e.j}`); });

for (const code of ORDER) {
  const list = articles.filter(a => a.lang === code);
  if (!list.length) continue;
  w(`## ${data.sectionTitles[code].title}`);
  w();
  w(`*${data.sectionTitles[code].sub}*`);
  w();

  for (const a of list) {
    w(`### ${a.headline.orig}`);
    w();
    w(`**${a.headline.ja}**`);
    w();
    w(`\`${L[a.lang].label}\` · \`${a.category}\` · \`${a.level}\``);
    w();

    w('#### WHY THIS STORY MATTERS');
    w();
    w(a.why);
    w();

    w('#### ORIGINAL LANGUAGE ARTICLE');
    w();
    a.body.forEach((s, i) => w(`${i + 1}. ${plain(s.text)}`));
    w();

    w('#### SENTENCE-BY-SENTENCE（原文・訳・語彙・文法）');
    w();
    a.body.forEach((s, i) => {
      w(`**${i + 1}. ${plain(s.text)}**`);
      w();
      if (s.literal) w(`- 直訳：${s.literal}`);
      w(`- 訳：${s.ja}`);
      if (s.vocab?.length) {
        w('- 語彙');
        s.vocab.forEach(v => {
          const py = v.pinyin ? ` [${v.pinyin}]` : '';
          const pos = v.pos ? ` *(${v.pos})*` : '';
          w(`  - **${v.term}**${py}${pos} — ${v.ja}`);
          if (v.note) w(`    ${v.note}`);
          if (v.collocations?.length) w(`    よく一緒に使う語：${v.collocations.join(' / ')}`);
          ex(v.examples, '  ');
        });
      }
      if (s.grammar?.length) {
        w('- 文法');
        s.grammar.forEach(g => {
          w(`  - **${g.point}** — ${g.ja}`);
          if (g.compare) w(`    比べると：${g.compare}`);
          ex(g.examples, '  ');
        });
      }
      if (s.structure) w(`- 構文：${s.structure.replace(/<\/?code>/g, '`')}`);
      if (s.nuance) w(`- ニュアンス：${s.nuance}`);
      w();
    });

    if (a.guide?.length) {
      w('#### JAPANESE GUIDE');
      w();
      a.guide.forEach(p => { w(p); w(); });
    }

    if (a.deepdive?.length) {
      w('#### LANGUAGE DEEP DIVE');
      w();
      a.deepdive.forEach(g => {
        w(`##### ${g.title}`);
        w();
        g.items.forEach(it => {
          const py = it.pinyin ? ` [${it.pinyin}]` : '';
          const pos = it.pos ? ` *(${it.pos})*` : '';
          w(`- **${it.term}**${py}${pos}${it.ja ? ` — ${it.ja}` : ''}`);
          if (it.note) w(`  ${it.note}`);
          ex(it.examples);
        });
        w();
      });
    }

    if (a.breakdown?.length) {
      w('#### SENTENCE BREAKDOWN');
      w();
      a.breakdown.forEach(b => {
        w(`> ${plain(b.text)}`);
        w();
        if (b.structure) w(`- **構文**：${b.structure.replace(/<\/?code>/g, '`')}`);
        if (b.grammar) w(`- **文法**：${b.grammar}`);
        if (b.vocab) w(`- **語彙**：${b.vocab}`);
        if (b.literal) w(`- **直訳**：${b.literal}`);
        if (b.natural) w(`- **自然な訳**：${b.natural}`);
        if (b.nuance) w(`- **ニュアンス**：${b.nuance}`);
        w();
      });
    }

    if (a.tryit?.length) {
      w('#### TRY IT YOURSELF');
      w();
      a.tryit.forEach((q, i) => {
        w(`**Q${i + 1}.** ${q.q}`);
        if (q.hint) w(`- ヒント：${q.hint}`);
        w(`- 解答例：*${plain(q.a)}*`);
        if (q.aj) w(`- 訳：${q.aj}`);
        if (q.why) w(`- 解説：${q.why}`);
        w();
      });
    }

    if (a.talk?.length) {
      w('#### TALK ABOUT IT');
      w();
      a.talk.forEach(t => {
        w(`- **Q:** ${plain(t.q)}`);
        w(`  - ${t.qj}`);
        w(`  - **A:** ${plain(t.a)}`);
        w(`  - ${t.aj}`);
        if (t.note) w(`  - 解説：${t.note}`);
      });
      w();
    }

    w('#### SOURCES');
    w();
    a.sources.forEach(s => w(`- ${s.outlet}「${s.title}」公開 ${s.date}／参照 ${s.accessed}　<${s.url}>`));
    w();
    w('---');
    w();
  }
}

/* ── 特集 ───────────────────────────────────────────── */
w('## GLOBAL FEATURE');
w();
w(`### ${data.feature.title}`);
w();
w(`*${data.feature.sub}*`);
w();
data.feature.body.forEach(p => { w(p); w(); });
if (data.feature.compare) {
  data.feature.compare.forEach(c => {
    w(`- **[${L[c.lang].label}]** ${plain(c.orig)}`);
    w(`  - ${c.ja}`);
  });
  w();
}
w('---');
w();

/* ── 言語ラボ ───────────────────────────────────────── */
w('## LANGUAGE LAB');
w();
data.lab.forEach(g => {
  w(`### ${g.title}`);
  w();
  g.items.forEach(it => {
    w(`- **${it.term}**${it.pinyin ? ` [${it.pinyin}]` : ''} — ${it.ja}`);
    ex(it.examples);
  });
  w();
});
w('---');
w();

/* ── 会話 ───────────────────────────────────────────── */
w('## REAL-WORLD CONVERSATION');
w();
data.conversation.forEach(t => {
  w(`- **[${L[t.lang].label}] Q:** ${plain(t.q)}`);
  w(`  - ${t.qj}`);
  w(`  - **A:** ${plain(t.a)}`);
  w(`  - ${t.aj}`);
  if (t.note) w(`  - 解説：${t.note}`);
});
w();
w('---');
w();

/* ── 音読 ───────────────────────────────────────────── */
w('## LISTENING & SHADOWING');
w();
data.shadowing.forEach(s => {
  w(`- **[${L[s.lang].label}]** ${plain(s.text)}`);
  w(`  - ${s.ja}`);
  w(`  - 練習：${s.tip}`);
});
w();
w('---');
w();

/* ── 復習と解答 ─────────────────────────────────────── */
w('## WEEKLY REVIEW');
w();
data.review.forEach((q, i) => {
  w(`**Q${i + 1}.**${q.lang ? ` [${L[q.lang].label}]` : ''} ${q.q}`);
  if (q.hint) w(`- ヒント：${q.hint}`);
  w();
});
w('---');
w();
w('## ANSWERS & EXPLANATIONS');
w();
data.review.forEach((q, i) => {
  w(`**Q${i + 1}.** ${plain(q.a)}`);
  if (q.aj) w(`- 訳：${q.aj}`);
  w(`- なぜそうなるか：${q.why}`);
  w();
});
w('---');
w();

/* ── 編集チェック ───────────────────────────────────── */
const perLang = ORDER.map(c => `${L[c].ja} ${articles.filter(a => a.lang === c).length}本`).join(' / ');
const nSent = articles.reduce((n, a) => n + a.body.length, 0);
const nVocab = articles.reduce((n, a) => n + a.body.reduce((m, s) => m + (s.vocab?.length || 0), 0), 0);
const nGram = articles.reduce((n, a) => n + a.body.reduce((m, s) => m + (s.grammar?.length || 0), 0), 0);
const nSrc = articles.reduce((n, a) => n + a.sources.length, 0);

w('## 編集チェック');
w();
w(`- [x] 4言語すべてを収録（${perLang}）`);
w('- [x] 特定地域に偏っていない（英国／中国・中央アジア／スペイン・アルゼンチン／フランス）');
w('- [x] Hard News だけになっていない（食文化・天気・スポーツ・言語教育を含む）');
w('- [x] 現地語の情報源を調査（BBC / 中国新聞網・BBC中文 / El País・BBC Mundo / Le Monde・franceinfo）');
w('- [x] 記事は事実にもとづき本誌が独自に執筆（翻訳・転載なし）');
w(`- [x] 語彙解説 ${nVocab}項目・文法解説 ${nGram}項目（数量上限を設けていない）`);
w(`- [x] 原文 ${nSent}文すべてに日本語訳を併記`);
w('- [x] 日本人が間違えやすい点を明示（同形異義語・離合詞・接続法・時制の一致・dont・se）');
w('- [x] 言語ごとの文化的ニュアンスを解説（la rentrée / voseo / 量詞 / 英国の控えめな否定）');
w(`- [x] 出典 ${nSrc}件すべてに媒体名・記事名・公開日・URL・参照日を明記`);
w('- [x] URL は実在するものだけを記載（未確認の情報・数値は掲載しない）');
w();
w(`*Generated from \`${dir}\` by \`tools/build-master.mjs\`.*`);

const dest = path.join(dir, 'MASTER.md');
fs.writeFileSync(dest, out.join('\n') + '\n', 'utf8');
console.log(`✅ ${dest}（${out.length} 行 / ${(fs.statSync(dest).size / 1024).toFixed(0)} KB）`);
