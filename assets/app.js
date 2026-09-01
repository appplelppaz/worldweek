/* ============================================================
   WEEKLY GLOBAL LANGUAGES — reader
   Renders an issue: original-language articles with the Japanese
   translation, vocabulary and grammar notes rendered directly
   beneath each sentence.
   ============================================================ */
(function (global) {
  'use strict';

  var LANGS = {
    en: { label: 'ENGLISH',  ja: '英語',       color: 'var(--lang-en)', voice: 'en-GB', flag: '🇬🇧' },
    zh: { label: '中文',      ja: '中国語',     color: 'var(--lang-zh)', voice: 'zh-CN', flag: '🇨🇳' },
    es: { label: 'ESPAÑOL',  ja: 'スペイン語', color: 'var(--lang-es)', voice: 'es-ES', flag: '🇪🇸' },
    fr: { label: 'FRANÇAIS', ja: 'フランス語', color: 'var(--lang-fr)', voice: 'fr-FR', flag: '🇫🇷' }
  };
  var LANG_ORDER = ['en', 'zh', 'es', 'fr'];

  var issue = null;         // meta / cover / world / feature / lab / conversation / shadowing / review
  var articles = [];        // all registered articles, in registration order
  var filter = 'all';

  /* ---------- tiny helpers ---------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function el(id) { return document.getElementById(id); }
  function h(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function langOf(code) { return LANGS[code] || LANGS.en; }

  /* Turn `{{surface|key}}` markup into clickable <w> elements.
     `key` defaults to the surface form. Everything else is escaped. */
  function markup(text, vocabIndex, lang) {
    var out = '', last = 0, re = /\{\{([^{}|]+)(?:\|([^{}|]+))?\}\}/g, m;
    while ((m = re.exec(text)) !== null) {
      out += esc(text.slice(last, m.index));
      var surface = m[1], key = (m[2] || m[1]).trim();
      var entry = vocabIndex[key.toLowerCase()];
      var inner = esc(surface);
      if (entry && entry.pinyin && lang === 'zh') inner = ruby(surface, entry.pinyin);
      out += '<w data-k="' + esc(key.toLowerCase()) + '" tabindex="0" role="button">' + inner + '</w>';
      last = m.index + m[0].length;
    }
    return out + esc(text.slice(last));
  }

  /* Pair each han character with its pinyin syllable when the counts line up. */
  function ruby(surface, pinyin) {
    var syl = String(pinyin).trim().split(/\s+/);
    var chars = Array.from(surface);
    if (syl.length !== chars.length) {
      return '<ruby>' + esc(surface) + '<rt>' + esc(pinyin) + '</rt></ruby>';
    }
    return chars.map(function (c, i) {
      return '<ruby>' + esc(c) + '<rt>' + esc(syl[i]) + '</rt></ruby>';
    }).join('');
  }

  function plain(text) { return String(text).replace(/\{\{([^{}|]+)(?:\|[^{}|]+)?\}\}/g, '$1'); }

  /* ---------- registration API ---------- */

  function registerIssue(data) { issue = data; }

  function registerArticles(list) {
    list.forEach(function (a) { articles.push(a); });
  }

  /* ---------- rendering: sentence block ---------- */

  function vocabIndexFor(sentence) {
    var idx = {};
    (sentence.vocab || []).forEach(function (v) { idx[String(v.term).toLowerCase()] = v; });
    return idx;
  }

  function renderExamples(list) {
    if (!list || !list.length) return '';
    return list.map(function (e) {
      return '<span class="ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em></span>';
    }).join('');
  }

  function renderVocabNote(vocab) {
    if (!vocab || !vocab.length) return '';
    var items = vocab.map(function (v) {
      var s = '<li><span class="t">' + esc(v.term) + '</span>';
      if (v.pinyin) s += '<span class="py">' + esc(v.pinyin) + '</span>';
      if (v.pos) s += '<span class="pos">' + esc(v.pos) + '</span>';
      s += '— ' + esc(v.ja);
      if (v.note) s += '<br>' + esc(v.note);
      if (v.collocations && v.collocations.length) {
        s += '<br><span class="pos">よく一緒に使う語:</span> ' + esc(v.collocations.join(' / '));
      }
      s += renderExamples(v.examples);
      return s + '</li>';
    }).join('');
    return '<div class="note note-v"><b>語彙</b><ul>' + items + '</ul></div>';
  }

  function renderGrammarNote(grammar) {
    if (!grammar || !grammar.length) return '';
    var items = grammar.map(function (g) {
      var s = '<li><span class="t">' + esc(g.point) + '</span><br>' + esc(g.ja);
      if (g.compare) s += '<br><span class="pos">比べると:</span> ' + esc(g.compare);
      s += renderExamples(g.examples);
      return s + '</li>';
    }).join('');
    return '<div class="note note-g"><b>文法</b><ul>' + items + '</ul></div>';
  }

  function renderSentence(s, lang, a) {
    var li = h('li', 'sent');
    li.dataset.lang = lang;
    li.dataset.sid = s.id || '';
    /* 読み上げ用の素のテキスト。DOM から取り出すと、中国語のルビ（ピンイン）が
       混ざってしまうため、描画時に元の文をそのまま持たせておく。 */
    li.dataset.speak = plain(s.text);

    var idx = vocabIndexFor(s);
    var o = h('p', 'o-line');
    o.innerHTML = markup(s.text, idx, lang);

    var speak = h('button', 'speak', '🔊');
    speak.type = 'button';
    speak.title = 'この文を読み上げる';
    speak.setAttribute('aria-label', 'この文を読み上げる');
    speak.addEventListener('click', function () { sayOne(li); });
    o.appendChild(speak);

    var fromHere = h('button', 'speak', '⏬');
    fromHere.type = 'button';
    fromHere.title = 'この文から記事の最後まで続けて読む';
    fromHere.setAttribute('aria-label', 'この文から続けて読む');
    fromHere.addEventListener('click', function () { playArticle(a, li); });
    o.appendChild(fromHere);
    li.appendChild(o);

    if (s.literal) li.appendChild(h('p', 'l-line', esc(s.literal)));
    if (s.ja) li.appendChild(h('p', 'j-line', esc(s.ja)));

    var notes = '';
    notes += renderVocabNote(s.vocab);
    notes += renderGrammarNote(s.grammar);
    if (s.structure) notes += '<div class="note note-s"><b>構文</b>' + esc(s.structure) + '</div>';
    if (s.nuance) notes += '<div class="note note-s"><b>ニュアンス</b>' + esc(s.nuance) + '</div>';
    if (notes) li.appendChild(h('div', 'notes', notes));

    /* store vocab for the popover */
    Object.keys(idx).forEach(function (k) { POPDATA[k] = idx[k]; });
    return li;
  }

  var POPDATA = {};

  /* ---------- rendering: article ---------- */

  function renderArticle(a) {
    var L = langOf(a.lang);
    var art = h('article', 'article');
    art.id = a.id;
    art.style.setProperty('--c', L.color);
    art.dataset.lang = a.lang;

    var head = h('div', 'art-head');
    var meta = '<span class="chip lang">' + esc(L.label) + '</span>';
    if (a.category) meta += '<span class="chip">' + esc(a.category) + '</span>';
    if (a.level) meta += '<span class="chip">' + esc(a.level) + '</span>';
    head.innerHTML =
      '<div class="art-meta">' + meta + '</div>' +
      '<h3>' + esc(a.headline.orig) + '</h3>' +
      '<p class="ja-title">' + esc(a.headline.ja) + '</p>';
    art.appendChild(head);

    if (WGLSpeech.supported) {
      var listen = h('button', 'mini listen', '▶ この記事を通して聞く');
      listen.type = 'button';
      listen.dataset.article = a.id;
      listen.addEventListener('click', function () { playArticle(a); });
      head.appendChild(listen);
    }

    if (a.why) art.appendChild(h('div', 'why', '<b>Why this story matters</b>' + esc(a.why)));

    /* original article, sentence by sentence */
    art.appendChild(h('h4', 'sub', 'Original Article <span>原文（1文ずつ・訳と解説つき）</span>'));
    var ul = h('ul', 'sents');
    (a.body || []).forEach(function (s) { ul.appendChild(renderSentence(s, a.lang, a)); });
    art.appendChild(ul);

    /* japanese guide */
    if (a.guide && a.guide.length) {
      art.appendChild(h('h4', 'sub', 'Japanese Guide <span>日本語で読むこの記事の中身と背景</span>'));
      art.appendChild(h('div', 'guide', a.guide.map(function (p) {
        return '<p>' + esc(p) + '</p>';
      }).join('')));
    }

    /* deep dive */
    if (a.deepdive && a.deepdive.length) {
      art.appendChild(h('h4', 'sub', 'Language Deep Dive <span>この記事を語学教材として掘り下げる</span>'));
      a.deepdive.forEach(function (grp) {
        var d = h('details', 'dd');
        d.open = grp.open !== false;
        var entries = (grp.items || []).map(function (it) {
          var s = '<div class="entry"><h5>' + esc(it.term);
          if (it.pinyin) s += '<span class="py">' + esc(it.pinyin) + '</span>';
          if (it.pos) s += '<span class="pos">' + esc(it.pos) + '</span>';
          s += '</h5>';
          if (it.ja) s += '<p>' + esc(it.ja) + '</p>';
          if (it.note) s += '<p>' + esc(it.note) + '</p>';
          (it.examples || []).forEach(function (e) {
            s += '<div class="ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em></div>';
          });
          return s + '</div>';
        }).join('');
        d.innerHTML =
          '<summary>' + esc(grp.title) +
          '<span class="n">' + (grp.items || []).length + ' 項目</span></summary>' +
          '<div class="dd-body">' + entries + '</div>';
        art.appendChild(d);
      });
    }

    /* sentence breakdown */
    if (a.breakdown && a.breakdown.length) {
      art.appendChild(h('h4', 'sub', 'Sentence Breakdown <span>特に学習価値の高い文を分解する</span>'));
      a.breakdown.forEach(function (b) {
        var box = h('div', 'bd');
        var rows = '';
        if (b.structure) rows += '<dt>構文</dt><dd>' + b.structure + '</dd>';
        if (b.grammar)   rows += '<dt>文法</dt><dd>' + esc(b.grammar) + '</dd>';
        if (b.vocab)     rows += '<dt>語彙</dt><dd>' + esc(b.vocab) + '</dd>';
        if (b.literal)   rows += '<dt>直訳</dt><dd>' + esc(b.literal) + '</dd>';
        if (b.natural)   rows += '<dt>自然な訳</dt><dd>' + esc(b.natural) + '</dd>';
        if (b.nuance)    rows += '<dt>ニュアンス</dt><dd>' + esc(b.nuance) + '</dd>';
        box.innerHTML = '<p class="q">' + esc(plain(b.text)) + '</p><dl>' + rows + '</dl>';
        art.appendChild(box);
      });
    }

    /* try it yourself */
    if (a.tryit && a.tryit.length) {
      art.appendChild(h('h4', 'sub', 'Try It Yourself <span>この記事の語彙・文法で書いてみる</span>'));
      var ol = h('ol', 'ol');
      a.tryit.forEach(function (q) {
        var li = h('li');
        var s = esc(q.q);
        if (q.hint) s += '<span class="hint">ヒント: ' + esc(q.hint) + '</span>';
        s += '<details class="ans"><summary>解答例と解説</summary><div class="body">' +
             '<i>' + esc(plain(q.a)) + '</i>';
        if (q.aj) s += '<em>' + esc(q.aj) + '</em>';
        if (q.why) s += '<div class="why-a">' + esc(q.why) + '</div>';
        s += '</div></details>';
        li.innerHTML = s;
        ol.appendChild(li);
      });
      art.appendChild(ol);
    }

    /* talk about it */
    if (a.talk && a.talk.length) {
      art.appendChild(h('h4', 'sub', 'Talk About It <span>この話題を会話で使う</span>'));
      var tl = h('ul', 'talk');
      a.talk.forEach(function (t) {
        var li = h('li');
        var s = '<p class="qq">' + esc(plain(t.q)) + '</p><p class="qj">' + esc(t.qj) + '</p>' +
                '<p class="aa">' + esc(plain(t.a)) + '</p><p class="aj">' + esc(t.aj) + '</p>';
        if (t.note) s += '<p class="tn">' + esc(t.note) + '</p>';
        li.innerHTML = s;
        tl.appendChild(li);
      });
      art.appendChild(tl);
    }

    /* sources */
    if (a.sources && a.sources.length) {
      art.appendChild(h('h4', 'sub', 'Sources <span>出典</span>'));
      var sl = h('ul', 'src');
      a.sources.forEach(function (s) {
        sl.appendChild(h('li', null,
          '<span class="out">' + esc(s.outlet) + '</span>｜' + esc(s.title) +
          '<br><span class="dt">公開 ' + esc(s.date) + '／参照 ' + esc(s.accessed) + '</span>' +
          '<br><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.url) + '</a>'));
      });
      art.appendChild(sl);
    }
    return art;
  }

  /* ---------- rendering: magazine furniture ---------- */

  function sectionHead(kicker, title, sub, color) {
    var d = h('div', 'sec-head');
    if (color) d.style.setProperty('--c', color);
    d.innerHTML = (kicker ? '<p class="kicker">' + esc(kicker) + '</p>' : '') +
      '<h2>' + esc(title) + '</h2>' + (sub ? '<p>' + esc(sub) + '</p>' : '');
    return d;
  }

  function renderCover() {
    var c = issue.cover, box = h('div', 'cover');
    box.innerHTML =
      '<p class="kicker">Cover Story</p>' +
      '<h2>' + esc(c.title) + '</h2>' +
      '<p class="ja-title">' + esc(c.ja) + '</p>' +
      c.lead.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    return box;
  }

  function renderWorld() {
    var ul = h('ul', 'wtw');
    (issue.worldThisWeek || []).forEach(function (w) {
      var L = langOf(w.lang);
      var li = h('li');
      li.style.setProperty('--c', L.color);
      li.innerHTML = '<article><span class="tag">' + L.flag + ' ' + esc(L.label) + ' · ' + esc(w.tag) + '</span>' +
        '<p class="o">' + esc(plain(w.orig)) + '</p><p class="j">' + esc(w.ja) + '</p></article>';
      ul.appendChild(li);
    });
    return ul;
  }

  function renderLab() {
    var wrap = h('div');
    (issue.lab || []).forEach(function (grp) {
      var L = langOf(grp.lang);
      var d = h('details', 'dd');
      d.open = false;
      var entries = grp.items.map(function (it) {
        var s = '<div class="entry"><h5>' + esc(it.term);
        if (it.pinyin) s += '<span class="py">' + esc(it.pinyin) + '</span>';
        s += '</h5><p>' + esc(it.ja) + '</p>';
        (it.examples || []).forEach(function (e) {
          s += '<div class="ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em></div>';
        });
        return s + '</div>';
      }).join('');
      d.innerHTML = '<summary>' + L.flag + ' ' + esc(grp.title) +
        '<span class="n">' + grp.items.length + ' 項目</span></summary>' +
        '<div class="dd-body">' + entries + '</div>';
      wrap.appendChild(d);
    });
    return wrap;
  }

  function renderConversation() {
    var ul = h('ul', 'talk');
    (issue.conversation || []).forEach(function (t) {
      var L = langOf(t.lang);
      var li = h('li');
      li.style.setProperty('--c', L.color);
      li.innerHTML =
        '<p class="qq">' + L.flag + ' ' + esc(plain(t.q)) + '</p><p class="qj">' + esc(t.qj) + '</p>' +
        '<p class="aa">' + esc(plain(t.a)) + '</p><p class="aj">' + esc(t.aj) + '</p>' +
        (t.note ? '<p class="tn">' + esc(t.note) + '</p>' : '');
      ul.appendChild(li);
    });
    return ul;
  }

  function renderShadowing() {
    var wrap = h('div');
    (issue.shadowing || []).forEach(function (s) {
      var L = langOf(s.lang);
      var box = h('div', 'shad');
      box.style.setProperty('--c', L.color);
      box.innerHTML =
        '<p class="o">' + L.flag + ' ' + esc(plain(s.text)) + '</p>' +
        '<p class="j">' + esc(s.ja) + '</p>' +
        '<p class="tip">' + esc(s.tip) + '</p>';
      var b = h('button', 'mini', '🔊 読み上げ');
      b.type = 'button';
      b.addEventListener('click', function () {
        WGLSpeech.play([{ lang: s.lang, text: plain(s.text) }], { onState: drawPlayer, onEnd: drawPlayer });
      });
      box.appendChild(b);
      wrap.appendChild(box);
    });
    return wrap;
  }

  function renderReview() {
    var ol = h('ol', 'ol');
    (issue.review || []).forEach(function (q) {
      var li = h('li');
      var s = (q.lang ? langOf(q.lang).flag + ' ' : '') + esc(q.q);
      if (q.hint) s += '<span class="hint">ヒント: ' + esc(q.hint) + '</span>';
      s += '<details class="ans"><summary>正解と解説</summary><div class="body"><i>' +
           esc(plain(q.a)) + '</i>' + (q.aj ? '<em>' + esc(q.aj) + '</em>' : '') +
           '<div class="why-a">' + esc(q.why) + '</div></div></details>';
      li.innerHTML = s;
      ol.appendChild(li);
    });
    return ol;
  }

  /* ---------- page assembly ---------- */

  function visibleArticles() {
    return filter === 'all' ? articles : articles.filter(function (a) { return a.lang === filter; });
  }

  function render() {
    var stage = el('main');
    if (WGLSpeech.supported) WGLSpeech.stop();
    stage.innerHTML = '';
    POPDATA = {};

    if (filter === 'all') {
      stage.appendChild(sectionHead('Vol. ' + issue.meta.volume, issue.meta.title, issue.meta.dateRange));
      stage.appendChild(renderCover());
      stage.appendChild(sectionHead('The World This Week', '今週の世界', '4言語の見出しで今週を一望する'));
      stage.appendChild(renderWorld());
    }

    LANG_ORDER.forEach(function (code) {
      var list = visibleArticles().filter(function (a) { return a.lang === code; });
      if (!list.length) return;
      var L = langOf(code);
      var sec = issue.sectionTitles[code];
      stage.appendChild(sectionHead(L.flag + ' ' + L.label, sec.title, sec.sub, L.color));
      list.forEach(function (a) { stage.appendChild(renderArticle(a)); });
    });

    if (filter === 'all') {
      if (issue.feature) {
        stage.appendChild(sectionHead('Global Feature', issue.feature.title, issue.feature.sub));
        var f = h('div', 'guide');
        f.id = 'feature';
        f.innerHTML = issue.feature.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
        stage.appendChild(f);
        if (issue.feature.compare) {
          var cmp = h('ul', 'wtw');
          issue.feature.compare.forEach(function (c) {
            var L = langOf(c.lang);
            var li = h('li');
            li.style.setProperty('--c', L.color);
            li.innerHTML = '<article><span class="tag">' + L.flag + ' ' + esc(L.label) + '</span>' +
              '<p class="o">' + esc(plain(c.orig)) + '</p><p class="j">' + esc(c.ja) + '</p></article>';
            cmp.appendChild(li);
          });
          cmp.style.marginTop = '14px';
          stage.appendChild(cmp);
        }
      }
      var lab = sectionHead('Language Lab', '今号の言語ラボ', '今週の記事から、特に持ち帰る価値のある項目');
      lab.id = 'lab'; stage.appendChild(lab); stage.appendChild(renderLab());

      var conv = sectionHead('Real-World Conversation', '実際に話してみる', 'その場で使える質問と答え方');
      conv.id = 'conversation'; stage.appendChild(conv); stage.appendChild(renderConversation());

      var sh = sectionHead('Listening & Shadowing', '音読とシャドーイング', '声に出して練習する価値のある一文');
      sh.id = 'shadowing'; stage.appendChild(sh); stage.appendChild(renderShadowing());

      var rv = sectionHead('Weekly Review', '今週の復習', '答えだけでなく「なぜそうなるか」まで');
      rv.id = 'review'; stage.appendChild(rv); stage.appendChild(renderReview());
    }

    buildToc();
    stage.scrollIntoView({ block: 'start' });
  }

  function buildToc() {
    var toc = el('toc');
    toc.innerHTML = '<button class="toc-close" id="tocClose" type="button" aria-label="目次を閉じる">×</button>';
    if (filter === 'all') {
      toc.appendChild(h('h2', null, 'This Issue'));
      [['#main', '表紙 / 今週の世界']].forEach(function (p) {
        toc.appendChild(h('a', null, p[1])).href = p[0];
      });
    }
    LANG_ORDER.forEach(function (code) {
      var list = visibleArticles().filter(function (a) { return a.lang === code; });
      if (!list.length) return;
      var L = langOf(code);
      toc.appendChild(h('h2', null, L.flag + ' ' + L.label));
      list.forEach(function (a) {
        var link = h('a', null, esc(a.headline.orig) + '<small>' + esc(a.headline.ja) + '</small>');
        link.href = '#' + a.id;
        link.style.setProperty('--c', L.color);
        toc.appendChild(link);
      });
    });
    if (filter === 'all') {
      toc.appendChild(h('h2', null, 'Sections'));
      [['#feature', 'Global Feature'], ['#lab', 'Language Lab'],
       ['#conversation', 'Real-World Conversation'], ['#shadowing', 'Listening & Shadowing'],
       ['#review', 'Weekly Review']].forEach(function (p) {
        var link = h('a', null, p[1]);
        link.href = p[0];
        toc.appendChild(link);
      });
    }
    toc.querySelector('#tocClose').addEventListener('click', function () { toc.classList.remove('open'); });
    toc.addEventListener('click', function (e) {
      if (e.target.closest('a')) toc.classList.remove('open');
    });
  }

  /* ---------- 読み上げ ---------- */

  /* 画面上の文ブロックから再生用の並びを作る */
  function itemsFrom(nodes) {
    return Array.prototype.map.call(nodes, function (li) {
      return { el: li, lang: li.dataset.lang, text: li.dataset.speak || '' };
    }).filter(function (x) { return x.text.trim(); });
  }

  var HANDLERS = {
    onSentence: function (i, item) {
      document.querySelectorAll('.sent.speaking').forEach(function (n) { n.classList.remove('speaking'); });
      if (!item.el) return;
      item.el.classList.add('speaking');
      var r = item.el.getBoundingClientRect();
      if (r.top < 150 || r.bottom > global.innerHeight - 90) {
        item.el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    },
    onState: drawPlayer,
    onEnd: function () {
      document.querySelectorAll('.sent.speaking').forEach(function (n) { n.classList.remove('speaking'); });
      drawPlayer(WGLSpeech.state());
    }
  };

  /** 1文だけ読む（設定したリピート回数ぶん繰り返す） */
  function sayOne(li) {
    if (!WGLSpeech.supported) { noVoiceNotice(); return; }
    WGLSpeech.play(itemsFrom([li]), HANDLERS);
  }

  /** 記事を通して読む。from を渡すとその文から始める */
  function playArticle(a, from) {
    if (!WGLSpeech.supported) { noVoiceNotice(); return; }
    var art = document.getElementById(a.id);
    if (!art) return;
    var all = itemsFrom(art.querySelectorAll('.sent'));
    if (from) {
      var i = all.findIndex(function (x) { return x.el === from; });
      if (i > 0) all = all.slice(i);
    }
    WGLSpeech.play(all, HANDLERS);
  }

  /** いま画面に出ている記事すべてを通して読む */
  function playAll() {
    if (!WGLSpeech.supported) { noVoiceNotice(); return; }
    WGLSpeech.play(itemsFrom(document.querySelectorAll('.stage .sent')), HANDLERS);
  }

  function noVoiceNotice() {
    alert('このブラウザは音声合成に対応していないため、読み上げを再生できません。');
  }

  /* ---------- プレーヤー ---------- */

  function drawPlayer(st) {
    st = st || WGLSpeech.state();
    var bar = el('player');
    if (!st.running) { bar.hidden = true; bar.innerHTML = ''; return; }

    var L = langOf(st.lang || 'en');
    var pos = (st.index + 1) + ' / ' + st.total;
    var rep = st.repeat > 1 ? '<span class="p-rep">' + (st.round + 1) + '/' + st.repeat + '回目</span>' : '';

    bar.hidden = false;
    bar.style.setProperty('--c', L.color);
    bar.innerHTML =
      '<button class="p-btn" data-act="prev" type="button" title="前の文" aria-label="前の文">⏮</button>' +
      '<button class="p-btn p-main" data-act="toggle" type="button" title="' +
        (st.paused ? '再開' : '一時停止') + '" aria-label="' + (st.paused ? '再開' : '一時停止') + '">' +
        (st.paused ? '▶' : '⏸') + '</button>' +
      '<button class="p-btn" data-act="next" type="button" title="次の文" aria-label="次の文">⏭</button>' +
      '<span class="p-pos"><b>' + esc(L.flag + ' ' + L.label) + '</b> ' + pos + rep + '</span>' +
      '<label class="p-rate">速度' +
        '<select data-act="rate" aria-label="読み上げ速度">' +
          [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.25].map(function (r) {
            return '<option value="' + r + '"' +
              (Math.abs(r - WGLSpeech.prefs.rate) < 0.001 ? ' selected' : '') + '>' + r + '×</option>';
          }).join('') +
        '</select></label>' +
      '<button class="p-btn p-stop" data-act="stop" type="button" title="停止" aria-label="停止">■</button>';
  }

  function bindPlayer() {
    el('player').addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]');
      if (!b || b.tagName === 'SELECT') return;
      var act = b.dataset.act;
      if (act === 'toggle') WGLSpeech.toggle();
      else if (act === 'stop') WGLSpeech.stop();
      else if (act === 'prev') WGLSpeech.jump(-1);
      else if (act === 'next') WGLSpeech.jump(1);
    });
    el('player').addEventListener('change', function (e) {
      if (e.target.dataset.act === 'rate') WGLSpeech.set('rate', e.target.value);
    });
  }

  /* ---------- 音声設定パネル ---------- */

  function drawAudioPanel() {
    var panel = el('audioPanel');
    var rows = LANG_ORDER.map(function (code) {
      var L = langOf(code);
      var list = WGLSpeech.voicesFor(code);
      var cur = WGLSpeech.pickVoice(code);
      if (!list.length) {
        return '<div class="a-row"><span class="a-lang">' + L.flag + ' ' + esc(L.ja) + '</span>' +
               '<span class="a-none">この端末に音声が入っていません</span></div>';
      }
      return '<div class="a-row"><span class="a-lang">' + L.flag + ' ' + esc(L.ja) + '</span>' +
        '<select data-voice="' + code + '" aria-label="' + esc(L.ja) + 'の音声">' +
          list.map(function (v) {
            return '<option value="' + esc(v.voiceURI) + '"' +
              (cur && v.voiceURI === cur.voiceURI ? ' selected' : '') + '>' +
              esc(v.name) + '（' + esc(v.lang) + '）</option>';
          }).join('') +
        '</select></div>';
    }).join('');

    panel.innerHTML =
      '<button class="x" type="button" aria-label="閉じる">×</button>' +
      '<h6>読み上げの設定</h6>' +
      '<div class="a-row"><span class="a-lang">速度</span>' +
        '<select data-set="rate" aria-label="読み上げ速度">' +
          [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.25].map(function (r) {
            return '<option value="' + r + '"' +
              (Math.abs(r - WGLSpeech.prefs.rate) < 0.001 ? ' selected' : '') + '>' + r + '×</option>';
          }).join('') +
        '</select></div>' +
      '<div class="a-row"><span class="a-lang">リピート</span>' +
        '<select data-set="repeat" aria-label="1文を読む回数">' +
          [1, 2, 3, 4, 5].map(function (n) {
            return '<option value="' + n + '"' + (n === WGLSpeech.prefs.repeat ? ' selected' : '') + '>' +
              (n === 1 ? '1回（繰り返さない）' : n + '回') + '</option>';
          }).join('') +
        '</select></div>' +
      '<div class="a-row"><span class="a-lang">文の間</span>' +
        '<select data-set="gap" aria-label="文と文のあいだの間">' +
          [[0, 'なし'], [400, '0.4秒'], [700, '0.7秒'], [1200, '1.2秒'], [2000, '2秒'], [3000, '3秒（音読用）']]
            .map(function (g) {
              return '<option value="' + g[0] + '"' +
                (g[0] === WGLSpeech.prefs.gap ? ' selected' : '') + '>' + g[1] + '</option>';
            }).join('') +
        '</select></div>' +
      '<p class="a-note">リピートと「文の間」を上げると、シャドーイングの練習に使えます。</p>' +
      '<h6 class="a-sub">言語ごとの声</h6>' + rows +
      '<p class="a-note">声は端末にインストールされているものだけが選べます。' +
      '見つからない言語は、OSの音声設定から追加できます。</p>';
  }

  function bindAudioPanel() {
    var panel = el('audioPanel');
    var btn = el('btnAudio');

    function open() {
      drawAudioPanel();
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      var r = btn.getBoundingClientRect();
      panel.style.top = (r.bottom + global.scrollY + 8) + 'px';
      panel.style.left = Math.max(8, Math.min(r.left + global.scrollX - 120,
        global.innerWidth - panel.offsetWidth - 14)) + 'px';
    }
    function close() {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      panel.hidden ? open() : close();
    });
    panel.addEventListener('click', function (e) {
      e.stopPropagation();
      if (e.target.classList.contains('x')) close();
    });
    panel.addEventListener('change', function (e) {
      var t = e.target;
      if (t.dataset.set) WGLSpeech.set(t.dataset.set, t.value);
      else if (t.dataset.voice) WGLSpeech.setVoice(t.dataset.voice, t.value);
    });
    document.addEventListener('click', function () { if (!panel.hidden) close(); });

    /* 音声リストは遅れて届くことがあるので、届いたら描き直す */
    WGLSpeech.onVoicesReady(function () { if (!panel.hidden) drawAudioPanel(); });
  }

  /* ---------- vocabulary popover ---------- */

  function openPop(target) {
    var key = target.dataset.k, v = POPDATA[key];
    var pop = el('pop');
    if (!v) return;
    var s = '<button class="x" type="button" aria-label="閉じる">×</button>' +
      '<h6>' + esc(v.term) + (v.pinyin ? '<span class="py">' + esc(v.pinyin) + '</span>' : '') + '</h6>';
    if (v.pos) s += '<div class="pos">' + esc(v.pos) + '</div>';
    s += '<p class="m">' + esc(v.ja) + '</p>';
    if (v.note) s += '<p class="n">' + esc(v.note) + '</p>';
    if (v.collocations && v.collocations.length) {
      s += '<p class="col">よく一緒に使う語: ' + esc(v.collocations.join(' / ')) + '</p>';
    }
    (v.examples || []).forEach(function (e) {
      s += '<div class="ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em></div>';
    });
    pop.innerHTML = s;
    pop.hidden = false;

    var r = target.getBoundingClientRect();
    var top = r.bottom + global.scrollY + 7;
    var left = Math.min(r.left + global.scrollX, global.innerWidth - pop.offsetWidth - 14);
    pop.style.top = top + 'px';
    pop.style.left = Math.max(8, left) + 'px';

    document.querySelectorAll('w.on').forEach(function (n) { n.classList.remove('on'); });
    target.classList.add('on');
    pop.querySelector('.x').addEventListener('click', closePop);
  }

  function closePop() {
    el('pop').hidden = true;
    document.querySelectorAll('w.on').forEach(function (n) { n.classList.remove('on'); });
  }

  /* ---------- toggles ---------- */

  function bindToggle(id, cls, invert) {
    var box = el(id);
    var saved = localStorage.getItem('wgl:' + id);
    if (saved !== null) box.checked = saved === '1';
    function apply() {
      document.body.classList.toggle(cls, invert ? !box.checked : box.checked);
      localStorage.setItem('wgl:' + id, box.checked ? '1' : '0');
    }
    box.addEventListener('change', apply);
    apply();
  }

  function boot() {
    if (!issue) return;

    el('issueLine').textContent =
      'Vol. ' + issue.meta.volume + ' ／ ' + issue.meta.dateRange + ' ／ 英語・中文・Español・Français';

    /* language bar */
    var bar = el('langbar');
    var tabs = [{ code: 'all', label: 'ALL', ja: '全部' }].concat(LANG_ORDER.map(function (c) {
      return { code: c, label: langOf(c).flag + ' ' + langOf(c).label, ja: langOf(c).ja };
    }));
    tabs.forEach(function (t) {
      var b = h('button', null, esc(t.label) + (t.code === 'all' ? '' : ''));
      b.type = 'button';
      b.dataset.code = t.code;
      b.title = t.ja;
      if (t.code !== 'all') b.style.setProperty('--c', langOf(t.code).color);
      b.setAttribute('aria-pressed', String(t.code === filter));
      b.addEventListener('click', function () {
        filter = t.code;
        Array.prototype.forEach.call(bar.children, function (x) {
          x.setAttribute('aria-pressed', String(x.dataset.code === filter));
        });
        render();
      });
      bar.appendChild(b);
    });

    bindToggle('tJa', 'no-ja', true);
    bindToggle('tVocab', 'no-voc', true);
    bindToggle('tGram', 'no-gram', true);
    bindToggle('tPinyin', 'no-pin', true);
    bindToggle('tLit', 'no-lit', true);

    var quiz = el('btnQuiz');
    quiz.addEventListener('click', function () {
      var on = document.body.classList.toggle('quiz');
      quiz.setAttribute('aria-pressed', String(on));
      quiz.textContent = on ? '👀 訳を表示する' : '🙈 訳を隠して読む';
      if (!on) document.querySelectorAll('.j-line.reveal').forEach(function (n) { n.classList.remove('reveal'); });
    });

    var theme = el('btnTheme');
    var savedTheme = localStorage.getItem('wgl:theme');
    if (savedTheme) document.documentElement.dataset.theme = savedTheme;
    theme.addEventListener('click', function () {
      var cur = document.documentElement.dataset.theme;
      var next = cur === 'dark' ? 'light' : cur === 'light' ? '' : 'dark';
      if (next) document.documentElement.dataset.theme = next;
      else delete document.documentElement.dataset.theme;
      localStorage.setItem('wgl:theme', next);
    });

    /* delegated interactions */
    document.addEventListener('click', function (e) {
      var w = e.target.closest('w');
      if (w && !document.body.classList.contains('no-voc')) { openPop(w); return; }
      if (document.body.classList.contains('quiz')) {
        var j = e.target.closest('.j-line');
        if (j) { j.classList.toggle('reveal'); return; }
      }
      if (!e.target.closest('#pop')) closePop();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePop();
      if ((e.key === 'Enter' || e.key === ' ') && e.target.tagName === 'W') {
        e.preventDefault(); openPop(e.target);
      }
    });

    el('tocFab').addEventListener('click', function () { el('toc').classList.toggle('open'); });

    /* 読み上げ */
    if (WGLSpeech.supported) {
      bindPlayer();
      bindAudioPanel();
      el('btnListen').addEventListener('click', function () {
        var st = WGLSpeech.state();
        st.running ? WGLSpeech.stop() : playAll();
      });
      document.addEventListener('keydown', function (e) {
        var typing = /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName);
        if (typing) return;
        if (e.key === 'Escape') WGLSpeech.stop();
        if (e.key === 'k' && WGLSpeech.state().running) { e.preventDefault(); WGLSpeech.toggle(); }
      });
    } else {
      el('btnListen').hidden = true;
      el('btnAudio').hidden = true;
    }

    render();
  }

  global.WGL = {
    registerIssue: registerIssue,
    registerArticles: registerArticles,
    boot: boot,
    _articles: articles
  };
})(window);
