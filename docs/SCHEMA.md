# データ書式

記事データは `content/issues/<号>/*.js` にあり、これが唯一の情報源です。
`MASTER.md` は `tools/build-master.mjs` が生成するので、直接編集しないでください。

読み込み順は `issue.js` → `words.js` → `en.js` → `zh.js` → `es.js` → `fr.js` です。

---

## 単語リスト（`WGL.registerWords({...})`）

単語タブの中身です。**4言語すべてで、ちょうど20語**が必要です（`validate.mjs` が数を検査します）。

```js
{
  en: [ {
    term: 'ease',              // 必須・言語内で一意
    kind: '単語',               // 必須。'単語' か '熟語'
    pos: 'v.',                 // 品詞
    pinyin: 'biǎo shì',        // 中国語は必須。半角スペース区切りで漢字数と合わせる
    ja: '和らぐ、緩む',          // 必須。短い意味
    note: '…なぜその意味になるか、日本人が誤解しやすい点…',
    say: 'set your sights on', // 読み上げに渡す文字列（term と違う場合のみ）
    examples: [ { o: 'Inflation eased.', j: 'インフレは鈍化した。' } ]
  } ],
  zh: [...], es: [...], fr: [...]
}
```

`term` が「llevar + 期間 + gerundio」のように説明的な見出しになる場合は、
`say` に読み上げ用の自然な一文を入れてください。

---

## 記事（`WGL.registerArticles([...])`）

```js
{
  id: 'en-shein',              // 必須・全号で一意。アンカーになる
  lang: 'en',                  // 必須。en | zh | es | fr
  category: 'Business / Fashion',
  level: 'B1–B2',              // 中国語は 'HSK4–5' など
  headline: { orig: '...', ja: '...' },   // 必須・両方
  why: '…なぜ今この話題なのか（日本語）…',
  body: [ /* ↓ 文オブジェクト */ ],        // 必須
  guide: ['…日本語の段落…', '…'],
  deepdive: [ /* ↓ */ ],
  breakdown: [ /* ↓ */ ],
  tryit: [ /* ↓ */ ],
  talk: [ /* ↓ */ ],
  sources: [ /* ↓ 必須 */ ]
}
```

### 文オブジェクト（`body[]`）— 誌面の心臓部

```js
{
  id: 'en-shein-2',            // 必須・記事内で一意
  text: 'Shares fell by as much as 10% before the losses {{eased}}.',
  ja: '株価は一時10%も下落し、その後下げ幅が縮まった。',   // 必須
  literal: '…直訳…',                                    // 任意（「直訳」トグルで表示）
  vocab:   [ /* ↓ */ ],
  grammar: [ /* ↓ */ ],
  structure: '…構文の説明。<code>…</code> でタグ付けできる…',
  nuance: '…辞書訳では出ないニュアンス…'
}
```

`ja` は必須です。**原文のすぐ隣に訳を出す**のが本誌の中心的な要件なので、
訳のない文は `validate.mjs` がエラーにします。

#### `{{ }}` 記法 — 本文中のクリックできる語

| 書き方 | 意味 |
|---|---|
| `{{cool}}` | `cool` を語彙 `term: 'cool'` に結びつける |
| `{{le ha salido\|salirle a alguien}}` | 表示は `le ha salido`、参照する語彙は `salirle a alguien` |

- 対応する `vocab` エントリがないとエラーになります（大文字小文字は無視）。
- 中国語で `pinyin` がある語は、漢字1字ずつにルビが振られます。
  音節数が漢字数と一致しない場合は語全体に1つのルビが付き、警告が出ます。

#### `vocab[]`

```js
{
  term: 'eased',               // 必須。{{ }} の参照キーになる
  pinyin: 'jié gòu',           // 中国語のみ。半角スペース区切りで漢字数と合わせる
  pos: 'v. (ease)',            // 品詞
  ja: '和らぐ、緩む',            // 必須。短い語義
  note: '…なぜその意味になるか、日本人が誤解しやすい点…',
  collocations: ['tensions ease', 'ease the pressure'],
  examples: [{ o: 'Inflation eased.', j: 'インフレは鈍化した。' }]   // 記事とは別のオリジナル例文
}
```

#### `grammar[]`

```js
{
  point: 'as much as + 数値',
  ja: '…なぜここでこの形なのかまで説明する…',   // 必須
  compare: '…他の形との違い…',
  examples: [{ o: '…', j: '…' }]
}
```

「現在完了です」で終わらせず、**なぜその形なのか／他の形とどう違うのか**まで書きます。

### `deepdive[]`

```js
{ title: 'Vocabulary｜株式まわりの必須語',
  open: false,                 // 既定は開いた状態。false で畳む
  items: [ { term, pinyin, pos, ja, note, examples } ] }
```

### `breakdown[]`

```js
{ text: '…分解する原文…',
  structure: '<code>S</code>〈主語〉 …',   // <code> だけ使える
  grammar: '…', vocab: '…',
  literal: '…直訳…', natural: '…自然な訳…', nuance: '…その差の説明…' }
```

### `tryit[]` / `talk[]`

```js
{ q: '…日本語の問い…', hint: '…', a: '…解答例（対象言語）…', aj: '…訳…', why: '…なぜそうなるか…' }
{ q: '…対象言語の質問…', qj: '…訳…', a: '…対象言語の答え…', aj: '…訳…', note: '…表現の解説…' }
```

`talk` は `q` `qj` `a` `aj` の4つすべてが必須です。

### `sources[]` — 必須

```js
{ outlet: 'BBC News', title: '…記事タイトル…',
  date: '2026-09-01',      // 公開日 YYYY-MM-DD
  url: 'https://…',        // https:// のみ
  accessed: '2026-09-01' } // 参照日 YYYY-MM-DD
```

出典のない記事はエラーです。**実在を確認したURLだけ**を書いてください。

---

## 号の骨格（`WGL.registerIssue({...})`）

```js
{
  meta: { volume: '1', title: '…', dateRange: '…', published: '2026-09-01' },
  sectionTitles: { en: {title, sub}, zh: {...}, es: {...}, fr: {...} },   // 4言語すべて必須
  cover: { title, ja, lead: ['…段落…'] },
  worldThisWeek: [ { lang, tag, orig, ja } ],
  feature: { title, sub, body: ['…'], compare: [ { lang, orig, ja } ] },
  lab: [ { lang, title, items: [ { term, pinyin, ja, examples } ] } ],
  conversation: [ { lang, q, qj, a, aj, note } ],
  shadowing: [ { lang, text, ja, tip } ],       // tip = 発音・音読の練習ポイント
  review: [ { lang, q, hint, a, aj, why } ]     // why（なぜそうなるか）は必須
}
```

---

## チェックする

```bash
node tools/validate.mjs content/issues/2026-w36
```

エラーになるもの：4言語のどれかが欠けている／`id` の重複／`ja` の欠落／
`{{ }}` に対応する語彙がない／出典の欠落や書式違反／`review` に解説がない。

警告になるもの：中国語の語彙に `pinyin` がない／ピンインの音節数が合わない／
語彙・文法の注記がまったくない文／`why` や `guide` がない記事。
