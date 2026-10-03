---
name: "news-site-vocab-list"
description: "ニュースサイトの記事をPythonで収集して英語・フランス語・中国語・スペイン語の語彙リスト（4列TSV）を作り、Google Driveのflash cardフォルダ内の言語別サブフォルダに保存する。「サイトから語彙リストを作って」「BBC/Guardian/Le Monde/El País/BBC中文から単語リスト」などで使う。"
---

# ニュースサイト → フラッシュカード語彙リスト

最新のニュース記事をPythonで収集して読み、学習者のレベルに合った語彙・慣用表現のリストを作ります。言語ごとに複数のサイトから集めます。できたリストはフラッシュカードアプリ用のTSVとして、Google Driveの言語別フォルダに保存します。

## 0. 最初に必ず質問する（AskUserQuestion）

作業を始める前に、AskUserQuestionで次の点を確認する。ユーザーがすでに指定している項目は聞かなくてよい。

1. **言語**：英語 / フランス語 / 中国語（簡体字）/ スペイン語。複数選択可で、選んだ言語ごとに1ファイル作る。
2. **語彙数**：100 / 200 / 300（既定）/ その他。
3. **レベル**（言語ごとに聞く）
   - 英語：英検準1級 / 英検1級 / 英検1級以上（ネイティブ並みを目指す、既定）
   - 中国語：HSK4級 / HSK5級 / HSK6級以上（既定）
   - スペイン語・フランス語：初級（A2〜B1）/ 中級（B1〜B2）/ 上級（B2〜C1）
4. **サイト**：下のリストから複数サイトを回るのでよいか、特定のサイトを指定するか。前回使ったサイトとは別のサイトを優先するかも聞く。

成語・慣用句・言い回しは常に含める。そのための質問はしない。

## 1. サイト一覧

言語ごとに、この中から2〜3サイト以上を回って記事を集める。制限に当たったら次のサイトに切り替える（手順2を参照）。

### 英語（British English）
1. BBC News — https://www.bbc.com/news
2. The Guardian — https://www.theguardian.com
3. The Telegraph — https://www.telegraph.co.uk
4. The Independent — https://www.independent.co.uk
5. Financial Times — https://www.ft.com
6. Sky News — https://news.sky.com

### フランス語
1. Le Monde — https://www.lemonde.fr
2. Le Figaro — https://www.lefigaro.fr
3. Libération — https://www.liberation.fr
4. Franceinfo — https://www.francetvinfo.fr（ページの読み込みが終わらず get_page_text が失敗しやすい。失敗したらすぐ次へ）
5. Le Parisien — https://www.leparisien.fr
6. RFI — https://www.rfi.fr/fr/

### 中国語（簡体字）
1. BBC News 中文 — https://www.bbc.com/zhongwen/simp（https://www.bbc.com/chinese/simp も同じサイト）
2. NHK WORLD-JAPAN 中文 — https://www3.nhk.or.jp/nhkworld/zh/news/（記事が短いので多めに読む）
3. DW 中文網 — https://www.dw.com/zh/
4. RFI 華語 — https://www.rfi.fr/cn/
5. VOA 中文網 — https://www.voachinese.com
6. swissinfo.ch 中文 — https://www.swissinfo.ch/chi

### スペイン語
1. El País — https://elpais.com
2. El Mundo — https://www.elmundo.es
3. ABC — https://www.abc.es
4. RTVE.es — https://www.rtve.es/noticias/
5. La Vanguardia — https://www.lavanguardia.com
6. BBC News Mundo — https://www.bbc.com/mundo

## 2. Pythonで記事を集めてClaudeに渡す

記事の発見・ページ取得・本文抽出・不要ページと重複記事の除外は、このスキルの `scripts/collector` が行う。Claude はサイトを開いたり、どの記事を読むか判断したりしない。Claude が読むのは、Python が作った「バッチ」ファイル（言語・記事ID・タイトル・本文だけ）だけ。

### 2-1. 準備（初回のみ）

```bash
cd <このSKILL.mdがあるフォルダ>/scripts
pip install -q -r requirements.txt
```

取得履歴・ログ・バッチは `~/.vocab-collector`（環境変数 `VOCAB_COLLECTOR_HOME` で変更可）に保存される。履歴があるので、前回処理した記事は二度と渡されない。

