# news-site-vocab-list

ニュース記事から語学学習用の語彙リスト（4列TSV）を作り、Google Drive に保存するスキルです。

今回の変更は **記事の収集部分だけ** です。Claude in Chrome がサイトを開いて記事を探し、本文を読んでいた処理を、Python（`scripts/collector`）に置き換えました。
学習者レベル・語彙の選び方・約300語・TSV形式・重複語彙の除外・ファイル名・Google Drive の保存先と保存方法（SKILL.md の手順0・1・3〜6）は変えていません。

```
登録サイト（config.yaml、SKILL.md の24サイトと同じ）
  ↓ RSS / 公式JSON / ニュースサイトマップ / トップページ（この順に試す）
記事候補（新しい順。履歴にあるURL・記事IDは取りに行かない）
  ↓ robots.txt 確認、1ホスト2秒間隔、タイムアウト・再試行上限つきで取得
本文抽出（trafilatura）→ ナビ・広告・関連記事・SNS・定型文・重複段落を除去
  ↓ 短すぎる・動画・ギャラリー・エラー・ログイン・一覧・言語違い・購読制限 → 除外
重複除外（URL正規化／記事ID／本文ハッシュ／SimHash／段落の一致率）
  ↓
バッチ（言語・記事ID・タイトル・本文だけ。本数と文字数の上限は config.yaml）
  ↓
Claude：既存の手順3で語彙作成 → 目標数に届いたら追加取得をやめる
  ↓
既存の手順4・5で Google Drive に保存
```

## 構成

| パス | 内容 |
|---|---|
| `news-site-vocab-list/SKILL.md` | スキル本体。変更したのは「2. Pythonで記事を集めてClaudeに渡す」と、説明文中の「Chromeで」の部分だけ |
| `news-site-vocab-list/scripts/collector/config.yaml` | サイト一覧・取得間隔・上限・バッチサイズなどの設定 |
| `scripts/collector/fetch.py` | HTTP取得（robots.txt、アクセス間隔、タイムアウト、再試行） |
| `scripts/collector/discover.py` | 記事候補の発見 |
| `scripts/collector/extract.py` | 本文抽出と整形 |
| `scripts/collector/filters.py` | 不要ページの除外 |
| `scripts/collector/dedup.py` | 重複判定 |
| `scripts/collector/store.py` | 取得履歴（SQLite） |
| `scripts/collector/batch.py` | Claude に渡すバッチの作成 |

## 使い方

```bash
cd news-site-vocab-list/scripts
pip install -r requirements.txt
python3 -m collector collect --lang en --sites bbc --per-site 15   # 記事を集める
python3 -m collector next-batch --lang en                          # Claudeに渡すバッチを作る
python3 -m collector done --batch <バッチID>                        # 処理済みにする
python3 -m collector status --lang en                              # サイトごとの件数
python3 -m collector show --id 12                                  # 抽出結果を確認
```

履歴・ログ（`collector.log`）・バッチは `~/.vocab-collector`（`VOCAB_COLLECTOR_HOME` で変更可）に置かれます。

## 設定（config.yaml）

- `collect.per_site_limit`：1サイトで集める記事の上限（既定15）。ダウンロード数はその1.5倍まで
- `collect.max_age_days`：これより古い記事は候補にしない（既定3日）
- `batch.max_articles` / `batch.max_chars` / `batch.article_max_chars`：Claude に一度に渡す本数・文字数
- `filter.min_chars`：これより短い本文は除外
- `http.*`：タイムアウト、再試行回数、アクセス間隔、同時に処理するサイト数
