/* 讲练 · 气泡网格原型 —— 逻辑
 *
 * 目标（本轮）：
 *   1. 槽位 [类别] 点开 → 气泡网格，含拼音
 *   2. 网格列数按容器宽度动态算，每页固定 2 行 → 自动翻页
 *   3. 嵌套类别：点子类别气泡 → 进入该类别；左上角 ◀ 返回
 *   4. 再点一次已打开的槽位 → 关闭菜单
 *   5. hover 气泡 → 显示英文
 *   6. 句子填齐后可整句朗读，未填齐则按钮禁用
 *   7. [输入框] 私有；[输入N] 在同专题内同步
 *
 * 依赖 pinyin-pro（window.pinyinPro）产生拼音；缺失时退化为无拼音。
 */
(function () {
  'use strict';

  var CATS = window.DRILL_CATEGORIES || {};
  var ALIASES = window.DRILL_ALIASES || {};
  var PINYIN_PRO = window.pinyinPro || null;

  // ═══════════════════════════════════════════════════════════════
  // 拼音
  // ═══════════════════════════════════════════════════════════════
  var EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu;

  function stripEmoji(s) { return String(s).replace(EMOJI_RE, '').trim(); }

  // 每个汉字的拼音；非汉字返回 ''，保证数组长度 === 字符数
  function pyArray(text) {
    if (!PINYIN_PRO || !text) return null;
    try {
      var a = PINYIN_PRO.pinyin(text, { type: 'array' });
      return (Array.isArray(a) && a.length === text.length) ? a : null;
    } catch (e) { return null; }
  }
  // 整个词的拼音字符串（空格分隔）
  function pyWord(text) {
    var t = stripEmoji(text);
    if (!PINYIN_PRO || !t) return '';
    try {
      var a = PINYIN_PRO.pinyin(t, { type: 'array' });
      if (!Array.isArray(a)) return '';
      var out = [];
      for (var i = 0; i < t.length; i++) {
        if (/[\u3400-\u9fff]/.test(t[i])) out.push(a[i] || '');
      }
      return out.join(' ');
    } catch (e) { return ''; }
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var HAN_RE = /[\u3400-\u9fff\uf900-\ufaff]/;
  // 把词渲染成「拼音在字正上方」的 HTML（<ruby>字<rt>pīn</rt></ruby>）。
  // 非汉字（emoji、拉丁字母）原样输出，不加 rt，避免出现空拼音。
  function rubyAbove(text) {
    var s = String(text);
    if (!PINYIN_PRO) return esc(s);
    var arr = null;
    try { arr = PINYIN_PRO.pinyin(s, { type: 'array' }); } catch (e) { arr = null; }
    if (!Array.isArray(arr) || arr.length !== s.length) return esc(s);
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      if (!HAN_RE.test(ch)) { out += esc(ch); continue; }
      var py = arr[i] || '';
      out += '<ruby>' + esc(ch) +
             (py ? '<rt>' + esc(py) + '</rt>' : '') +
             '</ruby>';
    }
    return out;
  }

  // ═══════════════════════════════════════════════════════════════
  // 模板解析
  //   [地点]   → cat
  //   [输入框] → field(private)
  //   [输入1]  → field(shared, key=输入1)
  // ═══════════════════════════════════════════════════════════════
  var SLOT_RE = /\[([^\[\]]+)\]/g;
  function parseTemplate(str) {
    var out = [], last = 0, m;
    SLOT_RE.lastIndex = 0;
    while ((m = SLOT_RE.exec(str)) !== null) {
      if (m.index > last) out.push({ kind: 'text', text: str.slice(last, m.index) });
      var tok = m[1].trim();
      var num = /^输入(\d+)$/.exec(tok);
      if (tok === '输入框' || num) {
        out.push({ kind: 'field', key: num ? '输入' + num[1] : null, scope: num ? 'shared' : 'sentence', raw: tok });
      } else {
        out.push({ kind: 'cat', catId: ALIASES[tok] || tok, label: tok });
      }
      last = SLOT_RE.lastIndex;
    }
    if (last < str.length) out.push({ kind: 'text', text: str.slice(last) });
    return out;
  }

  function catWords(id) { return (CATS[id] && CATS[id].words) || []; }
  function catName(id) { return (CATS[id] && CATS[id].cn) || id; }
  function catEn(id) { return (CATS[id] && CATS[id].en) || ''; }
  function catSubs(id) { return (CATS[id] && CATS[id].subs) || []; }

  // ═══════════════════════════════════════════════════════════════
  // 共享状态 [输入N]
  // ═══════════════════════════════════════════════════════════════
  var sharedStore = {};          // { scope: { key: value } }
  var sharedSubs = [];           // { scope, key, el }

  function getShared(scope, key) { return (sharedStore[scope] && sharedStore[scope][key]) || ''; }
  var sharedListeners = [];      // function(scope, key, value)
  function setShared(scope, key, val) {
    (sharedStore[scope] = sharedStore[scope] || {})[key] = val;
    sharedSubs.forEach(function (s) {
      if (s.scope === scope && s.key === key && document.activeElement !== s.el) {
        s.el.value = val;
        s.el.classList.toggle('filled', !!val);
        if (s.el._onSync) s.el._onSync();
      }
    });
    sharedListeners.forEach(function (fn) { fn(scope, key, val); });
  }

  // ═══════════════════════════════════════════════════════════════
  // 全局：只允许一个菜单开着
  // ═══════════════════════════════════════════════════════════════
  var openCtx = null;   // { menu, wrap, slotBtn, tk, chain, page }

  function closeMenu() {
    if (openCtx) {
      if (openCtx.menu && openCtx.menu.parentElement) openCtx.menu.remove();
      if (openCtx.slotBtn) openCtx.slotBtn.classList.remove('active-slot');
      openCtx = null;
    }
    hideTip();
  }

  // ═══════════════════════════════════════════════════════════════
  // hover 英文提示
  // ═══════════════════════════════════════════════════════════════
  var tipEl = null;
  function showTip(target, text) {
    if (!text) return;
    if (!tipEl) { tipEl = document.createElement('div'); tipEl.className = 'hover-tip'; document.body.appendChild(tipEl); }
    var r = target.getBoundingClientRect();
    tipEl.textContent = text;
    tipEl.style.left = (r.left + r.width / 2) + 'px';
    tipEl.style.top = r.top + 'px';
    tipEl.classList.add('on');
  }
  function hideTip() { if (tipEl) tipEl.classList.remove('on'); }

  // ═══════════════════════════════════════════════════════════════
  // 句子渲染
  // ═══════════════════════════════════════════════════════════════
  function autoSize(inp) {
    var n = Math.max((inp.value || inp.placeholder || '').length, 3);
    inp.style.width = (n * 1.05 + 1.6) + 'em';
  }

  /**
   * 渲染一句模板。
   * @param {HTMLElement} container 句子容器
   * @param {string} tmpl            模板字符串
   * @param {string} scope           [输入N] 的共享作用域（专题 id）
   * @param {function} onFilled      每次槽位/输入变化后回调（用于更新朗读按钮）
   */
  function renderSentence(container, tmpl, scope, onFilled) {
    container.innerHTML = '';
    var tokens = parseTemplate(tmpl);

    // 是否所有空都填好了 —— 直接扫 DOM，不维护计数，改来改去也不会算错
    function refreshRead() {
      var blanks = container.querySelectorAll('.slot, .field');
      var total = blanks.length;
      var filled = 0;
      blanks.forEach(function (el) {
        var v = (el.tagName === 'INPUT') ? (el.value || '') : (el.dataset.value || '');
        if (v.trim()) filled++;
      });
      var ready = total > 0 && filled === total;
      container._readReady = ready;
      container._readText = sentenceText();
      if (onFilled) onFilled(ready);
    }
    function sentenceText() {
      var s = '';
      tokens.forEach(function (tk) {
        if (tk.kind === 'text') s += tk.text;
        else if (tk.kind === 'cat') s += (tk._el && tk._el.dataset.value) || '';
        else s += (tk._el ? tk._el.value : '');
      });
      return s.replace(/\s+/g, ' ').trim();
    }

    tokens.forEach(function (tk) {
      if (tk.kind === 'text') {
        var sp = document.createElement('span');
        sp.className = 'stat';
        sp.textContent = tk.text;
        container.appendChild(sp);
        return;
      }
      if (tk.kind === 'cat') {
        var wrap = document.createElement('span');
        wrap.className = 'slot-wrap';
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'slot slot-empty';
        btn.dataset.ph = '[' + tk.label + ']';
        btn.dataset.cat = tk.catId;
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          // 再点一次同一个槽位 → 关闭
          if (openCtx && openCtx.slotBtn === btn) { closeMenu(); return; }
          closeMenu();
          openBubbleMenu(wrap, btn, tk, scope, function (value) {
            btn.classList.remove('slot-empty');
            btn.classList.add('filled');
            btn.dataset.ph = '';
            btn.dataset.value = value;      // ← 朗读就靠这个判断填好了没
            // 填进去的词也要带拼音（拼音在字上面）
            btn.innerHTML = rubyAbove(value);
            refreshRead();
            speak_(stripEmoji(value));
          });
        });
        wrap.appendChild(btn);
        container.appendChild(wrap);
        tk._el = btn;
        return;
      }
      if (tk.kind === 'field') {
        var inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'field' + (tk.scope === 'sentence' ? ' private' : ' shared');
        inp.placeholder = tk.scope === 'shared' ? tk.key : '输入';
        inp.size = 4;
        if (tk.scope === 'shared') {
          inp.value = getShared(scope, tk.key);
          inp.classList.toggle('filled', !!inp.value);
          sharedSubs.push({ scope: scope, key: tk.key, el: inp });
          // 别处改了这个共享值 → 这里也要刷新朗读可用性
          inp._onSync = function () { autoSize(inp); refreshRead(); };
          inp.addEventListener('input', function () { setShared(scope, tk.key, this.value); });
        }
        inp.addEventListener('input', function () {
          autoSize(this);
          refreshRead();
        });
        container.appendChild(inp);
        tk._el = inp;
        requestAnimationFrame(function () { autoSize(inp); });
        refreshRead();
        return;
      }
    });
    refreshRead();
  }

  // ═══════════════════════════════════════════════════════════════
  // 气泡网格菜单
  // ═══════════════════════════════════════════════════════════════
  var ROWS_PER_PAGE = 5;
  // 单个气泡最小宽度(px)。拼音竖排在字上面，所以宽一点才不挤。
  var MIN_CELL_W = 84;

  function openBubbleMenu(wrap, slotBtn, tk, scope, onPick) {
    var menu = document.createElement('div');
    menu.className = 'grid-menu';
    menu.addEventListener('click', function (e) { e.stopPropagation(); });
    wrap.appendChild(menu);
    slotBtn.classList.add('active-slot');

    openCtx = { menu: menu, wrap: wrap, slotBtn: slotBtn, tk: tk, chain: [tk.catId], page: 0, onPick: onPick };
    drawMenu();
  }

  function drawMenu() {
    var ctx = openCtx;
    if (!ctx) return;
    var menu = ctx.menu;
    var catId = ctx.chain[ctx.chain.length - 1];
    var words = catWords(catId);
    var subs = catSubs(catId);

    // 条目 = 具体词 + 子类别入口
    var entries = words.map(function (w) { return { cn: w[0], en: w[1] || '', type: 'word' }; });
    subs.forEach(function (sid) { entries.push({ cn: catName(sid), en: catEn(sid), type: 'sub', sid: sid }); });

    menu.innerHTML = '';

    // ── head：返回 + 面包屑 ──
    var head = document.createElement('div');
    head.className = 'grid-menu-head';
    var back = document.createElement('button');
    back.className = 'back-btn';
    back.type = 'button';
    back.textContent = '◀';
    back.style.visibility = ctx.chain.length > 1 ? 'visible' : 'hidden';
    back.title = '返回';
    back.addEventListener('click', function () {
      ctx.chain.pop();
      ctx.page = 0;
      drawMenu();
    });
    head.appendChild(back);

    var crumb = document.createElement('span');
    crumb.className = 'crumb';
    if (ctx.chain.length > 1) {
      crumb.innerHTML = '<span class="sub">' + esc(ctx.chain.map(catName).join(' › ')) + '</span>';
    } else {
      crumb.textContent = catName(catId);
      if (catEn(catId)) crumb.innerHTML += ' <span class="sub">' + esc(catEn(catId)) + '</span>';
    }
    head.appendChild(crumb);

    var home = document.createElement('button');
    home.className = 'home-btn';
    home.type = 'button';
    home.textContent = '⤴ 回顶部';
    home.style.visibility = ctx.chain.length > 1 ? 'visible' : 'hidden';
    home.addEventListener('click', function () {
      ctx.chain = [ctx.tk.catId];
      ctx.page = 0;
      drawMenu();
    });
    head.appendChild(home);
    menu.appendChild(head);

    // ── body：◀ 网格 ▶ ──
    var body = document.createElement('div');
    body.className = 'grid-body';

    var prev = document.createElement('button');
    prev.className = 'grid-nav';
    prev.type = 'button';
    prev.textContent = '◀';
    body.appendChild(prev);

    var grid = document.createElement('div');
    grid.className = 'grid';
    body.appendChild(grid);

    var next = document.createElement('button');
    next.className = 'grid-nav';
    next.type = 'button';
    next.textContent = '▶';
    body.appendChild(next);

    menu.appendChild(body);

    // ── foot：页码点 ──
    var foot = document.createElement('div');
    foot.className = 'grid-foot';
    var dots = document.createElement('div');
    dots.className = 'grid-dots';
    foot.appendChild(dots);
    menu.appendChild(foot);

    // ── 动态列数 → 每页容量 ──
    // 不用 getBoundingClientRect（首次绘制前会量到 0 或陈旧值）。
    // 用「本菜单能用多宽」反推：视口宽 - 两侧留白，再夹在合理区间内。
    var navW = 22 * 2 + 8;                                   // 左右三角 + 间距
    var menuMaxW = Math.min(560, Math.max(260, window.innerWidth - 48));
    var avail = menuMaxW - 20 - navW;                        // 20 = 菜单左右 padding
    var cols = Math.max(2, Math.floor(avail / MIN_CELL_W));
    cols = Math.min(cols, 6);
    grid.style.setProperty('--cols', cols);

    var perPage = cols * ROWS_PER_PAGE;
    var pages = Math.max(1, Math.ceil(entries.length / perPage));
    if (ctx.page >= pages) ctx.page = pages - 1;

    // 让菜单宽度贴合实际列数（宽屏不空、窄屏不溢出）
    menu.style.width = (20 + navW + cols * MIN_CELL_W) + 'px';
    menu.style.maxWidth = (window.innerWidth - 32) + 'px';

    var slice = entries.slice(ctx.page * perPage, ctx.page * perPage + perPage);
    slice.forEach(function (en) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'bubble' + (en.type === 'sub' ? ' sub-entry' : '');
      // 拼音直接标在字的上面：每个汉字一个 <ruby>，拼音进 <rt>。
      // 非汉字（Netflix、emoji）不包 ruby，原样输出。
      b.innerHTML = rubyAbove(en.cn);
      if (en.en) {
        b.addEventListener('mouseenter', function () { showTip(b, en.en); });
        b.addEventListener('mouseleave', hideTip);
        b.title = en.en;   // 触屏/无障碍兜底
      }
      b.addEventListener('click', function () {
        if (en.type === 'sub') {
          openCtx.chain.push(en.sid);
          openCtx.page = 0;
          drawMenu();
        } else {
          var fn = openCtx.onPick;
          closeMenu();
          fn(cleanForSlot(en.cn), en.cn);
        }
      });
      grid.appendChild(b);
    });

    // 翻页状态
    prev.disabled = ctx.page <= 0;
    next.disabled = ctx.page >= pages - 1;
    prev.addEventListener('click', function () { openCtx.page--; drawMenu(); });
    next.addEventListener('click', function () { openCtx.page++; drawMenu(); });

    if (pages > 1) {
      for (var i = 0; i < pages; i++) {
        var d = document.createElement('i');
        if (i === ctx.page) d.className = 'on';
        dots.appendChild(d);
      }
      var lbl = document.createElement('span');
      lbl.textContent = (ctx.page + 1) + ' / ' + pages + '  ·  共 ' + entries.length + ' 项';
      foot.appendChild(lbl);
    } else {
      var lbl2 = document.createElement('span');
      lbl2.textContent = '共 ' + entries.length + ' 项';
      foot.appendChild(lbl2);
    }

    // ── 贴边修正：菜单默认以槽位为中线居中，靠近屏幕边缘时会溢出 ──
    requestAnimationFrame(function () {
      if (!menu.parentElement) return;
      menu.style.transform = 'none';
      menu.style.left = '0px';
      var mr = menu.getBoundingClientRect();
      var wr = ctx.wrap.getBoundingClientRect();
      var desired = wr.left + wr.width / 2 - mr.width / 2;
      var left = Math.max(10, Math.min(desired, window.innerWidth - mr.width - 10));
      // left 是相对 .slot-wrap（position:relative）的偏移
      menu.style.left = (left - wr.left) + 'px';
    });
  }

  // 填进句子的显示形式：去掉 emoji（拼音交给 ruby 层处理；这里保留纯文字更干净）
  function cleanForSlot(cn) {
    return stripEmoji(cn);
  }

  // ═══════════════════════════════════════════════════════════════
  // 朗读
  // ═══════════════════════════════════════════════════════════════
  function speak_(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(stripEmoji(text));
    u.lang = 'zh-CN'; u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }

  // ═══════════════════════════════════════════════════════════════
  // 卡片装配
  // ═══════════════════════════════════════════════════════════════
  function buildCard(host, cfg) {
    var card = document.createElement('div');
    card.className = 'drill-card';

    var lines = [];
    cfg.lines.forEach(function (line) {
      // 整行就是一个可点的「句子条」—— 填满后点它读整句
      var row = document.createElement('div');
      row.className = 'drill-sent-item not-ready';

      var sent = document.createElement('div');
      sent.className = 'drill-sentence';
      row.appendChild(sent);

      var hint = document.createElement('span');
      hint.className = 'drill-ready-hint';
      hint.textContent = '（填完可点读）';
      row.appendChild(hint);

      row.addEventListener('click', function (e) {
        // 点槽位/输入框本身时不触发朗读
        if (e.target.closest('.slot') || e.target.closest('input')) return;
        if (!row.classList.contains('ready')) {
          // 没填完：轻提示一下，不朗读
          row.classList.remove('nudge');
          void row.offsetWidth;               // 重启动画
          row.classList.add('nudge');
          hint.textContent = '先把空填完再点朗读';
          setTimeout(refreshHint, 1400);
          return;
        }
        speak_(sent._readText || '');
      });

      card.appendChild(row);
      lines.push({ el: sent, tmpl: line, row: row, hint: hint });
    });

    host.appendChild(card);

    // 渲染每一句；只刷新「这一句」的可读状态
    lines.forEach(function (L) {
      renderSentence(L.el, L.tmpl, cfg.scope, function (ready) {
        L.row.classList.toggle('ready', ready);
        L.row.classList.toggle('not-ready', !ready);
        refreshHint();
      });
    });

    function refreshHint() {
      lines.forEach(function (L) {
        L.hint.textContent = L.row.classList.contains('ready')
          ? '🔊 点这句朗读'
          : '（填完可点读）';
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // 演示内容：专题 = 并列按钮
  // ═══════════════════════════════════════════════════════════════
  var TOPICS = [
    {
      id: 'review', label: '复习', scope: 'review',
      note: 'L1 复习：<code>我们去[地点][行为]吧。</code> 点方框 → 气泡网格 → 选词填入。填齐后可朗读。',
      cards: [{ lines: ['我们去[地点][行为]吧。', '星期[星期几][时间]怎么样？'], scope: 'review', multi: true }],
    },
    {
      id: 'zh', label: '综合', scope: 'zh',
      note: '综合句：<code>你[输入1]号几点能去[地点]？</code> 输入框是私有的，只属于这一句。',
      cards: [{ lines: ['你[输入1]号几点能去[地点]？'], scope: 'zh', multi: false }],
    },
    {
      id: 'movie', label: '电影', scope: 'movie',
      note: 'Topics · 电影：<code>[电影类型]</code> 词多，看翻页三角；<code>[平台]</code> 点进去选。',
      cards: [{ lines: ['你最喜欢看[电影类型]？', '我最喜欢看[电影类型]。', '我喜欢在[平台]上看[电影类型]。'], scope: 'movie', multi: true }],
    },
    {
      id: 'food', label: '食物', scope: 'food',
      note: 'Topics · 食物：<code>[世界菜系]</code>（世界）、<code>[中国菜系]</code>（中国）两个不同类别。',
      cards: [{ lines: ['你最喜欢[世界菜系]？', '中国菜里面你最喜欢[中国菜系]。', '我最喜欢吃[HSK1 食物]。'], scope: 'food', multi: true }],
    },
    {
      id: 'sport', label: '运动', scope: 'sport',
      note: 'Topics · 运动：<code>[运动]</code> 含 emoji（🏀），填入句子时自动去掉，气泡里仍显示。',
      cards: [{ lines: ['你最喜欢什么[运动]？', '我最喜欢[运动]。', '我最擅长[运动]。'], scope: 'sport', multi: true }],
    },
    {
      id: 'travel', label: '旅游', scope: 'travel',
      note: 'Topics · 旅游：所有 <code>[输入1]</code> 共享。在任意一处填「日本」，其它处立刻同步；点任意一处可再编辑。',
      cards: [
        { lines: ['我最想去[输入1]旅游。',
                  '你最喜欢[输入1]的什么？',
                  '我最喜欢[输入1]的[旅游元素]。',
                  '你去过[输入1]吗？'], scope: 'travel', multi: true },
        { lines: ['我去过[输入框]。'], scope: 'travel', multi: false },
      ],
    },
    {
      id: 'nested', label: '嵌套（运动）', scope: 'nested',
      note: '嵌套类别：<code>[社交行为]</code> 里含一个「运动 ◂」子类别。点「运动」气泡 → 进入该类别；左上角 ◀ 返回。',
      cards: [{ lines: ['我们要不要去[地点][社交行为]？'], scope: 'nested', multi: false }],
    },
  ];

  // ═══════════════════════════════════════════════════════════════
  // boot
  // ═══════════════════════════════════════════════════════════════
  function boot() {
    var tabsEl = document.getElementById('ptTabs');
    var bodyEl = document.getElementById('ptBody');
    var panels = {};

    // 专题按钮 + 面板（全部预渲染，切换只改 display，共享输入也能跨面板保持）
    TOPICS.forEach(function (tp, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = tp.label;
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', function () {
        tabsEl.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        Object.keys(panels).forEach(function (k) { panels[k].style.display = (k === tp.id) ? 'block' : 'none'; });
        closeMenu();
      });
      tabsEl.appendChild(btn);

      var panel = document.createElement('div');
      panel.className = 'pt-panel';
      panel.style.display = (i === 0) ? 'block' : 'none';

      var note = document.createElement('div');
      note.className = 'pt-note';
      note.innerHTML = tp.note;
      panel.appendChild(note);

      // 旅游专题额外加共享提示条
      if (tp.id === 'travel') {
        var bar = document.createElement('div');
        bar.className = 'shared-bar';
        var chip = document.createElement('span');
        chip.className = 'shared-chip';
        chip.id = 'sharedEcho';
        bar.appendChild(chip);
        var clr = document.createElement('button');
        clr.className = 'mini';
        clr.type = 'button';
        clr.textContent = '清空 输入1';
        clr.addEventListener('click', function () { setShared('travel', '输入1', ''); updateEcho(); });
        bar.appendChild(clr);
        panel.appendChild(bar);
        sharedListeners.push(function (sc, k) { if (sc === 'travel' && k === '输入1') updateEcho(); });
        setTimeout(updateEcho, 0);
      }

      tp.cards.forEach(function (c) { buildCard(panel, c); });
      bodyEl.appendChild(panel);
      panels[tp.id] = panel;
    });

    function updateEcho() {
      var e = document.getElementById('sharedEcho');
      if (!e) return;
      var v = getShared('travel', '输入1');
      e.innerHTML = '输入1 = <em>' + (v ? esc(v) : '（空）') + '</em>';
    }
    updateEcho();

    document.addEventListener('click', function (e) {
      if (e.target.closest && (e.target.closest('.grid-menu') || e.target.closest('.slot'))) return;
      closeMenu();
    });
    document.addEventListener('scroll', hideTip, true);
    window.addEventListener('resize', function () { if (openCtx) drawMenu(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
