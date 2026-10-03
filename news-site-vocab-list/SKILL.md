---
name: "news-site-vocab-list"
description: "ニュースサイトをChromeで回遊して英語・フランス語・中国語・スペイン語の語彙リスト（4列TSV）を作り、Google Driveのflash cardフォルダ内の言語別サブフォルダに保存する。「サイトから語彙リストを作って」「BBC/Guardian/Le Monde/El País/BBC中文から単語リスト」などで使う。"
---

# ニュースサイト → フラッシュカード語彙リスト

最新のニュース記事をChromeで読み、学習者のレベルに合った語彙・慣用表現のリストを作ります。言語ごとに複数のサイトから集めます。できたリストはフラッシュカードアプリ用のTSVとして、Google Driveの言語別フォルダに保存します。

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

## 2. Chromeで記事を回遊する

1. ChromeのツールをToolSearchでまとめて読み込む：tabs_context_mcp、navigate、get_page_text、read_page、find、browser_batch、javascript_tool、tabs_close_mcp。
2. `tabs_context_mcp(createIfEmpty:true)` を呼ぶ。複数のブラウザがあるというエラーが出たら、ツールの指示どおりAskUserQuestionで選んでもらう。ユーザーが「1つしか開いていない」と答えた場合は `switch_browser` を使う。
3. 記事URLの抽出：トップページで `javascript_tool` を使い、当日・前日の日付を含むリンクを集める（例：`[...new Set([...document.querySelectorAll('a')].map(a=>a.href).filter(h=>/20261001|20260930/.test(h)))]`）。出力が切れる場合は `window._u` に保存して1件ずつ表示するか、`read_page(filter:"all", depth:40)` の保存ファイルからPythonで抜き出す。
4. 記事は `browser_batch` で4本ずつ読む（navigate + get_page_text の組）。`permission_required` が出たら、まず navigate を単独で呼んでから batch に戻る。本文が読めた記事を、目標語数に対して目安で次の本数まで集める。
   - 300語：本文が読めた記事を12〜16本（複数サイト合計）
   - 100語：6本程度
   - ニュース・論説・書評・文化・科学など、分野を混ぜて選ぶ。
5. 読み終えたらタブを閉じる。

### 制限にかかったときは次のサイトへ

次のような表示が出た記事は「ブロック」と数える。

- 例：Subscribe to read、Sign in to keep reading、This is not a paywall、Réservé aux abonnés、Il vous reste XX% de cet article à lire、La suite est réservée aux abonnés、Regístrate gratis para seguir leyendo、Suscríbete para seguir leyendo、本文が冒頭数段落で途切れる、閲覧回数の上限表示。

判断と対応：

- 1サイトで読んだ記事の半分以上がブロックなら、リストの次のサイトに移る。
- それまでに読めた本文や冒頭部分はそのまま使ってよい。
- 複数サイトを合わせて必要な記事数を集める。

やってはいけないこと：

- ログイン、アカウント作成、購読、Cookie同意の「すべて許可」はしない。
- 読めない記事をWebFetch、curl、アーカイブサイトなどで取得しようとしない。
- 「Permission denied」が出た場合は、ユーザーに Chrome の拡張機能設定（chrome://extensions → Claude → サイトへのアクセス → 特定のサイト）に `*://<ドメイン>/*` を追加してもらい、そのあと拡張の許可ダイアログで「常に許可」を選んでもらう。追加後に再試行する。拡張機能の設定は自分では変更しない。

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