/* ============================================================
   WEEKLY GLOBAL LANGUAGES — 読み上げエンジン
   ブラウザの音声合成 (Web Speech API) を、語学学習に使える形に
   包んだもの。連続再生・リピート・速度・声の選択を扱う。
   ============================================================ */
(function (global) {
  'use strict';

  var OK = 'speechSynthesis' in global && typeof global.SpeechSynthesisUtterance === 'function';
  var SYNTH = OK ? global.speechSynthesis : null;

  /* 言語コード → 読み上げに使うロケール（候補は順に試す） */
  var LOCALES = {
    en: ['en-GB', 'en-US', 'en'],
    zh: ['zh-CN', 'zh-Hans', 'zh'],
    es: ['es-ES', 'es-MX', 'es-US', 'es'],
    fr: ['fr-FR', 'fr-CA', 'fr']
  };

  var prefs = {
    rate: 0.9,      // 読み上げ速度
    repeat: 1,      // 1文を何回読むか（シャドーイング用）
    gap: 700,       // 文と文のあいだ / リピートの間隔（ms）
    voice: {}       // 言語コード → voiceURI
  };

  try {
    var saved = JSON.parse(localStorage.getItem('wgl:speech') || '{}');
    if (saved && typeof saved === 'object') {
      if (typeof saved.rate === 'number') prefs.rate = saved.rate;
      if (typeof saved.repeat === 'number') prefs.repeat = saved.repeat;
      if (typeof saved.gap === 'number') prefs.gap = saved.gap;
      if (saved.voice && typeof saved.voice === 'object') prefs.voice = saved.voice;
    }
  } catch (e) { /* 保存された設定が壊れていても既定値で動かす */ }

  function save() {
    try { localStorage.setItem('wgl:speech', JSON.stringify(prefs)); } catch (e) {}
  }

  /* ---------- 音声リスト（非同期で届くことがある） ---------- */

  var voices = [];
  var voiceWaiters = [];

  function refreshVoices() {
    if (!OK) return;
    var list = SYNTH.getVoices() || [];
    if (list.length) {
      voices = list;
      var ws = voiceWaiters;
      voiceWaiters = [];
      ws.forEach(function (fn) { fn(voices); });
    }
  }

  function onVoicesReady(fn) {
    if (!OK) { fn([]); return; }
    refreshVoices();
    if (voices.length) { fn(voices); return; }
    voiceWaiters.push(fn);
    /* 一部のブラウザは voiceschanged を撃たないので保険をかける */
    setTimeout(function () {
      refreshVoices();
      if (!voices.length) {
        var i = voiceWaiters.indexOf(fn);
        if (i >= 0) { voiceWaiters.splice(i, 1); fn([]); }
      }
    }, 1200);
  }

  if (OK && typeof SYNTH.addEventListener === 'function') {
    SYNTH.addEventListener('voiceschanged', refreshVoices);
  }
  refreshVoices();

  /** その言語で使える音声の一覧（望ましいロケール順） */
  function voicesFor(lang) {
    var want = LOCALES[lang] || [lang];
    var base = want[0].slice(0, 2).toLowerCase();
    var hit = voices.filter(function (v) {
      return v.lang && v.lang.slice(0, 2).toLowerCase() === base;
    });
    /* ロケールの近さ → ローカル音声を優先 */
    return hit.sort(function (a, b) {
      var ra = want.indexOf(a.lang), rb = want.indexOf(b.lang);
      if (ra < 0) ra = 99;
      if (rb < 0) rb = 99;
      if (ra !== rb) return ra - rb;
      if (a.localService !== b.localService) return a.localService ? -1 : 1;
      return String(a.name).localeCompare(String(b.name));
    });
  }

  /** 実際に使う音声を決める（設定されていればそれ、なければ最良の1件） */
  function pickVoice(lang) {
    var list = voicesFor(lang);
    if (!list.length) return null;
    var uri = prefs.voice[lang];
    if (uri) {
      for (var i = 0; i < list.length; i++) if (list[i].voiceURI === uri) return list[i];
    }
    return list[0];
  }

  function localeFor(lang) {
    var v = pickVoice(lang);
    return v ? v.lang : (LOCALES[lang] || ['en'])[0];
  }

  /* ---------- iOS の解錠 ----------
     iOS Safari は、最初の speak() がユーザー操作と同じ処理の中から
     呼ばれないと以後いっさい発話しない。無音の発話を最初のタップで
     流し込んで、合成エンジンを起こしておく。 */

  var unlocked = false;

  function unlock() {
    if (unlocked || !OK) return;
    unlocked = true;
    try {
      var u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      SYNTH.speak(u);
      SYNTH.cancel();
    } catch (e) { /* 解錠できなくても通常の再生は試みる */ }
  }

  if (OK) {
    ['touchend', 'pointerdown', 'mousedown', 'keydown'].forEach(function (ev) {
      global.addEventListener(ev, unlock, { once: true, capture: true, passive: true });
    });
  }

  /* ---------- 再生 ---------- */

  var sync = false;      // 次の発話をユーザー操作と同じ処理の中で行うか
  var seq = [];          // 再生中の並び [{ text, lang, el }]
  var at = -1;           // いま読んでいる位置
  var round = 0;         // 同じ文の何回目か
  var running = false;
  var holding = false;   // 一時停止中
  var timer = null;      // 文と文のあいだの待ち時間
  var keepAlive = null;  // Chrome が長文を途中で切る問題への対処
  var hooks = {};        // { onSentence, onState, onEnd }

  function fire(name) {
    var fn = hooks[name];
    if (typeof fn !== 'function') return;
    try { fn.apply(null, [].slice.call(arguments, 1)); } catch (e) {}
  }

  function state() {
    return {
      running: running,
      paused: holding,
      index: at,
      total: seq.length,
      round: round,
      repeat: prefs.repeat,
      lang: at >= 0 && seq[at] ? seq[at].lang : null
    };
  }

  function startKeepAlive() {
    stopKeepAlive();
    /* Chrome は 15 秒ほどで発話を打ち切ることがある。
       定期的に resume を送ると継続する。 */
    keepAlive = setInterval(function () {
      if (!OK || !running || holding) return;
      if (SYNTH.speaking && !SYNTH.paused) { SYNTH.pause(); SYNTH.resume(); }
    }, 9000);
  }
  function stopKeepAlive() {
    if (keepAlive) { clearInterval(keepAlive); keepAlive = null; }
  }

  function clearTimer() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  /** 1件を読む。終わったら done() を呼ぶ */
  function utter(text, lang, done) {
    if (!OK || !String(text).trim()) { done(); return; }
    var u = new SpeechSynthesisUtterance(String(text));
    var v = pickVoice(lang);
    u.lang = v ? v.lang : localeFor(lang);
    if (v) u.voice = v;
    u.rate = prefs.rate;
    var finished = false;
    function once() { if (!finished) { finished = true; done(); } }
    u.onend = once;
    u.onerror = once;

    function fire() {
      if (!running) return;
      try { SYNTH.speak(u); } catch (e) { once(); }
    }

    /* 1件目はユーザー操作と同じ処理の中で発話する（iOS の要件）。
       2件目以降は onend から呼ばれるので、cancel() の取りこぼしを
       避けるために一拍置いてよい。 */
    if (sync) { sync = false; fire(); } else { setTimeout(fire, 0); }
  }

  function step() {
    if (!running) return;
    var item = seq[at];
    if (!item) { finish(); return; }
    fire('onSentence', at, item, round);
    fire('onState', state());
    utter(item.text, item.lang, function () {
      if (!running) return;
      round++;
      if (round < prefs.repeat) {
        timer = setTimeout(step, prefs.gap);          // 同じ文をもう一度
      } else {
        round = 0;
        at++;
        if (at >= seq.length) { finish(); return; }
        timer = setTimeout(step, prefs.gap);          // 次の文へ
      }
    });
  }

  function finish() {
    running = false; holding = false;
    clearTimer(); stopKeepAlive();
    if (OK) { try { SYNTH.cancel(); } catch (e) {} }
    at = -1; round = 0;
    fire('onState', state());
    fire('onEnd');
  }

  /** 読み上げを始める。items = [{ text, lang, el }] */
  function play(items, handlers) {
    if (!OK || !items || !items.length) return false;
    stop();
    seq = items.slice();
    hooks = handlers || {};
    at = 0; round = 0;
    running = true; holding = false;
    sync = true;              // 最初の1件はユーザー操作の文脈のまま発話する
    startKeepAlive();
    step();
    sync = false;
    return true;
  }

  function stop() {
    var was = running;
    running = false; holding = false; sync = false;
    clearTimer(); stopKeepAlive();
    if (OK) { try { SYNTH.cancel(); } catch (e) {} }
    at = -1; round = 0;
    if (was) { fire('onState', state()); fire('onEnd'); }
    seq = [];
  }

  function pause() {
    if (!OK || !running || holding) return;
    holding = true;
    clearTimer();
    try { SYNTH.pause(); } catch (e) {}
    fire('onState', state());
  }

  function resume() {
    if (!OK || !running || !holding) return;
    holding = false;
    try { SYNTH.resume(); } catch (e) {}
    /* pause 中に発話が終わっていた場合に備えて、無音なら次へ進める */
    setTimeout(function () {
      if (running && !holding && !SYNTH.speaking && !timer) step();
    }, 250);
    fire('onState', state());
  }

  function toggle() { holding ? resume() : pause(); }

  /** 前後の文へ飛ぶ */
  function jump(delta) {
    if (!running) return;
    clearTimer();
    if (OK) { try { SYNTH.cancel(); } catch (e) {} }
    round = 0;
    at += delta;
    if (at < 0) at = 0;
    if (at >= seq.length) { finish(); return; }
    holding = false;
    setTimeout(step, 90);
  }

  /* ---------- 設定 ---------- */

  function set(key, value) {
    if (key === 'rate') prefs.rate = Math.min(2, Math.max(0.4, Number(value) || 0.9));
    else if (key === 'repeat') prefs.repeat = Math.min(5, Math.max(1, parseInt(value, 10) || 1));
    else if (key === 'gap') prefs.gap = Math.min(4000, Math.max(0, parseInt(value, 10) || 0));
    else return;
    save();
    fire('onState', state());
  }

  function setVoice(lang, voiceURI) {
    if (voiceURI) prefs.voice[lang] = voiceURI;
    else delete prefs.voice[lang];
    save();
  }

  /* 画面を離れるときに黙らせる（音声が残り続けるのを防ぐ） */
  global.addEventListener('beforeunload', function () { if (OK) SYNTH.cancel(); });

  /** その言語の音声が端末に入っているか */
  function hasVoice(lang) { return voicesFor(lang).length > 0; }

  global.WGLSpeech = {
    supported: OK,
    unlock: unlock,
    hasVoice: hasVoice,
    play: play,
    stop: stop,
    pause: pause,
    resume: resume,
    toggle: toggle,
    jump: jump,
    say: function (text, lang) {           // 1文だけ読む（リピート設定も反映）
      return play([{ text: text, lang: lang }], {});
    },
    state: state,
    prefs: prefs,
    set: set,
    setVoice: setVoice,
    voicesFor: voicesFor,
    pickVoice: pickVoice,
    onVoicesReady: onVoicesReady
  };
})(window);