### 2-2. 記事を集める

1. 手順0・1で決めたサイトのID（`scripts/collector/config.yaml` の `id`）を登録順に指定して実行する。サイトの指定がなければ `--sites` を省いて全サイト。

   ```bash
   python3 -m collector collect --lang en --sites bbc,guardian,independent --per-site 6
   ```

   - 言語コード：英語 `en` / フランス語 `fr` / 中国語 `zh` / スペイン語 `es`
   - 記事数の目安は従来と同じ：300語なら本文が読めた記事を合計12〜16本（`--per-site` × サイト数で調整）、100語なら6本程度。1サイトの上限は20本。
   - 出力の各行がサイトごとの結果。`outcome` が `ok` 以外（`paywalled`＝半分以上が購読制限、`no_candidates`、`too_many_errors`、`site_error`）のサイトは自動で打ち切られ、次のサイトに進んでいる。
   - 最後の `READY n` が、まだClaudeに渡していない記事の本数。足りなければ、まだ使っていない登録サイトを `--sites` に指定して追加で実行する。
2. 購読制限・ログイン・Cookie同意などの操作はしない。読めない記事を別の方法で取りに行かない（Python側でも取得しない）。
3. すべてのサイトで取得に失敗する場合（ネットワーク制限など）は、ユーザーに `collect` の出力を見せて相談する。

### 2-3. バッチ単位で語彙を作る（目標に届いたら止める）

1. 次のバッチを作る。

   ```bash
   python3 -m collector next-batch --lang en
   ```

   `BATCH <バッチID> articles=… chars=…` と、バッチファイルのパスが表示される。そのファイルを Read で読み、手順3の基準で語彙を抜き出して `b1.tsv`、`b2.tsv`… に書き出す。記事中の `### a12 | タイトル` の `a12` は記事ID。

2. そのバッチの語彙を書き終えたら処理済みにする（次回以降このバッチの記事は渡されない）。

   ```bash
   python3 -m collector done --batch <バッチID>
   ```

   途中で中断して語彙を作れなかったときだけ `release --batch <バッチID>` で未処理に戻す。

3. ここまでの候補を結合し、手順3と同じ方法でファイル内・既存リストとの重複を除いた件数を数える。
   - 目標数の約1.05〜1.2倍に届いた → 記事の追加取得・バッチ作成をやめて、手順3の調整に進む。
   - 届いていない → 1に戻る。`NO_READY_ARTICLES` と出たら、2-2で未使用の登録サイトから追加で集めてから1に戻る（`--max-total` で必要な本数だけ取得できる）。

`python3 -m collector status --lang en` でサイトごとの件数（ready / processed / rejected / duplicate / error）を確認できる。抽出結果を人が確認したいときは `python3 -m collector show --id 12`。

### 付録：Pythonで取得できないサイト

Pythonでは取得できず、どうしてもそのサイトを使う必要がある場合に限り、ユーザーに確認してから以前のChromeでの手順（ChromeのツールをToolSearchで読み込み、記事ページを navigate + get_page_text で読む）を使う。その場合もログイン・購読・Cookie同意の「すべて許可」はしない。

## 3. 語彙リストを作る

### 出力形式

タブ区切りの4列で、ヘッダー行は付けない。1行に1項目。

```
見出し語<TAB>日本語訳<TAB>例文<TAB>例文の日本語訳
```

### 見出し語

- 辞書形にする。
- 慣用句・句動詞・成語・コロケーションは、表現全体を1項目にする。
- フランス語・スペイン語は、初級レベルのときだけ名詞に冠詞を付ける（la grève、un orage）。
- 中国語はピンインを付けない（ユーザーから要望があれば付ける）。
- 中国語では、広東語寄りの表現（例：后生、取替）は普通話に直す。

### 日本語訳

- 1〜3つの意味を「・」でつなぐ。
- 品詞ラベルは付けない。

### 例文

- 自作の短く自然な文にする。記事の文をそのまま写さない（著作権のため）。
- 例文の日本語訳は正確に付ける。

### 内容の配分とレベル

- 慣用表現・言い回しを全体の20〜35%入れる。
  - 記事に出てきた表現を優先する。
  - 足りない分は、ニュースでよく使う定番表現で補う。
