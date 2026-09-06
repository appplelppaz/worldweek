/* ============================================================
   WEEKLY GLOBAL LANGUAGES
   3つのタブ（単語 / 文法 / 記事）と、言語の切り替えだけの
   単純な作り。起動時は「単語」を開く。
   ============================================================ */
(function (global) {
  'use strict';

  var LANGS = {
    en: { label: 'English',  short: 'EN', ja: '英語',       flag: '🇬🇧' },
    zh: { label: '中文',      short: '中', ja: '中国語',     flag: '🇨🇳' },
    es: { label: 'Español',  short: 'ES', ja: 'スペイン語', flag: '🇪🇸' },
    fr: { label: 'Français', short: 'FR', ja: 'フランス語', flag: '🇫🇷' }
  };
  var LANG_ORDER = ['en', 'zh', 'es', 'fr'];
  var TABS = [
    { id: 'words',   icon: '◉', label: '単語' },
    { id: 'list',    icon: '≡', label: '一覧' },
    { id: 'grammar', icon: '⌗', label: '文法' },
    { id: 'read',    icon: '▤', label: '記事' }
  ];

  var issue = null;
  var words = {};
  var articles = [];

  var lang = 'en';
  var tab = 'words';
  var POPDATA = {};

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function el(id) { return document.getElementById(id); }
  function h(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function langOf(c) { return LANGS[c] || LANGS.en; }
  function plain(t) { return String(t).replace(/\{\{([^{}|]+)(?:\|[^{}|]+)?\}\}/g, '$1'); }

  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem('wgl:' + k);
      localStorage.setItem('wgl:' + k, v);
    } catch (e) { return null; }
  }

  /* {{surface|key}} をクリックできる語に変える（記事タブで使う） */
  function markup(text, index, code) {
    var out = '', last = 0, re = /\{\{([^{}|]+)(?:\|([^{}|]+))?\}\}/g, m;
    while ((m = re.exec(text)) !== null) {
      out += esc(text.slice(last, m.index));
      var surface = m[1], key = (m[2] || m[1]).trim();
      var entry = index[key.toLowerCase()];
      var inner = (entry && entry.pinyin && code === 'zh') ? ruby(surface, entry.pinyin) : esc(surface);
      out += '<w data-k="' + esc(key.toLowerCase()) + '" tabindex="0" role="button">' + inner + '</w>';
      last = m.index + m[0].length;
    }
    return out + esc(text.slice(last));
  }

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

  /* ---------- registration ---------- */

  function registerIssue(d) { issue = d; }
  function registerWords(w) { words = w || {}; }
  function registerArticles(list) { list.forEach(function (a) { articles.push(a); }); }

  /* ============================================================
     単語 — 画面をタップするだけで進む
       1回目のタップ … 意味を出す
       2回目のタップ … 次の語へ（出た瞬間に自動で発音）
     ============================================================ */

  var deck = { i: 0, open: false, seen: 0, started: false, end: false };

  function starKey(code, i) { return 'star:' + code + ':' + i; }
  function isStar(code, i) { return store(starKey(code, i)) === '1'; }
  function starCount(code) {
    return (words[code] || []).filter(function (_, i) { return isStar(code, i); }).length;
  }
  function autoOn() { return store('autoplay') !== '0'; }

  function say(w) {
    if (!WGLSpeech.supported) return;
    WGLSpeech.play([{ lang: lang, text: w.say || w.term }], { onState: drawPlayer, onEnd: drawPlayer });
  }

  function renderWords() {
    var list = words[lang] || [];
    if (deck.i >= list.length) deck.i = 0;
    document.body.classList.remove('reading');

    var root = h('div', 'play');

    /* 上：細い進捗だけ */
    var top = h('div', 'p-top');
    top.innerHTML = '<span class="p-line"><i style="width:' +
      Math.round((deck.end ? list.length : deck.i) / list.length * 100) + '%"></i></span>' +
      '<span class="p-count"><b>' + (deck.end ? list.length : deck.i + 1) + '</b> / ' + list.length + '</span>';
    root.appendChild(top);

    root.appendChild(deck.end ? endScreen(list) : tapArea(list[deck.i], list));
    root.appendChild(bottomBar(list));
    return root;
  }

  function tapArea(w, list) {
    var area = h('div', 'p-tap fade-in');
    area.setAttribute('role', 'button');
    area.tabIndex = 0;
    area.setAttribute('aria-label', deck.open ? 'タップで次の語へ' : 'タップで意味を見る');

    var term = w.pinyin ? ruby(w.term, w.pinyin) : esc(w.term);
    var head =
      '<span class="p-kind">' + esc(w.kind) + '</span>' +
      '<h2 class="p-term">' + term + '</h2>' +
      (w.pos ? '<span class="p-pos">' + esc(w.pos) + '</span>' : '');

    if (!deck.started) {
      area.innerHTML = head + '<span class="p-cue blink">タップして始める</span>';
    } else if (!deck.open) {
      area.innerHTML = head + '<span class="p-cue blink">タップで意味</span>';
    } else {
      area.innerHTML = head +
        '<div class="p-ans">' +
          '<p class="p-ja">' + esc(w.ja) + '</p>' +
          (w.note ? '<p class="p-note">' + esc(w.note) + '</p>' : '') +
          (w.examples || []).map(function (e) {
            return '<div class="p-ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em>' +
              '<button type="button" data-say="' + esc(plain(e.o)) + '" aria-label="例文を聞く">🔊</button></div>';
          }).join('') +
        '</div>' +
        '<span class="p-cue">タップで次へ →</span>';
    }

    area.addEventListener('click', function (e) {
      if (e.target.closest('button')) return;
      step(list);
    });
    area.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); step(list); }
    });
    Array.prototype.forEach.call(area.querySelectorAll('[data-say]'), function (b) {
      b.addEventListener('click', function (ev) {
        ev.stopPropagation();
        WGLSpeech.play([{ lang: lang, text: b.dataset.say }], { onState: drawPlayer, onEnd: drawPlayer });
      });
    });
    return area;
  }

  /** タップ1回ぶんの前進 */
  function step(list) {
    if (!deck.started) {
      deck.started = true;
      WGLSpeech.unlock();
      render();
      if (autoOn()) say(list[deck.i]);
      return;
    }
    if (!deck.open) { deck.open = true; render(); return; }

    /* 次の語へ */
    var area = document.querySelector('.p-tap');
    if (area) area.classList.add('leaving');
    deck.seen++;
    setTimeout(function () {
      deck.open = false;
      if (deck.i + 1 >= list.length) { deck.end = true; render(); return; }
      deck.i++;
      render();
      if (autoOn()) say(list[deck.i]);
    }, 150);
  }

  function bottomBar(list) {
    var bar = h('div', 'p-bot');

    var langs = h('div', 'p-langs');
    LANG_ORDER.forEach(function (code) {
      var b = h('button', null, esc(langOf(code).short));
      b.type = 'button';
      b.dataset.code = code;
      b.setAttribute('aria-pressed', String(code === lang));
      b.setAttribute('aria-label', langOf(code).ja);
      b.addEventListener('click', function () { switchLang(code); });
      langs.appendChild(b);
    });
    bar.appendChild(langs);

    var acts = h('div', 'p-acts');

    if (!deck.end) {
      var star = h('button', 'star', isStar(lang, deck.i) ? '★' : '☆');
      star.type = 'button';
      star.setAttribute('aria-pressed', String(isStar(lang, deck.i)));
      star.setAttribute('aria-label', 'あとで復習する印');
      star.addEventListener('click', function () {
        var on = !isStar(lang, deck.i);
        store(starKey(lang, deck.i), on ? '1' : '0');
        star.textContent = on ? '★' : '☆';
        star.setAttribute('aria-pressed', String(on));
      });
      acts.appendChild(star);

      var sound = h('button', null, '🔊');
      sound.type = 'button';
      sound.setAttribute('aria-label', 'もう一度聞く');
      sound.addEventListener('click', function () { say(list[deck.i]); });
      acts.appendChild(sound);
    }

    var gear = h('button', null, '⚙');
    gear.type = 'button'; gear.id = 'btnAudio';
    gear.setAttribute('aria-expanded', 'false');
    gear.setAttribute('aria-label', '音声の設定');
    acts.appendChild(gear);

    bar.appendChild(acts);
    return bar;
  }

  function switchLang(code) {
    lang = code;
    deck.i = 0; deck.open = false; deck.end = false; deck.seen = 0;
    render();
    if (deck.started && autoOn()) say((words[lang] || [])[0]);
  }

  function endScreen(list) {
    var box = h('div', 'p-end');
    var stars = starCount(lang);
    box.innerHTML =
      '<h2>' + list.length + '語おわり</h2>' +
      '<p>' + esc(langOf(lang).ja) + '｜' + (stars ? '★をつけた語が ' + stars + ' 個あります' : 'おつかれさまでした') + '</p>';

    var btns = h('div', 'btns');
    var again = h('button', 'main', 'もう一周');
    again.type = 'button';
    again.addEventListener('click', function () {
      deck.i = 0; deck.open = false; deck.end = false; render();
      if (autoOn()) say(list[0]);
    });
    btns.appendChild(again);

    if (stars) {
      var only = h('button', null, '★だけ もう一周（' + stars + '）');
      only.type = 'button';
      only.addEventListener('click', function () {
        var first = list.findIndex(function (_, k) { return isStar(lang, k); });
        deck.i = first < 0 ? 0 : first;
        deck.open = false; deck.end = false; deck.starOnly = true;
        render();
        if (autoOn()) say(list[deck.i]);
      });
      btns.appendChild(only);
    }

    var nextLang = LANG_ORDER[(LANG_ORDER.indexOf(lang) + 1) % LANG_ORDER.length];
    var go = h('button', null, langOf(nextLang).ja + 'へ');
    go.type = 'button';
    go.addEventListener('click', function () { switchLang(nextLang); });
    btns.appendChild(go);

    box.appendChild(btns);
    return box;
  }

  /* ---------- 一覧 ---------- */

  function renderList() {
    var list = words[lang] || [];
    document.body.classList.add('reading');
    var wrap = h('div');

    var head = h('div', 'rhead');
    head.innerHTML = '<div><h2>' + esc(langOf(lang).ja) + 'の' + list.length + '語</h2>' +
      '<p>★ ' + starCount(lang) + ' 個</p></div>';
    var back = h('button', null, '← カード');
    back.type = 'button';
    back.style.cssText = 'font-size:13px;color:var(--accent)';
    back.addEventListener('click', function () { tab = 'words'; render(); });
    head.appendChild(back);
    wrap.appendChild(head);
    wrap.appendChild(langRow());

    var ul = h('ul', 'wlist');
    list.forEach(function (w, i) {
      var li = h('li', isStar(lang, i) ? 'star' : '');
      li.innerHTML =
        '<div class="w-t"><span class="w-term">' + (w.pinyin ? ruby(w.term, w.pinyin) : esc(w.term)) + '</span>' +
        '<span class="w-ja">' + esc(w.ja) + '</span></div>' +
        '<button class="w-s" type="button" aria-label="発音を聞く">🔊</button>';
      li.querySelector('.w-s').addEventListener('click', function (e) {
        e.stopPropagation();
        WGLSpeech.play([{ lang: lang, text: w.say || w.term }], { onState: drawPlayer, onEnd: drawPlayer });
      });
      li.addEventListener('click', function () {
        deck.i = i; deck.open = false; deck.end = false;
        tab = 'words'; render();
        if (deck.started && autoOn()) say(w);
      });
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    return wrap;
  }

  function langRow() {
    var row = h('div', 'rlangs');
    LANG_ORDER.forEach(function (code) {
      var b = h('button', null, esc(langOf(code).short));
      b.type = 'button';
      b.setAttribute('aria-pressed', String(code === lang));
      b.addEventListener('click', function () { lang = code; render(); });
      row.appendChild(b);
    });
    return row;
  }

  /* ============================================================
     文法タブ — 記事のなかの文法解説をそのまま集める
     ============================================================ */

  function grammarGroups(code) {
    var out = [];
    articles.filter(function (a) { return a.lang === code; }).forEach(function (a) {
      var items = [];
      (a.body || []).forEach(function (s) {
        (s.grammar || []).forEach(function (g) { items.push(g); });
      });
      if (items.length) out.push({ title: a.headline.ja, sub: a.headline.orig, items: items, kind: 'g' });
      (a.deepdive || []).forEach(function (d) {
        if (/grammar|文法|prononciation|発音|量詞|離合詞|expressions/i.test(d.title)) {
          out.push({ title: d.title, sub: a.headline.ja, items: d.items, kind: 'd' });
        }
      });
    });
    (issue.lab || []).filter(function (g) { return g.lang === code; }).forEach(function (g) {
      out.push({ title: g.title, sub: 'Language Lab', items: g.items, kind: 'd' });
    });
    return out;
  }

  function renderGrammar() {
    document.body.classList.add('reading');
    var wrap = h('div');
    var L = langOf(lang);
    var groups = grammarGroups(lang);
    var total = groups.reduce(function (n, g) { return n + g.items.length; }, 0);

    wrap.appendChild(h('div', 'rhead',
      '<div><h2>文法</h2><p>' + esc(L.ja) + '｜' + total + ' 項目</p></div>'));
    wrap.appendChild(langRow());

    groups.forEach(function (g, gi) {
      var d = h('details', 'gsec');
      d.open = gi === 0;
      var body = g.items.map(function (it) {
        if (g.kind === 'g') {
          var s = '<div class="gitem"><h4>' + esc(it.point) + '</h4><p>' + esc(it.ja) + '</p>';
          if (it.compare) s += '<p class="g-cmp"><b>比べると</b>' + esc(it.compare) + '</p>';
          (it.examples || []).forEach(function (e) {
            s += '<div class="c-ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em>' +
                 '<button class="c-say-ex" type="button" data-say="' + esc(plain(e.o)) + '" aria-label="例文を聞く">🔊</button></div>';
          });
          return s + '</div>';
        }
        var t = '<div class="gitem"><h4>' + esc(it.term);
        if (it.pinyin) t += '<span class="g-py">' + esc(it.pinyin) + '</span>';
        t += '</h4>';
        if (it.ja) t += '<p>' + esc(it.ja) + '</p>';
        if (it.note) t += '<p class="g-note">' + esc(it.note) + '</p>';
        (it.examples || []).forEach(function (e) {
          t += '<div class="c-ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em>' +
               '<button class="c-say-ex" type="button" data-say="' + esc(plain(e.o)) + '" aria-label="例文を聞く">🔊</button></div>';
        });
        return t + '</div>';
      }).join('');
      d.innerHTML = '<summary><span class="gs-t">' + esc(g.title) + '</span>' +
        '<span class="gs-n">' + g.items.length + '</span></summary>' +
        '<div class="gsec-b">' + (g.sub ? '<p class="gs-sub">' + esc(g.sub) + '</p>' : '') + body + '</div>';
      wrap.appendChild(d);
    });

    bindSayButtons(wrap);
    return wrap;
  }

  function bindSayButtons(root) {
    Array.prototype.forEach.call(root.querySelectorAll('.c-say-ex'), function (b) {
      b.addEventListener('click', function () {
        WGLSpeech.play([{ lang: lang, text: b.dataset.say }], SPEECH_HOOKS);
      });
    });
  }

  /* ============================================================
     記事タブ
     ============================================================ */

  function renderRead() {
    document.body.classList.add('reading');
    var wrap = h('div');
    var L = langOf(lang);
    var list = articles.filter(function (a) { return a.lang === lang; });

    wrap.appendChild(h('div', 'rhead',
      '<div><h2>記事</h2><p>' + esc(L.ja) + '｜' + list.length + ' 本</p></div>'));
    wrap.appendChild(langRow());

    var tools = h('div', 'rtools');
    ['tJa|日本語訳|no-ja', 'tVocab|語彙|no-voc', 'tGram|文法|no-gram', 'tPinyin|ピンイン|no-pin']
      .forEach(function (spec) {
        var p = spec.split('|');
        var b = h('button', null, p[1]);
        b.type = 'button';
        var off = store('r:' + p[0]) === '0';
        function apply() {
          document.body.classList.toggle(p[2], off);
          b.setAttribute('aria-pressed', String(!off));
          store('r:' + p[0], off ? '0' : '1');
        }
        b.addEventListener('click', function () { off = !off; apply(); });
        apply();
        tools.appendChild(b);
      });
    wrap.appendChild(tools);

    list.forEach(function (a) { wrap.appendChild(renderArticle(a)); });
    return wrap;
  }

  function renderArticle(a) {
    var L = langOf(a.lang);
    var art = h('article', 'article');
    art.id = a.id;
    art.style.setProperty('--c', L.color);
    art.dataset.lang = a.lang;

    var head = h('div', 'art-head');
    head.innerHTML =
      '<div class="art-meta"><span class="chip lang">' + esc(a.category) + '</span>' +
      '<span class="chip">' + esc(a.level) + '</span></div>' +
      '<h3>' + esc(a.headline.orig) + '</h3>' +
      '<p class="ja-title">' + esc(a.headline.ja) + '</p>';
    art.appendChild(head);

    if (WGLSpeech.supported) {
      var listen = h('button', 'chip', '▶ 読み上げ');
      listen.type = 'button';
      listen.addEventListener('click', function () {
        WGLSpeech.play(itemsFrom(art.querySelectorAll('.sent')), SPEECH_HOOKS);
      });
      head.appendChild(listen);
    }

    if (a.why) art.appendChild(h('div', 'why', '<b>なぜ今この話題か</b>' + esc(a.why)));

    var ul = h('ul', 'sents');
    (a.body || []).forEach(function (s) { ul.appendChild(renderSentence(s, a)); });
    art.appendChild(ul);

    if (a.guide && a.guide.length) {
      var g = h('details', 'gsec');
      g.innerHTML = '<summary><span class="gs-t">日本語で読む — 背景の解説</span></summary>' +
        '<div class="gsec-b">' + a.guide.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>';
      art.appendChild(g);
    }

    if (a.sources && a.sources.length) {
      var sr = h('details', 'gsec');
      sr.innerHTML = '<summary><span class="gs-t">出典</span><span class="gs-n">' + a.sources.length + '</span></summary>' +
        '<div class="gsec-b"><ul class="src">' + a.sources.map(function (s) {
          return '<li><span class="out">' + esc(s.outlet) + '</span>｜' + esc(s.title) +
            '<br><span class="dt">公開 ' + esc(s.date) + '／参照 ' + esc(s.accessed) + '</span>' +
            '<br><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.url) + '</a></li>';
        }).join('') + '</ul></div>';
      art.appendChild(sr);
    }
    return art;
  }

  function renderSentence(s, a) {
    var li = h('li', 'sent');
    li.dataset.lang = a.lang;
    li.dataset.speak = plain(s.text);

    var idx = {};
    (s.vocab || []).forEach(function (v) { idx[String(v.term).toLowerCase()] = v; POPDATA[String(v.term).toLowerCase()] = v; });

    var o = h('p', 'o-line');
    o.innerHTML = markup(s.text, idx, a.lang);
    var say = h('button', 'speak', '🔊');
    say.type = 'button';
    say.setAttribute('aria-label', 'この文を読み上げる');
    say.addEventListener('click', function () { WGLSpeech.play(itemsFrom([li]), SPEECH_HOOKS); });
    o.appendChild(say);
    li.appendChild(o);

    if (s.ja) li.appendChild(h('p', 'j-line', esc(s.ja)));

    var notes = '';
    if ((s.vocab || []).length) {
      notes += '<div class="note note-v"><b>語彙</b><ul>' + s.vocab.map(function (v) {
        return '<li><span class="t">' + esc(v.term) + '</span>' +
          (v.pinyin ? '<span class="py">' + esc(v.pinyin) + '</span>' : '') +
          '— ' + esc(v.ja) + '</li>';
      }).join('') + '</ul></div>';
    }
    if ((s.grammar || []).length) {
      notes += '<div class="note note-g"><b>文法</b><ul>' + s.grammar.map(function (g) {
        return '<li><span class="t">' + esc(g.point) + '</span><br>' + esc(g.ja) + '</li>';
      }).join('') + '</ul></div>';
    }
    if (notes) li.appendChild(h('div', 'notes', notes));
    return li;
  }

  function itemsFrom(nodes) {
    return Array.prototype.map.call(nodes, function (li) {
      return { el: li, lang: li.dataset.lang, text: li.dataset.speak || '' };
    }).filter(function (x) { return x.text.trim(); });
  }

  /* ============================================================
     読み上げのつなぎ
     ============================================================ */

  var SPEECH_HOOKS = {
    onSentence: function (i, item) {
      Array.prototype.forEach.call(document.querySelectorAll('.speaking'), function (n) {
        n.classList.remove('speaking');
      });
      if (!item.el) return;
      item.el.classList.add('speaking');
      var r = item.el.getBoundingClientRect();
      if (r.top < 110 || r.bottom > global.innerHeight - 150) {
        item.el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    },
    onState: drawPlayer,
    onEnd: function () {
      Array.prototype.forEach.call(document.querySelectorAll('.speaking'), function (n) {
        n.classList.remove('speaking');
      });
      drawPlayer(WGLSpeech.state());
    }
  };

  function drawPlayer(st) {
    st = st || WGLSpeech.state();
    var bar = el('player');
    document.body.classList.toggle('playing', !!st.running);
    if (!st.running) { bar.hidden = true; bar.innerHTML = ''; return; }
    var L = langOf(st.lang || lang);
    bar.hidden = false;
    bar.style.setProperty('--c', L.color);
    bar.innerHTML =
      '<button class="p-btn" data-act="prev" type="button" aria-label="前へ">⏮</button>' +
      '<button class="p-btn p-main" data-act="toggle" type="button" aria-label="' +
        (st.paused ? '再開' : '一時停止') + '">' + (st.paused ? '▶' : '⏸') + '</button>' +
      '<button class="p-btn" data-act="next" type="button" aria-label="次へ">⏭</button>' +
      '<span class="p-pos"><b>' + esc(L.flag + ' ' + L.label) + '</b>' + (st.index + 1) + ' / ' + st.total +
        (st.repeat > 1 ? '<span class="p-rep">' + (st.round + 1) + '/' + st.repeat + '</span>' : '') + '</span>' +
      '<button class="p-btn p-stop" data-act="stop" type="button" aria-label="停止">■</button>';
  }

  function bindPlayer() {
    el('player').addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]');
      if (!b) return;
      var a = b.dataset.act;
      if (a === 'toggle') WGLSpeech.toggle();
      else if (a === 'stop') WGLSpeech.stop();
      else if (a === 'prev') WGLSpeech.jump(-1);
      else if (a === 'next') WGLSpeech.jump(1);
    });
  }

  /* 音声設定パネル */
  function drawAudioPanel() {
    var panel = el('audioPanel');
    var rows = LANG_ORDER.map(function (code) {
      var L = langOf(code), list = WGLSpeech.voicesFor(code), cur = WGLSpeech.pickVoice(code);
      if (!list.length) {
        return '<div class="a-row"><span class="a-lang">' + L.flag + ' ' + esc(L.ja) + '</span>' +
               '<span class="a-none">音声が入っていません</span></div>';
      }
      return '<div class="a-row"><span class="a-lang">' + L.flag + ' ' + esc(L.ja) + '</span>' +
        '<select data-voice="' + code + '" aria-label="' + esc(L.ja) + 'の音声">' +
        list.map(function (v) {
          return '<option value="' + esc(v.voiceURI) + '"' +
            (cur && v.voiceURI === cur.voiceURI ? ' selected' : '') + '>' + esc(v.name) + '</option>';
        }).join('') + '</select></div>';
    }).join('');

    function sel(key, opts, cur, label) {
      return '<div class="a-row"><span class="a-lang">' + label + '</span><select data-set="' + key + '">' +
        opts.map(function (o) {
          return '<option value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' selected' : '') + '>' + o[1] + '</option>';
        }).join('') + '</select></div>';
    }

    panel.innerHTML =
      '<button class="x" type="button" aria-label="閉じる">×</button><h6>読み上げの設定</h6>' +
      '<div class="a-row"><span class="a-lang">語が出たら自動で発音</span>' +
        '<select data-auto><option value="1"' + (autoOn() ? ' selected' : '') + '>する</option>' +
        '<option value="0"' + (autoOn() ? '' : ' selected') + '>しない</option></select></div>' +
      sel('rate', [[0.5,'0.5×'],[0.6,'0.6×'],[0.7,'0.7×'],[0.8,'0.8×'],[0.9,'0.9×'],[1,'1×'],[1.1,'1.1×']],
          WGLSpeech.prefs.rate, '速度') +
      sel('repeat', [[1,'1回'],[2,'2回'],[3,'3回'],[4,'4回'],[5,'5回']], WGLSpeech.prefs.repeat, 'リピート') +
      sel('gap', [[0,'なし'],[400,'0.4秒'],[700,'0.7秒'],[1200,'1.2秒'],[2000,'2秒'],[3000,'3秒']],
          WGLSpeech.prefs.gap, '間') +
      '<p class="a-note">リピートと「間」を上げると、シャドーイングの練習になります。</p>' +
      '<h6 class="a-sub">言語ごとの声</h6>' + rows +
      '<p class="a-note">声は端末に入っているものだけが選べます。iOS は 設定 → アクセシビリティ → 読み上げコンテンツ から追加できます。</p>';
  }

  function bindAudioPanel() {
    var panel = el('audioPanel');
    function close() {
      panel.hidden = true;
      var b = el('btnAudio');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('#btnAudio');
      if (btn) {
        e.stopPropagation();
        if (!panel.hidden) { close(); return; }
        drawAudioPanel();
        panel.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        var r = btn.getBoundingClientRect();
        panel.style.top = (r.bottom + global.scrollY + 8) + 'px';
        panel.style.left = Math.max(8, Math.min(r.left + global.scrollX - 150,
          global.innerWidth - panel.offsetWidth - 12)) + 'px';
        return;
      }
      if (!e.target.closest('#audioPanel')) close();
    });
    panel.addEventListener('click', function (e) {
      e.stopPropagation();
      if (e.target.classList.contains('x')) close();
    });
    panel.addEventListener('change', function (e) {
      var t = e.target;
      if (t.dataset.set) WGLSpeech.set(t.dataset.set, t.value);
      else if (t.dataset.voice) WGLSpeech.setVoice(t.dataset.voice, t.value);
      else if (t.hasAttribute('data-auto')) store('autoplay', t.value);
    });
    WGLSpeech.onVoicesReady(function () { if (!panel.hidden) drawAudioPanel(); });
  }

  /* ---------- 語彙ポップアップ（記事タブ） ---------- */

  function openPop(target) {
    var v = POPDATA[target.dataset.k];
    if (!v) return;
    var pop = el('pop');
    var s = '<button class="x" type="button" aria-label="閉じる">×</button>' +
      '<h6>' + esc(v.term) + (v.pinyin ? '<span class="py">' + esc(v.pinyin) + '</span>' : '') + '</h6>';
    if (v.pos) s += '<div class="pos">' + esc(v.pos) + '</div>';
    s += '<p class="m">' + esc(v.ja) + '</p>';
    if (v.note) s += '<p class="n">' + esc(v.note) + '</p>';
    (v.examples || []).forEach(function (e) {
      s += '<div class="c-ex"><i>' + esc(plain(e.o)) + '</i><em>' + esc(e.j) + '</em></div>';
    });
    pop.innerHTML = s;
    pop.hidden = false;
    var r = target.getBoundingClientRect();
    pop.style.top = (r.bottom + global.scrollY + 7) + 'px';
    pop.style.left = Math.max(8, Math.min(r.left + global.scrollX,
      global.innerWidth - pop.offsetWidth - 12)) + 'px';
    Array.prototype.forEach.call(document.querySelectorAll('w.on'), function (n) { n.classList.remove('on'); });
    target.classList.add('on');
    pop.querySelector('.x').addEventListener('click', closePop);
  }
  function closePop() {
    el('pop').hidden = true;
    Array.prototype.forEach.call(document.querySelectorAll('w.on'), function (n) { n.classList.remove('on'); });
  }

  /* ============================================================
     画面の組み立て
     ============================================================ */

  function render() {
    if (WGLSpeech.supported) WGLSpeech.stop();
    var main = el('main');
    main.innerHTML = '';
    POPDATA = {};
    main.dataset.tab = tab;
    main.style.setProperty('--c', langOf(lang).color);

    if (tab === 'words') main.appendChild(renderWords());
    else if (tab === 'list') main.appendChild(renderList());
    else if (tab === 'grammar') main.appendChild(renderGrammar());
    else main.appendChild(renderRead());

    store('lang', lang);
    store('tab', tab);
    var top = el('topbar');
    if (top) top.hidden = (tab === 'words');
    global.scrollTo(0, 0);
    paintNav();
  }

  function paintNav() {
    Array.prototype.forEach.call(el('tabbar').children, function (b) {
      b.setAttribute('aria-current', b.dataset.tab === tab ? 'page' : 'false');
    });
  }

  function boot() {
    if (!issue) return;

    var savedLang = store('lang');
    if (savedLang && LANGS[savedLang]) lang = savedLang;
    var savedTab = store('tab');
    if (savedTab && TABS.some(function (t) { return t.id === savedTab; })) tab = savedTab;

    var bar = el('tabbar');
    TABS.forEach(function (t) {
      var b = h('button', null, '<span class="ti">' + t.icon + '</span><span class="tl">' + t.label + '</span>');
      b.type = 'button';
      b.dataset.tab = t.id;
      b.addEventListener('click', function () { tab = t.id; render(); });
      bar.appendChild(b);
    });

    var theme = el('btnTheme');
    var savedTheme = store('theme');
    if (savedTheme) document.documentElement.dataset.theme = savedTheme;
    theme.addEventListener('click', function () {
      var cur = document.documentElement.dataset.theme;
      var next = cur === 'dark' ? 'light' : cur === 'light' ? '' : 'dark';
      if (next) document.documentElement.dataset.theme = next;
      else delete document.documentElement.dataset.theme;
      store('theme', next);
    });

    document.addEventListener('click', function (e) {
      var w = e.target.closest('w');
      if (w && !document.body.classList.contains('no-voc')) { openPop(w); return; }
      if (!e.target.closest('#pop')) closePop();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closePop(); WGLSpeech.stop(); }
      if ((e.key === 'Enter' || e.key === ' ') && e.target.tagName === 'W') { e.preventDefault(); openPop(e.target); }
    });

    if (WGLSpeech.supported) { bindPlayer(); bindAudioPanel(); }

    render();
  }

  global.WGL = {
    registerIssue: registerIssue,
    registerWords: registerWords,
    registerArticles: registerArticles,
    boot: boot
  };
})(window);
