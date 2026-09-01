/* 号のデータファイルを Node 上で読み込む共通ローダー */
import fs from 'node:fs';
import path from 'node:path';

export function loadIssue(dir) {
  const issue = { data: null, articles: [] };
  const WGL = {
    registerIssue: (d) => { issue.data = d; },
    registerArticles: (list) => { issue.articles.push(...list); }
  };
  const order = ['issue.js', 'en.js', 'zh.js', 'es.js', 'fr.js'];
  for (const f of order) {
    const p = path.join(dir, f);
    if (!fs.existsSync(p)) throw new Error(`データファイルがありません: ${p}`);
    new Function('WGL', fs.readFileSync(p, 'utf8'))(WGL);
  }
  if (!issue.data) throw new Error('registerIssue が呼ばれていません');
  return issue;
}

/** {{surface|key}} 記法を取り除いて素のテキストにする */
export const plain = (s) => String(s).replace(/\{\{([^{}|]+)(?:\|[^{}|]+)?\}\}/g, '$1');

/** {{surface|key}} から key（小文字）の一覧を取り出す */
export function markedKeys(s) {
  const out = [];
  const re = /\{\{([^{}|]+)(?:\|([^{}|]+))?\}\}/g;
  let m;
  while ((m = re.exec(String(s))) !== null) out.push((m[2] || m[1]).trim().toLowerCase());
  return out;
}