- レベルに合わない易しい語は除く。
  - 目標数の約1.05〜1.2倍を集めてから、易しいものを削って目標数に合わせる。
- 重複を除く：
  - ファイル内の重複
  - 同じ言語の既存リストとの重複（その言語のフォルダにあるTSVの見出し語と照合する。手元の /mnt/user-data/outputs に同じ言語のTSVがあればそれを使い、なければDriveから download_file_content で取得する）。表記違いのほぼ同じ表現（例：「dar abasto」と「no dar abasto」）も除く。

### 作業方法

1. 70〜80行ずつ、作業ディレクトリのファイル（例：`/home/claude/<lang>/b1.tsv`…）に書き出す。
2. すべて結合し、Pythonで既存リストとの重複を除いてから目標数に調整する。そのあと次を確認する：

```bash
awk -F'\t' 'NF!=4{print "BAD",NR}' all.tsv; wc -l all.tsv; cut -f1 all.tsv | sort | uniq -d
```

3. 完成したファイルを `/mnt/user-data/outputs/<ファイル名>` に置く。

## 4. ファイル名

言語ごとに複数のサイトから集めるため、ファイル名にはサイト名を入れず、`<言語名>News<YYYYMMDD>.tsv` の形にする。日付はAsia/Tokyoの当日。

| 言語 | ファイル名の例 |
|---|---|
| 英語 | `EnglishNews20261001.tsv` |
| 中国語 | `ChineseNews20261001.tsv` |
| スペイン語 | `SpanishNews20261001.tsv` |
| フランス語 | `FrenchNews20261001.tsv` |

- 上記以外の言語も同じ形（英語の言語名 + News + 日付）にする。例：`GermanNews20261001.tsv`
- 保存先の言語フォルダに同じ名前のファイルがすでにある場合は、上書きせずに `_2`、`_3` を付ける。
- 言語ごとに1ファイル作る。

## 5. Google Driveの言語別フォルダに保存する

親フォルダはマイドライブ › Podcasts › flash card（ID `15xpWugQ5AHtrjg4_VlAa2CEzGhjJe-jV`）。その中の言語別サブフォルダに保存する。

| 言語 | フォルダ名 | フォルダID |
|---|---|---|
| 英語 | 英語 | `1DEGOcKdNfwaF2UjCxyH6C5JYrlxsIAPe` |
| 中国語 | 中国語 | `1OC_sDpznMS6cg1SAAi0M4pCUXKyn3Fgu` |
| スペイン語 | スペイン語 | `15ph96fZ877kNxhJPusyW6xSmsCvVOC0Z` |
| フランス語 | フランス語 | `1IzrUOy0jO75HONntCe6gih0_ZnFaboBI` |

- IDで見つからない場合は、`search_files` で `parentId = '15xpWugQ5AHtrjg4_VlAa2CEzGhjJe-jV' and title = '<言語名>' and mimeType = 'application/vnd.google-apps.folder'` を探す。
- それでもなければ、`create_file`（mimeType `application/vnd.google-apps.folder`、parentId = flash cardのID）で作成する。
- 上記以外の言語を頼まれた場合も、同じ方法で日本語名のフォルダをflash cardの中に作る。
- 保存の前に、`parentId = '<言語フォルダID>'` で既存ファイルを確認する（名前の重複チェックと、手順3の重複除外のため）。
- 保存は `mcp__Google_Drive__create_file` で行う：
  - title：ファイル名
  - parentId：言語フォルダのID
  - contentMimeType：`text/tab-separated-values`
  - disableConversionToGoogleType：true
  - textContent：TSVの全文（Readで読んだ内容をそのまま貼る）
- 保存後に、返ってきた fileSize が `wc -c` で測ったローカルのサイズと一致するか確認する。一致しない場合は作り直す。

## 6. 報告

2〜4行の短い日本語で報告する。含める内容：

- 保存したフォルダ名・ファイル名と件数
- 言語ごとに読んだサイトと記事の本数、主なトピック
- 制限でサイトを切り替えた場合は、その旨
- 慣用表現の例をいくつか
- アプリへの取り込み手順：「リスト → ✏️ → ⬇️ → 貼り付け → ✓」