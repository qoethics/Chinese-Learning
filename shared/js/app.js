(function(){
  // =====================================================================
  // Themes (pastel)
  // =====================================================================
  const THEMES = [
    { bg:'#FCE7F3', accent:'#9D174D', light:'#FDF2F8', mid:'#F9A8D4' },
    { bg:'#FFEDD5', accent:'#9A3412', light:'#FFF7ED', mid:'#FDBA74' },
    { bg:'#FEF9C3', accent:'#854D0E', light:'#FEFCE8', mid:'#FDE047' },
    { bg:'#D1FAE5', accent:'#065F46', light:'#ECFDF5', mid:'#6EE7B7' },
    { bg:'#DBEAFE', accent:'#1E40AF', light:'#EFF6FF', mid:'#93C5FD' },
    { bg:'#E9D5FF', accent:'#6B21A8', light:'#F5F3FF', mid:'#C4B5FD' },
    { bg:'#CFFAFE', accent:'#155E75', light:'#ECFEFF', mid:'#67E8F9' },
    { bg:'#FFE4E6', accent:'#9F1239', light:'#FFF1F2', mid:'#FDA4AF' },
    { bg:'#DCFCE7', accent:'#166534', light:'#F0FDF4', mid:'#86EFAC' },
    { bg:'#E0E7FF', accent:'#3730A3', light:'#EEF2FF', mid:'#A5B4FC' },
    { bg:'#F3E8FF', accent:'#6B21A8', light:'#FAF5FF', mid:'#D8B4FE' },
    { bg:'#CCFBF1', accent:'#115E59', light:'#F0FDFA', mid:'#5EEAD4' },
    { bg:'#FFE4D6', accent:'#9A3412', light:'#FFF7ED', mid:'#FDBA74' },
    { bg:'#CFFAFE', accent:'#0E7490', light:'#ECFEFF', mid:'#67E8F9' },
    { bg:'#FCE7F3', accent:'#831843', light:'#FDF2F8', mid:'#F9A8D4' }
  ];

  // =====================================================================
  // Lessons Data
  // =====================================================================
  // Lessons Data — externalized to js/data.js (loaded before this file).
  // Neutral global name so a copied HSK2/HSK3 folder works unchanged.
  const LESSONS = window.COURSE_LESSONS || window.HSK1_LESSONS;

  // =====================================================================
  // Single-char pinyin
  // =====================================================================
  const SINGLE_CHAR_PINYIN = {
    '你':'nǐ','我':'wǒ','他':'tā','她':'tā','它':'tā','是':'shì','不':'bù','了':'le','吗':'ma','呢':'ne',
    '很':'hěn','好':'hǎo','也':'yě','行':'xíng','饿':'è','渴':'kě','累':'lèi','对':'duì','要':'yào',
    '说':'shuō','忙':'máng','怎':'zěn','么':'me','样':'yàng','中':'zhōng','国':'guó','人':'rén',
    '荷':'hé','兰':'lán','巴':'bā','西':'xī','美':'měi','日':'rì','本':'běn','澳':'ào','洲':'zhōu',
    '老':'lǎo','师':'shī','学':'xué','生':'shēng','来':'lái','自':'zì','住':'zhù','在':'zài','叫':'jiào',
    '什':'shén','这':'zhè','那':'nà','狗':'gǒu','猫':'māo','朋':'péng','友':'yǒu','小':'xiǎo',
    '爸':'bà','妈':'mā','哪':'nǎ','里':'lǐ','的':'de','有':'yǒu','和':'hé','与':'yǔ','都':'dōu',
    '还':'hái','就':'jiù','所':'suǒ','以':'yǐ','可':'kě','着':'zhe','过':'guò','吧':'ba','啊':'a',
    '呀':'ya','多':'duō','少':'shǎo','大':'dà','长':'cháng','短':'duǎn','高':'gāo','矮':'ǎi',
    '快':'kuài','慢':'màn','早':'zǎo','晚':'wǎn','今':'jīn','天':'tiān','明':'míng','年':'nián',
    '月':'yuè','星':'xīng','期':'qī','下':'xià','前':'qián','后':'hòu','内':'nèi','外':'wài','门':'mén',
    '口':'kǒu','足':'zú','头':'tóu','脸':'liǎn','眼':'yǎn','睛':'jīng','鼻':'bí','耳':'ěr','舌':'shé',
    '牙':'yá','心':'xīn','意':'yì','思':'sī','事':'shì','情':'qíng','名':'míng','字':'zì','开':'kāi',
    '关':'guān','走':'zǒu','跑':'pǎo','跳':'tiào','坐':'zuò','站':'zhàn','见':'jiàn','知':'zhī',
    '道':'dào','会':'huì','能':'néng','给':'gěi','找':'zhǎo','等':'děng','回':'huí','错':'cuò',
    '儿':'ér','子':'zi','孩':'hái','们':'men','边':'biān','右':'yòu','左':'zuǒ','家':'jiā',
    '面':'miàn','书':'shū','号':'hào','钱':'qián','杯':'bēi','米':'mǐ','碗':'wǎn','包':'bāo',
    '苹':'píng','果':'guǒ','车':'chē','衣':'yī','服':'fú','店':'diàn','鸟':'niǎo','飞':'fēi',
    '机':'jī','租':'zū','听':'tīng','认':'rèn','识':'shi','起':'qǐ','兴':'xìng','医':'yī',
    '院':'yuàn','椅':'yǐ','病':'bìng','工':'gōng','作':'zuò','桌':'zhuō','床':'chuáng',
    '气':'qì','太':'tài','热':'rè','冷':'lěng','雨':'yǔ','些':'xiē','附':'fù',
    '近':'jìn','觉':'jué','得':'de','视':'shì','话':'huà','习':'xí','努':'nǔ',
    '力':'lì','考':'kǎo','试':'shì','散':'sàn','步':'bù','泳':'yǒng','拍':'pāi','照':'zhào',
    '唱':'chàng','歌':'gē','篮':'lán','球':'qiú','踢':'tī','玩':'wán','戏':'xì','频':'pín',
    '读':'dú','香':'xiāng','港':'gǎng','末':'mò','干':'gàn','川':'chuān','成':'chéng',
    '熊':'xióng','爱':'ài','火':'huǒ','锅':'guō','银':'yín','超':'chāo','市':'shì',
    '园':'yuán','房':'fáng','卧':'wò','室':'shì','客':'kè','厅':'tīng','卫':'wèi','厨':'chú',
    '马':'mǎ','桶':'tǒng','毛':'máo','巾':'jīn','勺':'sháo','筷':'kuài','刀':'dāo','鞋':'xié',
    '东':'dōng','出':'chū','真':'zhēn','汽':'qì','汁':'zhī','铁':'tiě','路':'lù',
    '常':'cháng','刚':'gāng','般':'bān','云':'yún','非':'fēi','厉':'lì','害':'hài',
    '特':'tè','别':'bié','昨':'zuó','以':'yǐ','网':'wǎng','淘':'táo','宝':'bǎo','甜':'tián',
    '浙':'zhè','江':'jiāng','杭':'háng','州':'zhōu','湖':'hú','风':'fēng','景':'jǐng',
    '银':'yín','座':'zuò','站':'zhàn','房':'fáng','间':'jiān','床':'chuáng',
    // --- supplement for review sentences ---
    '一':'yī','七':'qī','三':'sān','上':'shàng','两':'liǎng','个':'gè','为':'wèi','乐':'lè',
    '九':'jiǔ','买':'mǎi','二':'èr','五':'wǔ','京':'jīng','亮':'liàng','但':'dàn','体':'tǐ',
    '便':'biàn','信':'xìn','候':'hòu','做':'zuò','先':'xiān','八':'bā','公':'gōng','六':'liù',
    '写':'xiě','净':'jìng','几':'jǐ','分':'fēn','利':'lì','到':'dào','办':'bàn','加':'jiā',
    '务':'wù','动':'dòng','北':'běi','十':'shí','午':'wǔ','半':'bàn','卖':'mài','南':'nán',
    '去':'qù','发':'fā','取':'qǔ','只':'zhǐ','司':'sī','吃':'chī','周':'zhōu','咖':'kā',
    '哇':'wa','哎':'āi','哥':'gē','哦':'ó','商':'shāng','啡':'fēi','啤':'pí','喜':'xǐ',
    '喝':'hē','嘛':'ma','四':'sì','因':'yīn','场':'chǎng','块':'kuài','坡':'pō','堡':'bǎo',
    '奶':'nǎi','妹':'mèi','姐':'jiě','宜':'yí','寿':'shòu','局':'jú','山':'shān','岁':'suì',
    '帮':'bāng','广':'guǎng','弟':'dì','张':'zhāng','影':'yǐng','想':'xiǎng','感':'gǎn',
    '懂':'dǒng','戴':'dài','手':'shǒu','打':'dǎ','披':'pī','拿':'ná','文':'wén','新':'xīn',
    '旅':'lǚ','时':'shí','普':'pǔ','李':'lǐ','条':'tiáo','校':'xiào','椰':'yē','楼':'lóu',
    '欢':'huān','武':'wǔ','每':'měi','水':'shuǐ','汉':'hàn','沙':'shā','没':'méi','沧':'cāng',
    '法':'fǎ','洗':'xǐ','海':'hǎi','游':'yóu','漂':'piào','点':'diǎn','然':'rán','牛':'niú',
    '王':'wáng','现':'xiàn','班':'bān','瓜':'guā','用':'yòng','电':'diàn','目':'mù','看':'kàn',
    '睡':'shuì','空':'kōng','粤':'yuè','红':'hóng','经':'jīng','脑':'nǎo','舒':'shū','舞':'wǔ',
    '色':'sè','节':'jié','花':'huā','英':'yīng','茶':'chá','草':'cǎo','药':'yào','莉':'lì',
    '莓':'méi','菜':'cài','萨':'sà','蓝':'lán','虾':'xiā','蛋':'dàn','袋':'dài','语':'yǔ',
    '请':'qǐng','课':'kè','谢':'xiè','贵':'guì','身':'shēn','辣':'là','迎':'yíng','运':'yùn',
    '送':'sòng','通':'tōng','邮':'yóu','酒':'jiǔ','钟':'zhōng','镜':'jìng','问':'wèn','阿':'ā',
    '难':'nán','零':'líng','食':'shí','餐':'cān','饭':'fàn','饺':'jiǎo','馆':'guǎn','骑':'qí',
    '鸡':'jī','黑':'hēi','龙':'lóng',
    // --- supplement for ruby (pinyin above every hanzi) ---
    '业':'yè','久':'jiǔ','同':'tóng','哈':'hā','喂':'wèi','城':'chéng','士':'shì',
    '女':'nǚ','定':'dìng','您':'nín','户':'hù','方':'fāng','未':'wèi','毕':'bì',
    '沈':'shěn','河':'hé','窗':'chuāng','笔':'bǐ','芝':'zhī','芳':'fāng','词':'cí',
    '进':'jìn','部':'bù','阳':'yáng','鬼':'guǐ','鱼':'yú'
  };

  function getCharPinyin(ch, wordMap){
    if (ch.match(/[a-zA-Z0-9]/)) return ch;
    if (wordMap[ch]) return wordMap[ch].pinyin;
    if (SINGLE_CHAR_PINYIN[ch]) return SINGLE_CHAR_PINYIN[ch];
    if (ch.match(/[，。；、！？、；：""''（）\.,;!?]/)) return ch;
    return ch;
  }
  function getWordPinyin(word, wordMap){
    if (wordMap[word]) return wordMap[word].pinyin;
    let r = '';
    for (let ch of word) r += (getCharPinyin(ch, wordMap) || ch) + ' ';
    return r.trim();
  }

  // Compose pinyin for an arbitrary Chinese string using longest-match against
  // wordMap (current lesson vocabulary) with a single-character fallback.
  const PINYIN_PUNCT = /[，。！？、；：""''（）《》·,.!?;:()]/;
  // Words whose pinyin can't be derived reliably from single characters
  // (polyphonic characters / proper compounds).
  const EXTRA_PINYIN_WORDS = {
    '便宜':'pián yi','睡觉':'shuì jiào','有空':'yǒu kòng','一只':'yī zhī',
    '椰子':'yē zi','椰子鸡':'yē zi jī','小龙虾':'xiǎo lóng xiā','大熊猫':'dà xióng māo',
    '便利店':'biàn lì diàn','邮局':'yóu jú','眼镜':'yǎn jìng','毛巾':'máo jīn',
    '卫生间':'wèi shēng jiān','卧室':'wò shì','客厅':'kè tīng','沙发':'shā fā',
    '高铁':'gāo tiě','粤语':'yuè yǔ','普通话':'pǔ tōng huà','牛奶':'niú nǎi',
    '西瓜':'xī guā','草莓':'cǎo méi','蓝莓':'lán méi','寿司':'shòu sī','披萨':'pī sà',
    '电影':'diàn yǐng','身体':'shēn tǐ','音乐':'yīn yuè','地方':'dì fang','高中':'gāo zhōng',
    '初中':'chū zhōng','小学':'xiǎo xué','可乐':'kě lè','零食':'líng shí','洗手间':'xǐ shǒu jiān'
  };
  // Optional upgrade: pinyin-pro (hsk2/js/vendor/pinyin-pro.js) does dictionary-
  // backed word segmentation and polyphone resolution, so it handles compounds
  // ("旅游" lǚ yóu, "觉得" jué de) that a hand-written word list cannot. When it
  // is absent the older wordMap/SINGLE_CHAR_PINYIN path below still runs.
  const PINYIN_PRO = (typeof window !== 'undefined' && window.pinyinPro) || null;
  // Returns one tone-annotated reading per input character (punctuation and
  // latin pass through unchanged), or null when pinyin-pro is unavailable.
  function perCharPinyin(text){
    if (!PINYIN_PRO || !text) return null;
    try {
      const arr = PINYIN_PRO.pinyin(text, { type: 'array' });
      return Array.isArray(arr) && arr.length === text.length ? arr : null;
    } catch (e){ return null; }
  }

  function pinyinFor(text){
    if (!text) return '';
    const proArr = perCharPinyin(text);
    if (proArr){
      let res = '';
      for (let k = 0; k < text.length; k++){
        const ch = text[k], py = proArr[k];
        if (PINYIN_PUNCT.test(ch) || /[a-zA-Z0-9]/.test(ch)){
          res = res.replace(/\s+$/, '') + ch;
        } else if (/\s/.test(ch)){
          continue;
        } else {
          if (res && !/\s$/.test(res)) res += ' ';
          res += py;
        }
      }
      return res;
    }
    const tokens = [];
    let i = 0;
    while (i < text.length){
      const ch = text[i];
      if (/[a-zA-Z0-9']/.test(ch)){
        let j = i;
        while (j < text.length && /[a-zA-Z0-9']/.test(text[j])) j++;
        tokens.push({ t: text.slice(i, j), punct: false });
        i = j;
        continue;
      }
      if (PINYIN_PUNCT.test(ch)){ tokens.push({ t: ch, punct: true }); i++; continue; }
      if (/\s/.test(ch)){ i++; continue; }
      let hit = null, hitPy = null;
      for (let len = Math.min(6, text.length - i); len > 0; len--){
        const sub = text.slice(i, i + len);
        if (wordMap[sub]){ hit = sub; hitPy = wordMap[sub].pinyin; break; }
        if (EXTRA_PINYIN_WORDS[sub]){ hit = sub; hitPy = EXTRA_PINYIN_WORDS[sub]; break; }
      }
      if (hit){ tokens.push({ t: hitPy, punct: false }); i += hit.length; continue; }
      if (SINGLE_CHAR_PINYIN[ch]){ tokens.push({ t: SINGLE_CHAR_PINYIN[ch], punct: false }); i++; continue; }
      tokens.push({ t: ch, punct: false }); i++;
    }
    let res = '';
    tokens.forEach(({ t, punct }) => {
      if (punct){ res = res.replace(/\s+$/, '') + t; }
      else { if (res && !/\s$/.test(res)) res += ' '; res += t; }
    });
    return res;
  }
  // Pinyin for a sentence/phrase object (explicit pinyin wins, else composed)
  function phrasePinyin(p){ return (p && (p.pinyin || p.py)) || pinyinFor(p ? p.cn : ''); }

  // =====================================================================
  // Ruby pinyin (above every hanzi) + tone colours
  //   1st red · 2nd orange · 3rd green · 4th blue · neutral grey
  // =====================================================================
  const TONE_RES = [
    /[āēīōūǖĀĒĪŌŪǕ]/,   // 1st tone
    /[áéíóúǘÁÉÍÓÚǗ]/,   // 2nd tone
    /[ǎěǐǒǔǚǍĚǏǑǓǙ]/,   // 3rd tone
    /[àèìòùǜÀÈÌÒÙǛ]/    // 4th tone
  ];
  function toneOf(syl){
    if (!syl) return 5;
    for (let i=0; i<4; i++) if (TONE_RES[i].test(syl)) return i+1;
    return 5;   // neutral
  }
  // Menu chips keep their icon and text in separate spans so a menu can drop
  // the text at narrow widths and leave only the icon (see #learnMenu CSS).
  function chipText(icon, text){
    return `<span class="btn-ico">${escapeHtml(icon)}</span><span class="btn-text">${escapeHtml(text)}</span>`;
  }
  // Icon-only chip: flip a toggle and its label widens in place for a moment,
  // then folds back to the icon.
  function flashChip(el){
    if (!el) return;
    clearTimeout(el.flashTimer);
    el.classList.add('flash-text');
    el.flashTimer = setTimeout(() => el.classList.remove('flash-text'), 1400);
  }
  // Option rows are rebuilt on every switch, so the selected chip would snap
  // open. Collapse it for one frame and let the CSS transition expand it.
  function animateChipExpand(scope, target){
    if (!scope) return;
    const el = typeof target === 'string' ? scope.querySelector(target) : target;
    if (!el) return;
    el.classList.add('btn-text-enter');
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('btn-text-enter')));
  }
  function escapeHtml(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // Escape an id for use inside an attribute selector (CSS.escape covers most
  // browsers; fall back to quoting for the plain ids used by grammar points).
  function cssEscape(s){
    const v = String(s);
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(v);
    return v.replace(/["\\]/g, '\\$&');
  }
  // Wrap every whitespace-separated syllable in a tone-coloured span.
  function colorPinyin(py){
    if (!py) return '';
    return py.split(/(\s+)/).map(tok => {
      if (tok === '') return '';
      if (/^\s+$/.test(tok)) return tok;
      return `<span class="tone-${toneOf(tok)}">${escapeHtml(tok)}</span>`;
    }).join('');
  }
  // Split a word's pinyin into one syllable per character.
  function splitSyllables(py, word){
    const chars = [...word];
    const tokens = (py || '').split(/\s+/).filter(Boolean);
    if (tokens.length === chars.length) return tokens;          // 1:1 – nothing to do
    if (tokens.length === 0) return chars.map(() => '');
    if (tokens.length > chars.length){                          // more tokens than chars
      const out = chars.map(() => '');
      tokens.forEach((t, k) => { out[Math.min(k, chars.length-1)] += t; });
      return out;
    }
    // fewer tokens than chars → split the joined string by matching each char's reading
    const target = tokens.join('').toLowerCase();
    const n = chars.length;
    const memo = new Map();
    const go = (i, pos) => {
      if (i === n) return pos === target.length ? [] : null;
      const key = i + ':' + pos;
      if (memo.has(key)) return memo.get(key);
      const cands = [];
      const c = chars[i];
      if (wordMap[c] && wordMap[c].pinyin) cands.push(wordMap[c].pinyin.replace(/\s+/g, '').toLowerCase());
      if (SINGLE_CHAR_PINYIN[c]) cands.push(SINGLE_CHAR_PINYIN[c].replace(/\s+/g, '').toLowerCase());
      for (const cand of cands){
        if (cand && target.startsWith(cand, pos)){
          const rest = go(i+1, pos + cand.length);
          if (rest){ const r = [cand, ...rest]; memo.set(key, r); return r; }
        }
      }
      for (let L = 1; L <= 6 && pos + L <= target.length; L++){
        const rest = go(i+1, pos + L);
        if (rest){ const r = [target.slice(pos, pos+L), ...rest]; memo.set(key, r); return r; }
      }
      memo.set(key, null);
      return null;
    };
    const parts = go(0, 0);
    if (parts && parts.join('') === target) return parts;
    // last resort: per-character readings (never leaves a character empty)
    return chars.map((c, k) => (parts && parts[k]) || SINGLE_CHAR_PINYIN[c] || '');
  }
  // Grammar notes are a single string in the corpus; older/alt sources may hand us
  // an array of lines. Normalise to \n-separated text so both render the same.
  function noteText(v){
    if (Array.isArray(v)) return v.filter(Boolean).map(s => String(s).trim()).join('\n');
    return (v || '').toString();
  }

  // One <div class="grammar-intro"> per note line, so separate explanations don't
  // run together into a single paragraph.
  function noteHtml(v){
    const text = noteText(v);
    if (!text) return '';
    return text.split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .map(line => `<div class="grammar-intro">${rubyHtml(line)}</div>`)
      .join('');
  }

  // Province groups ("省份：云南") get a small China map with that province highlighted.
  // The SVG comes from shared/assets/china-map.js (loaded only by hsk1/index.html).
  function provinceMapHtml(cn){
    const svg = window.CHINA_MAP_SVG;
    if (!svg || !cn || cn.indexOf('省份') !== 0) return '';
    const m = cn.match(/[:：]\s*(.+)$/);
    const name = m ? m[1].trim() : '';
    return `<div class="province-map"${name ? ` data-province="${escapeHtml(name)}"` : ''}>${svg}</div>`;
  }

  // Render Chinese text as <ruby> tags with tone-coloured pinyin above each character.
  function rubyHtml(text){
    if (!text) return '';
    const proArr = perCharPinyin(text);
    if (proArr){
      let proOut = '';
      for (let k = 0; k < text.length; k++){
        const c = text[k];
        if (!/[\u3400-\u9fff\uf900-\ufaff]/.test(c)){ proOut += escapeHtml(c); continue; }
        const s = proArr[k] || '';
        proOut += `<ruby>${escapeHtml(c)}<rt class="tone-${toneOf(s)}">${escapeHtml(s)}</rt></ruby>`;
      }
      return proOut;
    }
    let out = '';
    let i = 0;
    while (i < text.length){
      const ch = text[i];
      if (!/[\u3400-\u9fff\uf900-\ufaff]/.test(ch)){   // punctuation / latin / digits
        out += escapeHtml(ch);
        i++;
        continue;
      }
      let hit = null, py = null;
      for (let len = Math.min(6, text.length - i); len > 0; len--){
        const sub = text.slice(i, i + len);
        if (wordMap[sub]){ hit = sub; py = wordMap[sub].pinyin; break; }
        if (EXTRA_PINYIN_WORDS[sub]){ hit = sub; py = EXTRA_PINYIN_WORDS[sub]; break; }
        if (len === 1 && SINGLE_CHAR_PINYIN[sub]){ hit = sub; py = SINGLE_CHAR_PINYIN[sub]; break; }
      }
      if (!hit){ hit = ch; py = SINGLE_CHAR_PINYIN[ch] || ''; }
      const sylls = splitSyllables(py, hit);
      for (let k = 0; k < hit.length; k++){
        const s = sylls[k] || '';
        out += `<ruby>${escapeHtml(hit[k])}<rt class="tone-${toneOf(s)}">${escapeHtml(s)}</rt></ruby>`;
      }
      i += hit.length;
    }
    return out;
  }
  // Per-character tone-coloured ruby driven by an authoritative pinyin string
  // (e.g. an item's `py`). Each whitespace token is a syllable, except
  // multi-syllable words (Zhèjiāng, wǒmen); those are split greedily across the
  // upcoming Han characters. Tone-insensitive matching keeps sandhi / neutral
  // tone (ge vs gè) from breaking the alignment.
  function stripTone(s){
    return (s || '').toLowerCase()
      .replace(/[āáǎà]/g,'a').replace(/[ēéěè]/g,'e').replace(/[īíǐì]/g,'i')
      .replace(/[ōóǒò]/g,'o').replace(/[ūúǔù]/g,'u').replace(/[ǖǘǚǜü]/g,'v');
  }
  function charReading(ch){
    return (wordMap[ch] && wordMap[ch].pinyin) || SINGLE_CHAR_PINYIN[ch] || EXTRA_PINYIN_WORDS[ch] || '';
  }
  // Per-character pinyin resolved from an authoritative `py` string, indexed by
  // the character's position in `text` (not by Han order). Returns null when
  // there is nothing to align.
  function perCharFromPy(text, py){
    const chars = [...text].filter(c => /[\u3400-\u9fff\uf900-\ufaff]/.test(c));
    if (!chars.length) return null;
    const tokens = (py || '')
      .replace(/[^\u3400-\u9fff\uf900-\ufaffA-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü\s]/g, ' ')
      .split(/\s+/).filter(Boolean);

    // Assign one syllable per Han character.
    const perChar = [];
    let ci = 0;
    for (const tok of tokens){
      const remain = chars.length - ci;
      if (remain <= 0) break;
      // Greedily peel single-char readings off the front of the token.
      const lower = stripTone(tok);
      let pos = 0, taken = 0, produced = [];
      while (pos < lower.length && ci + taken < chars.length){
        const want = stripTone(charReading(chars[ci + taken]));
        if (want && lower.startsWith(want, pos)){
          produced.push(tok.slice(pos, pos + want.length));
          pos += want.length;
          taken++;
        } else { break; }
      }
      if (taken && pos === lower.length){
        produced.forEach((p, k) => { perChar[ci + k] = p; });
        ci += taken;
      } else {
        // Token doesn't decompose against the next chars (unknown char / tone
        // sandhi variant): give it to a single character as-is.
        perChar[ci] = tok;
        ci++;
      }
    }

    const arr = new Array(text.length).fill('');
    let si = 0;
    for (let k = 0; k < text.length; k++){
      if (/[\u3400-\u9fff\uf900-\ufaff]/.test(text[k])){
        arr[k] = perChar[si] || charReading(text[k]) || '';
        si++;
      }
    }
    return arr;
  }
  function rubyFromPy(text, py){
    if (!text) return '';
    const arr = perCharFromPy(text, py);
    if (!arr) return escapeHtml(text);
    return rubyFromArray(text, 0, arr);
  }
  // Ruby for `text`, a slice of a longer string starting at `start`, using an
  // already-resolved per-character pinyin array.
  function rubyFromArray(text, start, arr){
    let out = '';
    for (let k = 0; k < text.length; k++){
      const ch = text[k];
      if (!/[\u3400-\u9fff\uf900-\ufaff]/.test(ch)){ out += escapeHtml(ch); continue; }
      const raw = arr[start + k] || '';
      out += `<ruby>${escapeHtml(ch)}<rt class="tone-${toneOf(raw)}">${escapeHtml(raw)}</rt></ruby>`;
    }
    return out;
  }
  // One html piece per character: a clickable .char-btn wrapping ruby, or the
  // bare escaped character for punctuation / latin / digits.
  function charPieces(text){
    const pieces = [];
    const proArr = perCharPinyin(text);
    if (proArr){
      for (let k = 0; k < text.length; k++){
        const c = text[k];
        if (!/[\u3400-\u9fff\uf900-\ufaff]/.test(c)){ pieces.push(escapeHtml(c)); continue; }
        const s = proArr[k] || '';
        pieces.push(`<span class="char-btn" data-ch="${escapeHtml(c)}"><ruby>${escapeHtml(c)}<rt class="tone-${toneOf(s)}">${escapeHtml(s)}</rt></ruby></span>`);
      }
      return pieces;
    }
    let i = 0;
    while (i < text.length){
      const ch = text[i];
      if (!/[\u3400-\u9fff\uf900-\ufaff]/.test(ch)){   // punctuation / latin / digits
        pieces.push(escapeHtml(ch));
        i++;
        continue;
      }
      let hit = null, py = null;
      for (let len = Math.min(6, text.length - i); len > 0; len--){
        const sub = text.slice(i, i + len);
        if (wordMap[sub]){ hit = sub; py = wordMap[sub].pinyin; break; }
        if (EXTRA_PINYIN_WORDS[sub]){ hit = sub; py = EXTRA_PINYIN_WORDS[sub]; break; }
        if (len === 1 && SINGLE_CHAR_PINYIN[sub]){ hit = sub; py = SINGLE_CHAR_PINYIN[sub]; break; }
      }
      if (!hit){ hit = ch; py = SINGLE_CHAR_PINYIN[ch] || ''; }
      const sylls = splitSyllables(py, hit);
      for (let k = 0; k < hit.length; k++){
        const s = sylls[k] || '';
        const c = hit[k];
        pieces.push(`<span class="char-btn" data-ch="${escapeHtml(c)}"><ruby>${escapeHtml(c)}<rt class="tone-${toneOf(s)}">${escapeHtml(s)}</rt></ruby></span>`);
      }
      i += hit.length;
    }
    return pieces;
  }
  // Texts highlights grammar points (not vocabulary), so its switches filter the
  // marks by category: which lesson the point belongs to (this one vs. an earlier
  // one) × whether the point is textbook core or an `extended` extra. Points that
  // a later lesson introduces get their own "Ahead" switch, off by default.
  let showGpHl = { core: true, acc: true, ahead: true };
  function gpRel(info){
    const lv = +info.level || LEVEL_NUM;
    const ls = String(info.lesson || '');
    const curId = String(((LESSONS[currentLesson - 1] || {}).id) || '');
    if (lv < LEVEL_NUM) return 'past';
    if (lv > LEVEL_NUM) return 'ahead';
    if (ls === curId) return 'now';
    const target = LESSONS.findIndex(L => L.id === ls);
    return (target >= 0 && target + 1 < currentLesson) ? 'past' : 'ahead';
  }
  function gpCat(info){
    const rel = gpRel(info);
    if (rel === 'ahead') return 'ahead';
    return rel === 'now' ? 'core' : 'acc';
  }
  // Render one line of Chinese for the Texts view: per-character ruby, wrapped in
  // one solid .gp-hit block per grammar mark (grouped, never per-character, so the
  // tint reads as a single block). Marks whose category switch is off fall back to
  // plain text.
  function textLineHtml(text, marks){
    if (!text) return '';
    // split('') keeps one entry per UTF-16 unit, so indices stay aligned with
    // the mark array (Array.from would collapse surrogate pairs).
    const pieces = showListPinyin ? charPieces(text) : text.split('').map(c => escapeHtml(c));
    const markAt = new Array(text.length).fill(null);
    (marks || []).forEach(m => {
      if (!showGpHl[gpCat(m.info)]) return;
      for (let k = m.a; k < m.b && k < text.length; k++) markAt[k] = m;
    });
    let out = '', i = 0;
    while (i < text.length){
      const m = markAt[i];
      let j = i;
      while (j < text.length && markAt[j] === m) j++;
      const body = pieces.slice(i, j).join('');
      out += m ? `${gpSpanStart(m.info)}${body}</span>` : body;
      i = j;
    }
    return out;
  }
  function gpSpanStart(info){
    const lv = +info.level || LEVEL_NUM;
    const ls = String(info.lesson || '');
    const rel = gpRel(info);
    const title = `${levelLabel(lv)} · ${lessonTitle(lv, ls)} · ${info.label || info.point || ''}`;
    return `<span class="gp-hit gp-${rel}" data-lv="${lv}" data-ls="${escapeHtml(ls)}" data-pt="${escapeHtml(info.point || '')}" data-lb="${escapeHtml(info.label || '')}" data-span="${escapeHtml(info.span || '')}" title="${escapeHtml(title)}">`;
  }
  function levelLabel(lv){ return `HSK ${lv}`; }
  function lessonTitle(lv, lessonId){
    const n = parseInt(String(lessonId).replace(/\D+/g, ''), 10);
    if (lv !== LEVEL_NUM) return n ? `L${n}` : String(lessonId);
    const L = LESSONS.find(x => x.id === lessonId);
    if (!L) return `L${lessonId}`;
    return String(L.name || '').split(' · ')[0] || `L${lessonId}`;
  }
  // Collect the grammar-hit ranges for one text line. Spans are matched as literal
  // substrings of the line, so editing a dialogue only drops the annotation that
  // no longer matches instead of throwing.
  function hitsForText(text, textId, li){
    const store = window.TEXT_GRAMMAR_HITS;
    if (!store || !text) return [];
    const lid = (LESSONS[currentLesson - 1] || {}).id;
    const list = store[lid];
    if (!Array.isArray(list) || !list.length) return [];
    const marks = [];
    list.forEach(h => {
      if (!h || h.t !== textId || +h.line !== li || !h.span) return;
      let from = 0, at = -1;
      while ((at = text.indexOf(h.span, from)) >= 0){
        const clash = marks.some(m => at < m.b && at + h.span.length > m.a);
        if (!clash) break;
        from = at + 1;
      }
      if (at < 0) return;
      marks.push({ a: at, b: at + h.span.length, info: h });
    });
    return marks.sort((x, y) => x.a - y.a);
  }
  function shuffle(a){
    for (let i=a.length-1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }
  function shuffleCopy(a){ return shuffle([...a]); }
  function getUniqueId(item){ return item.id ? item.hanzi+'_'+item.id : item.hanzi; }
  function clearAutoAdvance(){ if (autoAdvanceTimer !== null){ clearTimeout(autoAdvanceTimer); autoAdvanceTimer = null; } }

  // =====================================================================
  // Speech
  // =====================================================================
  const READ_RATES = [{ rate: 1, label: '1x' }, { rate: 0.75, label: '0.75x' }, { rate: 0.5, label: '0.5x' }, { rate: 0.25, label: '0.25x' }, { rate: 0.1, label: '0.1x' }];
  // Shadowing silently repeats the read's own duration multiplied by this factor.
  // Adjustable in Settings (1.25x … 2x).
  const SHADOW_FACTORS = [1.25, 1.5, 1.75, 2];
  let shadowPauseFactor = SHADOW_FACTORS[0];
  const READ_RATE_KEY = 'hsk.readrate.v1';
  function loadReadRate(){
    try {
      const r = parseFloat(localStorage.getItem(READ_RATE_KEY));
      if (READ_RATES.some(x => x.rate === r)) return r;
    } catch (e) { /* storage unavailable — keep the default */ }
    return 1;
  }
  function saveReadRate(r){
    try { localStorage.setItem(READ_RATE_KEY, String(r)); } catch (e) { /* ignore */ }
  }
  let speakTimeout = null;
  let speakRate = loadReadRate();  // spoken speed; the shared read toolbar's 0.5x–1x slow presets drive this
  let lastSpokenText = '';
  function speak(text, cb, rate){
    lastSpokenText = text;
    if (muted){ if (cb) cb(); return; }
    if (!window.speechSynthesis){ if (cb) cb(); return; }
    window.speechSynthesis.cancel();
    if (speakTimeout) clearTimeout(speakTimeout);
    speakTimeout = setTimeout(()=>{
      if (muted){ if (cb) cb(); return; }
      const u = new SpeechSynthesisUtterance(text);
      u.lang='zh-CN'; u.rate=rate || speakRate; u.pitch=1;
      u.onend=()=>{ if(cb) cb(); };
      u.onerror=()=>{ if(cb) cb(); };
      window.speechSynthesis.speak(u);
    }, 120);
  }
  function speakChinese(t){ speak(t); }

  // =====================================================================
  // Text audio (real MP3 playback from the lesson audio CDN)
  // =====================================================================
  let textAudio = null;      // currently loaded Audio (may be playing or paused)
  let textAudioBar = null;   // the .text-audio element it belongs to
  let textPlayRate = 1;      // text audio playback speed
  let vocabAudio = null;     // standalone vocab-list track (HSK3: wordAudio URL)
  let vocabAudioBtn = null;

  // Vocab list audio is its own mp3 (one track per text in HSK3), so it plays
  // through a dedicated Audio element instead of the text player.
  function stopVocabAudio(){
    if (vocabAudio){
      vocabAudio.pause();
      vocabAudio.onended = vocabAudio.onerror = null;
      vocabAudio = null;
    }
    if (vocabAudioBtn){ vocabAudioBtn.classList.remove('playing'); vocabAudioBtn = null; }
  }
  function toggleVocabAudio(url, btn){
    if (!url) return;
    if (vocabAudio && vocabAudioBtn === btn){ stopVocabAudio(); return; }
    stopVocabAudio();
    if (muted) return;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    stopTextAudio();
    const a = new Audio(url);
    a.playbackRate = textPlayRate;
    vocabAudio = a;
    vocabAudioBtn = btn;
    btn.classList.add('playing');
    a.onended = () => stopVocabAudio();
    a.onerror = () => stopVocabAudio();
    a.play().catch(() => stopVocabAudio());
  }

  function fmtTime(s){
    if (!isFinite(s) || s < 0) s = 0;
    s = Math.floor(s);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }
  // Same shape as fmtTime but keeps tenths — used by the A/B mark readout.
  function fmtTime1(s){
    let t = Math.round((isFinite(s) && s > 0 ? s : 0) * 10) / 10;
    const m = Math.floor(t / 60);
    const r = t - m * 60;
    return m + ':' + (r < 10 ? '0' : '') + r.toFixed(1);
  }
  function setBarPlaying(bar, playing){
    const btn = bar.querySelector('.text-play-btn');
    if (!btn) return;
    btn.classList.toggle('playing', playing);
    btn.innerHTML = (playing ? '⏸ ' : '▶ ') + (btn.dataset.label || '');
  }
  // Per-line ▶/⏸ button state — mirrors the main play/pause button.
  function segLineHint(btn){
    const item = btn.closest('.text-item');
    if (!item) return '播放这一句';
    const tId = item.dataset.text;
    const li = parseInt(btn.dataset.line, 10);
    const seg = segOf(tId, li);
    return seg ? segTitle(seg, (textLinesOf(tId)[li] || {}).cn) : '播放这一句';
  }
  function setSegLinePlaying(btn, on){
    if (!btn){
      clearSegLineBtn();
      return;
    }
    if (segLineBtn && segLineBtn !== btn) clearSegLineBtn();
    segLineBtn = btn;
    btn.classList.toggle('playing', !!on);
    if (!btn.dataset.staticLabel){
      btn.textContent = on ? '⏸' : '▶';
      btn.title = on ? '暂停这一句' : segLineHint(btn);
    } else {
      btn.title = on ? '暂停' : btn.dataset.titleBase;
    }
  }
  function clearSegLineBtn(){
    const old = segLineBtn;
    segLineBtn = null;
    if (!old) return;
    old.classList.remove('playing');
    if (!old.dataset.staticLabel) old.textContent = '▶';
  }
  function syncBarFromAudio(){
    if (!textAudio || !textAudioBar) return;
    const seek = textAudioBar.querySelector('.text-seek');
    if (seek){
      if (isFinite(textAudio.duration) && textAudio.duration > 0) seek.max = textAudio.duration;
      if (document.activeElement !== seek) seek.value = textAudio.currentTime || 0;
    }
    const t = textAudioBar.querySelector('.text-time');
    if (t) t.textContent = fmtTime(textAudio.currentTime) + ' / ' + fmtTime(textAudio.duration);
  }
  function stopSegTick(){
    if (segRaf){ cancelAnimationFrame(segRaf); segRaf = 0; }
  }
  function stopTextAudio(){
    stopSegTick();
    stopVocabAudio();
    segPlay = null;
    clearSegLineBtn();
    if (textAudio){
      textAudio.pause();
      textAudio.onloadedmetadata = textAudio.ontimeupdate = textAudio.onended = textAudio.onerror = null;
      textAudio = null;
    }
    if (textAudioBar){
      setBarPlaying(textAudioBar, false);
      const seek = textAudioBar.querySelector('.text-seek');
      if (seek){ seek.value = 0; seek.max = 0; }
      const t = textAudioBar.querySelector('.text-time');
      if (t) t.textContent = '0:00';
      textAudioBar = null;
    }
  }
  // Load (or reuse) a bar's Audio without starting playback.
  function ensureTextAudio(bar){
    const url = bar.dataset.audio;
    if (!url) return null;
    if (textAudio && textAudioBar === bar) return textAudio;
    stopTextAudio();
    if (muted) return null;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const a = new Audio(url);
    a.playbackRate = textPlayRate;
    textAudio = a;
    textAudioBar = bar;
    a.onloadedmetadata = () => syncBarFromAudio();
    a.ontimeupdate = () => syncBarFromAudio();
    a.onended = () => stopTextAudio();
    a.onerror = () => stopTextAudio();
    return a;
  }
  function startTextAudio(bar){
    if (!bar.dataset.audio) return;
    stopVocabAudio();
    // Manual playback always cancels an A↔B loop.
    document.querySelectorAll('.text-mark-btn[data-act="loop"].is-on').forEach(b => b.classList.remove('is-on'));
    // Same track already loaded → toggle pause / resume.
    if (textAudioBar === bar && textAudio){
      segPlay = null;
      stopSegTick();
      clearSegLineBtn();
      if (textAudio.paused){
        textAudio.play().catch(() => stopTextAudio());
        setBarPlaying(bar, true);
      } else {
        textAudio.pause();
        setBarPlaying(bar, false);
      }
      return;
    }
    const a = ensureTextAudio(bar);
    if (!a) return;
    setBarPlaying(bar, true);
    a.play().catch(() => stopTextAudio());
  }
  // Frame-accurate stop at the segment end (ontimeupdate alone is ~250 ms).
  function segTick(){
    if (!textAudio || !segPlay){ stopSegTick(); return; }
    // A null `end` means "play to the natural end" — the audio's own `ended`
    // event (→ stopTextAudio) handles stopping; no loop is possible then.
    const atEnd = segPlay.end != null && textAudio.currentTime >= segPlay.end;
    if (!textAudio.paused && (atEnd)){
      if (segPlay.loop){
        textAudio.currentTime = segPlay.start;
      } else {
        textAudio.pause();
        textAudio.currentTime = segPlay.end;
        segPlay = null;
        stopSegTick();
        clearSegLineBtn();
        if (textAudioBar){
          setBarPlaying(textAudioBar, false);
          syncBarFromAudio();
        }
        return;
      }
    }
    segRaf = requestAnimationFrame(segTick);
  }
  // Play [start, end) of a bar's track. Shift-click loops it.
  // If paused inside [start, end), clicking again resumes from where it left off;
  // only jumps back to `start` when the playhead is outside this sentence.
  function playSegment(bar, start, end, loop, lineBtn){
    // `end` may be null/negative → play to the track's natural end.
    const hasEnd = end != null && end >= 0;
    if (hasEnd && !(end > start)) return;
    stopVocabAudio();
    const a = ensureTextAudio(bar);
    if (!a) return;
    if (segPlay && segPlay.bar === bar && segPlay.start === start && !a.paused){
      a.pause();
      segPlay = null;
      stopSegTick();
      setBarPlaying(bar, false);
      setSegLinePlaying(lineBtn, false);
      return;
    }
    const begin = () => {
      if (!textAudio || textAudio !== a) return;
      const cur = a.currentTime || 0;
      const inRange = cur >= start && (!hasEnd || cur < end);
      if (!inRange) a.currentTime = start;   // outside the range → replay from A
      segPlay = { bar, start, end: hasEnd ? end : null, loop: !!loop };
      setBarPlaying(bar, true);
      setSegLinePlaying(lineBtn, true);
      stopSegTick();
      a.play().catch(() => stopTextAudio());
      segRaf = requestAnimationFrame(segTick);
    };
    // Seeking before metadata is ready is ignored, so wait for it.
    if (a.readyState >= 1) begin();
    else a.addEventListener('loadedmetadata', begin, { once: true });
  }

  // =====================================================================
  // Per-sentence audio segments (A/B marks bound to one line of a text)
  //
  // Truth source is data/audio-segments.js → window.TEXT_AUDIO_SEGMENTS:
  //   { "01-01": [ { line: 0, start: 3.2, end: 6.8, cn: "…" } ] }
  // Marks made in the player live in a localStorage draft until "⇩ 导出"
  // writes the file; `cn` lets us notice when a text's lines were reordered.
  // localStorage is per-origin (not per-folder), and hsk1/hsk2/hsk3 reuse the
  // same text ids (05-01, …), so the draft key must carry the page's folder —
  // otherwise one level's draft silently overwrites another level's segments.
  // =====================================================================
  const SEG_DRAFT_KEY = 'hsk.audiosegs.draft.v2:' + location.pathname.replace(/[^/]*$/, '');
  let segDraftDirty = false;
  let textSegs = loadSegs();
  let segMarks = {};   // in-progress per-text marks (survive re-renders)
  let segPlay = null;  // { bar, start, end, loop } while a segment plays
  let segRaf = 0;
  let segLineBtn = null;  // the .text-line-play button currently playing its sentence

  function segSignature(o){
    const keys = Object.keys(o).filter(k => (o[k] || []).length).sort();
    return JSON.stringify(keys.map(k => [k, (o[k] || []).slice().sort((a, b) => a.line - b.line)]));
  }
  function loadSegs(){
    const base = window.TEXT_AUDIO_SEGMENTS;
    const out = {};
    if (base && typeof base === 'object'){
      Object.keys(base).forEach(k => { if (Array.isArray(base[k])) out[k] = base[k].slice(); });
    }
    const baseSig = segSignature(out);
    let raw = null;
    try { raw = window.localStorage.getItem(SEG_DRAFT_KEY); } catch (e) {}
    if (!raw) return out;
    try {
      const draft = JSON.parse(raw) || {};
      Object.keys(draft).forEach(k => { if (Array.isArray(draft[k])) out[k] = draft[k]; });
    } catch (e) { return out; }
    // The draft only matters while it differs from the file on disk; once the
    // exported file is in place (and the page reloaded) it is redundant.
    if (segSignature(out) === baseSig){
      try { window.localStorage.removeItem(SEG_DRAFT_KEY); } catch (e) {}
      segDraftDirty = false;
    } else {
      segDraftDirty = true;
    }
    return out;
  }
  function segList(tId){ return (textSegs[tId] || []).slice(); }
  function segOf(tId, li){
    const list = textSegs[tId];
    if (!list) return null;
    for (let i = 0; i < list.length; i++) if (list[i].line === li) return list[i];
    return null;
  }
  function segCount(){
    return Object.keys(textSegs).reduce((n, k) => n + (textSegs[k] || []).length, 0);
  }
  // Title audio = from the track start (0s) to the first sentence's A (start).
  function titleSegOf(tId){
    const list = textSegs[tId];
    const first = list && list.length
      ? list.slice().sort((a, b) => a.line - b.line)[0]
      : null;
    if (!first || first.start == null) return null;
    return { start: 0, end: first.start };
  }
  // Vocab audio = from the last sentence's B (end) to the track end (duration).
  // The end bound is only known once metadata loads, so we store -1 and clamp
  // to the audio's duration at play time.
  function vocabSegOf(tId){
    const list = textSegs[tId];
    const last = list && list.length
      ? list.slice().sort((a, b) => a.line - b.line)[list.length - 1]
      : null;
    if (!last || last.end == null) return null;
    return { start: last.end, end: -1 };
  }
  // Tooltip for a line's ▶; flags the segment when the line text changed since
  // it was marked (the stored `cn` no longer matches).
  function segTitle(seg, lineCn){
    const stale = seg.cn && lineCn != null && seg.cn !== lineCn;
    return (stale ? '⚠ 句子文本已变，建议重新标记 · ' : '播放这一句 · ')
      + fmtTime1(seg.start) + '–' + fmtTime1(seg.end) + '（Shift 点击＝循环）';
  }
  function textLinesOf(tId){
    for (let i = 0; i < lessonTexts.length; i++){
      const t = lessonTexts[i];
      if (String(t.id || (i + 1)) === String(tId)) return t.lines || [];
    }
    return [];
  }
  function saveSegDraft(){
    try {
      window.localStorage.setItem(SEG_DRAFT_KEY, JSON.stringify(textSegs));
      segDraftDirty = true;
    } catch (e) { /* quota / private mode → keep it in memory only */ }
    updateSegExportBtn();
  }
  function clearSegDraft(){
    try { window.localStorage.removeItem(SEG_DRAFT_KEY); } catch (e) {}
    segDraftDirty = false;
    updateSegExportBtn();
  }
  function exportSegs(){
    const keys = Object.keys(textSegs).filter(k => (textSegs[k] || []).length).sort();
    const body = keys.map(k => {
      const rows = textSegs[k]
        .slice()
        .sort((a, b) => a.line - b.line)
        .map(s => '    ' + JSON.stringify({ line: s.line, start: s.start, end: s.end, cn: s.cn || '' }));
      return '  ' + JSON.stringify(k) + ': [\n' + rows.join(',\n') + '\n  ]';
    });
    const text = '// Per-sentence audio segments for the Texts player.\n'
      + '// Written by the player\'s "✂ A/B" row, then "⇩ 导出时间点".\n'
      + '// Shape: { textId: [ { line, start, end, cn } ] } — seconds into that text\'s mp3.\n'
      + 'window.TEXT_AUDIO_SEGMENTS = {\n' + body.join(',\n') + (keys.length ? '\n' : '') + '};\n';
    const blob = new Blob([text], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audio-segments.js';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    return keys.length;
  }
  function updateSegExportBtn(){
    const btn = document.getElementById('segExportBtn');
    if (!btn) return;
    const n = segCount();
    btn.textContent = '⇩ 导出时间点' + (n ? ' (' + n + ')' : '');
    btn.title = '下载 audio-segments.js → 覆盖 hsk2/data/audio-segments.js 后刷新';
    const clear = document.getElementById('segClearBtn');
    if (clear){
      clear.hidden = !segDraftDirty;
      clear.title = '清除本地草稿（当前时间点只存在于浏览器里）';
    }
  }

  function markOf(tId){
    let m = segMarks[tId];
    if (!m) m = segMarks[tId] = { a: null, b: null, edge: null, line: 0, phase: 'idle' };
    return m;
  }
  // Update the one-key record/cut button + progress readout.
  function paintRec(row, tId){
    const m = markOf(tId);
    const btn = row.querySelector('.text-mark-btn[data-act="rec"]');
    const prog = row.querySelector('.text-mark-progress');
    const lines = textLinesOf(tId);
    const done = (textSegs[tId] || []).length;
    if (btn){
      btn.classList.toggle('recording', m.phase === 'markA');
      btn.classList.toggle('done', done >= lines.length && lines.length > 0);
      btn.disabled = false;
      if (m.phase === 'markA'){
        btn.textContent = '✂ 切断';
        btn.title = '标记句尾（B）：切下这一句并存下，随后自动暂停';
      } else {
        btn.textContent = '⏺ 录制';
        btn.title = '标记句首（A）：按下记下现在的位置，随后自动继续播';
      }
    }
    if (prog){
      prog.textContent = lines.length ? (done + ' / ' + lines.length) : '';
    }
  }
  function setMarkMsg(row, msg){
    const el = row.querySelector('.text-mark-msg');
    if (!el) return;
    el.textContent = msg;
    clearTimeout(setMarkMsg.timer);
    setMarkMsg.timer = setTimeout(() => { el.textContent = ''; }, 2400);
  }
  // Find the fine-tune tools container paired with a mark row.
  function toolsOf(row){
    let el = row.parentElement.querySelector('.text-mark-tools[data-text="' + cssEscape(row.dataset.text) + '"]');
    return el;
  }
  function paintMarkRow(row, tId){
    const tools = toolsOf(row);
    const m = markOf(tId);
    const aEl = tools && tools.querySelector('.seg-a');
    const bEl = tools && tools.querySelector('.seg-b');
    if (aEl){
      aEl.textContent = m.a == null ? 'A –' : 'A ' + fmtTime1(m.a);
      aEl.classList.toggle('is-edge', m.edge === 'a');
    }
    if (bEl){
      bEl.textContent = m.b == null ? 'B –' : 'B ' + fmtTime1(m.b);
      bEl.classList.toggle('is-edge', m.edge === 'b');
    }
  }
  // Highlight the currently-selected sentence for a text (no full re-render).
  function paintLineSelect(tId){
    if (!flashContainer) return;
    const m = markOf(tId);
    flashContainer.querySelectorAll('.text-item[data-text="' + cssEscape(tId) + '"] .text-line').forEach(el => {
      const li = parseInt(el.dataset.line, 10);
      el.classList.toggle('is-selected', li === m.line);
    });
  }
  // Add / remove the ▶ button on every line of one text (no full re-render).
  function refreshSegUI(tId){
    if (!flashContainer) return;
    const items = flashContainer.querySelectorAll('.text-item');
    for (let i = 0; i < items.length; i++){
      const item = items[i];
      if (item.dataset.text !== String(tId)) continue;
      item.querySelectorAll('.text-line').forEach(el => {
        const li = parseInt(el.dataset.line, 10);
        const seg = segOf(tId, li);
        let btn = el.querySelector('.text-line-play');
        if (seg){
          if (!btn){
            btn = document.createElement('button');
            btn.className = 'text-line-play';
            btn.dataset.line = String(li);
            btn.textContent = '▶';
            el.insertBefore(btn, el.firstChild);
          }
          btn.title = segTitle(seg, (textLinesOf(tId)[li] || {}).cn);
          el.classList.add('has-seg');
        } else if (btn){
          btn.remove();
          el.classList.remove('has-seg');
        }
      });
      updateSegExportBtn();
      return;
    }
  }
  function bindMarkRow(row){
    const tId = row.dataset.text;
    const bar = row.parentElement.querySelector('.text-audio');
    const tools = toolsOf(row);
    paintMarkRow(row, tId);
    paintRec(row, tId);
    paintLineSelect(tId);
    const allBtns = row.querySelectorAll('button[data-act]');
    const toolBtns = tools ? tools.querySelectorAll('button[data-act]') : [];
    Array.prototype.forEach.call(allBtns, bind);
    Array.prototype.forEach.call(toolBtns, bind);
    function bind(btn){
      btn.addEventListener('click', function(){
        const act = this.dataset.act;
        const m = markOf(tId);
        // One key: ⏺ (Mark A) ↔ ✂ (Mark B + cut), cycling automatically.
        if (act === 'rec'){
          const lines = textLinesOf(tId);
          const li = m.line;
          if (!(li < lines.length)){
            setMarkMsg(row, '请先点选一句');
            return;
          }
          if (m.phase === 'idle'){
            // Mark A at the current playhead — always re-sample, so re-cutting
            // a sentence starts clean rather than reusing an old A.
            if (!textAudio || textAudioBar !== bar){
              setMarkMsg(row, '先点 ▶ 播放到句首，再点 ⏺');
              return;
            }
            m.a = Math.round((textAudio.currentTime || 0) * 10) / 10;
            m.b = null;
            m.edge = null;
            m.phase = 'markA';
            paintMarkRow(row, tId);
            paintRec(row, tId);
            if (textAudio && textAudio.paused) textAudio.play().catch(() => stopTextAudio());
            setMarkMsg(row, '句中 A ' + fmtTime1(m.a) + ' · 播到句尾再点 ✂');
            return;
          }
          // phase === 'markA' → Mark B and cut this sentence.
          const t = Math.round((textAudio.currentTime || 0) * 10) / 10;
          const start = (m.a != null) ? Math.min(m.a, t) : 0;
          if (!(t > start)){
            setMarkMsg(row, '句尾还没到（或已切得太早）'); return;
          }
          const line = lines[li] || {};
          const list = (textSegs[tId] || []).filter(s => s.line !== li);
          list.push({ line: li, start: start, end: t, cn: line.cn || '' });
          list.sort((x, y) => x.line - y.line);
          textSegs[tId] = list;
          m.phase = 'idle';
          // Clear A/B so the next cut always re-samples fresh positions.
          m.a = null;
          m.b = null;
          m.edge = null;
          // Advance the selection to the next unmarked sentence for convenience;
          // the user can still click any sentence to re-cut it.
          const nextLi = lines.findIndex((_, i) => !segOf(tId, i));
          if (nextLi >= 0 && nextLi !== li) m.line = nextLi;
          // Cut always pauses the audio.
          textAudio.pause();
          setBarPlaying(bar, false);
          saveSegDraft();
          refreshSegUI(tId);
          paintMarkRow(row, tId);
          paintRec(row, tId);
          paintLineSelect(tId);
          setMarkMsg(row, '已切第 ' + (li + 1) + ' 句'
            + (m.line < lines.length && m.line !== li ? ' · 下一句点选后 ⏺' : ''));
          return;
        }
        // ✎ tune: toggle the fine-tune tools panel.
        if (act === 'tune'){
          if (!tools) return;
          const open = tools.hidden;
          tools.hidden = !open;
          this.classList.toggle('open', open);
          this.textContent = open ? '▾ 精调' : '✎ 精调';
          if (open){
            paintMarkRow(row, tId);
            paintLineSelect(tId);
          }
          return;
        }
        // Everything below is inside the fine-tune tools panel.
        if (act === 'a' || act === 'b'){
          if (!textAudio || textAudioBar !== bar){
            setMarkMsg(row, '先点 ▶ 播放，再按 ' + act.toUpperCase());
            return;
          }
          const t = Math.round((textAudio.currentTime || 0) * 10) / 10;
          if (act === 'a'){
            m.a = t;
            if (m.b != null && m.b <= m.a) m.b = null;
          } else {
            if (m.a == null) m.a = 0;
            if (t <= m.a){ setMarkMsg(row, 'B 必须晚于 A'); paintMarkRow(row, tId); return; }
            m.b = t;
          }
          m.edge = null;   // sampling a point does not select it for editing
          paintMarkRow(row, tId);
          return;
        }
        if (act === 'minus' || act === 'plus'){
          const delta = (act === 'plus' ? 0.1 : -0.1);
          // No point selected → nudge the playhead (seek bar time) instead.
          if (m.edge !== 'a' && m.edge !== 'b'){
            if (!textAudio || textAudioBar !== bar){
              setMarkMsg(row, '音频没在播，无法调播放位置'); return;
            }
            const nv = Math.max(0, Math.round(((textAudio.currentTime || 0) + delta) * 10) / 10);
            textAudio.pause();
            textAudio.currentTime = Math.min(nv, textAudio.duration || nv);
            syncBarFromAudio();
            return;
          }
          const k = m.edge;
          if (m[k] == null){ setMarkMsg(row, '这个点还没标，请先设点'); return; }
          const v = Math.max(0, Math.round((m[k] + delta) * 10) / 10);
          if (k === 'a' && m.b != null && v >= m.b){ setMarkMsg(row, 'A 必须早于 B'); return; }
          if (k === 'b' && m.a != null && v <= m.a){ setMarkMsg(row, 'B 必须晚于 A'); return; }
          m[k] = v;
          paintMarkRow(row, tId);
          // Jump to the nudged position (paused) so the user can hear/check it.
          if (textAudio && textAudioBar === bar){
            textAudio.pause();
            textAudio.currentTime = v;
            syncBarFromAudio();
          }
          return;
        }
        if (act === 'loop'){
          if (m.a == null || m.b == null){ setMarkMsg(row, '先按 A 和 B'); return; }
          const on = !this.classList.contains('is-on');
          if (on){
            playSegment(bar, m.a, m.b, true);
          } else {
            if (textAudio) textAudio.pause();
            segPlay = null;
            stopSegTick();
            if (textAudioBar === bar) setBarPlaying(bar, false);
          }
          this.classList.toggle('is-on', on);
          return;
        }
        if (act === 'save'){
          const selLi = m.line;
          if (m.a == null || m.b == null){ setMarkMsg(row, '先按 A 和 B'); return; }
          if (!(m.b > m.a)){ setMarkMsg(row, 'B 必须晚于 A'); return; }
          const lines = textLinesOf(tId);
          if (!lines.length){ setMarkMsg(row, '这篇课文还没有句子'); return; }
          if (!(selLi >= 0 && selLi < lines.length)){ setMarkMsg(row, '先点选一句'); return; }
          const line = lines[selLi] || {};
          const list = segList(tId).filter(s => s.line !== selLi);
          list.push({ line: selLi, start: m.a, end: m.b, cn: line.cn || '' });
          list.sort((x, y) => x.line - y.line);
          textSegs[tId] = list;
          saveSegDraft();
          refreshSegUI(tId);
          setMarkMsg(row, '已保存到第 ' + (selLi + 1) + ' 句');
          return;
        }
      });
    }
    // Click the A / B time label to jump there and enter edit mode on that edge.
    const segLabels = tools ? tools.querySelectorAll('.seg-a, .seg-b') : [];
    Array.prototype.forEach.call(segLabels, function(el){
      el.addEventListener('click', function(){
        const m = markOf(tId);
        const k = el.dataset.edge === 'b' ? 'b' : 'a';
        const v = m[k];
        if (v == null){
          setMarkMsg(row, (k === 'a' ? 'A' : 'B') + ' 还没标点');
          return;
        }
        m.edge = k;             // enter edit mode on this edge
        paintMarkRow(row, tId);
        if (!textAudio || textAudioBar !== bar){
          // Not loaded yet; just select (jump happens once the audio is open).
          return;
        }
        textAudio.pause();
        textAudio.currentTime = v;
        syncBarFromAudio();
      });
    });
  }

  // =====================================================================
  // State
  // =====================================================================
  let currentLesson=1;
  let currentMode='pairs';
  let currentIndex=0;
  let score=0;
  let isAnswered=false;
  let isCorrect=false;
  let userAnswer=null;
  let answeredQuestions={};
  let isRandom=false;
  let autoSpeak=false;
  let muted=false;
  let showPicEnglish=false;    // Picture mode: show the English line by default
  let kaitiMode=false;         // Kaiti font toggle — whole page switches to 楷体 (default OFF)
  let segMarking=false;        // sentence recording (A/B marks) — off by default
  let shadowing=false;         // shadowing: hide sentence text until tapped
  const CONTENT_ZOOMS = [0.8, 0.9, 1, 1.1, 1.2, 1.3];
  let contentZoomIdx=2;        // 0..5 → 0.8× … 1.3× zoom of the practice area (default 1×)
  let readRepeat=1;            // sentence-list read-aloud: times per sentence (1..5)
  let readTimer=null;
  let readActive=false;
  let readPaused=false;
  let readIndex=0;
  let readItemRep=0;           // repeats already spoken for readList[readIndex]
  let readShadow=false;        // shadowing: after each read, stay silent for the same duration
  let readLoop=false;          // loop: at the end of the list, read it again from the top
  let readList=[];             // texts to read in display order (word or sentence list)
  let readGen=0;               // bumps on every (re)start; stale callbacks check it
  let readWatchdog=null;       // per-read fallback timer (engines that never fire onend)
  let readSpeaking=false;      // an utterance is in flight right now
  let accumulative=false;
  let subMode='all';
  let listMode=false;          // card vs list (wordflash / sentflash only)
  let studyTab='word';         // Study module: word / sentence / texts
  let sentCardView='hanzi';    // sentence card front: hanzi / pinyin / english
  let wordCardView='hanzi';    // word card front: hanzi / pinyin / english
  let showListPinyin=true;     // word/sentence list: global pinyin visibility
  let showListEnglish=false;   // word/sentence list: global english visibility (default OFF)
  let showVocab=true;          // text view: expand the per-text vocabulary section (default ON)
  let showHl={ core:true, ext:true, 'acc-core':true, 'acc-ext':true, beyond:true };  // grammar highlight categories
  let showLv={ 1:true, 2:true, 3:true };  // grammar examples: which difficulty bands are listed (default: all)
  let listRevealed=new Set();  // word list: per-word reveal state
  let textRevealed=new Set();  // text list: per-line English reveal state
  let shadowRevealed=new Set();  // shadowing: lines whose text has been tapped to reveal
  let grammarOpen=new Set();   // grammar sections currently expanded (persist across re-renders)
  let grammarFocus=null;       // grammar point id flashed after a Topics jump (cleared on next render)
  let grammarSub='all';        // grammar scope: all / core / ext
  let sentenceSub='all';       // sentence-tab scope: all / core / ext
  let textSub='all';           // texts-tab scope: all / '1' / '2' / ... (position in scopeTexts())
  let noteTimer=null;

  let words=[];
  let phrases=[];              // current (possibly shuffled) sentence list
  let lessonPhrases=[];        // original sentence list for the lesson
  let lessonTexts=[];          // lesson texts (dialogues/passages) with audio
  let lessonGrammar=[];        // lesson grammar sections (grammar view)
  let lessonCoreWords=[];
  let lessonExtendedWords=[];
  let lessonTextVocab={};   // tId -> [vocab words] (each core word assigned to the first dialogue where it appears)
  let wordMap={};
  let pairsItems=[];
  let flashItems=[];
  let fillItems=[];
  let moleItems=[];
  let pictureItems=[];
  let pairsOptions=[];
  let autoAdvanceTimer = null;   // pending "next question" timer — cancelled on any manual navigation

  // Original (unshuffled) backups — applyRandomOrder() always rebuilds from these
  let originalPairs=[];
  let originalFlash=[];
  let originalPhrases=[];
  let originalMoleItems=[];
  let originalPicItems=[];
  let originalFillItems=[];
  let flashSpoken=false;
  let memoryCards=[];
  let memoryFlipped=[];
  let memoryMatched=[];
  let memoryLock=false;
  let molePool=[];
  let moleTarget=null;
  let moleCorrect=0;
  let moleWrong=0;
  let moleProcessing=false;
  let picItems=[];
  let picIndex=0;

  // =====================================================================
  // DOM
  // =====================================================================
  const $ = id => document.getElementById(id);
  const lessonList = $('lessonList');
  const lessonLabel = $('lessonLabel');
  const questionArea = $('questionArea');
  const subModeBar = $('subModeBar');
  const viewModeBar = $('viewModeBar');
  const studyTabBar = $('studyTabBar');
  const studyPickBtn = $('studyPickBtn');
  const gamePickBtn = $('gamePickBtn');
  const learnMenu = $('learnMenu');
  const gameMenuWrap = $('gameMenuWrap');
  const gameMenu = $('gameMenu');
  const listPinyinToggle = $('listPinyinToggle');
  // Each level's index.html decides the initial state via the checkbox attribute
  // (HSK3 ships with list pinyin off).
  showListPinyin = listPinyinToggle.checked;
  const listEnglishToggle = $('listEnglishToggle');
  const vocabToggle = $('vocabToggle');
  const vocabToggleWrap = $('vocabToggleWrap');
  const optionsContainer = $('optionsContainer');
  const flashContainer = $('flashContainer');
  const fillContainer = $('fillContainer');
  const moleContainer = $('moleContainer');
  const memoryContainer = $('memoryContainer');
  const pictureContainer = $('pictureContainer');
  const counterDisplay = $('counterDisplay');
  const statusBadgeEl = $('statusBadge');
  // The status-text slot in the top bar was removed from the UI — writes to
  // statusBadge are harmless no-ops. flashStatus() is the only way to briefly
  // surface text there (used by Show Answer).
  const statusBadge = { textContent: '', className: '' };
  function flashStatus(text){
    if (!statusBadgeEl) return;
    statusBadgeEl.textContent = text;
    statusBadgeEl.style.display = 'inline-block';
    if (noteTimer) clearTimeout(noteTimer);
    noteTimer = setTimeout(() => { statusBadgeEl.style.display = 'none'; }, 2500);
  }
  const scoreDisplay = $('scoreDisplay');
  const totalDisplay = $('totalDisplay');
  // The old status/activity bar was removed — keep a write-only no-op object so
  // the remaining `messageArea.… = …` assignments stay harmless.
  const messageArea = { textContent: '', className: '' };
  const randomToggle = $('randomToggle');
  const autoSpeakToggle = $('autoSpeakToggle');
  const muteToggle = $('muteToggle');
  const kaitiToggle = $('kaitiToggle');
  const latinFontToggle = $('latinFontToggle');
  const fontDownBtn = $('fontDownBtn');
  const fontUpBtn = $('fontUpBtn');
  const sentenceBox = $('sentenceBox');
  const topBar = $('topBar');
  const subMenu = $('subMenu');
  const picEnglishToggle = $('picEnglishToggle');
  const picEnglishToggleWrap = $('picEnglishToggleWrap');
  const accumulativeToggle = $('accumulativeToggle');
  const hamburgerBtn = $('hamburgerBtn');
  const sidebar = $('sidebar');
  const sidebarOverlay = $('sidebarOverlay');
  const navBar = $('navBar');
  const settingsBtn = $('settingsBtn');
  const settingsSidebar = $('settingsSidebar');
  const settingsOverlay = $('settingsOverlay');
  const fontSizeValue = $('fontSizeValue');
  const shadowFactorValue = $('shadowFactorValue');
  const shadowDownBtn = $('shadowDownBtn');
  const shadowUpBtn = $('shadowUpBtn');
  const startModeSeg = $('startModeSeg');
  const rememberLastToggle = $('rememberLastToggle');
  const segMarkingToggle = $('segMarkingToggle');
  const shadowingToggle = $('shadowingToggle');
  const settingsResetBtn = $('settingsResetBtn');
  const settingsNote = $('settingsNote');

  // Welcome screen: choosing a lesson (or opening Settings — which lives behind
  // it visually) dismisses it.
  let welcomeDismissed = false;
  function dismissWelcome(){
    if (welcomeDismissed) return;
    welcomeDismissed = true;
    const w = $('welcomeOverlay');
    if (w){ w.classList.add('hidden'); setTimeout(() => w.remove(), 450); }
  }

  // =====================================================================
  // Sidebar
  // =====================================================================
  function buildLessonMenu(){
    lessonList.innerHTML = '';
    LESSONS.forEach((L, i) => {
      const btn = document.createElement('button');
      btn.className = 'menu-item' + (currentLesson === i+1 ? ' active' : '');
      btn.textContent = L.name;
      btn.addEventListener('click', () => {
        dismissWelcome();
        setLesson(i+1);
        closeSidebar();
      });
      lessonList.appendChild(btn);
    });
  }
  function openSidebar(){
    closeSettings();
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
    hamburgerBtn.classList.add('open');
  }
  function closeSidebar(){
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('open');
  }
  hamburgerBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) closeSidebar(); else openSidebar();
  });
  sidebarOverlay.addEventListener('click', closeSidebar);

  // ---- Settings drawer (right side) ----
  // Storage keys are namespaced per level: hsk1 and hsk2 share one origin, so a
  // single 'hsk.last.v1' would make jumping between levels overwrite the other's
  // saved position. Level comes from <body data-level="hsk1|hsk2">.
  const LEVEL = (document.body.dataset.level || 'hsk1').toLowerCase();
  const LEVEL_NUM = parseInt(LEVEL.replace(/\D+/g, ''), 10) || 1;
  const SETTINGS_KEY = `hsk.${LEVEL}.settings.v1`;
  const LAST_KEY = `hsk.${LEVEL}.last.v1`;
  const LEGACY_SETTINGS_KEY = 'hsk.settings.v1';   // pre-namespace key, read once
  const DEFAULT_SETTINGS = { kaiti: false, latin: false, zoomIdx: 2, startMode: 'study', rememberLast: true, shadowFactor: 1.25, segMarking: false };
  const state = Object.assign({}, DEFAULT_SETTINGS);
  function loadSettings(){
    try {
      const own = localStorage.getItem(SETTINGS_KEY);
      if (own) return JSON.parse(own) || {};
      // First run after the namespace change: inherit the old shared settings.
      const legacy = localStorage.getItem(LEGACY_SETTINGS_KEY);
      return legacy ? (JSON.parse(legacy) || {}) : {};
    }
    catch (e) { return {}; }
  }
  function saveSettings(patch){
    Object.assign(state, patch);
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state)); }
    catch (e) { /* private mode / storage full — keep settings in memory only */ }
  }
  function loadLast(){
    try { return JSON.parse(localStorage.getItem(LAST_KEY)) || null; }
    catch (e) { return null; }
  }
  function persistLast(){
    try {
      localStorage.setItem(LAST_KEY, JSON.stringify({
        lesson: currentLesson,
        mode: isStudyMode() ? 'study' : 'game',
        studyTab: studyTab,
        gameMode: lastGameMode
      }));
    } catch (e) { /* ignore */ }
  }
  function isStudyMode(){
    return currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar' || currentMode === 'topics';
  }
  function syncStartModeSeg(){
    startModeSeg.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.start === state.startMode);
    });
  }
  function flashNote(msg){
    if (!settingsNote) return;
    settingsNote.textContent = msg;
    settingsNote.classList.add('show');
    clearTimeout(flashNote.timer);
    flashNote.timer = setTimeout(() => settingsNote.classList.remove('show'), 1800);
  }
  startModeSeg.addEventListener('click', e => {
    const btn = e.target.closest('button[data-start]');
    if (!btn) return;
    state.startMode = btn.dataset.start;
    saveSettings({ startMode: state.startMode });
    syncStartModeSeg();
  });
  rememberLastToggle.addEventListener('change', e => {
    state.rememberLast = e.target.checked;
    saveSettings({ rememberLast: state.rememberLast });
  });
  if (segMarkingToggle) segMarkingToggle.addEventListener('change', e => {
    segMarking = e.target.checked;
    saveSettings({ segMarking: segMarking });
    renderTextList();
  });
  if (shadowingToggle) shadowingToggle.addEventListener('change', e => {
    shadowing = e.target.checked;
    if (!shadowing) shadowRevealed.clear();
    if (isListModeActive()) renderPreservingScroll();
  });
  function syncShadowFactor(){
    shadowPauseFactor = state.shadowFactor;
    if (shadowFactorValue) shadowFactorValue.textContent = state.shadowFactor.toFixed(2).replace(/0$/, '') + '×';
    if (shadowDownBtn) shadowDownBtn.disabled = state.shadowFactor <= SHADOW_FACTORS[0];
    if (shadowUpBtn) shadowUpBtn.disabled = state.shadowFactor >= SHADOW_FACTORS[SHADOW_FACTORS.length - 1];
  }
  function stepShadowFactor(dir){
    const i = SHADOW_FACTORS.indexOf(state.shadowFactor);
    const next = SHADOW_FACTORS[Math.min(Math.max((i < 0 ? 0 : i) + dir, 0), SHADOW_FACTORS.length - 1)];
    if (next === state.shadowFactor) return;
    state.shadowFactor = next;
    saveSettings({ shadowFactor: next });
    syncShadowFactor();
  }
  if (shadowDownBtn) shadowDownBtn.addEventListener('click', () => stepShadowFactor(-1));
  if (shadowUpBtn) shadowUpBtn.addEventListener('click', () => stepShadowFactor(1));
  settingsResetBtn.addEventListener('click', () => {
    try { localStorage.removeItem(SETTINGS_KEY); localStorage.removeItem(LAST_KEY); } catch (e) { /* ignore */ }
    Object.assign(state, DEFAULT_SETTINGS);
    kaitiMode = false;
    document.body.classList.remove('kaiti', 'latin-serif');
    kaitiToggle.checked = false;
    latinFontToggle.checked = false;
    contentZoomIdx = DEFAULT_SETTINGS.zoomIdx;
    applyContentZoom();
    rememberLastToggle.checked = DEFAULT_SETTINGS.rememberLast;
    if (segMarkingToggle) segMarkingToggle.checked = DEFAULT_SETTINGS.segMarking;
    segMarking = DEFAULT_SETTINGS.segMarking;
    state.shadowFactor = DEFAULT_SETTINGS.shadowFactor;
    syncShadowFactor();
    syncStartModeSeg();
    flashNote('✓ Defaults restored');
  });
  function openSettings(){
    dismissWelcome();
    closeSidebar();
    settingsSidebar.classList.add('open');
    settingsOverlay.classList.add('open');
    settingsBtn.classList.add('open');
  }
  function closeSettings(){
    settingsSidebar.classList.remove('open');
    settingsOverlay.classList.remove('open');
    settingsBtn.classList.remove('open');
  }
  function toggleSettings(){
    if (settingsSidebar.classList.contains('open')) closeSettings(); else openSettings();
  }
  const saved = loadSettings();
  if (Number.isInteger(saved.zoomIdx)) contentZoomIdx = Math.min(Math.max(saved.zoomIdx, 0), CONTENT_ZOOMS.length - 1);
  state.kaiti = kaitiToggle.checked = !!saved.kaiti;
  state.latin = latinFontToggle.checked = !!saved.latin;
  state.zoomIdx = contentZoomIdx;
  state.startMode = saved.startMode === 'game' ? 'game' : 'study';
  state.rememberLast = saved.rememberLast !== false;
  state.segMarking = !!saved.segMarking;
  state.shadowFactor = SHADOW_FACTORS.includes(saved.shadowFactor) ? saved.shadowFactor : DEFAULT_SETTINGS.shadowFactor;
  rememberLastToggle.checked = state.rememberLast;
  segMarking = state.segMarking;
  if (segMarkingToggle) segMarkingToggle.checked = segMarking;
  syncShadowFactor();
  syncStartModeSeg();
  kaitiMode = kaitiToggle.checked;
  document.body.classList.toggle('kaiti', kaitiMode);
  document.body.classList.toggle('latin-serif', latinFontToggle.checked);

  // =====================================================================
  // Theme
  // =====================================================================
  function applyTheme(idx){
    const t = THEMES[(idx-1) % THEMES.length];
    const r = document.documentElement.style;
    r.setProperty('--theme-bg', t.bg);
    r.setProperty('--theme-accent', t.accent);
    r.setProperty('--theme-light', t.light);
    r.setProperty('--theme-mid', t.mid);
  }

  // =====================================================================
  // Lesson Data
  // =====================================================================
  // Resolve the core/extended word lists for a lesson index (1-based).
  // Review lessons carry { reviewRange:[a,b], extraCore:[], extraExtended:[] }
  // and reuse the vocabulary of the referenced lessons.
  function lessonWordSets(idx, list){
    const LS = list || LESSONS;
    const L = LS[idx-1];
    if (!L) return { core: [], extended: [] };
    if (L.reviewRange){
      let core=[], ext=[];
      for (let j=L.reviewRange[0]; j<=L.reviewRange[1]; j++){
        const src = LS[j-1];
        if (!src) continue;
        core = core.concat(src.core || []);
        ext = ext.concat(src.extended || []);
      }
      core = core.concat(L.extraCore || []);
      ext = ext.concat(L.extraExtended || []);
      const seen = new Set();
      const dedupe = arr => arr.filter(w => {
        const k = getUniqueId(w);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      return { core: dedupe(core), extended: dedupe(ext) };
    }
    return { core: L.core || [], extended: L.extended || [] };
  }

  // Vocabulary of the level below (hsk1), seen from the level under study.
  // hsk1 runs first, so all of it counts as already learned: hsk1 core folds
  // into "learned core" and hsk1 extended into "learned ext" — the same two
  // buckets earlier lessons of the current level feed. Every level keeps its
  // own alias (window.HSK1_LESSONS) while window.COURSE_LESSONS is overwritten
  // by the current level, so this identity check separates "a level below
  // exists" from "this IS hsk1" (hsk1 itself has no baseline).
  let baselineCache = null;
  function baselineWordSets(){
    if (baselineCache) return baselineCache;
    const base = window.HSK1_LESSONS;
    if (!base || base === LESSONS){
      baselineCache = { core: [], extended: [] };
      return baselineCache;
    }
    let core = [], extended = [];
    for (let i = 1; i <= base.length; i++){
      const ws = lessonWordSets(i, base);
      core = core.concat(ws.core);
      extended = extended.concat(ws.extended);
    }
    const coreSet = new Set(core.map(w => w.hanzi));
    baselineCache = {
      core: core.filter(w => !BASIC_WORDS.has(w.hanzi)),
      extended: extended.filter(w => !coreSet.has(w.hanzi) && !BASIC_WORDS.has(w.hanzi))
    };
    return baselineCache;
  }

  // =====================================================================
  // Core / Extended classification of whole sentences
  //   A sentence is "core" when it only uses this lesson's Core words plus the
  //   Core words of earlier lessons (and of the level below, see
  //   baselineWordSets()). Everything else — this lesson's Extended words,
  //   previously learned Extended words, later lessons' words, or words in no
  //   list — makes it "extended".
  //   The lesson word lists only carry teaching vocabulary, so basic function
  //   words and a few everyday words used by the grammar examples are missing
  //   from every list. They are neutral: never "extended", never highlighted.
  // =====================================================================
  const NEUTRAL_WORDS = new Set([
    '不', '的', '们', '吧', '没', '只', '儿', '哦', '呀', '嘛', '哎',
    '有', '点', '块', '个', '人', '中'
  ]);
  // Basic words every sentence is built from: particles, adverbs, prepositions,
  // conjunctions, demonstratives, measure words, time/position nouns. hsk1's
  // `extended` lists are really "extra chunks from the lessons" (在中国, 有点儿,
  // 怎么走), so words like 了 / 怎么 end up there — folded into the learned
  // buckets they would show up as "Learned Ext", which reads wrong. They are
  // whitelisted: dropped from the baseline and treated as neutral.
  // Only active when a level below provides the baseline, so hsk1's own
  // classification stays exactly as it was.
  const BASIC_WORDS = new Set((
    '的 了 着 过 吗 呢 吧 啊 呀 嘛 哦 啦 呗' +                       // particles
    ' 不 没 别 也 都 就 才 再 还 只 太 很 挺 最 更 又 已 刚' +        // adverbs
    ' 在 从 到 给 对 跟 把 被 比 为 往 向 离 和 但 而 因 所 虽 然' +  // preposition / conjunction
    ' 这 那 哪 谁 怎 么 什 们 几' +                                 // demonstrative / interrogative
    ' 个 块 只 张 条 位 件 次 些 点' +                              // measure words
    ' 天 年 月 日 早 晚 午 号 上 下 前 后 里 外 中 边 面 左 右' +      // time / position
    ' 怎么 什么 一定 一般 不错 做什么 干什么 多少钱 多久 有点儿 还行' +    // multi-char basics
    ' 真的 特别 经常 刚刚 以后 非常 一起 可以 很多 一点儿'
  ).split(' '));
  let neutralCache = null;
  function neutralWords(){
    if (neutralCache) return neutralCache;
    const base = window.HSK1_LESSONS;
    neutralCache = (base && base !== LESSONS)
      ? new Set([...NEUTRAL_WORDS, ...BASIC_WORDS])
      : NEUTRAL_WORDS;
    return neutralCache;
  }
  // Levels whose own corpus really uses `extended` (hsk1, hsk3) need a separate
  // colour for words found in no list at all, otherwise "an extended word this
  // lesson teaches" and "not in the textbook at all" would look identical.
  // Levels with an empty `extended` list (hsk2) reuse `ext` for both.
  let levelHasExtCache = null;
  function levelHasExtended(){
    if (levelHasExtCache === null) levelHasExtCache = LESSONS.some(L => (L.extended || []).length > 0);
    return levelHasExtCache;
  }
  const sentenceClassCache = {};
  function sentenceClassifier(lessonIdx){
    if (sentenceClassCache[lessonIdx]) return sentenceClassCache[lessonIdx];
    const sets = lessonWordSets(lessonIdx);
    const curCore = new Set(sets.core.map(w => w.hanzi));
    const curExt = new Set(sets.extended.map(w => w.hanzi));
    const accCore = new Set(), accExt = new Set();
    for (let i = 1; i < lessonIdx; i++){
      const p = lessonWordSets(i);
      p.core.forEach(w => accCore.add(w.hanzi));
      p.extended.forEach(w => accExt.add(w.hanzi));
    }
    const base = baselineWordSets();
    base.core.forEach(w => accCore.add(w.hanzi));
    base.extended.forEach(w => accExt.add(w.hanzi));
    const futWords = new Set();
    for (let i = lessonIdx + 1; i <= LESSONS.length; i++){
      const p = lessonWordSets(i);
      p.core.forEach(w => futWords.add(w.hanzi));
      p.extended.forEach(w => futWords.add(w.hanzi));
    }
    const known = new Set([...curCore, ...curExt, ...accCore, ...accExt, ...futWords, ...neutralWords()]);
    const isExtended = cn => {
      if (!cn) return false;
      let i = 0;
      while (i < cn.length){
        const ch = cn[i];
        if (!/[\u3400-\u9fff\uf900-\ufaff]/.test(ch)){ i++; continue; }
        let hit = null;
        for (let len = Math.min(6, cn.length - i); len > 0; len--){
          const sub = cn.slice(i, i + len);
          if (known.has(sub)){ hit = sub; break; }
        }
        if (hit && neutralWords().has(hit)){ i += hit.length; continue; }
        if (!hit || (!curCore.has(hit) && !accCore.has(hit))) return true;
        i += hit.length;
      }
      return false;
    };
    sentenceClassCache[lessonIdx] = isExtended;
    return isExtended;
  }

  // Keep a sentence when it matches the requested scope.
  function sentenceInScope(cn, scope){
    if (scope === 'all') return true;
    return sentenceClassifier(currentLesson)(cn) === (scope === 'ext');
  }

  function getLessonData(lesson, includeAccumulative){
    const L = LESSONS[lesson-1];
    if (!includeAccumulative){
      const ws = lessonWordSets(lesson);
      return { core: ws.core, extended: ws.extended, phrases: L.phrases || [], texts: L.texts || [], grammar: L.grammar || [], name: L.name };
    }
    let core=[], extended=[], phrasesOut=[], textsOut=[];
    const seenWord = new Set();
    const seenPhr = new Set();
    const seenText = new Set();
    for (let i=1; i<=lesson; i++){
      const ws = lessonWordSets(i);
      ws.core.forEach(w=>{
        const k = getUniqueId(w);
        if (!seenWord.has(k)){ seenWord.add(k); core.push(w); }
      });
      ws.extended.forEach(w=>{
        const k = getUniqueId(w);
        if (!seenWord.has(k)){ seenWord.add(k); extended.push(w); }
      });
      (LESSONS[i-1].phrases || []).forEach(p=>{
        if (!seenPhr.has(p.cn)){ seenPhr.add(p.cn); phrasesOut.push(p); }
      });
      (LESSONS[i-1].texts || []).forEach(t=>{
        if (!seenText.has(t.id)){ seenText.add(t.id); textsOut.push(t); }
      });
    }
    return { core, extended, phrases: phrasesOut, texts: textsOut, name: `Cumulative L1-L${lesson}` };
  }

  // Words currently in play: core only · extended only · core + extended.
  function activeWords(){
    if (subMode === 'all') return lessonCoreWords.concat(lessonExtendedWords);
    if (subMode === 'ext') return lessonExtendedWords.slice();
    return lessonCoreWords.slice();
  }
  // Human-readable name of the current word set.
  function subModeLabel(){
    if (subMode === 'all') return 'core + extended';
    return subMode === 'ext' ? 'extended only' : 'core only';
  }

  const EMOJI_MAP = {
    '你好':'👋','我':'🙋','你':'🧑','他':'👨','她':'👩','它':'🐾','很好':'👍',
    '中国':'🇨🇳','荷兰':'🇳🇱','巴西':'🇧🇷','美国':'🇺🇸','日本':'🇯🇵','澳洲':'🇦🇺',
    '小狗':'🐕','小猫':'🐈','朋友':'🤝','小朋友':'🧒','爸爸':'👨','妈妈':'👩',
    '老师':'👨‍🏫','学生':'🧑‍🎓','什么':'❓','这':'👉','那':'👈','是':'✅',
    '行':'✅','饿':'🍽️','渴':'💧','累':'😫','对':'✔️','要':'📌','说':'🗣️','忙':'📅',
    '面包':'🍞','包子':'🥠','汉堡':'🍔','英国':'🇬🇧','越南':'🇻🇳',
    '咖啡':'☕','啤酒':'🍺','茶':'🍵','苏打水':'🥤','水':'💧','手机':'📱','电脑':'💻',
    '中国菜':'🍜','美国菜':'🍔','英国菜':'🇬🇧','越南菜':'🇻🇳','荷兰菜':'🇳🇱','巴西菜':'🥩',
    '商场':'🏬','学校':'🏫','公司':'🏢','餐馆':'🍽️','咖啡馆':'☕','洗手间':'🚻',
    '北京':'🇨🇳','武汉':'🇨🇳','新加坡':'🇸🇬','旅游':'✈️','上学':'📚','上课':'📖',
    '吃饺子':'🥟','喝咖啡':'☕','喝茶':'🍵','吃饭':'🍚','买东西':'🛍️','上班':'💼',
    '喜欢':'❤️','想':'💭','去':'🚀','吃':'🍽️','喝':'🥤','买':'🛒',
    '钱':'💰','米饭':'🍚','杯子':'🥛','钱包':'👛','碗':'🍚','苹果':'🍎','车':'🚗',
    '衣服':'👕','商店':'🏪','书店':'📚','英语书':'📖','飞机':'✈️','出租车':'🚕',
    '大学':'🎓','饭店':'🍽️','听':'👂','认识':'🤝','高兴':'😊','医生':'👨‍⚕️','医院':'🏥',
    '椅子':'🪑','猫':'🐈','狗':'🐕','生病':'🤒','工作':'💼','工人':'👷','桌子':'🪑','床':'🛏️','书':'📖',
    // —— L1 补充 ——
    '怎么样':'❓','呢':'❓','中国人':'🇨🇳','荷兰人':'🇳🇱','巴西人':'🇧🇷','美国人':'🇺🇸','日本人':'🇯🇵','澳洲人':'🇦🇺','来自':'🛬','住在':'🏠',
    // —— L2 ——
    '吗':'❓','也':'➕','很':'💯','好':'👍','哪里':'📍',
    // —— L3 数字 ——
    '一':'1️⃣','二':'2️⃣','三':'3️⃣','四':'4️⃣','五':'5️⃣','六':'6️⃣','七':'7️⃣','八':'8️⃣','九':'9️⃣','十':'🔟',
    // —— L4 ——
    '吃中国菜':'🍜','吃美国菜':'🍔','吃巴西菜':'🥩','吃包子':'🥠',
    // —— L5 数字与钱 ——
    '多少':'❓','几':'🔢','岁':'🎂','多少岁':'🎂','几岁':'🎂','哥哥':'👦','姐姐':'👧','弟弟':'👦','妹妹':'👧',
    '元':'💴','多少钱':'💰','几元':'💴','几块钱':'💰','一块钱':'🪙','两块钱':'🪙','三块钱':'🪙','四块钱':'🪙',
    '十块钱':'💵','十五块钱':'💵','二十块钱':'💵','二十八块钱':'💵','三十块钱':'💵','零':'0️⃣',
    '十一':'1️⃣1️⃣','十二':'1️⃣2️⃣','十三':'1️⃣3️⃣','十四':'1️⃣4️⃣','十五':'1️⃣5️⃣','十六':'1️⃣6️⃣','十七':'1️⃣7️⃣','十八':'1️⃣8️⃣','十九':'1️⃣9️⃣','二十':'2️⃣0️⃣','三十':'3️⃣0️⃣',
    // —— L6 ——
    '汉字':'🀄','说汉语':'🗣️','写汉字':'✍️','做':'🛠️','写':'✍️','读':'📖','卖':'🏷️','走':'🚶','做中国菜':'🍜',
    '会':'✅','不会':'🚫','好吃':'😋','写字':'✍️','做饭':'🍳','开车':'🚗','游泳':'🏊','唱歌':'🎤','跳舞':'💃','拍照':'📷',
    '汉语':'🀄','英语':'🇬🇧','法语':'🇫🇷','荷兰语':'🇳🇱','日语':'🇯🇵','西班牙语':'🇪🇸',
    // —— L7 ——
    '号':'#️⃣','月':'📅','一月':'🗓️','三月':'🗓️','四月':'🗓️','六月':'🗓️','七月':'🗓️','十一月':'🗓️','十二月':'🗓️',
    '看书':'📖','今天':'📅','昨天':'🔙','明天':'🔜','做什么':'❓','看':'👀','星期几':'📅',
    '星期一':'1️⃣','星期二':'2️⃣','星期四':'4️⃣','星期六':'6️⃣','星期日':'7️⃣','星期天':'7️⃣',
    // —— L8 ——
    '法国菜':'🇫🇷','做菜':'🍳','很少':'📉','不少':'📈','个':'📦','两个':'2️⃣','一个人':'👤','两个人':'👥',
    '一个地方':'📍','一个朋友':'🤝','一个杯子':'🥛','上午':'🌅','下午':'🌇','晚上':'🌙',
    '草莓':'🍓','蓝莓':'🫐','披萨':'🍕','鸡蛋':'🥚','虾':'🦐',
    // —— L9 ——
    '上':'⬆️','下':'⬇️','看医生':'🧑‍⚕️','在哪儿':'📍','在这儿':'👉','在那儿':'👈','在下面':'⬇️','在上面':'⬆️','哪儿':'📍',
    '儿子':'👦','椅子上':'🪑','椅子下面':'🪑','桌子上':'🪑','桌子下面':'🪑','床上':'🛏️','床下面':'🛏️',
    '车站':'🚉','银行':'🏦','公园':'🏞️','家':'🏠','湖北':'🇨🇳','小龙虾':'🦞','辣':'🌶️','一定':'✅','出生':'👶',
    // —— L10 ——
    '坐':'🪑','爸爸和妈妈':'👨‍👩','里':'📦','在':'📍','和':'🤝','一本书':'📖','前面':'⬅️','后面':'➡️','没有':'🚫',
    '这儿':'👉','能':'✅','不能':'🚫','来':'🚶','可以':'✅','有事':'📅','餐馆里':'🍽️','学校里':'🏫',
    // —— L11 时间 ——
    '几点':'🕐','几点前':'🕐','几点几分':'🕐','时候':'⏰','什么时候':'⏰','五点前':'🕔','五点后':'🕔','现在':'🕐',
    '五点':'🕔','两点':'🕑','九点四十五':'🕤','十二点':'🕛','三点零五':'🕒','六点半':'🕡','十点十分':'🕙',
    '上午五点二十五分':'🌅','下午六点十五分':'🌇','三天前':'🔙','一个星期前':'🔙','一周前':'🔙','四点前':'🕓','星期五前':'🔙',
    '多久':'⏳','时间':'⏰','三点后':'🕒','四点半后':'🕟','晚上七点后':'🌙','上午八点五十分后':'🌅',
    '关门':'🚪','开门':'🚪','起床':'🛏️','下班后':'🏢','回家后':'🏠',
    // —— L12 ——
    '天气':'🌤️','太':'❗','太...了':'❗','太热了':'🥵','太冷了':'🥶','不太':'❗','热':'🥵','冷':'🥶','下雨':'🌧️',
    '水果':'🍉','小姐':'👩','身体':'💪','爱':'❤️','些':'📦','多':'➕','附近':'📍','我家附近':'📍',
    '这家':'🏪','那家':'🏪','我觉得':'💭','八点前':'🕗','身体好':'💪','舒服':'😌','工作有意思':'💼','学习很难':'📚',
    '运动很好玩':'⚽','运动很累':'🏃','运动很有意思':'⚽','酒店':'🏨','超市':'🛒','房间':'🚪',
    '不错':'👍','干净':'✨','贵':'💰','便宜':'🏷️','人多':'👥','人少':'👤','大':'🐘','小':'🐭','服务好':'👍',
    '挺':'❗','不太热':'😊','不太冷':'😊','不太好':'😐','一般':'😐','还行':'🙂','有点儿':'📌',
    '广东':'🇨🇳','广州':'🇨🇳','深圳':'🇨🇳','粤语':'🗣️','普通话':'🗣️','早茶':'🍵','香港':'🇭🇰','感觉':'💭',
    // —— L13 ——
    '看电视':'📺','睡觉':'😴','打电话':'📞','学习':'📚','给':'🎁','努力':'💪','考试':'📝','散步':'🚶',
    '打篮球':'🏀','踢足球':'⚽','玩':'🎮','玩游戏':'🎮','玩手机':'📱','玩电脑':'💻','玩猫':'🐈','好玩':'😄','视频':'🎬',
    '读大学':'🎓','面条':'🍜','周末':'📅','上周末':'📅','上周五':'📅','上周六':'📅','上周一':'📅','上周':'📅','上个月':'📅',
    '干什么':'❓','四川':'🇨🇳','成都':'🇨🇳','大熊猫':'🐼','可爱':'🥰','火锅':'🍲',
    // —— L14 ——
    '东西':'🛍️','一点儿':'📦','看见':'👀','先生':'👨','回来':'🏠','分钟':'⏱️','后':'🔜','张':'📄','漂亮':'🌸',
    '少':'📉','这些':'👉','都':'✅','啊':'❗','火车':'🚆','地铁':'🚇','鸟':'🐦','路过':'🚶','经常':'🔁','刚刚':'⏰','一般不':'❓','云南':'🇨🇳',
    // —— L15 ——
    '坐飞机':'✈️','年':'📅','一起':'🤝','机场':'🛫','骑自行车':'🚲','打车':'🚕','高中':'🏫','初中':'🏫','小学':'🏫',
    '上大学':'🎓','上高中':'🏫','上初中':'🏫','上小学':'🏫','音乐':'🎵','说话':'🗣️','走路':'🚶',
    '买车':'🚗','停车':'🅿️','前天':'🔙','后天':'🔜','今年':'📅',
    // —— 补漏 ——
    '怎么':'❓','怎么去':'🚶','怎么写':'✍️','怎么卖':'🏷️','怎么走':'🚶','怎么读':'📖','怎么做':'🛠️','了':'✅','房子':'🏠','饺子':'🥟',
    '寿司':'🍣','学法语':'🇫🇷','学中文':'🀄','洗碗':'🍽️','读书':'📖','十一块钱':'🪙','十二块钱':'🪙','二十五块钱':'💵','二十七块钱':'💵',
    '椰子鸡':'🥥🍗',
    '海南':'🇨🇳','海':'🌊','海边':'🏖️',
    '楼下':'🏢','包':'🎒','口袋':'👜','厨房':'👩‍🍳','眼镜':'👓','沙发':'🛋️','买药':'💊','坐车':'🚌','取钱':'🏧',
    '车站里':'🚉','商店里':'🏪','家里':'🏠','卧室':'🛏️','客厅':'🛋️','卫生间':'🚻','很多':'➕','打开':'🔓','用':'🛠️','喝水':'💧','告诉':'🗣️',
    '灯':'💡','马桶':'🚽','毛巾':'🧻','勺子':'🥄','筷子':'🥢','刀':'🔪','锅':'🍲','鞋子':'👟','山东':'🇨🇳','出国':'🛫','真的':'✅',
    '花':'💐','非常':'❗','美':'🌸','厉害':'💪','特别':'⭐',
    '明年':'📅','以后':'🔜','外面':'🏞️','住':'🏠','淘宝':'🛒','网上':'💻','甜':'🍬','浙江':'🇨🇳','杭州':'🇨🇳','西湖':'🏞️','风景':'🏞️'
  };

  function buildPairsItems(allWords){
    return allWords.map(w => ({
      ...w,
      distractors: shuffleCopy(allWords.filter(d => getUniqueId(d) !== getUniqueId(w))).slice(0, 3)
    }));
  }

  // 虚词 / 抽象疑问词不出现在图片题里（它们没有可辨识的图）。
  const PIC_EXCLUDE = new Set([
    // 语气词 / 助词
    '吗','呢','了','啊','吧','呀','哦',
    // 副词
    '很','太','挺','也','都','最','非常','特别','一般','还行','有点儿','一定','真的','经常','刚刚','没有','不能','不会','不太','不太好','一般不',
    // 连词 / 介词 / 结构
    '和','在','从','把','被','里','中','跟',
    // 疑问词
    '什么','怎么样','怎么','多少','几','哪儿','哪里','为什么','什么时候','几点','几点前','几点几分','多久','星期几','做什么','干什么','在哪儿','多少岁','几岁','太...了'
  ]);

  function buildPicItems(allWords){
    let items = allWords
      .filter(w => EMOJI_MAP[w.hanzi] && !PIC_EXCLUDE.has(w.hanzi))
      .map(w => ({
        ...w,
        emoji: EMOJI_MAP[w.hanzi],
        distractors: shuffleCopy(allWords.filter(d => getUniqueId(d) !== getUniqueId(w))).slice(0, 3)
      }));
    if (items.length === 0){
      items = allWords.slice(0, 4).map(w => ({
        ...w,
        emoji: '📦',
        distractors: allWords.filter(d => getUniqueId(d) !== getUniqueId(w)).slice(0, 3)
      }));
    }
    return items;
  }

  // =====================================================================
  // Local pictures — image/<word>.jpg, emoji stays as the fallback.
  // =====================================================================
  function localImgPath(hanzi){
    return 'image/' + encodeURIComponent(hanzi) + '.jpg';
  }

  // Segment a sentence into whole vocabulary words (longest match first).
  function segmentWords(text, vocab){
    const tokens = [];
    let i = 0;
    while (i < text.length){
      let hit = null;
      for (let len = Math.min(6, text.length - i); len > 0; len--){
        const sub = text.slice(i, i + len);
        if (vocab[sub]){ hit = sub; break; }
      }
      if (hit){ tokens.push({ idx: i, word: hit, length: hit.length, isWord: true }); i += hit.length; }
      else { tokens.push({ idx: i, word: text[i], length: 1, isWord: false }); i++; }
    }
    return tokens;
  }

  // Randomly pick ONE whole word from item.cands and build a fresh blank item.
  // Called again every time the question is (re)presented, so the blanked word varies.
  function pickFillBlank(item, wordPool){
    const p = item.phrase;
    const cands = (item.cands && item.cands.length) ? item.cands : [{ idx: 0, word: p.cn[0], length: 1 }];
    const chosen = cands[Math.floor(Math.random() * cands.length)];
    const chars = p.cn.split('');
    const answer = chosen.word;
    const parts = [];
    let i = 0;
    while (i < chars.length){
      if (i === chosen.idx){
        const wc = [];
        for (let j = 0; j < chosen.length && i + j < chars.length; j++) wc.push(chars[i + j]);
        parts.push({ chars: wc, isBlank: true, fullWord: answer });
        i += chosen.length;
      } else {
        parts.push({ chars: [chars[i]], isBlank: false, fullWord: null });
        i++;
      }
    }
    const pool = wordPool || words;
    const dist = shuffleCopy(pool.filter(w => getUniqueId(w) !== getUniqueId({ hanzi: answer }))).slice(0, 3);
    const options = shuffleCopy([answer, ...dist.map(w => w.hanzi)]);
    return { phrase: p, cands, parts, answer, options };
  }

  // Whole HSK1 dictionary (all lessons) — used to find proper word boundaries.
  let FULL_VOCAB = null;
  function fullVocab(){
    if (FULL_VOCAB) return FULL_VOCAB;
    FULL_VOCAB = {};
    LESSONS.forEach(L => {
      (L.core || []).forEach(w => { FULL_VOCAB[w.hanzi] = true; });
      (L.extended || []).forEach(w => { FULL_VOCAB[w.hanzi] = true; });
      (L.extraCore || []).forEach(w => { FULL_VOCAB[w.hanzi] = true; });
      (L.extraExtended || []).forEach(w => { FULL_VOCAB[w.hanzi] = true; });
    });
    Object.keys(EXTRA_PINYIN_WORDS).forEach(k => { FULL_VOCAB[k] = true; });
    return FULL_VOCAB;
  }

  function buildFillItems(pList, allWords){
    const vocab = {};
    allWords.forEach(w => { vocab[w.hanzi] = true; });
    const dict = fullVocab();
    return pList.map(p => {
      const tokens = segmentWords(p.cn, dict).filter(t => t.isWord);
      const multi = tokens.filter(t => t.length > 1);
      // 1) whole words that belong to the current lesson
      let cands = multi.filter(t => vocab[t.word]);
      // 2) otherwise any whole word in the sentence
      if (cands.length < 2) cands = multi.slice();
      // 3) otherwise single-character words, so the blank still varies
      if (cands.length < 2) cands = tokens.slice();
      if (cands.length === 0) cands = [{ idx: 0, word: p.cn[0], length: 1 }];
      return pickFillBlank({ phrase: p, cands }, allWords);
    });
  }

  // Re-roll which word is blanked out (used by Reset / Next / First / mode switch).
  function reseedFillBlank(){
    if (currentMode !== 'fill') return;
    const it = fillItems[currentIndex];
    if (!it) return;
    fillItems[currentIndex] = pickFillBlank({ phrase: it.phrase, cands: it.cands });
  }

  // Words may ship without a `pinyin` field (HSK2 keeps it out of the data files
  // so pinyin-pro is the single source of truth). Derive it once per word; the
  // non-ruby UI (card back, whack-a-mole, memory, picture) reads `pinyin`.
  function withPinyin(list){
    return (list || []).map(w => (w && w.pinyin) ? w : Object.assign({}, w, { pinyin: pinyinFor(w.hanzi) }));
  }

  // Assign each lesson core word to the FIRST dialogue where any of its
  // character parts occurs. A word is a single hanzi string, but "template"
  // words like 因为……所以…… are split on '……' into parts; the word counts as
  // present in a dialogue if any part's characters all occur in that dialogue.
  function buildTextVocab(){
    lessonTextVocab = {};
    if (!lessonCoreWords.length || !lessonTexts.length) return;
    lessonTexts.forEach(t => { lessonTextVocab[t.id] = []; });
    lessonCoreWords.forEach(w => {
      const parts = String(w.hanzi || '').split('……').filter(Boolean);
      if (!parts.length) return;
      for (const t of lessonTexts){
        const full = (t.lines || []).map(l => (l.cn || '')).join('');
        const hit = parts.some(p => Array.from(p).every(ch => full.indexOf(ch) !== -1));
        if (hit){ lessonTextVocab[t.id].push(w); break; }
      }
    });
  }

  function initLessonData(){
    const data = getLessonData(currentLesson, accumulative);
    lessonCoreWords = withPinyin(data.core);
    lessonExtendedWords = withPinyin(data.extended);
    lessonPhrases = data.phrases || [];
    lessonTexts = data.texts || [];
    buildTextVocab();
    // Prefer the external sentence corpus (data/sentences/grammar-sentences.*).
    // Falls back to the inline LESSONS[].grammar when unavailable.
    const ext = externalLessonGrammar(currentLesson);
    lessonGrammar = (ext && ext.length) ? ext : (data.grammar || []);
    lessonLabel.textContent = data.name;
    applyTheme(currentLesson);

    rebuildSubModeData();

    currentIndex=0; score=0; isAnswered=false; userAnswer=null; answeredQuestions={};
    memoryCards=[]; memoryFlipped=[]; memoryMatched=[]; memoryLock=false;
    moleCorrect=0; moleWrong=0; moleProcessing=false; picIndex=0;
    updateScore();
  }

  // External sentence corpus adapter: data/sentences/grammar-sentences.{json,js}.
  // Looks the corpus up by the lesson's id (LESSONS[lesson-1].id, e.g. '10',
  // '1-10', 'all'), falling back to array position for corpora that lack keys.
  // `lesson` is the 1-based index. Returns an array in the app's grammar shape
  // ({id,cn,py,en,note,items:[{c,en,py}]}), or null when the corpus is unavailable.
  function externalLessonGrammar(lesson){
    const corpus = window.SENTENCE_CORPUS || window.GRAMMAR_SENTENCES;
    if (!corpus || !corpus.length) return null;
    const key = (LESSONS[lesson - 1] || {}).id;
    const L = key
      ? corpus.find(c => c && c.key === key)
      : corpus[lesson - 1];
    if (!L || !L.points || !L.points.length) return null;
    // English/pinyin may live in the legacy phrases[] — resolve through it first.
    const pmap = {};
    (lessonPhrases || []).forEach(p => { if (p.cn && !(p.cn in pmap)) pmap[p.cn] = p; });
    return L.points.map(p => ({
      id: p.id,
      textId: p.textId || '',
      cn: p.cn || '',
      py: p.py || '',
      en: p.en || '',
      // 'extended' marks a point that goes beyond the textbook's own grammar
      // list (default = core). Surfaced as a badge and kept for filtering.
      tag: p.tag || '',
      tags: (p.tags || []).map(String).filter(Boolean),
      note: noteText(p.note),
      noteEn: p.noteEn || '',
      practice: p.practice || [],
      subs: (p.subs || []).map(s => ({ id: s.id, label: s.label || '', exp: s.exp || '' })),
      items: (p.items || []).map(it => {
        const lp = pmap[it.c];
        const py = it.py || p.py || (lp && (lp.pinyin || lp.py)) || '';
        const en = it.en || (lp && lp.en) || '';
        const o = { c: it.c };
        if (py) o.py = py;
        if (en) o.en = en;
        if (it.sub) o.sub = it.sub;
        // lv = slot complexity of the example: 1 word / 2 phrase / 3 clause.
        // tags = per-sentence labels such as COLLOC (semi-fixed collocation).
        if (it.lv) o.lv = +it.lv;
        if (it.tags && it.tags.length) o.tags = it.tags.map(String).filter(Boolean);
        return o;
      })
    }));
  }

  // Rebuild every module's dataset from the words of the current subMode.
  // The flat sentence list shown in the Sentence tab (and used by sentence Fill
  // Blank). Built from lessonGrammar.items in section order; for lessons that have
  // no grammar data yet it falls back to the lesson's phrases[].
  function grammarSentenceList(){
    if (lessonGrammar && lessonGrammar.length){
      // phrases[] still carries the translations (grammar items often have no en),
      // so resolve English and pinyin through it first.
      const pmap = {};
      (lessonPhrases || []).forEach(p => { if (p.cn && !(p.cn in pmap)) pmap[p.cn] = p; });
      const out = [];
      lessonGrammar.forEach(g => {
        (g.items || []).forEach(it => {
          const p = pmap[it.c];
          out.push({
            cn: it.c,
            en: (it.en || (p && p.en)) || '',
            py: (it.py || (p && (p.pinyin || p.py))) || '',
            pinyin: (it.py || (p && (p.pinyin || p.py))) || ''
          });
        });
      });
      return out;
    }
    return (lessonPhrases || []).map(p => ({ cn: p.cn, en: p.en || '', py: p.pinyin || p.py || '', pinyin: p.pinyin || p.py || '' }));
  }

  function rebuildSubModeData(){
    const allWords = activeWords();
    words = allWords;
    wordMap = {};
    allWords.forEach(w => { wordMap[w.hanzi] = w; });

    originalFlash = allWords.map(w => ({ ...w, isPhrase: false }));
    originalPairs = buildPairsItems(allWords);
    originalPhrases = grammarSentenceList();
    originalFillItems = buildFillItems(originalPhrases, allWords);
    originalPicItems = buildPicItems(allWords);

    originalMoleItems = allWords.slice(0, 6);
    while (originalMoleItems.length < 6 && allWords.length > 0){
      originalMoleItems.push(allWords[originalMoleItems.length % allWords.length]);
    }

    applyRandomOrder();
  }

  // Always rebuild from the *original* arrays so toggling Random on/off is
  // deterministic and never loses the source order.
  function applyRandomOrder(){
    // The Sentence tab honours the All / Core / Extended scope from the menu.
    const base = (studyTab === 'sentence' && currentMode === 'sentflash')
      ? originalPhrases.filter(p => sentenceInScope(p.cn, sentenceSub))
      : originalPhrases;
    if (isRandom){
      fillItems = shuffleCopy(originalFillItems);
      pairsItems = shuffleCopy(originalPairs);
      flashItems = shuffleCopy(originalFlash);
      moleItems = shuffleCopy(originalMoleItems);
      picItems = shuffleCopy(originalPicItems);
      phrases = shuffleCopy(base);
    } else {
      fillItems = [...originalFillItems];
      pairsItems = [...originalPairs];
      flashItems = [...originalFlash];
      moleItems = [...originalMoleItems];
      picItems = [...originalPicItems];
      phrases = [...base];
    }
  }

  // Global Core / Extended switch — visible on every module except Sentence/Texts mode.
  function renderSubModeBar(){
    const row = subModeBar.closest('.ctx-row');
    if (currentMode === 'grammar'){
      if (row) row.style.display = 'flex';
      subModeBar.innerHTML = `
        <button class="${grammarSub==='all'?'active':''}" data-gsub="all">${chipText('📚📖', 'All')}</button>
        <button class="${grammarSub==='core'?'active':''}" data-gsub="core">${chipText('📚', 'Core HSK')}</button>
        <button class="${grammarSub==='ext'?'active':''}" data-gsub="ext">${chipText('📖', 'Extended')}</button>
      `;
      subModeBar.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function(){
          if (this.dataset.gsub === grammarSub) return;
          grammarSub = this.dataset.gsub;
          renderPreservingScroll();
          animateChipExpand(subModeBar, `button[data-gsub="${grammarSub}"]`);
        });
      });
      return;
    }
    if (currentMode === 'texts'){
      const scoped = scopeTexts();
      if (scoped.length < 2){
        if (row) row.style.display = 'flex';
        subModeBar.innerHTML = '<button class="ctx-na" disabled>n/a</button>';
        return;
      }
      if (row) row.style.display = 'flex';
      subModeBar.innerHTML = `
        <button class="${textSub==='all'?'active':''}" data-tsub="all">${chipText('📄', 'All')}</button>
        ${scoped.map((t, i) => `<button class="${textSub===String(i+1)?'active':''}" data-tsub="${i+1}" title="${escapeHtml((t.title && t.title.cn) || '')}">${chipText('📄', String(i+1))}</button>`).join('')}
      `;
      subModeBar.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function(){
          if (this.dataset.tsub === textSub) return;
          textSub = this.dataset.tsub;
          renderPreservingScroll();
          animateChipExpand(subModeBar, `button[data-tsub="${textSub}"]`);
        });
      });
      return;
    }
    if (currentMode === 'topics'){
      if (row) row.style.display = 'none';
      subModeBar.innerHTML = '';
      return;
    }
    // Sentence tab: the same All / Core / Extended scope the Grammar tab uses,
    // filtering the sentence list by the lesson's Core-vs-Extended split.
    if (studyTab === 'sentence' && (currentMode === 'wordflash' || currentMode === 'sentflash')){
      if (row) row.style.display = 'flex';
      subModeBar.innerHTML = `
        <button class="${sentenceSub==='all'?'active':''}" data-ssub="all">${chipText('📚📖', 'All')}</button>
        <button class="${sentenceSub==='core'?'active':''}" data-ssub="core">${chipText('📚', 'Core HSK')}</button>
        <button class="${sentenceSub==='ext'?'active':''}" data-ssub="ext">${chipText('📖', 'Extended')}</button>
      `;
      subModeBar.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function(){
          if (this.dataset.ssub === sentenceSub) return;
          sentenceSub = this.dataset.ssub;
          currentIndex = 0;
          score = 0;
          answeredQuestions = {};
          clearAutoAdvance();
          stopSentenceRead();
          applyRandomOrder();
          renderPreservingScroll();
          animateChipExpand(subModeBar, `button[data-ssub="${sentenceSub}"]`);
        });
      });
      return;
    }
    if (row) row.style.display = 'flex';
    subModeBar.innerHTML = `
      <button class="${subMode==='all'?'active':''}" data-sub="all">${chipText('📚📖', 'All')}</button>
      <button class="${subMode==='core'?'active':''}" data-sub="core">${chipText('📚', 'Core HSK')}</button>
      <button class="${subMode==='ext'?'active':''}" data-sub="ext">${chipText('📖', 'Extended')}</button>
    `;
    subModeBar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', function(){
        if (this.dataset.sub === subMode) return;
        subMode = this.dataset.sub;
        currentIndex = 0;
        isAnswered = false; userAnswer = null; pairsOptions = []; flashSpoken = false;
        memoryCards = []; memoryFlipped = []; memoryMatched = []; memoryLock = false;
        molePool = []; moleTarget = null; moleCorrect = 0; moleWrong = 0; moleProcessing = false;
        picIndex = 0; score = 0; answeredQuestions = {};
        clearAutoAdvance();
        stopSentenceRead();
        rebuildSubModeData();
        renderPreservingScroll();
        animateChipExpand(subModeBar, `button[data-sub="${subMode}"]`);
        statusBadge.textContent = (subMode === 'all' ? '📚📖 ' : subMode === 'ext' ? '📖 ' : '📚 ') + subModeLabel();
      });
    });
  }

  // =====================================================================
  // Study module: Word / Sentence / Texts tab (sits above Core/Extended/All)
  // =====================================================================
  function renderStudyTabBar(){
    const isStudy = (currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar' || currentMode === 'topics');
    if (!isStudy){
      studyTabBar.style.display = 'none';
      studyTabBar.innerHTML = '';
      return;
    }
    studyTabBar.style.display = 'flex';
    // Topics 数据是按级别可选的（hsk1 没有 grammar-topics.js）。
    // 没有数据就不显示这个标签，避免出现一个永远空着的页签。
    const hasTopics = (window.GRAMMAR_TOPICS || []).length > 0;
    studyTabBar.innerHTML = `
      <button class="${studyTab === 'word' ? 'active' : ''}" data-tab="word">${chipText('🀄', 'Word')}</button>
      <button class="${studyTab === 'sentence' ? 'active' : ''}" data-tab="sentence">${chipText('📝', 'Sentence')}</button>
      <button class="${studyTab === 'texts' ? 'active' : ''}" data-tab="texts">${chipText('📄', 'Texts')}</button>
      <button class="${studyTab === 'grammar' ? 'active' : ''}" data-tab="grammar">${chipText('🧩', 'Grammar')}</button>
      ${hasTopics ? `<button class="${studyTab === 'topics' ? 'active' : ''}" data-tab="topics">${chipText('🔗', 'Topics')}</button>` : ''}
    `;
    studyTabBar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', function(){
        if (this.dataset.tab === studyTab) return;
        studyTab = this.dataset.tab;
        setMode(studyTab === 'texts' ? 'texts'
          : (studyTab === 'grammar' ? 'grammar'
          : (studyTab === 'topics' ? 'topics'
          : (studyTab === 'sentence' ? 'sentflash' : 'wordflash'))));
        animateChipExpand(studyTabBar, `button[data-tab="${studyTab}"]`);
      });
    });
  }

  // =====================================================================
  // Card vs List view (Word Cards & Sentence Cards only)
  // =====================================================================
  function isListModeActive(){ return currentMode === 'texts' || currentMode === 'grammar' || currentMode === 'topics' || (listMode && (currentMode === 'wordflash' || currentMode === 'sentflash')); }
  function showListNote(text){
    // The status text row was removed from the UI — these notes are intentionally not shown.
  }
  // One label column width for the whole menu, so every row's first button —
  // in the normal rows and under the small captions — starts at the same x.
  function syncVmCaptionWidth(){
    if (!viewModeBar.classList.contains('vm-groups')) return;
    const menu = viewModeBar.closest('.sub-menu') || viewModeBar.parentElement;
    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;';
    document.body.appendChild(probe);
    const widthOf = (el, cls) => {
      probe.className = cls;
      probe.textContent = el.textContent.trim();
      return probe.getBoundingClientRect().width;
    };
    let colW = 104;
    menu.querySelectorAll('.ctx-label').forEach(l => {
      colW = Math.max(colW, widthOf(l, 'ctx-label'));
    });
    viewModeBar.querySelectorAll('.vm-caption').forEach(c => {
      colW = Math.max(colW, widthOf(c, 'vm-caption'));
    });
    probe.remove();
    menu.style.setProperty('--vm-col-w', Math.ceil(colW) + 'px');
  }
  window.addEventListener('resize', syncVmCaptionWidth);

  function renderViewModeBar(){
    if (currentMode === 'texts'){
      viewModeBar.style.display = 'flex';
      viewModeBar.classList.remove('vm-groups');
      viewModeBar.innerHTML = `
        <div class="random-toggle"><input type="checkbox" id="gpCoreToggle" data-gphl="core" ${showGpHl['core'] ? 'checked' : ''}><label for="gpCoreToggle"><span class="sw sw-gp-now"></span><span class="btn-text">Core</span></label></div>
        <div class="random-toggle"><input type="checkbox" id="gpAccToggle" data-gphl="acc" ${showGpHl['acc'] ? 'checked' : ''}><label for="gpAccToggle"><span class="sw sw-gp-past"></span><span class="btn-text">Learned Core</span></label></div>
        <div class="random-toggle"><input type="checkbox" id="gpAheadToggle" data-gphl="ahead" ${showGpHl['ahead'] ? 'checked' : ''}><label for="gpAheadToggle"><span class="sw sw-gp-ahead"></span><span class="btn-text">Ahead</span></label></div>
      `;
      viewModeBar.querySelectorAll('.random-toggle input').forEach(inp => {
        inp.addEventListener('change', function(){
          showGpHl[this.dataset.gphl] = this.checked;
          renderPreservingScroll();
        });
      });
      return;
    }
    if (currentMode === 'grammar'){
      viewModeBar.style.display = 'grid';
      viewModeBar.classList.add('vm-groups');
      // Only lessons whose corpus carries a difficulty level get the Lv switches.
      const hasLv = (lessonGrammar || []).some(g => (g.items || []).some(it => it.lv));
      const lvBar = hasLv ? `
        <div class="vm-group"><span class="vm-caption">复杂度 · Complexity</span>
          <div class="random-toggle"><input type="checkbox" id="lv1Toggle" data-lv="1" ${showLv[1] ? 'checked' : ''}><label for="lv1Toggle" title="Show examples made of one word slot (no phrase, no clause)"><span class="lv-badge lv-1"><i class="on"></i><i></i><i></i></span><span class="btn-text">Lv 1</span></label></div>
          <div class="random-toggle"><input type="checkbox" id="lv2Toggle" data-lv="2" ${showLv[2] ? 'checked' : ''}><label for="lv2Toggle" title="Show examples with one phrase or one clause"><span class="lv-badge lv-2"><i class="on"></i><i class="on"></i><i></i></span><span class="btn-text">Lv 2</span></label></div>
          <div class="random-toggle"><input type="checkbox" id="lv3Toggle" data-lv="3" ${showLv[3] ? 'checked' : ''}><label for="lv3Toggle" title="Show examples with a clause plus a separate phrase"><span class="lv-badge lv-3"><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="btn-text">Lv 3</span></label></div>
        </div>` : '';
      // "Beyond" (words in no list at all) only exists as its own category on
      // levels that already use `extended` for real vocabulary.
      const beyondBar = levelHasExtended() ? `
          <div class="random-toggle"><input type="checkbox" id="hlBeyondToggle" data-hl="beyond" ${showHl['beyond'] ? 'checked' : ''}><label for="hlBeyondToggle"><span class="sw sw-beyond"></span><span class="btn-text">Beyond</span></label></div>` : '';
      viewModeBar.innerHTML = `
        <div class="vm-group"><span class="vm-caption">词汇 · Vocab</span>
          <div class="random-toggle"><input type="checkbox" id="hlCoreToggle" data-hl="core" ${showHl['core'] ? 'checked' : ''}><label for="hlCoreToggle"><span class="sw sw-core"></span><span class="btn-text">Core</span></label></div>
          <div class="random-toggle"><input type="checkbox" id="hlExtToggle" data-hl="ext" ${showHl['ext'] ? 'checked' : ''}><label for="hlExtToggle"><span class="sw sw-ext"></span><span class="btn-text">Extended</span></label></div>
          <div class="random-toggle"><input type="checkbox" id="hlAccCoreToggle" data-hl="acc-core" ${showHl['acc-core'] ? 'checked' : ''}><label for="hlAccCoreToggle"><span class="sw sw-acc-core"></span><span class="btn-text">Learned Core</span></label></div>
          <div class="random-toggle"><input type="checkbox" id="hlAccExtToggle" data-hl="acc-ext" ${showHl['acc-ext'] ? 'checked' : ''}><label for="hlAccExtToggle"><span class="sw sw-acc-ext"></span><span class="btn-text">Learned Ext</span></label></div>${beyondBar}
        </div>` + lvBar;
      viewModeBar.querySelectorAll('.random-toggle input').forEach(inp => {
        inp.addEventListener('change', function(){
          if (this.dataset.lv) showLv[+this.dataset.lv] = this.checked;
          else showHl[this.dataset.hl] = this.checked;
          renderPreservingScroll();
        });
      });
      syncVmCaptionWidth();
      return;
    }
    if (currentMode !== 'wordflash' && currentMode !== 'sentflash'){
      viewModeBar.style.display = 'none';
      viewModeBar.innerHTML = '';
      return;
    }
    viewModeBar.style.display = 'flex';
    viewModeBar.classList.remove('vm-groups');
    viewModeBar.innerHTML = `
      <button class="${listMode ? '' : 'active'}" data-view="card">${chipText('🃏', 'Card')}</button>
      <button class="${listMode ? 'active' : ''}" data-view="list">${chipText('📋', 'List')}</button>
    `;
    viewModeBar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', function(){
        const wantList = this.dataset.view === 'list';
        if (wantList === listMode) return;
        listMode = wantList;
        listRevealed.clear();
        render();
        animateChipExpand(viewModeBar, `button[data-view="${wantList ? 'list' : 'card'}"]`);
        if (!listMode && (currentMode === 'wordflash' || currentMode === 'sentflash')){
          statusBadge.textContent = '📖 Study';
        }
      });
    });
  }

  // =====================================================================
  // Render
  // =====================================================================
  function renderPickButtons(){
    const isStudy = (currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar' || currentMode === 'topics');
    studyPickBtn.classList.toggle('active', isStudy);
    gamePickBtn.classList.toggle('active', !isStudy);
    learnMenu.classList.toggle('hidden', !isStudy);
    gameMenuWrap.classList.toggle('hidden', isStudy);
    gameMenu.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.game === currentMode);
    });
  }

  function render(){
    closeGrammarChip();
    // In sentence-list mode the question area is empty — hide it (no blank row).
    questionArea.style.display = ((currentMode === 'sentflash' && listMode) || currentMode === 'grammar' || currentMode === 'topics') ? 'none' : '';
    // Read-active lists are word/sentence lists, Texts (words in reading order),
    // Grammar and Topics.
    const canRead = listMode && (currentMode === 'sentflash' || currentMode === 'wordflash');
    if (readActive && !canRead && currentMode !== 'grammar' && currentMode !== 'topics') stopSentenceRead();
    renderPickButtons();
    renderStudyTabBar();
    renderSubModeBar();
    renderViewModeBar();
    // The English toggle only matters for Picture mode.
    picEnglishToggleWrap.style.display = (currentMode === 'picture') ? 'flex' : 'none';
    // The Vocab toggle only applies to the Texts view.
    if (vocabToggleWrap) vocabToggleWrap.style.display = (currentMode === 'texts') ? 'inline-flex' : 'none';
    switch(currentMode){
      case 'pairs': renderPairs(); break;
      case 'wordflash': renderWordFlash(); break;
      case 'sentflash': renderSentFlash(); break;
      case 'texts': renderTextList(); break;
      case 'grammar': renderGrammar(); break;
      case 'topics': renderTopics(); break;
      case 'fill': renderFill(); break;
      case 'mole': renderMole(); break;
      case 'memory': renderMemory(); break;
      case 'picture': renderPicture(); break;
    }
    updateCounter();
    updateScore();
    updateMenuStack();
    updateNavBar();
    syncReturnBtn();
  }

  function getCurrentItem(arr){
    if (arr.length === 0) return null;
    if (currentIndex >= arr.length) currentIndex = 0;
    return arr[currentIndex];
  }

  // Shown when the current Core / Extended / All set contains no words.
  function renderEmptyState(){
    questionArea.innerHTML = `<div style="font-size:1rem;color:#6b6154;">No ${subModeLabel()} words for this lesson.</div>`;
    optionsContainer.innerHTML = '';
    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'none';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';
  }

  function showAutoSpeak(){
    const el = autoSpeakToggle.closest('.random-toggle');
    if (el) el.style.display = 'flex';
  }
  function hideAutoSpeak(){
    const el = autoSpeakToggle.closest('.random-toggle');
    if (el) el.style.display = 'none';
  }

  // ----- Pairs -----
  function renderPairs(){
    showAutoSpeak();
    const item = getCurrentItem(pairsItems);
    if (!item){ renderEmptyState(); return; }
    if (!isAnswered && pairsOptions.length === 0){
      pairsOptions = shuffleCopy([item, ...item.distractors]);
    }
    const options = pairsOptions.length > 0 ? pairsOptions : shuffleCopy([item, ...item.distractors]);

    questionArea.innerHTML = `
      <div style="font-size:1.1rem;color:#6b6154;margin-bottom:4px;">🔤 Match “${item.hanzi}” with its English meaning</div>
      <div class="question-with-pinyin" style="font-size:2.2rem;">
        ${rubyHtml(item.hanzi)}
      </div>
      <div style="margin-top:6px;">
        <button class="sound-btn" id="pairsPlayBtn">🔊</button>
      </div>
    `;
    optionsContainer.style.display = 'flex';
    flashContainer.style.display = 'none';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let html = '';
    options.forEach(opt => {
      let cls = 'opt-btn opt-en';
      const isCorrectOpt = getUniqueId(opt) === getUniqueId(item);
      if (isAnswered){
        if (isCorrectOpt) cls += ' correct';
        else if (getUniqueId({ hanzi: userAnswer }) === getUniqueId(opt)) cls += ' wrong';
      }
      html += `<button class="${cls}" data-word="${opt.hanzi}" data-id="${opt.id||''}" ${isAnswered?'disabled':''}>${opt.en}</button>`;
    });
    optionsContainer.innerHTML = html;

    const playBtn = $('pairsPlayBtn');
    if (playBtn) playBtn.addEventListener('click', () => speakChinese(item.hanzi));
    if (!isAnswered && autoSpeak) setTimeout(() => speakChinese(item.hanzi), 300);

    if (!isAnswered){
      optionsContainer.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', function(){
          handlePairsAnswer(this.dataset.word, this.dataset.id, item, this);
        });
      });
    }
  }

  function handlePairsAnswer(word, id, item, btn){
    if (isAnswered) return;
    isAnswered = true;
    userAnswer = word;
    const match = getUniqueId({ hanzi: word, id }) === getUniqueId(item);
    isCorrect = match;
    if (match){
      if (!answeredQuestions[`pairs-${currentIndex}`]){
        score++; answeredQuestions[`pairs-${currentIndex}`] = true;
      }
      // Green feedback right away — the next question arrives 600ms later.
      optionsContainer.querySelectorAll('.opt-btn').forEach(b => {
        b.disabled = true;
        if (b === btn) b.classList.add('correct', 'pop');
      });
      messageArea.className = 'message correct-msg';
      messageArea.textContent = `✅ Correct! ${item.hanzi} = ${item.en}`;
      statusBadge.textContent = '⭐ Correct';
      updateScore();
      clearAutoAdvance();
      autoAdvanceTimer = setTimeout(() => {
        autoAdvanceTimer = null;
        isAnswered = false; userAnswer = null; pairsOptions = [];
        if (currentIndex < pairsItems.length - 1) currentIndex++;
        else { currentIndex = 0; score = 0; answeredQuestions = {}; }
        render();
      }, 600);
    } else {
      messageArea.className = 'message wrong-msg';
      messageArea.textContent = `❌ Wrong. ${item.hanzi} = ${item.en}`;
      statusBadge.textContent = '🔴 Wrong';
      updateScore();
      render();
    }
  }

  // ----- Word Flash -----
  function renderWordList(items){
    readList = items.map(w => w.hanzi);
    questionArea.innerHTML = `
      <div style="font-size:0.9rem;color:#6b6154;margin-bottom:4px;">📋 Tap a word to reveal hidden pinyin / English · tap again to hide</div>
    `;
    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let html = readMenuHtml() + '<div class="word-list">';
    items.forEach((w, i) => {
      const key = getUniqueId(w);
      const revealed = listRevealed.has(key);
      const showPy = showListPinyin || revealed;
      const showEn = showListEnglish || revealed;
      html += `<button class="word-list-item" data-i="${i}" data-key="${key}">
        <div class="wl-hanzi">${showPy ? rubyHtml(w.hanzi) : w.hanzi}</div>
        ${showEn ? `<div class="wl-en">${w.en}</div>` : ''}
      </button>`;
    });
    html += '</div>';
    flashContainer.innerHTML = html;

    bindReadMenu();

    flashContainer.querySelectorAll('.word-list-item').forEach(btn => {
      btn.addEventListener('click', function(){
        const key = this.dataset.key;
        if (listRevealed.has(key)) listRevealed.delete(key); else listRevealed.add(key);
        const revealed = listRevealed.has(key);
        const w = items.find(x => getUniqueId(x) === key);
        if (!w) return;
        // update the button in place (no re-render → no scroll jump)
        this.querySelector('.wl-hanzi').innerHTML = (showListPinyin || revealed) ? rubyHtml(w.hanzi) : w.hanzi;
        const enEl = this.querySelector('.wl-en');
        if (showListEnglish || revealed){
          if (!enEl){
            const d = document.createElement('div');
            d.className = 'wl-en'; d.textContent = w.en;
            this.appendChild(d);
          }
        } else if (enEl) enEl.remove();
        speakChinese(w.hanzi);
      });
    });
    statusBadge.textContent = `📋 Word list · ${subModeLabel()}`;
  }

  function renderWordFlash(){
    showAutoSpeak();
    const items = flashItems;
    if (items.length === 0){
      renderEmptyState();
      return;
    }
    if (listMode){ renderWordList(items); return; }
    const item = getCurrentItem(items);
    const isFlipped = userAnswer === 'flipped';

    questionArea.innerHTML = `
      ${cardViewBarHtml('wordViewBar', wordCardView)}
      ${speedBarHtml()}
      <div style="font-size:0.9rem;color:#6b6154;margin-bottom:4px;">🃏 Tap card to flip</div>
      <div style="margin-bottom:6px;"><button class="sound-btn" id="flashPlayBtn">🔊</button></div>
    `;

    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let html = '';
    if (isFlipped){
      html = `<div class="flash-card" id="flashCard">
        <div class="front" style="font-size:2rem;">${rubyHtml(item.hanzi)}</div>
        <div class="back">
          <div style="font-size:1.2rem;font-weight:500;">${item.en}</div>
          <div class="hint-text">Tap to continue</div>
        </div>
      </div>`;
    } else {
      let frontHtml;
      if (wordCardView === 'pinyin') frontHtml = `<div class="front sent-front-pinyin" style="font-size:2rem;">${colorPinyin(item.pinyin || '')}</div>`;
      else if (wordCardView === 'english') frontHtml = `<div class="front sent-front-english" style="font-size:2rem;">${escapeHtml(item.en || '')}</div>`;
      else frontHtml = `<div class="front">${escapeHtml(item.hanzi)}</div>`;
      html = `<div class="flash-card" id="flashCard">
        ${frontHtml}
        <div class="hint-text">👆 Tap to flip</div>
      </div>`;
    }
    flashContainer.innerHTML = html;

    const playBtn = $('flashPlayBtn');
    if (playBtn) playBtn.addEventListener('click', () => speakChinese(item.hanzi));
    bindReadMenu();
    const wvb = $('wordViewBar');
    if (wvb){
      wvb.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          wordCardView = b.dataset.view;
          render();
        });
      });
    }
    if (!isAnswered && autoSpeak) setTimeout(() => speakChinese(item.hanzi), 300);

    const card = $('flashCard');
    if (card){
      card.addEventListener('click', function(){
        if (userAnswer === 'flipped'){
          userAnswer = null;
          isAnswered = false;
          flashSpoken = false;
          if (currentIndex < items.length - 1) currentIndex++;
          else currentIndex = 0;
          render();
          updateCounter();
          updateScore();
        } else {
          userAnswer = 'flipped';
          isAnswered = true;
          flashSpoken = false;
          if (!answeredQuestions[`wordflash-${subMode}-${currentIndex}`]){
            score++;
            answeredQuestions[`wordflash-${subMode}-${currentIndex}`] = true;
          }
          updateScore();
          messageArea.className = 'message info-msg';
          messageArea.textContent = `📖 ${item.en} · ${item.pinyin}`;
          statusBadge.textContent = '🃏 Flipped';
          render();
          if (!flashSpoken){ flashSpoken = true; speakChinese(item.hanzi); }
        }
      });
    }
    if (isFlipped && !flashSpoken){
      flashSpoken = true;
      setTimeout(() => speakChinese(item.hanzi), 300);
    }
  }

  // ----- Sentence Flash -----
  function renderSentenceList(){
    if (phrases.length === 0){ renderEmptyState(); return; }
    readList = phrases.map(p => p.cn);
    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let html = readMenuHtml();
    html += '<div class="sentence-list">';
    phrases.forEach((p, i) => {
      const sl = showListPinyin ? rubyHtml(p.cn) : escapeHtml(p.cn);
      const en = showListEnglish ? `<div class="sl-en">${p.en}</div>` : '';
      html += `<div class="sentence-list-item" data-i="${i}">
        <span class="sl-index">${i + 1}</span>
        <div class="sl-body">
          <div class="sl-cn">${sl}</div>
          ${en}
        </div>
      </div>`;
    });
    html += '</div>';
    flashContainer.innerHTML = html;

    bindReadMenu();

    flashContainer.querySelectorAll('.sentence-list-item').forEach(el => {
      el.addEventListener('click', function(){ speakChinese(phrases[+this.dataset.i].cn); });
    });
    statusBadge.textContent = `📝 Sentence list · ${phrases.length} sentences`;
  }

  // ----- Texts (lesson dialogues/passages with real audio) -----
  // Whether a text's `audio` field is a playable URL (vs. a textbook track ID
  // like "13-1"). HSK1/HSK2 store full mp3 URLs; HSK3 stores track IDs.
  function isAudioUrl(v){
    if (typeof v !== 'string' || !v) return false;
    return /^(https?:)?\/\//.test(v) || /\.(mp3|m4a|ogg|wav)(\?|$)/i.test(v);
  }

  // One collapsible grammar section, styled identically to the Grammar tab.
  // Used by renderTextList() to show a text's own grammar points under it.
  // Badges shown after a grammar point's title. `tag: 'extended'` marks a point
  // that goes beyond the textbook's own grammar list (it also drives the Texts
  // highlight switches); `tags[]` carries extra free-form labels saying why the
  // point was added, e.g. 课文缺口 / 延伸搭配 / 主题：运动.
  function grammarTagHtml(g){
    let h = g.tag === 'extended' ? '<span class="grammar-tag">EXT</span>' : '';
    (g.tags || []).forEach(t => {
      h += `<span class="grammar-tag grammar-tag-alt">${escapeHtml(String(t))}</span>`;
    });
    return h;
  }
  // Per-example badges: lv (slot complexity) + free-form tags such as COLLOC.
  const LV_TITLES = {
    1: 'Lv 1 · 每个槽位都是单词 / every slot is a single word',
    2: 'Lv 2 · 至少一个槽位是短语 / one slot is a phrase',
    3: 'Lv 3 · 至少一个槽位是小句 / one slot is a clause'
  };
  const ITEM_TAG_TITLES = {
    COLLOC: 'COLLOC · 半固定搭配 / semi-fixed collocation'
  };
  function itemBadgeHtml(it){
    let h = '';
    const lv = +((it || {}).lv || 0);
    if (lv >= 1 && lv <= 3){
      const dots = [1, 2, 3].map(i => `<i class="${i <= lv ? 'on' : ''}"></i>`).join('');
      h += `<span class="lv-badge lv-${lv} tip" data-tip="${escapeHtml(LV_TITLES[lv])}">${dots}</span>`;
    }
    ((it || {}).tags || []).forEach(t => {
      const tip = ITEM_TAG_TITLES[t] || String(t);
      h += `<span class="grammar-tag grammar-tag-alt item-tag tip" data-tip="${escapeHtml(tip)}">${escapeHtml(String(t))}</span>`;
    });
    return h;
  }
  function grammarPointSectionHtml(g, open){
    const items = g.items || [];
    let h = `<div class="grammar-section" data-point="${escapeHtml(g.id || '')}">
      <button class="grammar-head">
        <span class="grammar-head-inner">
        <span class="grammar-caret">${open ? '▾' : '▸'}</span>
        <span class="grammar-title"><span class="grammar-title-cn">${titleRuby(g.cn, g.py)}</span> <span class="grammar-title-en">${escapeHtml(g.en || '')}</span></span>
        ${grammarTagHtml(g)}
        <span class="grammar-count">${items.length}</span>
        </span>
      </button>
      <div class="grammar-body${open ? '' : ' collapsed'}" data-gid="${escapeHtml(g.id || '')}">
        <div class="grammar-body-inner">`;
    h += noteHtml(g.note);
    if (g.noteEn) h += `<div class="grammar-intro grammar-intro-en">${escapeHtml(g.noteEn)}</div>`;
    items.forEach(it => {
      const en = it.en || '';
      h += `<div class="grammar-item" data-read="${escapeHtml(it.c || '')}">
        <span class="grammar-cn">${itemBadgeHtml(it)}${rubyHtml(it.c)}</span>
        ${en ? `<span class="grammar-en">${escapeHtml(en)}</span>` : ''}
      </div>`;
    });
    if (g.practice && g.practice.length){
      h += '<div class="grammar-practice"><div class="grammar-practice-label">✏️ 练习 · Practice</div>';
      g.practice.forEach(p => {
        h += `<div class="grammar-practice-item" data-read="${escapeHtml(p.cn || '')}">${rubyHtml(p.cn)}${p.en ? `<span class="grammar-en">${escapeHtml(p.en)}</span>` : ''}</div>`;
      });
      h += '</div>';
    }
    h += '</div></div></div>';
    return h;
  }

  // Wire collapse/expand on any .grammar-head inside `root` (idempotent).
  function bindGrammarToggles(root){
    root.querySelectorAll('.grammar-head').forEach(head => {
      if (head.dataset.bound) return;
      head.dataset.bound = '1';
      head.addEventListener('click', function(){
        const body = this.parentElement.querySelector('.grammar-body');
        if (!body) return;
        const nowCollapsed = !body.classList.contains('collapsed');
        body.classList.toggle('collapsed', nowCollapsed);
        const caret = this.querySelector('.grammar-caret');
        if (caret) caret.textContent = nowCollapsed ? '▸' : '▾';
      });
    });
  }

  // Audio-only tracks (listening exercises, or audio with no transcript) are not
  // dialogues: keep them out of the Scope chips so the numbering matches the texts
  // that actually have lines. They still show under "All".
  function scopeTexts(){
    return lessonTexts.filter(t => (t.lines || []).length > 0);
  }

  // Texts honour the Scope row: 'all' shows every dialogue, '1'..'N' only that one.
  function textsInScope(){
    if (textSub === 'all') return lessonTexts;
    const one = scopeTexts()[Number(textSub) - 1];
    return one ? [one] : lessonTexts;
  }

  // ---- Grammar-occurrence chip (Texts view) --------------------------------
  // A tap on a .gp-hit highlight opens a small floating chip anchored under the
  // span: it names the grammar point, reads the span, and jumps on a second tap.
  // With a mouse the chip opens on hover instead (touch devices keep the tap).
  // The chip is fixed-positioned and re-placed on scroll so it follows the span.
  const HOVER_CAPABLE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let grammarChip = null;
  let grammarChipAnchor = null;
  let chipPlaceRaf = 0;
  let chipHoverTimer = 0;
  function closeGrammarChip(){
    if (chipHoverTimer){ clearTimeout(chipHoverTimer); chipHoverTimer = 0; }
    if (grammarChip && grammarChip.parentNode) grammarChip.parentNode.removeChild(grammarChip);
    grammarChip = null;
    grammarChipAnchor = null;
  }
  function scheduleChipClose(delay = 220){
    if (chipHoverTimer) clearTimeout(chipHoverTimer);
    chipHoverTimer = setTimeout(() => { chipHoverTimer = 0; closeGrammarChip(); }, delay);
  }
  // The chip is fixed-positioned (any ancestor scroll container would clip an
  // absolute one), so it must be re-placed whenever anything scrolls. The Texts
  // list is its own scroll container, hence the capture-phase listener.
  function placeGrammarChip(){
    if (!grammarChip || !grammarChipAnchor) return;
    const el = grammarChipAnchor, chip = grammarChip;
    if (!document.body.contains(el)){ closeGrammarChip(); return; }
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight){ closeGrammarChip(); return; }
    const w = chip.offsetWidth, h = chip.offsetHeight;
    let left = r.left + r.width / 2 - w / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    let top = r.bottom + 6;
    if (r.bottom + 6 + h > window.innerHeight && r.top - h - 6 > 0) top = r.top - h - 6;
    chip.style.left = left + 'px';
    chip.style.top = top + 'px';
  }
  function schedulePlace(){ if (chipPlaceRaf) return; chipPlaceRaf = requestAnimationFrame(() => { chipPlaceRaf = 0; placeGrammarChip(); }); }
  document.addEventListener('scroll', schedulePlace, true);
  function textReturnCtxFor(el){
    const lineEl = el.closest('.text-line');
    const itemEl = el.closest('.text-item');
    if (!lineEl || !itemEl) return null;
    const lid = (LESSONS[currentLesson - 1] || {}).id;
    if (!lid) return null;
    return {
      lessonId: lid,
      textSub: textSub,
      textId: itemEl.dataset.text || '',
      line: parseInt(lineEl.dataset.line, 10) || 0
    };
  }
  function openGrammarChip(el, opts){
    const toggle = !opts || opts.toggle !== false;
    if (chipHoverTimer){ clearTimeout(chipHoverTimer); chipHoverTimer = 0; }
    if (grammarChip && grammarChipAnchor === el){
      if (toggle) closeGrammarChip();
      return;
    }
    closeGrammarChip();
    const lv = Number(el.dataset.lv) || LEVEL_NUM;
    const ls = el.dataset.ls || '';
    const pt = el.dataset.pt || '';
    const lb = el.dataset.lb || pt;
    const rel = el.classList.contains('gp-ahead') ? '后面才讲'
      : el.classList.contains('gp-past') ? '已学' : '本课';
    const chip = document.createElement('div');
    chip.className = 'gp-chip';
    chip.innerHTML = `<button class="gp-chip-jump">🔗 ${escapeHtml(levelLabel(lv))} · ${escapeHtml(lessonTitle(lv, ls))} · ${escapeHtml(lb)}</button>
      <span class="gp-chip-rel">${escapeHtml(rel)}</span>
      <button class="gp-chip-say" title="朗读">🔊</button>`;
    document.body.appendChild(chip);
    grammarChip = chip;
    grammarChipAnchor = el;
    placeGrammarChip();
    chip.querySelector('.gp-chip-jump').addEventListener('click', ev => {
      ev.stopPropagation();
      const ctx = textReturnCtxFor(el);
      closeGrammarChip();
      jumpToPoint(lv, ls, pt, ctx);
    });
    chip.querySelector('.gp-chip-say').addEventListener('click', ev => {
      ev.stopPropagation();
      speakChinese(el.dataset.span || '');
    });
    if (HOVER_CAPABLE){
      chip.addEventListener('mouseenter', () => { if (chipHoverTimer){ clearTimeout(chipHoverTimer); chipHoverTimer = 0; } });
      chip.addEventListener('mouseleave', () => scheduleChipClose());
    }
  }
  window.addEventListener('resize', placeGrammarChip);
  document.addEventListener('click', ev => {
    if (!grammarChip) return;
    if (grammarChip.contains(ev.target)) return;
    if (grammarChipAnchor && grammarChipAnchor.contains(ev.target)) return;
    closeGrammarChip();
  });

  // Jump to a grammar point: same level uses the in-page path (the same route as
  // the Topics lesson chips); another level navigates to that page with a query
  // string the startup block below understands.
  function jumpToPoint(level, lessonId, pointId, returnCtx){
    const lv = Number(level) || LEVEL_NUM;
    if (lv !== LEVEL_NUM){
      const base = lv === 1 ? '../hsk1/index.html' : (lv === 2 ? '../hsk2/index.html' : '');
      if (!base) return;
      const q = `?lesson=${encodeURIComponent(lessonId)}&point=${encodeURIComponent(pointId || '')}`;
      location.href = base + q;
      return;
    }
    const idx = LESSONS.findIndex(L => L.id === lessonId);
    if (idx < 0) return;
    gpReturnCtx = returnCtx || null;
    studyTab = 'grammar';
    if (pointId) grammarOpen.add(pointId);
    setLesson(idx + 1);
    grammarFocus = pointId || null;
    setMode('grammar');
  }

  // ---- "Back to the text" (after an in-page grammar jump) -------------------
  // Jumping to a grammar point replaces the Texts view, so keep where the reader
  // was and offer a one-tap way back. Cross-level jumps leave the page entirely,
  // so no context is kept for those.
  let gpReturnCtx = null;
  let gpReturnBtn = null;
  function ensureReturnBtn(){
    if (gpReturnBtn) return gpReturnBtn;
    gpReturnBtn = document.createElement('button');
    gpReturnBtn.className = 'gp-return-btn hidden';
    gpReturnBtn.type = 'button';
    gpReturnBtn.textContent = '↩ 回到课文';
    gpReturnBtn.addEventListener('click', ev => { ev.stopPropagation(); returnToText(); });
    document.body.appendChild(gpReturnBtn);
    return gpReturnBtn;
  }
  function syncReturnBtn(){
    const b = ensureReturnBtn();
    if (gpReturnCtx && currentMode === 'grammar') b.classList.remove('hidden');
    else b.classList.add('hidden');
  }
  function returnToText(){
    const ctx = gpReturnCtx;
    gpReturnCtx = null;
    if (!ctx) return;
    const idx = LESSONS.findIndex(L => L.id === ctx.lessonId);
    if (idx < 0) return;
    studyTab = 'texts';
    setLesson(idx + 1);
    textSub = ctx.textSub || 'all';
    setMode('texts');
    if (ctx.textId){
      setTimeout(() => {
        const el = flashContainer.querySelector(
          `.text-item[data-text="${cssEscape(ctx.textId)}"] .text-line[data-line="${ctx.line}"]`);
        if (el) el.scrollIntoView({ block: 'center' });
      }, 80);
    }
  }

  function renderTextList(){
    showAutoSpeak();
    if (lessonTexts.length === 0){
      questionArea.innerHTML = '<div style="font-size:1rem;color:#6b6154;">No texts for this lesson yet.</div>';
      optionsContainer.style.display = 'none';
      flashContainer.innerHTML = '';
      flashContainer.style.display = 'none';
      fillContainer.style.display = 'none';
      moleContainer.style.display = 'none';
      memoryContainer.style.display = 'none';
      pictureContainer.style.display = 'none';
      return;
    }
    questionArea.innerHTML = `
      <div class="text-speed-bar">
        <span class="text-speed-label">速度 · Speed</span>
        <div class="text-speed-btns">
          ${[0.8, 1, 1.2, 1.5, 1.8, 2].map(s => `<button class="text-speed-btn${s === textPlayRate ? ' active' : ''}" data-rate="${s}">${s}x</button>`).join('')}
        </div>
        ${segMarking ? `<button class="text-seg-export" id="segExportBtn" title="下载 audio-segments.js">⇩ 导出时间点</button>
        <button class="text-seg-clear" id="segClearBtn" hidden>✕ 草稿</button>` : ''}
      </div>`;
    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let html = '<div class="text-list">';
    textsInScope().forEach((t, i) => {
      const tId = t.id || String(i + 1);
      html += `<div class="text-item" data-i="${i}" data-text="${escapeHtml(tId)}">`;
      // Location / title — emoji + Chinese + English always visible inline.
      if (t.title){
        const tcn = textLineHtml(t.title.cn, null);
        const titleSeg = titleSegOf(tId);
        // Only when the audio actually has a lead-in before the first line; a
        // zero-length "title" segment (segments starting at 0) would be a dead button.
        const titlePlay = (isAudioUrl(t.audio) && titleSeg && titleSeg.end - titleSeg.start >= 0.3)
          ? `<button class="text-title-play" data-text="${escapeHtml(tId)}" data-static-label="1" data-title-base="朗读标题 · ${fmtTime1(titleSeg.start)}–${fmtTime1(titleSeg.end)}" title="朗读标题 · ${fmtTime1(titleSeg.start)}–${fmtTime1(titleSeg.end)}">▶</button>`
          : '';
        html += `<div class="text-title-line">
          ${titlePlay}
          <span class="text-title-emoji">${escapeHtml(t.title.emoji || '')}</span>
          <span class="text-title-cn">${tcn}</span>
          <span class="text-title-en">${escapeHtml(t.title.en || '')}</span>
        </div>`;
      }
      // Scene intro (HSK3): Chinese + English line under the title.
      if (t.intro && (t.intro.cn || t.intro.en)){
        html += `<div class="text-intro">
          ${t.intro.cn ? `<span class="text-intro-cn">${showListPinyin ? rubyHtml(t.intro.cn) : escapeHtml(t.intro.cn)}</span>` : ''}
          ${t.intro.en ? `<span class="text-intro-en">${escapeHtml(t.intro.en)}</span>` : ''}
        </div>`;
      }
      // Audio: HSK3 stores a track ID ("13-1"), not an mp3 URL. Only render the
      // player when a real URL is present; otherwise show a read-only badge.
      if (isAudioUrl(t.audio)){
        html += `<div class="text-audio" data-audio="${escapeHtml(t.audio)}" data-text="${escapeHtml(tId)}">
          <button class="text-play-btn" data-label="${escapeHtml(tId)}">▶ ${escapeHtml(tId)}</button>
          <input type="range" class="text-seek" min="0" max="0" value="0" step="0.1">
          <span class="text-time">0:00</span>
        </div>`;
        // One-key marking: ⏺ (Mark A) ↔ ✂ (Mark B + cut). Play/pause stays
        // separate from time-marking. Fine-tune tools are collapsed by default.
        // Only shown when the sentence-recording setting (✂) is enabled.
        if (segMarking){
          html += `<div class="text-mark" data-text="${escapeHtml(tId)}">
            <button class="text-mark-btn rec" data-act="rec" title="Mark A（录制）：按下记这一句开头，随后自动继续播">⏺ 录制</button>
            <span class="text-mark-progress" title="已切句数 / 本课总句数"></span>
            <button class="text-mark-tune" data-act="tune" title="展开精调工具">✎ 精调</button>
            <span class="text-mark-msg"></span>
          </div>
          <div class="text-mark-tools" data-text="${escapeHtml(tId)}" hidden>
            <button class="text-mark-btn" data-act="a" title="Set A (start) at the current position">A</button>
            <button class="text-mark-btn" data-act="b" title="Set B (end) at the current position">B</button>
            <span class="text-mark-time">
              <b class="seg-a" data-edge="a" title="跳到 A 时刻并选中编辑">A –</b>
              <b class="seg-b" data-edge="b" title="跳到 B 时刻并选中编辑">B –</b>
            </span>
            <button class="text-mark-btn" data-act="minus" title="Nudge the underlined edge −0.1s">−0.1</button>
            <button class="text-mark-btn" data-act="plus" title="Nudge the underlined edge +0.1s">+0.1</button>
            <button class="text-mark-btn" data-act="loop" title="Loop A ↔ B">↺</button>
            <button class="text-mark-btn save" data-act="save" title="Save this range to the selected sentence">保存</button>
          </div>`;
        }
      } else if (t.audio){
        html += `<div class="text-audio-id" title="Textbook audio track">🔊 ${escapeHtml(t.audio)}</div>`;
      }
      // Pre-listening comprehension questions (HSK3).
      if (t.questions && t.questions.length){
        html += '<div class="text-questions">';
        t.questions.forEach((q, qi) => {
          html += `<div class="text-question" data-answer="${escapeHtml(q.answer || '')}">
            <div class="text-question-q">${qi + 1}. ${escapeHtml(q.q || '')}</div>`;
          if (q.options && q.options.length){
            html += '<div class="text-question-options">';
            q.options.forEach((op, oi) => {
              const letter = String.fromCharCode(65 + oi);
              html += `<button class="text-q-option" data-letter="${letter}"><b>${letter}</b> ${escapeHtml(op)}</button>`;
            });
            html += '</div>';
          }
          html += '</div>';
        });
        html += '</div>';
      }
      // Sentences.
      (t.lines || []).forEach((line, li) => {
        const key = tId + '-' + li;
        // Shadowing hides the whole line — Chinese *and* English — until tapped.
        const shadowHide = shadowing && !shadowRevealed.has(key);
        const shown = !shadowHide && (showListEnglish || textRevealed.has(key));
        const cnHtml = textLineHtml(line.cn, hitsForText(line.cn, tId, li));
        const spk = line.speaker ? `<div class="text-line-speaker">${escapeHtml(line.speaker)}</div>` : '';
        const seg = segOf(tId, li);
        // Per-line ▶ is data-driven (any device with audio-segments.js sees it)
        // and is independent of the recording toggle.
        const play = seg
          ? `<button class="text-line-play" data-line="${li}" title="${segTitle(seg, line.cn)}">▶</button>`
          : '';
        // No English stored → render no node at all, so tapping the line (or the
        // English toggle) cannot flash an empty line.
        const enHtml = line.en
          ? `<div class="text-line-en" style="display:${shown ? 'block' : 'none'};">${escapeHtml(line.en)}</div>`
          : '';
        html += `<div class="text-line${line.speaker ? ' has-speaker' : ''}${seg ? ' has-seg' : ''}${shadowHide ? ' is-shadowed' : ''}" data-key="${escapeHtml(key)}" data-line="${li}">
          ${play}
          ${spk}
          <div class="text-line-body">
            <div class="text-line-cn${shadowHide ? ' shadowed' : ''}">${cnHtml}</div>
            ${enHtml}
          </div>
        </div>`;
      });
      // Collapsible vocabulary section shown after each dialogue, styled like
      // the grammar-section. The Vocab toggle expands/collapses its body; the
      // header stays clickable either way. Header also carries a read-aloud
      // button that plays the vocab audio (last B → end).
      // Core words assigned to this dialogue, plus any word the textbook lists
      // for it that is not in this lesson's core (review words, names, …),
      // deduped so each word shows up once.
      const textVocab = (lessonTextVocab[tId] || []).slice();
      const seenVocab = new Set(textVocab.map(w => w.hanzi));
      (t.words || []).forEach(w => {
        const hanzi = w.cn || w.hanzi;
        if (!hanzi || seenVocab.has(hanzi)) return;
        seenVocab.add(hanzi);
        textVocab.push({ hanzi, en: w.en, pos: w.pos });
      });
      if (textVocab.length){
        const vocabSeg = vocabSegOf(tId);
        // HSK3 ships a dedicated vocab-list track per text (wordAudio) — the
        // mp3 that follows the dialogue track (13-1 → 13-2). Older levels have
        // no such URL and instead play the tail of the dialogue audio.
        const wUrl = isAudioUrl(t.wordAudio) ? t.wordAudio : '';
        const vPlay = wUrl
          ? `<button class="vocab-play" data-text="${escapeHtml(tId)}" data-vocab-audio="${escapeHtml(wUrl)}" title="朗读单词表 · Vocabulary audio">🔊</button>`
          : ((isAudioUrl(t.audio) && vocabSeg)
            ? `<button class="vocab-play" data-text="${escapeHtml(tId)}" data-static-label="1" data-title-base="朗读单词 · 从 ${fmtTime1(vocabSeg.start)} 到结尾" title="朗读单词 · 从 ${fmtTime1(vocabSeg.start)} 到结尾">🔊</button>`
            : '');
        html += `<div class="vocab-section" data-text="${escapeHtml(tId)}">
          <div class="vocab-head" role="button" tabindex="0">
            <span class="vocab-head-inner">
              ${vPlay}
              <span class="vocab-caret">${showVocab ? '▾' : '▸'}</span>
              <span class="vocab-title">📖 单词 · Vocabulary</span>
              <span class="vocab-count">${textVocab.length}</span>
            </span>
          </div>
          <div class="vocab-body${showVocab ? '' : ' collapsed'}">
            <div class="vocab-body-inner">`;
        textVocab.forEach(w => {
          // Vocabulary always carries pinyin, independent of the Pinyin toggle.
          const vcn = rubyHtml(w.hanzi);
          html += `<div class="text-vocab-row" data-read="${escapeHtml(w.hanzi)}">
            <span class="text-vocab-cn">${vcn}</span>
            ${w.pos ? `<span class="text-vocab-pos">${escapeHtml(w.pos)}</span>` : ''}
            ${w.en ? `<span class="text-vocab-en">${escapeHtml(w.en)}</span>` : ''}
          </div>`;
        });
        html += '</div></div></div>';
      }
      // Post-reading questions (HSK3).
      if (t.postQuestions && t.postQuestions.length){
        html += '<div class="text-postquestions">';
        html += '<div class="text-postquestions-label">🗣 分角色朗读，读后回答 · Role-play and answer</div>';
        t.postQuestions.forEach((q, qi) => {
          html += `<div class="text-postquestion">${qi + 1}. ${rubyHtml(q.q || '')}</div>`;
        });
        html += '</div>';
      }
      // Grammar points (and tip) attached to this text (HSK3): same collapsible
      // section markup as the Grammar tab, shown under the text.
      const linked = lessonGrammar.filter(g => g.textId === t.id);
      if (linked.length){
        html += '<div class="text-grammar">';
        linked.forEach(g => { html += grammarPointSectionHtml(g, false); });
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    flashContainer.innerHTML = html;

    // Collapsible grammar sections shown under each text.
    bindGrammarToggles(flashContainer);
    // Collapsible vocabulary sections (same collapse pattern as grammar).
    flashContainer.querySelectorAll('.vocab-head').forEach(head => {
      if (head.dataset.bound) return;
      head.dataset.bound = '1';
      head.addEventListener('click', function(e){
        if (e.target.closest('.vocab-play')) return;   // the 🔊, is its own button
        const body = this.parentElement.querySelector('.vocab-body');
        if (!body) return;
        const nowCollapsed = !body.classList.contains('collapsed');
        body.classList.toggle('collapsed', nowCollapsed);
        const caret = this.querySelector('.vocab-caret');
        if (caret) caret.textContent = nowCollapsed ? '▸' : '▾';
      });
    });
    // Pre-listening questions: click an option to mark it right/wrong.
    flashContainer.querySelectorAll('.text-question').forEach(qEl => {
      const ans = qEl.dataset.answer;
      qEl.querySelectorAll('.text-q-option').forEach(btn => {
        btn.addEventListener('click', function(){
          qEl.querySelectorAll('.text-q-option').forEach(b => b.classList.remove('is-correct', 'is-wrong'));
          this.classList.add(this.dataset.letter === ans ? 'is-correct' : 'is-wrong');
        });
      });
    });
    // Read a grammar/practice sentence aloud on click.
    flashContainer.querySelectorAll('.text-grammar .grammar-item, .text-grammar .grammar-practice-item').forEach(el => {
      el.addEventListener('click', function(){ speakChinese(this.dataset.read); });
    });

    // Audio players.
    flashContainer.querySelectorAll('.text-audio').forEach(bar => {
      const btn = bar.querySelector('.text-play-btn');
      if (btn) btn.addEventListener('click', () => startTextAudio(bar));
      const seek = bar.querySelector('.text-seek');
      // Pre-load metadata so the seek bar has a real max and is draggable
      // before the user ever hits ▶.
      const url = bar.dataset.audio;
      if (url && !bar.dataset.preloaded){
        bar.dataset.preloaded = '1';
        const probe = new Audio();
        probe.preload = 'metadata';
        probe.src = url;
        probe.onloadedmetadata = () => {
          if (seek && isFinite(probe.duration) && probe.duration > 0 && !seek.dataset.sized){
            seek.dataset.sized = '1';
            seek.max = probe.duration;
            const t = bar.querySelector('.text-time');
            if (t) t.textContent = '0:00 / ' + fmtTime(probe.duration);
          }
          probe.src = '';
          probe.onloadedmetadata = null;
        };
        probe.onerror = () => { probe.src = ''; probe.onerror = null; };
      }
      if (seek) seek.addEventListener('input', function(){
        if (!textAudio || textAudioBar !== bar){
          // Not loaded yet — load it, then seek once metadata is ready.
          const a = ensureTextAudio(bar);
          if (!a){ return; }
          const target = parseFloat(this.value) || 0;
          const apply = () => {
            if (textAudio !== a) return;
            segPlay = null;
            a.currentTime = target;
            syncBarFromAudio();
          };
          if (a.readyState >= 1) apply();
          else a.addEventListener('loadedmetadata', apply, { once: true });
          return;
        }
        segPlay = null;
        textAudio.currentTime = parseFloat(this.value) || 0;
        const t = bar.querySelector('.text-time');
        if (t) t.textContent = fmtTime(textAudio.currentTime) + ' / ' + fmtTime(textAudio.duration);
      });
    });
    // A/B marking rows.
    flashContainer.querySelectorAll('.text-mark').forEach(bindMarkRow);
    // Delegated playback: per-line ▶, title ▶, and vocab 🔊, (container reused).
    if (!flashContainer.dataset.segDelegated){
      flashContainer.dataset.segDelegated = '1';
      flashContainer.addEventListener('click', e => {
        // Per-line ▶
        const play = e.target.closest('.text-line-play');
        if (play){
          e.stopPropagation();
          const item = play.closest('.text-item');
          const bar = item && item.querySelector('.text-audio');
          const seg = item && segOf(item.dataset.text, parseInt(play.dataset.line, 10));
          if (bar && seg) playSegment(bar, seg.start, seg.end, e.shiftKey, play);
          return;
        }
        // Title ▶ (0 → first sentence A)
        const tp = e.target.closest('.text-title-play');
        if (tp){
          e.stopPropagation();
          const item = tp.closest('.text-item');
          const bar = item && item.querySelector('.text-audio');
          const seg = titleSegOf(tp.dataset.text);
          if (bar && seg) playSegment(bar, seg.start, seg.end, false, tp);
          return;
        }
        // Vocab 🔊 — HSK3: its own track (wordAudio); older levels: last B → end
        const vp = e.target.closest('.vocab-play');
        if (vp){
          e.stopPropagation();
          if (vp.dataset.vocabAudio){
            toggleVocabAudio(vp.dataset.vocabAudio, vp);
            return;
          }
          const item = vp.closest('.text-item');
          const bar = item && item.querySelector('.text-audio');
          const seg = vocabSegOf(vp.dataset.text);
          if (bar && seg) playSegment(bar, seg.start, seg.end, false, vp);
          return;
        }
      });
    }
    updateSegExportBtn();
    // Line bars:
    //  - recording ON  → click selects the sentence (highlight as edit target)
    //  - recording OFF → click reveals/hides that line's English translation
    flashContainer.querySelectorAll('.text-line').forEach(line => {
      line.addEventListener('click', function(e){
        if (e.target.closest('.text-line-play')) return;
        const item = this.closest('.text-item');
        const tId = item && item.dataset.text;
        const li = parseInt(this.dataset.line, 10);
        if (!tId || !(li >= 0)) return;
        if (!segMarking){
          // Shadowing on → reveal this line's hidden Chinese text.
          if (shadowing){
            const key = this.dataset.key;
            const en = this.querySelector('.text-line-en');
            if (shadowRevealed.has(key)){
              shadowRevealed.delete(key);
              this.classList.add('is-shadowed');
              const cn = this.querySelector('.text-line-cn');
              if (cn) cn.classList.add('shadowed');
              if (en) en.style.display = 'none';
            } else {
              shadowRevealed.add(key);
              this.classList.remove('is-shadowed');
              const cn = this.querySelector('.text-line-cn');
              if (cn) cn.classList.remove('shadowed');
              // English only comes back if it was on (toggle or per-line reveal).
              if (en) en.style.display = (showListEnglish || textRevealed.has(key)) ? 'block' : 'none';
            }
            return;
          }
          // Reveal English on this line.
          if (showListEnglish) return;
          const en = this.querySelector('.text-line-en');
          if (!en) return;
          const key = this.dataset.key;
          if (textRevealed.has(key)) textRevealed.delete(key); else textRevealed.add(key);
          en.style.display = textRevealed.has(key) ? 'block' : 'none';
          return;
        }
        const m = markOf(tId);
        m.line = li;
        // Load this sentence's existing segment (if any) into A/B for fine-tune.
        const seg = segOf(tId, li);
        if (seg){
          m.a = seg.start;
          m.b = seg.end;
          m.edge = null;
        }
        paintLineSelect(tId);
        const row = item.querySelector('.text-mark');
        if (row){
          paintMarkRow(row, tId);
          paintRec(row, tId);
        }
      });
    });
    // Characters: click to read that single character aloud.
    flashContainer.querySelectorAll('.char-btn').forEach(ch => {
      ch.addEventListener('click', function(e){
        e.stopPropagation();
        speakChinese(this.dataset.ch);
      });
    });
    // Grammar-occurrence highlights: tap (or hover, with a mouse) shows a chip
    // naming the grammar point and reading the span; the chip jumps to that
    // lesson's Grammar tab. Bound in the capture phase because .char-btn stops
    // propagation in the bubble phase.
    flashContainer.querySelectorAll('.gp-hit').forEach(hit => {
      hit.addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();
        openGrammarChip(this, { toggle: !HOVER_CAPABLE });
      }, true);
      if (HOVER_CAPABLE){
        hit.addEventListener('mouseenter', function(){ openGrammarChip(this, { toggle: false }); });
        hit.addEventListener('mouseleave', function(){ scheduleChipClose(); });
      }
    });
    // Vocabulary rows: click to read the word aloud.
    flashContainer.querySelectorAll('.text-vocab-row').forEach(row => {
      row.addEventListener('click', function(){
        speakChinese(this.dataset.read);
      });
    });
    // Playback speed.
    questionArea.querySelectorAll('.text-speed-btn').forEach(btn => {
      btn.addEventListener('click', function(){
        textPlayRate = parseFloat(this.dataset.rate) || 1;
        questionArea.querySelectorAll('.text-speed-btn').forEach(b => b.classList.toggle('active', b === this));
        if (textAudio) textAudio.playbackRate = textPlayRate;
      });
    });
    const exportBtn = questionArea.querySelector('#segExportBtn');
    if (exportBtn) exportBtn.addEventListener('click', () => {
      const n = exportSegs();
      exportBtn.textContent = n ? '已导出 ' + n + ' 篇' : '还没有时间点';
      setTimeout(updateSegExportBtn, 2200);
    });
    const clearBtn = questionArea.querySelector('#segClearBtn');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      if (!window.confirm('清除本地草稿？已保存到浏览器但还没写进 audio-segments.js 的时间点会丢失。')) return;
      clearSegDraft();
      textSegs = loadSegs();
      renderTextList();
    });
    // If a track is still loaded across a re-render, re-attach its UI.
    if (textAudio){
      flashContainer.querySelectorAll('.text-audio').forEach(bar => {
        if (bar.dataset.audio === textAudio.src){
          textAudioBar = bar;
          setBarPlaying(bar, !textAudio.paused);
          syncBarFromAudio();
        }
      });
    }
    statusBadge.textContent = `📄 Texts · ${textsInScope().length} items`;
  }

  // ----- Grammar (grammar points with categorized sentences) -----
  function grammarTotal(){ return lessonGrammar.reduce((s,g)=>s+(g.items||[]).length,0); }

  // Render a grammar title's Chinese with tone-coloured pinyin above each character.
  function titleRuby(cn, py){
    if (!cn) return '';
    const sylls = (py || '').split(/\s+/).filter(Boolean);
    let si = 0, out = '';
    for (const ch of cn){
      if (/[\u3400-\u9fff\uf900-\ufaff]/.test(ch)){
        const s = sylls[si] || '';
        si++;
        out += `<ruby>${escapeHtml(ch)}<rt class="tone-${toneOf(s)}">${escapeHtml(s)}</rt></ruby>`;
      } else {
        out += escapeHtml(ch);
      }
    }
    return out;
  }

  function renderGrammar(){
    showAutoSpeak();
    // Grammar reads sentence-by-sentence with the shared read toolbar.
    readList = [];
    if (lessonGrammar.length === 0){
      questionArea.style.display = '';
      questionArea.innerHTML = '<div style="font-size:1rem;color:#6b6154;">No grammar notes for this lesson yet.</div>';
      optionsContainer.style.display = 'none';
      flashContainer.innerHTML = '';
      flashContainer.style.display = 'none';
      fillContainer.style.display = 'none';
      moleContainer.style.display = 'none';
      memoryContainer.style.display = 'none';
      pictureContainer.style.display = 'none';
      return;
    }
    questionArea.innerHTML = '';
    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    // Full word map (core + extended) so pinyin ruby resolves properly.
    const savedMap = wordMap;
    wordMap = {};
    lessonCoreWords.forEach(w => { wordMap[w.hanzi] = w; });
    lessonExtendedWords.forEach(w => { wordMap[w.hanzi] = w; });

    // English lookup from the lesson phrases.
    const pmap = {};
    lessonPhrases.forEach(p => { if (!(p.cn in pmap)) pmap[p.cn] = p; });

    // Word classification for highlighting: current core/extended vs. previously learned.
    const ws = lessonWordSets(currentLesson);
    const curCore = new Set(ws.core.map(w => w.hanzi));
    const curExt = new Set(ws.extended.map(w => w.hanzi));
    const accCore = new Set(), accExt = new Set();
    for (let i = 1; i < currentLesson; i++){
      const p = lessonWordSets(i);
      p.core.forEach(w => accCore.add(w.hanzi));
      p.extended.forEach(w => accExt.add(w.hanzi));
    }
    const base = baselineWordSets();
    base.core.forEach(w => accCore.add(w.hanzi));
    base.extended.forEach(w => accExt.add(w.hanzi));
    const allWords = new Set([...curCore, ...curExt, ...accCore, ...accExt, ...neutralWords()]);
    // Anything outside every list is beyond the textbook ("超纲"). Levels that
    // have real `extended` words (hsk1) get their own colour so the two are
    // distinguishable; levels with none (hsk2) reuse `ext`, which matches what
    // sentenceClassifier() means by extended. Neutral function words stay
    // uncoloured — they are known, just not taught.
    const beyondCat = levelHasExtended() ? 'beyond' : 'ext';
    const classifyWord = w => curCore.has(w) ? 'core' : curExt.has(w) ? 'ext' : accCore.has(w) ? 'acc-core' : accExt.has(w) ? 'acc-ext' : neutralWords().has(w) ? null : beyondCat;
    // Highlighting must not change the text itself, so every grammar sentence
    // goes through this one path: same segmentation, same pinyin source.
    const renderSentence = (cn, py) => {
      if (!cn) return '';
      // Prefer the hand-written `py` (authoritative); fall back to pinyin-pro's
      // whole-sentence reading. Both arrays are indexed by character position.
      const pyArr = (py ? perCharFromPy(cn, py) : null) || perCharPinyin(cn);
      let out = '', i = 0;
      while (i < cn.length){
        const ch = cn[i];
        if (!/[\u3400-\u9fff\uf900-\ufaff]/.test(ch)){ out += escapeHtml(ch); i++; continue; }
        let hit = null;
        for (let len = Math.min(6, cn.length - i); len > 0; len--){
          const sub = cn.slice(i, i + len);
          if (allWords.has(sub)){ hit = sub; break; }
        }
        if (!hit) hit = ch;
        const cat = classifyWord(hit);
        const ruby = !showListPinyin ? escapeHtml(hit)
          : pyArr ? rubyFromArray(hit, i, pyArr)
          : rubyHtml(hit);
        out += (cat && showHl[cat]) ? `<span class="hl hl-${cat}">${ruby}</span>` : ruby;
        i += hit.length;
      }
      return out;
    };

    // A sentence is "extended" when it needs vocabulary beyond this lesson's Core
    // words plus the Core words of earlier lessons — see sentenceClassifier().
    const isExtended = sentenceClassifier(currentLesson);
    // The province block always leads the grammar section list.
    const orderedGrammar = lessonGrammar
      .map((g, gi) => ({ g, gi }))
      .sort((a, b) => (a.g.id === 'shengfen' ? 0 : 1) - (b.g.id === 'shengfen' ? 0 : 1));

    let html = '<div class="grammar-list">';
    let shownSections = 0, shownItems = 0;
    orderedGrammar.forEach(({ g, gi }) => {
      // Corpora without difficulty levels (hsk1) ignore the Lv switches entirely.
      const hasLv = (g.items || []).some(it => it.lv);
      const items = g.items.slice()
        .map(it => ({ c: it.c, py: it.py, en: it.en, sub: it.sub || '', lv: it.lv, tags: it.tags, ext: isExtended(it.c) }))
        .filter(it => grammarSub === 'all' || (grammarSub === 'ext') === it.ext)
        .filter(it => !hasLv || showLv[+(it.lv || 1)] !== false);
      if (!items.length) return;
      shownSections++; shownItems += items.length;
      // Keep sub-groups (a./b./c.) contiguous. When the point declares a subs[]
      // table (label + exp per usage), drive the groups from it and match items
      // by sub id; otherwise fall back to first-seen order over item.sub.
      const groups = [];
      if (Array.isArray(g.subs) && g.subs.length){
        const byId = new Map();
        const orphans = [];
        g.subs.forEach(s => {
          const gr = { sub: s.label || '', exp: s.exp || '', bucket: [] };
          byId.set(s.id, gr);
          groups.push(gr);
        });
        items.forEach(it => {
          const gr = byId.get(it.sub);
          if (gr) gr.bucket.push(it);
          else orphans.push(it);   // sub id not declared in subs[] — never drop it
        });
        if (orphans.length) groups.push({ sub: '', exp: '', bucket: orphans });
      } else {
        const bySub = new Map();
        items.forEach(it => {
          if (!bySub.has(it.sub)){ const bucket = []; bySub.set(it.sub, bucket); groups.push({ sub: it.sub, exp: '', bucket }); }
          bySub.get(it.sub).push(it);
        });
      }
      // Easy first: level 1 → 2 → 3, and inside a level keep Core before Extended.
      groups.forEach(gr => gr.bucket.sort((a, b) => ((a.lv || 1) - (b.lv || 1)) || ((a.ext ? 1 : 0) - (b.ext ? 1 : 0))));
      const focused = !!g.id && g.id === grammarFocus;
      // A Topics jump expands the point it points at, even if it was collapsed.
      const open = grammarOpen.has(g.id) || focused;
      html += `<div class="grammar-section${focused ? ' grammar-focus' : ''}" data-g="${gi}" data-point="${escapeHtml(g.id || '')}">
        <button class="grammar-head">
          <span class="grammar-head-inner">
          <span class="grammar-caret">${open ? '▾' : '▸'}</span>
          <span class="grammar-title"><span class="grammar-title-cn">${titleRuby(g.cn, g.py)}</span> <span class="grammar-title-en">${escapeHtml(g.en || '')}</span></span>
          ${grammarTagHtml(g)}
          <span class="grammar-count">${items.length}</span>
          </span>
        </button>
        <div class="grammar-body${open ? '' : ' collapsed'}" data-gid="${escapeHtml(g.id || '')}">
          <div class="grammar-body-inner">`;
      html += noteHtml(g.note);
      if (g.noteEn) html += `<div class="grammar-intro grammar-intro-en">${escapeHtml(g.noteEn)}</div>`;
      html += provinceMapHtml(g.cn);
      groups.forEach(gr => {
        // sub / exp may contain Chinese (e.g. "还 1 · 状态持续"); ruby-annotate the
        // Han characters so the usage labels read with pinyin too.
        if (gr.sub) html += `<div class="grammar-sub">${rubyHtml(gr.sub)}</div>`;
        if (gr.exp) html += `<div class="grammar-subexp">${rubyHtml(gr.exp)}</div>`;
        gr.bucket.forEach(it => {
          const en = showListEnglish ? ((pmap[it.c] && pmap[it.c].en) || it.en || '') : '';
          const cn = renderSentence(it.c, it.py);
          html += `<div class="grammar-item${it.ext ? ' ext' : ''}" data-read="${escapeHtml(it.c)}">
            <span class="grammar-cn">${itemBadgeHtml(it)}${cn}</span>
            ${en ? `<span class="grammar-en">${escapeHtml(en)}</span>` : ''}
          </div>`;
        });
      });
      if (g.practice && g.practice.length){
        html += '<div class="grammar-practice"><div class="grammar-practice-label">✏️ 练习 · Practice</div>';
        g.practice.forEach(p => {
          html += `<div class="grammar-practice-item" data-read="${escapeHtml(p.cn || '')}">${rubyHtml(p.cn)}${p.en ? `<span class="grammar-en">${escapeHtml(p.en)}</span>` : ''}</div>`;
        });
        html += '</div>';
      }
      html += '</div></div></div>';
    });
    html += '</div>';
    flashContainer.innerHTML = readMenuHtml() + html;
    // Highlight the province named in each province group (海南省 ← 省份：海南).
    flashContainer.querySelectorAll('.province-map').forEach(box => {
      const name = box.dataset.province;
      if (!name) return;
      box.querySelectorAll('.china-map [data-province]').forEach(p => {
        if (p.dataset.province.indexOf(name) === 0) p.classList.add('on');
      });
    });
    indexReadRows();

    wordMap = savedMap;

    flashContainer.querySelectorAll('.grammar-head').forEach(head => {
      head.addEventListener('click', function(){
        const body = this.parentElement.querySelector('.grammar-body');
        const gid = body.dataset.gid;
        const nowCollapsed = !body.classList.contains('collapsed');
        body.classList.toggle('collapsed', nowCollapsed);
        this.querySelector('.grammar-caret').textContent = nowCollapsed ? '▸' : '▾';
        // Remember the open sections so re-renders don't lose them.
        if (gid){ if (nowCollapsed) grammarOpen.delete(gid); else grammarOpen.add(gid); }
        // The read list follows what is on screen: rebuild it after expanding or
        // collapsing a point, so newly opened sentences join and closed ones drop.
        indexReadRows();
      });
    });
    bindReadMenu();
    // Click a sentence to read the whole sentence aloud.
    flashContainer.querySelectorAll('.grammar-item').forEach(item => {
      item.addEventListener('click', function(){ speakChinese(this.dataset.read); });
    });
    const scopeLabel = grammarSub === 'all' ? 'All' : grammarSub === 'ext' ? 'Extended' : 'Core HSK';
    statusBadge.textContent = `🧩 Grammar · ${scopeLabel} · ${shownSections} sections · ${shownItems} sentences`;

    // Arrived here from a Topics lesson chip: reveal the point it referred to.
    if (grammarFocus){
      const target = flashContainer.querySelector(`.grammar-section[data-point="${cssEscape(grammarFocus)}"]`);
      grammarFocus = null;
      if (target){
        target.scrollIntoView({ block: 'start', behavior: 'smooth' });
        target.classList.add('grammar-flash');
        setTimeout(() => target.classList.remove('grammar-flash'), 1600);
      }
    }
  }

  // Cross-lesson topics (🔗 Topics tab): side-by-side comparisons that span more
  // than one lesson. Data comes from data/sentences/grammar-topics.js. Each topic
  // is one card with a comparison table; a lesson chip jumps to that lesson.
  function renderTopics(){
    showAutoSpeak();
    const topics = window.GRAMMAR_TOPICS || [];
    if (!topics.length){
      questionArea.style.display = '';
      questionArea.innerHTML = '<div style="font-size:1rem;color:#6b6154;">No topics available.</div>';
      optionsContainer.style.display = 'none';
      flashContainer.innerHTML = '';
      flashContainer.style.display = 'none';
      fillContainer.style.display = 'none';
      moleContainer.style.display = 'none';
      memoryContainer.style.display = 'none';
      pictureContainer.style.display = 'none';
      return;
    }
    questionArea.innerHTML = '';
    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    // Full word map (core + extended) so pinyin ruby resolves properly.
    const savedMap = wordMap;
    wordMap = {};
    lessonCoreWords.forEach(w => { wordMap[w.hanzi] = w; });
    lessonExtendedWords.forEach(w => { wordMap[w.hanzi] = w; });

    const lessonName = id => {
      const i = LESSONS.findIndex(L => L.id === id);
      return i >= 0 ? LESSONS[i].name : ('L' + id);
    };

    readList = [];
    let html = '<div class="grammar-list topics-list">';
    let shownRows = 0;
    topics.forEach(t => {
      html += `<div class="grammar-section topic-section" data-topic="${escapeHtml(t.id)}">
        <button class="grammar-head topic-head">
          <span class="grammar-head-inner">
          <span class="grammar-caret">\u25b8</span>
          <span class="grammar-title"><span class="grammar-title-cn">${rubyHtml(t.cn || '')}</span> <span class="grammar-title-en">${escapeHtml(t.en || '')}</span></span>
          <span class="grammar-count">${(t.rows || []).length}</span>
          </span>
        </button>
        <div class="grammar-body collapsed" data-gid="topic-${escapeHtml(t.id)}">`;
      html += noteHtml(t.note);
      if (Array.isArray(t.lessons) && t.lessons.length){
        const pts = t.points || [];
        html += '<div class="topic-lessons">'
          + t.lessons.map((id, li) => `<button class="topic-lesson-chip" data-lesson="${escapeHtml(id)}" data-point="${escapeHtml(pts[li] || '')}">${escapeHtml(lessonName(id))}</button>`).join('')
          + '</div>';
      }
      (t.rows || []).forEach(r => {
        shownRows++;
        html += `<div class="topic-row" data-read="${escapeHtml(r.cn || '')}">
          <span class="topic-label">${rubyHtml(r.label || '')}</span>
          <span class="grammar-cn">${rubyHtml(r.cn || '')}</span>
          <span class="grammar-en">${escapeHtml(r.en || '')}</span>
        </div>`;
      });
      html += '</div></div>';
    });
    html += '</div>';
    flashContainer.innerHTML = readMenuHtml() + html;
    indexReadRows();

    wordMap = savedMap;

    bindReadMenu();
    flashContainer.querySelectorAll('.topic-head').forEach(head => {
      head.addEventListener('click', function(){
        const body = this.parentElement.querySelector('.grammar-body');
        const nowCollapsed = !body.classList.contains('collapsed');
        body.classList.toggle('collapsed', nowCollapsed);
        this.querySelector('.grammar-caret').textContent = nowCollapsed ? '\u25b8' : '\u25be';
        indexReadRows();
      });
    });
    // Click a row to read its Chinese sentence aloud.
    flashContainer.querySelectorAll('.topic-row').forEach(row => {
      row.addEventListener('click', function(){ speakChinese(this.dataset.read); });
    });
    // Lesson chips jump to the lesson's Grammar tab, expanding and flashing the
    // grammar point the chip refers to (data-point). setLesson() alone leaves
    // currentMode on 'topics', so setMode() must follow to actually switch tabs.
    flashContainer.querySelectorAll('.topic-lesson-chip').forEach(chip => {
      chip.addEventListener('click', function(e){
        e.stopPropagation();
        jumpToPoint(LEVEL_NUM, this.dataset.lesson, this.dataset.point || '');
      });
    });
    statusBadge.textContent = `\ud83d\udd17 Topics \u00b7 ${topics.length} topics \u00b7 ${shownRows} comparisons`;
  }

  // ---- Shared read toolbar (word list / sentence list / grammar / topics) ----
  // One control strip drives every list style: slow speeds, repeats per sentence,
  // and shadowing (read once, wait the same duration, read again).
  // Shared speed strip: used by the read toolbar (lists / grammar) and by the
  // Word / Sentence cards, so one rate applies everywhere.
  function speedBarHtml(){
    return `<div class="read-speed" id="readSpeedBar" title="Speed">
          <span class="read-ctl-label">${chipText('🐢', 'Speed')}</span>
          ${READ_RATES.map(r => `<button class="${r.rate === speakRate ? 'active' : ''}" data-rate="${r.rate}">${r.label.replace(/x$/, '')}<span class="rate-x">x</span></button>`).join('')}
        </div>`;
  }
  // Front-of-card picker: 汉字 / pinyin / English (Word + Sentence cards).
  function cardViewBarHtml(id, current){
    const btn = (view, label) =>
      `<button class="${current === view ? 'active' : ''}" data-view="${view}">${label}</button>`;
    return `<div class="sent-view-bar" id="${id}">
        ${btn('hanzi', '🀄 汉字')}
        ${btn('pinyin', '🔠 pinyin')}
        ${btn('english', '🔤 English')}
      </div>`;
  }
  function readMenuHtml(){
    const playing = readActive && !readPaused;
    return `
      <div class="sentence-read-menu">
        <div class="read-main-row">
          <button id="sentenceReadBtn" class="${readActive ? 'reading' : ''}">${chipText(playing ? '🔊' : readActive ? '▶' : '🔊', playing ? 'Reading…' : readActive ? 'Resume' : 'Read')}</button>
          <button id="sentencePauseBtn" ${playing ? '' : 'disabled'}>${chipText('⏸', 'Pause')}</button>
          <button id="loopToggle" class="shadow-toggle ${readLoop ? 'on' : ''}" title="When the list ends, read it again from the top (whatever is expanded at that moment)">${chipText('🔁', 'Loop')}</button>
          <button id="shadowToggle" class="shadow-toggle ${readShadow ? 'on' : ''}" title="Read once, then stay silent for the same time so you can shadow">${chipText('🫧', 'Shadow')}</button>
        </div>
        ${speedBarHtml()}
        <div class="read-repeat" id="readRepeatBar" title="Reads per sentence">
          <span class="read-ctl-label">${chipText('🔁', 'Repeat')}</span>
          ${[1,2,3,4,5].map(r => `<button class="${readRepeat === r ? 'active' : ''}" data-r="${r}">${r}x</button>`).join('')}
        </div>
      </div>`;
  }
  function applyReadRate(rate){
    const changed = rate !== speakRate;
    speakRate = rate;
    saveReadRate(rate);
    document.querySelectorAll('#readSpeedBar [data-rate]').forEach(b => {
      b.classList.toggle('active', parseFloat(b.dataset.rate) === rate);
    });
    // A new speed must be audible right away: at 0.1x a single sentence can run
    // 20–30s, so "applies from the next sentence" looks like the button is dead.
    if (!changed) return;
    if (readActive){ restartSentenceRead(true); return; }
    if (lastSpokenText && window.speechSynthesis && window.speechSynthesis.speaking){
      speak(lastSpokenText);
    }
  }
  // Changing a read setting mid-play restarts the loop from the current item so
  // the new setting takes effect immediately.
  function restartSentenceRead(force){
    if (!readActive) return;
    // Mid-utterance: let this sentence finish, the new setting applies from the
    // next read (interrupting here would replay the same sentence). A speed
    // change passes force — it has to be audible immediately.
    if (readSpeaking && !force) return;
    // Cancel the in-flight read, but make sure its onend/onerror cannot start a
    // second loop: the generation bump orphans that callback.
    readGen++;
    if (readTimer){ clearTimeout(readTimer); readTimer = null; }
    if (readWatchdog){ clearTimeout(readWatchdog); readWatchdog = null; }
    if (speakTimeout){ clearTimeout(speakTimeout); speakTimeout = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    readPaused = false;
    // readItemRep is deliberately kept: a setting change must not re-count the
    // rep that just finished (it would replay the sentence from rep 1).
    updateReadButtons();
    sentenceReadNext();
  }
  function bindReadMenu(){
    const rb = $('sentenceReadBtn');
    if (rb) rb.addEventListener('click', () => {
      if (readActive && !readPaused) return;          // already playing
      if (readActive && readPaused) resumeSentenceRead();
      else startSentenceRead();
    });
    const pb = $('sentencePauseBtn');
    if (pb) pb.addEventListener('click', pauseSentenceRead);
    const sb = $('readSpeedBar');
    if (sb){
      sb.querySelectorAll('button[data-rate]').forEach(b => {
        b.addEventListener('click', () => {
          applyReadRate(parseFloat(b.dataset.rate));
        });
      });
    }
    const rrb = $('readRepeatBar');
    if (rrb){
      rrb.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          readRepeat = parseInt(b.dataset.r, 10) || 1;
          readItemRep = 0;
          rrb.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
          restartSentenceRead();
        });
      });
    }
    const sh = $('shadowToggle');
    if (sh){
      sh.addEventListener('click', () => {
        readShadow = !readShadow;
        sh.classList.toggle('on', readShadow);
        flashChip(sh);
        restartSentenceRead();
      });
    }
    const lp = $('loopToggle');
    if (lp){
      lp.addEventListener('click', () => {
        readLoop = !readLoop;
        lp.classList.toggle('on', readLoop);
        flashChip(lp);
      });
    }
  }
  // Resolve the DOM rows for readList[i] in whichever list style is on screen.
  function readRowSelector(i){
    return '.sentence-list-item[data-i="' + i + '"], .word-list-item[data-i="' + i + '"]'
      + ', .grammar-item[data-ri="' + i + '"], .topic-row[data-ri="' + i + '"]';
  }
  // Every readable row in visual order (collapsed grammar sections are skipped,
  // since their body is display:none).
  function visibleReadRows(){
    // Rows carry data-read (grammar/topics) or data-i (word/sentence lists).
    // data-ri is assigned here, so it must not be part of the query.
    return Array.from(flashContainer.querySelectorAll(
      '.sentence-list-item[data-i], .word-list-item[data-i], .grammar-item[data-read], .topic-row[data-read]'
    )).filter(el => el.offsetParent !== null);
  }
  // Number the rows on screen after every render: the number is the position in
  // visual order, so reading order === screen order (and section-local indices can
  // no longer collide across grammar points).
  function indexReadRows(){
    readList = [];
    // Drop stale numbers first: a row that just got collapsed must not keep the
    // index it had while visible, or it would shadow an open row with the same one.
    flashContainer.querySelectorAll('[data-ri]').forEach(el => { delete el.dataset.ri; });
    visibleReadRows().forEach(el => {
      el.dataset.ri = readList.length;
      readList.push(el.dataset.read || '');
    });
  }
  // ----- Gentle scroll follow -----
  // Only pull the reading row into view when it is essentially off screen, and
  // back off for a moment after the learner scrolls by hand.
  const SCROLL_SUPPRESS_MS = 2000;
  let lastUserScrollAt = -1e9;
  let autoScrollUntil = 0;
  window.addEventListener('scroll', () => {
    if (performance.now() < autoScrollUntil) return;   // our own scrollIntoView
    lastUserScrollAt = performance.now();
  }, true);
  // Visible both in the window and inside whichever list container scrolls.
  function rowOnScreen(el){
    const vh = window.innerHeight || document.documentElement.clientHeight;
    let top = 0, bottom = vh;
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement){
      const cs = getComputedStyle(p);
      if (/(auto|scroll)/.test(cs.overflowY) && p.scrollHeight > p.clientHeight + 1){
        const pr = p.getBoundingClientRect();
        top = Math.max(top, pr.top);
        bottom = Math.min(bottom, pr.bottom);
        break;
      }
    }
    const r = el.getBoundingClientRect();
    return r.top >= top - 8 && r.bottom <= bottom + 8;
  }
  function revealRow(el){
    if (rowOnScreen(el)) return;
    if (performance.now() - lastUserScrollAt < SCROLL_SUPPRESS_MS) return;
    autoScrollUntil = performance.now() + 700;
    el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function markReadRow(i, shadow){
    document.querySelectorAll('.sentence-list-item.reading, .word-list-item.reading, .grammar-item.reading, .topic-row.reading')
      .forEach(el => el.classList.remove('reading', 'shadowing'));
    const el = document.querySelector(readRowSelector(i));
    if (!el) return;
    el.classList.add(shadow ? 'shadowing' : 'reading');
    revealRow(el);
  }

  // Read-aloud: read each item in readList readRepeat times, in display order.
  // Shadowing wraps every single read: after the voice stops, the row waits
  // silently for the same duration before the next read starts.
  function stopSentenceRead(){
    readActive = false;
    readPaused = false;
    readSpeaking = false;
    readItemRep = 0;
    readGen++;                                    // invalidate callbacks of the old loop
    if (readTimer){ clearTimeout(readTimer); readTimer = null; }
    if (readWatchdog){ clearTimeout(readWatchdog); readWatchdog = null; }
    if (speakTimeout){ clearTimeout(speakTimeout); speakTimeout = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    updateReadButtons();
    document.querySelectorAll('.sentence-list-item.reading, .word-list-item.reading, .grammar-item.reading, .topic-row.reading, .shadowing')
      .forEach(el => el.classList.remove('reading', 'shadowing'));
  }
  function pauseSentenceRead(){
    if (!readActive || readPaused) return;
    readPaused = true;
    readSpeaking = false;
    readGen++;
    if (readTimer){ clearTimeout(readTimer); readTimer = null; }
    if (readWatchdog){ clearTimeout(readWatchdog); readWatchdog = null; }
    if (speakTimeout){ clearTimeout(speakTimeout); speakTimeout = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    updateReadButtons();
  }
  function resumeSentenceRead(){
    if (!readActive || !readPaused) return;
    readPaused = false;
    readGen++;
    updateReadButtons();
    sentenceReadNext();
  }
  // Index of the first row the learner can actually see: pressing Read starts
  // there, so scrolling to a spot first works without resetting to the top.
  function firstVisibleReadIndex(){
    const rows = visibleReadRows();
    for (let i = 0; i < rows.length; i++){
      if (rowOnScreen(rows[i])) return i;
    }
    return 0;
  }
  function startSentenceRead(fromIndex){
    if (readActive && !readPaused) return;
    if (!readList.length){
      // Grammar/Topics only read what is expanded; an empty list means every
      // point is collapsed.
      flashStatus('展开一个语法点再朗读 · Expand a point to read');
      return;
    }
    if (typeof fromIndex === 'number'){
      if (fromIndex < 0 || fromIndex >= readList.length) return;
      readIndex = fromIndex;
      readItemRep = 0;
    } else if (!readActive){
      readIndex = firstVisibleReadIndex();
      readItemRep = 0;
    }
    readActive = true;
    readPaused = false;
    readGen++;                       // fresh loop; anything from before is stale
    updateReadButtons();
    sentenceReadNext();
  }
  function updateReadButtons(){
    const rb = $('sentenceReadBtn');
    const pb = $('sentencePauseBtn');
    const playing = readActive && !readPaused;
    if (rb){
      rb.classList.toggle('reading', readActive);
      rb.innerHTML = chipText(playing ? '🔊' : readActive ? '▶' : '🔊',
        playing ? 'Reading…' : readActive ? 'Resume' : 'Read');
    }
    if (pb) pb.disabled = !playing;
  }
  function sentenceReadNext(){
    if (!readActive || readPaused) return;
    if (readIndex >= readList.length){
      if (!readLoop){ stopSentenceRead(); return; }
      // Loop: re-read what is on screen *now* — sections expanded or collapsed
      // during the previous pass change the next pass, nothing else does.
      indexReadRows();
      if (!readList.length){ stopSentenceRead(); return; }
      readIndex = 0;
      readItemRep = 0;
      readGen++;
      updateReadButtons();
      sentenceReadNext();
      return;
    }
    const txt = readList[readIndex];
    // Everything this step schedules is tagged with the generation that created
    // it. Toggling speed / shadow restarts the loop, and the cancelled utterance
    // still fires onend — without this guard that stale callback would advance a
    // second, parallel loop and the rows would skip forward on their own.
    const gen = readGen;
    const alive = () => readActive && !readPaused && gen === readGen;
    const step = () => {
      if (!alive()) return;
      markReadRow(readIndex, false);
      // The gap counts from the *end* of speech, so shadowing gives at least
      // as long as the read took to repeat aloud (times shadowPauseFactor).
      let startedAt = 0, finished = false;
      const done = () => {
        if (finished || !alive()) return;
        finished = true;
        readSpeaking = false;
        if (readWatchdog){ clearTimeout(readWatchdog); readWatchdog = null; }
        const gap = readShadow
          ? Math.max(400, (performance.now() - startedAt) * shadowPauseFactor)
          : (readItemRep + 1 < readRepeat ? 700 : 1000);
        if (readShadow) markReadRow(readIndex, true);
        readItemRep++;
        if (readItemRep < readRepeat){
          readTimer = setTimeout(step, gap);
        } else {
          readIndex++;
          readItemRep = 0;
          readTimer = setTimeout(sentenceReadNext, readShadow ? gap : 1000);
        }
      };
      // Fallback in case this engine never fires onend (long utterances on some
      // platforms): assume ~4 chars/second at 1x and then close the gap.
      const est = Math.max(1500, txt.length * 250 / speakRate);
      readWatchdog = setTimeout(done, est + 400);
      startedAt = performance.now();
      readSpeaking = true;
      speak(txt, done, speakRate);
    };
    step();
  }

  function renderSentFlash(){
    showAutoSpeak();
    if (listMode){ renderSentenceList(); return; }
    const item = getCurrentItem(phrases);
    if (!item) return;
    const isFlipped = userAnswer === 'flipped';

    questionArea.innerHTML = `
      ${cardViewBarHtml('sentViewBar', sentCardView)}
      ${speedBarHtml()}
      <div style="font-size:0.9rem;color:#6b6154;margin-bottom:4px;">🃏 Tap card to flip</div>
      <div style="margin-bottom:6px;"><button class="sound-btn" id="flashPlayBtn">🔊</button></div>
    `;

    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let html = '';
    if (isFlipped){
      html = `<div class="flash-card" id="flashCard">
        <div class="front sent-card-back">${rubyHtml(item.cn)}</div>
        <div class="back">
          <div style="font-size:1.1rem;font-weight:500;">${item.en}</div>
          <div class="hint-text">Tap to continue</div>
        </div>
      </div>`;
    } else {
      let frontHtml;
      if (sentCardView === 'pinyin') frontHtml = `<div class="front sent-front-pinyin">${colorPinyin(phrasePinyin(item))}</div>`;
      else if (sentCardView === 'english') frontHtml = `<div class="front sent-front-english">${item.en}</div>`;
      else frontHtml = `<div class="front sent-front-hanzi">${item.cn}</div>`;
      html = `<div class="flash-card" id="flashCard">
        ${frontHtml}
        <div class="hint-text">👆 Tap to flip</div>
      </div>`;
    }
    flashContainer.innerHTML = html;

    const playBtn = $('flashPlayBtn');
    if (playBtn) playBtn.addEventListener('click', () => speakChinese(item.cn));
    bindReadMenu();

    const svb = $('sentViewBar');
    if (svb){
      svb.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          sentCardView = b.dataset.view;
          render();
        });
      });
    }
    if (!isAnswered && autoSpeak) setTimeout(() => speakChinese(item.cn), 300);

    const card = $('flashCard');
    if (card){
      card.addEventListener('click', function(){
        if (userAnswer === 'flipped'){
          userAnswer = null;
          isAnswered = false;
          flashSpoken = false;
          if (currentIndex < phrases.length - 1) currentIndex++;
          else currentIndex = 0;
          render();
          updateCounter();
          updateScore();
        } else {
          userAnswer = 'flipped';
          isAnswered = true;
          flashSpoken = false;
          if (!answeredQuestions[`sentflash-${currentIndex}`]){
            score++;
            answeredQuestions[`sentflash-${currentIndex}`] = true;
          }
          updateScore();
          messageArea.className = 'message info-msg';
          messageArea.textContent = `📖 ${item.en} · ${phrasePinyin(item)}`;
          statusBadge.textContent = '🃏 Flipped';
          render();
          if (!flashSpoken){ flashSpoken = true; speakChinese(item.cn); }
        }
      });
    }
    if (isFlipped && !flashSpoken){
      flashSpoken = true;
      setTimeout(() => speakChinese(item.cn), 300);
    }
  }

  // ----- Fill -----
  function renderFill(){
    showAutoSpeak();
    const item = getCurrentItem(fillItems);
    if (!item){ renderEmptyState(); return; }
    const parts = item.parts;

    questionArea.innerHTML = `
      <div style="font-size:1rem;color:#6b6154;margin-bottom:4px;">✏️ Fill in the blank</div>
      <div style="font-size:1.1rem;color:#4d6b55;margin-bottom:4px;">📖 ${item.phrase.en}</div>
      <div style="margin-top:6px;"><button class="sound-btn" id="fillPlayBtn">🔊</button></div>
    `;

    optionsContainer.style.display = 'flex';
    flashContainer.style.display = 'none';
    fillContainer.style.display = 'block';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let sentenceHtml = '<div class="fill-blank-area">';
    for (let p of parts){
      if (p.isBlank){
        let cls = 'blank';
        if (userAnswer){ cls += ' filled'; if (isAnswered) cls += (isCorrect ? ' correct' : ' wrong'); }
        const display = userAnswer || '　'.repeat(Math.max(1, p.chars.length));
        sentenceHtml += `<span class="${cls}">${display}</span>`;
        if (isAnswered){
          const ap = getWordPinyin(item.answer, wordMap);
          if (isCorrect) sentenceHtml += `<span class="answer-reveal">✓ Correct! <span style="font-size:0.6rem;color:#4d6b55;margin-left:4px;">${ap}</span></span>`;
          else sentenceHtml += `<span class="answer-reveal">✓ ${item.answer} <span style="font-size:0.6rem;color:#4d6b55;margin-left:4px;">${ap}</span></span>`;
        }
      } else {
        sentenceHtml += `<span class="static-char">${rubyHtml(p.chars.join(''))}</span>`;
      }
    }
    sentenceHtml += '</div>';
    fillContainer.innerHTML = sentenceHtml;

    const fillBtn = $('fillPlayBtn');
    if (fillBtn) fillBtn.addEventListener('click', () => speakChinese(item.phrase.cn));
    if (!isAnswered && autoSpeak) setTimeout(() => speakChinese(item.phrase.cn), 300);

    // The option order must stay put while the question is on screen — the
    // shuffle happens once per item (and again when Reset/Next re-rolls it).
    if (!item.shuffledOptions) item.shuffledOptions = shuffleCopy(item.options);
    const options = item.shuffledOptions;
    let optHtml = '';
    options.forEach(opt => {
      let cls = 'opt-btn';
      if (isAnswered){
        if (opt === item.answer) cls += ' correct';
        else if (opt === userAnswer && userAnswer !== item.answer) cls += ' wrong';
      }
      optHtml += `<button class="${cls}" data-word="${opt}" ${isAnswered?'disabled':''}>${rubyHtml(opt)}</button>`;
    });
    optionsContainer.innerHTML = optHtml;

    if (!isAnswered){
      optionsContainer.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', function(){ handleFillAnswer(this.dataset.word, item); });
      });
    }
  }

  function handleFillAnswer(word, item){
    if (isAnswered) return;
    isAnswered = true;
    userAnswer = word;
    isCorrect = (word === item.answer);
    if (isCorrect){
      if (!answeredQuestions[`fill-${currentIndex}`]){
        score++; answeredQuestions[`fill-${currentIndex}`] = true;
      }
      messageArea.className = 'message correct-msg';
      messageArea.textContent = `✅ Correct! “${word}”`;
      statusBadge.textContent = '⭐ Correct';
      speakChinese(word);
      clearAutoAdvance();
      autoAdvanceTimer = setTimeout(() => {
        autoAdvanceTimer = null;
        isAnswered = false; userAnswer = null;
        if (currentIndex < fillItems.length - 1) currentIndex++;
        else { currentIndex = 0; score = 0; answeredQuestions = {}; }
        reseedFillBlank();
        render();
      }, 700);
    } else {
      messageArea.className = 'message wrong-msg';
      messageArea.textContent = `❌ Wrong. Correct: “${item.answer}”`;
      statusBadge.textContent = '🔴 Wrong';
    }
    updateScore();
    render();
  }

  // ----- Mole -----
  function renderMole(){
    showAutoSpeak();
    if (words.length === 0){ renderEmptyState(); return; }
    if (molePool.length === 0 || moleTarget === null) initMoleGame();
    const targetEn = moleTarget ? moleTarget.en : '';

    questionArea.innerHTML = `
      <div class="mole-target">🐹 Target: <strong id="moleTargetDisplay">${targetEn}</strong> <button class="sound-btn" id="moleSoundBtn">🔊</button></div>
      <div class="mole-grid" id="moleGrid"></div>
      <div class="mole-score">✅ <span class="correct" id="moleCorrect">${moleCorrect}</span> | ❌ <span class="wrong" id="moleWrong">${moleWrong}</span></div>
    `;

    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'none';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'block';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    const grid = $('moleGrid');
    grid.innerHTML = '';

    let pool = [...molePool];
    if (!pool.some(c => getUniqueId(c) === getUniqueId(moleTarget))) pool.push(moleTarget);
    const unique = [];
    const seen = new Set();
    for (const it of pool){
      const id = getUniqueId(it);
      if (!seen.has(id)){ seen.add(id); unique.push(it); }
    }
    pool = unique;
    while (pool.length < 6){
      const extra = words.find(c => !pool.some(p => getUniqueId(p) === getUniqueId(c)));
      if (extra) pool.push(extra); else break;
    }
    while (pool.length > 6) pool.pop();
    if (!pool.some(c => getUniqueId(c) === getUniqueId(moleTarget))) pool[pool.length-1] = moleTarget;

    shuffle(pool).forEach(item => {
      const cell = document.createElement('div');
      cell.className = 'mole-cell';
      const sylls = (item.pinyin || '').split(/\s+/).filter(Boolean);
      cell.innerHTML = sylls.length >= 3
        ? '<span class="mole-syl-group">' + sylls.map(s => `<span class="mole-syl tone-${toneOf(s)}">${escapeHtml(s)}</span>`).join('') + '</span>'
        : colorPinyin(item.pinyin);
      cell.dataset.word = item.hanzi;
      cell.dataset.id = item.id || '';
      cell.addEventListener('click', () => handleMoleClick(cell, item));
      grid.appendChild(cell);
    });

    const sbtn = $('moleSoundBtn');
    if (sbtn) sbtn.addEventListener('click', () => speakChinese(moleTarget.hanzi));
    if (!moleProcessing && autoSpeak) setTimeout(() => speakChinese(moleTarget.hanzi), 400);
  }

  function initMoleGame(){
    const s = shuffleCopy(words);
    molePool = s.slice(0, Math.min(6, s.length));
    while (molePool.length < 6 && words.length > 0) molePool.push(words[molePool.length % words.length]);
    moleTarget = molePool[0];
    moleCorrect = 0; moleWrong = 0; moleProcessing = false;
  }

  function handleMoleClick(cell, item){
    if (moleProcessing) return;
    if (cell.classList.contains('whacked') || cell.classList.contains('wrong-whack')) return;
    if (getUniqueId(item) === getUniqueId(moleTarget)){
      cell.classList.add('whacked');
      moleCorrect++;
      moleProcessing = true;
      let avail = molePool.filter(c => getUniqueId(c) !== getUniqueId(moleTarget));
      if (avail.length === 0) avail = molePool;
      moleTarget = avail[Math.floor(Math.random() * avail.length)];
      setTimeout(() => { moleProcessing = false; renderMole(); }, 350);
    } else {
      cell.classList.add('wrong-whack');
      moleWrong++;
      setTimeout(() => cell.classList.remove('wrong-whack'), 400);
    }
    const ce = $('moleCorrect'), we = $('moleWrong');
    if (ce) ce.textContent = moleCorrect;
    if (we) we.textContent = moleWrong;
  }

  // ----- Memory -----
  function renderMemory(){
    hideAutoSpeak();
    if (words.length === 0){ renderEmptyState(); return; }
    if (memoryCards.length === 0) initMemoryGame();
    const totalPairs = memoryCards.length / 2;
    const matchedPairs = memoryMatched.length / 2;

    questionArea.innerHTML = `
      <div style="margin-bottom:8px;font-size:0.9rem;color:#6b6154;">🧠 Match <b>pinyin</b> ↔ <b>English</b></div>
      <div class="memory-grid" id="memoryGrid"></div>
      <div class="memory-status">Matched <span class="highlight">${matchedPairs}</span> / ${totalPairs} ${matchedPairs===totalPairs?' 🎉':''}</div>
    `;

    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'none';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'block';
    pictureContainer.style.display = 'none';

    const grid = $('memoryGrid');
    grid.innerHTML = '';
    memoryCards.forEach((card, idx) => {
      const div = document.createElement('div');
      div.className = 'memory-card';
      if (card.flipped || card.matched) div.classList.add('flipped');
      if (card.matched) div.classList.add('matched');
      const c = document.createElement('span');
      c.className = 'card-content';
      if ((card.flipped || card.matched) && card.type === 'pinyin') c.innerHTML = colorPinyin(card.text);
      else c.textContent = (card.flipped || card.matched) ? card.text : '?';
      div.appendChild(c);
      div.addEventListener('click', () => handleMemoryClick(idx));
      grid.appendChild(div);
    });

    if (memoryMatched.length === memoryCards.length && memoryCards.length > 0){
      if (!answeredQuestions[`memory-${currentIndex}`]){
        score++;
        answeredQuestions[`memory-${currentIndex}`] = true;
        updateScore();
      }
      messageArea.className = 'message correct-msg';
      messageArea.textContent = '🎉 All matched!';
      statusBadge.textContent = '⭐ Complete';
    }
  }

  function initMemoryGame(){
    const s = shuffleCopy(words);
    const selected = s.slice(0, Math.min(4, s.length));
    let deck = [];
    selected.forEach(w => {
      deck.push({ type:'pinyin', text:w.pinyin, pairId:getUniqueId(w) });
      deck.push({ type:'english', text:w.en, pairId:getUniqueId(w) });
    });
    shuffle(deck);
    memoryCards = deck.map((item, idx) => ({ ...item, idx, matched:false, flipped:false }));
    memoryFlipped = [];
    memoryMatched = [];
    memoryLock = false;
  }

  function handleMemoryClick(index){
    const card = memoryCards[index];
    if (memoryLock) return;
    if (card.matched) return;
    if (card.flipped) return;
    if (memoryFlipped.length >= 2) return;
    card.flipped = true;
    memoryFlipped.push(index);
    renderMemory();
    if (memoryFlipped.length === 2){
      memoryLock = true;
      const [i1, i2] = memoryFlipped;
      const c1 = memoryCards[i1], c2 = memoryCards[i2];
      const match = c1.pairId === c2.pairId && i1 !== i2;
      if (match){
        c1.matched = true;
        c2.matched = true;
        memoryMatched.push(i1, i2);
        memoryFlipped = [];
        memoryLock = false;
        renderMemory();
        if (memoryMatched.length === memoryCards.length){
          messageArea.className = 'message correct-msg';
          messageArea.textContent = '🎉 All matched!';
          statusBadge.textContent = '⭐ Complete';
          if (!answeredQuestions[`memory-${currentIndex}`]){
            score++;
            answeredQuestions[`memory-${currentIndex}`] = true;
            updateScore();
          }
        }
      } else {
        setTimeout(() => {
          if (!c1.matched) c1.flipped = false;
          if (!c2.matched) c2.flipped = false;
          memoryFlipped = [];
          memoryLock = false;
          renderMemory();
        }, 1000);
      }
    }
  }

  // ----- Picture -----
  function renderPicture(){
    showAutoSpeak();
    if (picItems.length === 0){
      if (words.length === 0){ renderEmptyState(); return; }
      questionArea.innerHTML = '<div style="font-size:1.2rem;color:#6b6154;">No pictures for this lesson.</div>';
      optionsContainer.style.display = 'none';
      flashContainer.style.display = 'none';
      fillContainer.style.display = 'none';
      moleContainer.style.display = 'none';
      memoryContainer.style.display = 'none';
      pictureContainer.style.display = 'none';
      return;
    }
    const item = picItems[picIndex % picItems.length];
    const distractors = shuffleCopy(words.filter(d => getUniqueId(d) !== getUniqueId(item))).slice(0, 3);
    const options = shuffleCopy([item, ...distractors]);

    questionArea.innerHTML = `
      <div style="font-size:1rem;color:#6b6154;margin-bottom:6px;">🖼️ Look at the picture, choose the correct pinyin</div>
      <div class="pic-question">
        <div class="pic-display" id="picDisplay"><span class="pic-emoji">${item.emoji || '📦'}</span></div>
        <div class="pic-en ${showPicEnglish ? 'revealed' : ''}" id="picEn">
          <span class="en-text">${item.en}</span>
        </div>
        <div class="pic-options" id="picOptions"></div>
        <div class="pic-feedback" id="picFeedback"></div>
      </div>
    `;

    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'none';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'block';

    // Auto-speak the new question (same behavior as the other modes).
    if (!isAnswered && autoSpeak) setTimeout(() => speakChinese(item.hanzi), 300);

    // The English bar shows/hides its text on click (style stays the same).
    const picEn = $('picEn');
    if (picEn){
      picEn.addEventListener('click', () => picEn.classList.toggle('revealed'));
    }

    // Local picture from image/ — if the file is missing the emoji stays.
    const picBox = $('picDisplay');
    if (picBox){
      const img = document.createElement('img');
      img.className = 'pic-img';
      img.alt = item.hanzi;
      img.src = localImgPath(item.hanzi);
      img.onload = () => {
        const em = picBox.querySelector('.pic-emoji');
        if (em) em.remove();
        picBox.classList.add('has-img');
      };
      img.onerror = () => img.remove();
      picBox.appendChild(img);

      // Clicking the picture reads the word aloud.
      picBox.addEventListener('click', () => speakChinese(item.hanzi));
    }

    const cont = $('picOptions');
    cont.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.innerHTML = colorPinyin(opt.pinyin);
      btn.dataset.word = opt.hanzi;
      btn.dataset.id = opt.id || '';
      btn.addEventListener('click', () => {
        if (isAnswered) return;
        cont.querySelectorAll('button').forEach(b => b.classList.remove('correct-guess', 'wrong-guess'));
        if (getUniqueId(opt) === getUniqueId(item)){
          btn.classList.add('correct-guess');
          $('picFeedback').textContent = `✅ Correct! ${opt.pinyin}`;
          isAnswered = true;
          isCorrect = true;
          if (!answeredQuestions[`picture-${picIndex}`]){
            score++;
            answeredQuestions[`picture-${picIndex}`] = true;
          }
          updateScore();
          setTimeout(() => {
            isAnswered = false;
            picIndex = (picIndex + 1) % picItems.length;
            currentIndex = picIndex;
            renderPicture();
            updateCounter();
          }, 800);
        } else {
          btn.classList.add('wrong-guess');
          $('picFeedback').textContent = `❌ Wrong. Try again!`;
          isAnswered = true;
          isCorrect = false;
          setTimeout(() => {
            isAnswered = false;
            cont.querySelectorAll('button').forEach(b => b.classList.remove('wrong-guess'));
            $('picFeedback').textContent = '';
          }, 800);
        }
      });
      cont.appendChild(btn);
    });
  }

  // =====================================================================
  // Common
  // =====================================================================
  function nextQuestion(){
    clearAutoAdvance();
    if (currentMode === 'memory'){
      memoryCards = [];
      memoryFlipped = [];
      memoryMatched = [];
      memoryLock = false;
      render();
      return;
    }
    if (currentMode === 'mole') return;
    let maxLen = 0;
    switch (currentMode){
      case 'pairs': maxLen = pairsItems.length || 1; break;
      case 'wordflash': maxLen = flashItems.length || 1; break;
      case 'sentflash': maxLen = phrases.length || 1; break;
      case 'texts': maxLen = lessonTexts.length || 1; break;
      case 'grammar': maxLen = grammarTotal() || 1; break;
      case 'fill': maxLen = fillItems.length || 1; break;
      case 'picture': maxLen = picItems.length || 1; break;
    }
    if (currentIndex < maxLen - 1) currentIndex++;
    else {
      messageArea.className = 'message info-msg';
      messageArea.textContent = '🎊 All done! Click Reset.';
      return;
    }
    resetCurrentQuestion();
  }

  function resetCurrentQuestion(){
    clearAutoAdvance();
    isAnswered = false;
    isCorrect = false;
    userAnswer = null;
    pairsOptions = [];
    flashSpoken = false;
    memoryCards = [];
    memoryFlipped = [];
    memoryMatched = [];
    memoryLock = false;
    molePool = [];
    moleTarget = null;
    moleCorrect = 0;
    moleWrong = 0;
    moleProcessing = false;
    // Picture mode tracks its own index; follow the question counter so that
    // "Next" actually advances the picture (Reset keeps the current one).
    picIndex = currentIndex;
    reseedFillBlank();
    updateScore();
    render();
    messageArea.className = 'message info-msg';
    messageArea.textContent = '🔄 Reset';
  }

  function goToFirst(){
    clearAutoAdvance();
    currentIndex = 0;
    isAnswered = false;
    userAnswer = null;
    pairsOptions = [];
    flashSpoken = false;
    memoryCards = [];
    memoryFlipped = [];
    memoryMatched = [];
    memoryLock = false;
    molePool = [];
    moleTarget = null;
    moleCorrect = 0;
    moleWrong = 0;
    moleProcessing = false;
    picIndex = 0;
    reseedFillBlank();
    render();
    messageArea.className = 'message info-msg';
    messageArea.textContent = '⏮ Back to first';
  }

  function previousQuestion(){
    clearAutoAdvance();
    if (currentMode === 'memory'){
      memoryCards = [];
      memoryFlipped = [];
      memoryMatched = [];
      memoryLock = false;
      render();
      return;
    }
    if (currentMode === 'mole') return;
    if (currentIndex > 0) currentIndex--;
    resetCurrentQuestion();
    messageArea.className = 'message info-msg';
    messageArea.textContent = '← Previous';
  }

  // The nav bar sits under the content area and is only useful where there is a
  // question counter: games, plus the Word/Sentence card views.
  function updateNavBar(){
    const cards = currentMode === 'wordflash' || currentMode === 'sentflash';
    const show = !isStudyMode() || (cards && !listMode);
    navBar.classList.toggle('hidden', !show);
  }

  function updateCounter(){
    if (isListModeActive()){
      const n = currentMode === 'wordflash' ? flashItems.length : (currentMode === 'texts' ? textsInScope().length : (currentMode === 'grammar' ? grammarTotal() : (currentMode === 'topics' ? (window.GRAMMAR_TOPICS || []).length : phrases.length)));
      counterDisplay.textContent = `${n} items`;
      return;
    }
    let maxLen = 0;
    switch (currentMode){
      case 'pairs': maxLen = pairsItems.length || 1; break;
      case 'wordflash': maxLen = flashItems.length || 1; break;
      case 'sentflash': maxLen = phrases.length || 1; break;
      case 'texts': maxLen = lessonTexts.length || 1; break;
      case 'fill': maxLen = fillItems.length || 1; break;
      case 'mole': maxLen = 1; break;
      case 'memory': maxLen = 1; break;
      case 'picture': maxLen = picItems.length || 1; break;
    }
    const idx = (currentMode === 'mole' || currentMode === 'memory') ? 1 : Math.min(currentIndex + 1, maxLen);
    counterDisplay.textContent = `${idx} / ${maxLen}`;
  }

  function updateScore(){
    let total = 0;
    Object.keys(answeredQuestions).forEach(k => { if (answeredQuestions[k]) total++; });
    scoreDisplay.textContent = total;
    totalDisplay.textContent = getTotalQuestions();
  }

  function getTotalQuestions(){
    switch (currentMode){
      case 'pairs': return pairsItems.length || 1;
      case 'wordflash': return flashItems.length || 1;
      case 'sentflash': return phrases.length || 1;
      case 'texts': return lessonTexts.length || 1;
      case 'grammar': return grammarTotal() || 1;
      case 'fill': return fillItems.length || 1;
      case 'mole': return 1;
      case 'memory': return 1;
      case 'picture': return picItems.length || 1;
      default: return 0;
    }
  }

  // =====================================================================
  // Mode / Lesson
  // =====================================================================
  function setMode(mode){
    if (mode === 'study') mode = studyTab === 'texts' ? 'texts' : (studyTab === 'grammar' ? 'grammar' : (studyTab === 'topics' ? 'topics' : (studyTab === 'sentence' ? 'sentflash' : 'wordflash')));
    // Any arrival at the Texts view means the "back to the text" offer is spent.
    if (mode === 'texts') gpReturnCtx = null;
    currentMode = mode;
    currentIndex = 0;
    isAnswered = false;
    userAnswer = null;
    pairsOptions = [];
    flashSpoken = false;
    memoryCards = [];
    memoryFlipped = [];
    memoryMatched = [];
    memoryLock = false;
    molePool = [];
    moleTarget = null;
    moleCorrect = 0;
    moleWrong = 0;
    moleProcessing = false;
    picIndex = 0;
    score = 0;
    answeredQuestions = {};
    clearAutoAdvance();
    stopSentenceRead();
    stopTextAudio();

    const names = {
      pairs: '🔤 Match',
      fill: '✏️ Fill Blank',
      mole: '🐹 Whack-a-Mole',
      memory: '🧠 Memory Match',
      picture: '🖼️ Picture Choice'
    };
    statusBadge.textContent = (mode === 'wordflash' || mode === 'sentflash' || mode === 'texts' || mode === 'grammar' || mode === 'topics') ? '📖 Study' : (names[mode] || mode);
    applyRandomOrder();
    reseedFillBlank();
    render();
    updateScore();
    persistLast();
  }

  function setLesson(lesson){
    currentLesson = lesson;
    currentIndex = 0;
    isAnswered = false;
    userAnswer = null;
    pairsOptions = [];
    flashSpoken = false;
    memoryCards = [];
    memoryFlipped = [];
    memoryMatched = [];
    memoryLock = false;
    molePool = [];
    moleTarget = null;
    moleCorrect = 0;
    moleWrong = 0;
    moleProcessing = false;
    picIndex = 0;
    score = 0;
    answeredQuestions = {};
    clearAutoAdvance();
    stopSentenceRead();
    stopTextAudio();
    subMode = 'all';
    textSub = 'all';
    buildLessonMenu();
    initLessonData();
    render();
    updateScore();
    messageArea.className = 'message info-msg';
    messageArea.textContent = `Loaded ${getLessonData(lesson, accumulative).name}`;
    persistLast();
  }

  // =====================================================================
  // Event listeners
  // =====================================================================
  let lastGameMode = 'pairs';
  gameMenu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      lastGameMode = btn.dataset.game;
      // Games don't use the Scope row — always play with All words.
      if (subMode !== 'all'){
        subMode = 'all';
        rebuildSubModeData();
      }
      setMode(btn.dataset.game);
    });
  });
  studyPickBtn.addEventListener('click', () => {
    if (!(currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar' || currentMode === 'topics')) setMode('study');
  });
  gamePickBtn.addEventListener('click', () => {
    if (currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar' || currentMode === 'topics'){
      if (subMode !== 'all'){
        subMode = 'all';
        rebuildSubModeData();
      }
      setMode(lastGameMode);
    }
  });
  // Any toggle-driven re-render keeps the scroll position of the active
  // list (texts / grammar / sentence / word) so the view doesn't jump.
  function activityScroller(){
    return flashContainer.querySelector('.text-list, .grammar-list, .sentence-list, .word-list');
  }
  function renderPreservingScroll(){
    const el = activityScroller();
    const top = el ? el.scrollTop : 0;
    render();
    const nl = activityScroller();
    if (nl) nl.scrollTop = top;
  }
  listPinyinToggle.addEventListener('change', e => {
    showListPinyin = e.target.checked;
    if (isListModeActive()) renderPreservingScroll();
  });
  listEnglishToggle.addEventListener('change', e => {
    showListEnglish = e.target.checked;
    if (isListModeActive()) renderPreservingScroll();
  });
  vocabToggle.addEventListener('change', e => {
    showVocab = e.target.checked;
    if (isListModeActive()) renderPreservingScroll();
  });

  randomToggle.addEventListener('change', e => {
    isRandom = e.target.checked;
    applyRandomOrder();
    currentIndex = 0;
    isAnswered = false;
    userAnswer = null;
    pairsOptions = [];
    flashSpoken = false;
    memoryCards = [];
    memoryFlipped = [];
    memoryMatched = [];
    memoryLock = false;
    molePool = [];
    moleTarget = null;
    moleCorrect = 0;
    moleWrong = 0;
    moleProcessing = false;
    picIndex = 0;
    clearAutoAdvance();
    stopSentenceRead();
    reseedFillBlank();
    render();
  });

  autoSpeakToggle.addEventListener('change', e => {
    autoSpeak = e.target.checked;
  });

  muteToggle.addEventListener('change', e => {
    muted = e.target.checked;
    if (muted){
      // stop anything currently speaking and cancel pending auto-speak
      if (speakTimeout){ clearTimeout(speakTimeout); speakTimeout = null; }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      stopTextAudio();
    }
  });

  // =====================================================================
  // Sound self-check — helps a student diagnose "no sound" on their device.
  // Covers both audio paths: system TTS (word reading) and CDN MP3 (texts).
  // =====================================================================
  const SOUND_CHECK_MP3 =
    'https://cdn.baulchino.com/hsk-books-audios/hsk1-textbook-audios/lesson-05/hsk1-textbook-0501.mp3';

  function scRow(state, label, detail){
    const ico = state === 'ok' ? '✅' : state === 'bad' ? '❌' : '⚠️';
    const cls = state === 'ok' ? 'sc-ok' : state === 'bad' ? 'sc-bad' : 'sc-warn';
    return `<div class="sc-row"><span class="sc-ico ${cls}">${ico}</span>`
      + `<span><span class="sc-label">${label}</span>`
      + (detail ? `<span class="sc-detail">${detail}</span>` : '')
      + '</span></div>';
  }

  function zhVoices(){
    try {
      return (window.speechSynthesis.getVoices() || [])
        .filter(v => (v.lang || '').toLowerCase().indexOf('zh') === 0);
    } catch (e){ return []; }
  }

  function collectSoundReport(){
    const rows = [];

    // 1. TTS interface
    const hasTTS = !!window.speechSynthesis && typeof SpeechSynthesisUtterance !== 'undefined';
    rows.push(scRow(hasTTS ? 'ok' : 'bad', 'Speech engine (SpeechSynthesis)',
      hasTTS ? 'This browser supports speech.' : 'This browser does not support speech. Please use Chrome / Edge / Safari.'));

    // 2. Chinese voice pack
    let zh = zhVoices();
    const allCount = (window.speechSynthesis && window.speechSynthesis.getVoices().length) || 0;
    if (!hasTTS) {
      rows.push(scRow('warn', 'Chinese voice pack', 'Skipped — speech is not supported above.'));
    } else if (zh.length > 0) {
      rows.push(scRow('ok', 'Chinese voice pack', `Found ${zh.length} Chinese voice(s) (of ${allCount} total): <code>${zh.map(v => v.name).slice(0, 4).join('</code>, <code>')}</code>`));
    } else {
      rows.push(scRow('bad', 'Chinese voice pack',
        `No Chinese voice installed (device has ${allCount} voice(s)). This is the most common cause of "no sound" for word reading. `
        + 'Install a Chinese voice: Windows → Settings → Time & language → Speech; '
        + 'iPhone → Settings → Accessibility → Spoken Content → Voices; '
        + 'Android → Settings → System → Languages & input → Text-to-speech.'));
    }

    // 3. Mute state
    rows.push(scRow(muted ? 'bad' : 'ok', 'Mute switch',
      muted ? 'Mute is ON — turn off the 🔇 toggle in the top bar and try again.' : 'Not muted.'));

    // 4. Text audio CDN reachability
    rows.push(scRow('warn', 'Lesson audio (CDN)', 'Checking… (see result below)'));

    return { rows, hasTTS, zhCount: zh.length };
  }

  function renderSoundReport(){
    const body = $('soundCheckBody');
    if (!body) return;
    const info = collectSoundReport();
    body.innerHTML = '<h3>① Word reading (system speech)</h3>' + info.rows.slice(0, 3).join('')
      + '<h3>② Lesson audio (online MP3)</h3>' + info.rows[3];

    // Async: actually try to speak, and probe the MP3.
    let spoke = false;
    if (info.hasTTS && !muted){
      try {
        const u = new SpeechSynthesisUtterance('你好');
        const v = zhVoices()[0];
        if (v) u.voice = v;
        u.lang = 'zh-CN'; u.rate = 1;
        u.onstart = () => { spoke = true; };
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } catch (e){}
    }
    setTimeout(() => {
      const ttsRow = scRow(spoke ? 'ok' : (info.hasTTS ? 'warn' : 'bad'), 'Try saying "你好"',
        spoke ? 'Sound was played (please confirm you actually heard it).'
              : (info.zhCount === 0 ? 'No Chinese voice — cannot speak.'
                 : 'No sound detected. Could be system volume, iPhone mute switch, Bluetooth headphones, or a muted tab. Try refreshing the page.'));
      const cur = body.querySelector('.sc-row:last-child');
      if (cur) cur.outerHTML = scRow('warn', 'Lesson audio (CDN)', 'Checking… (see result below)');
      body.insertAdjacentHTML('beforeend', ttsRow);
    }, 900);

    // MP3 probe: build an element and watch for canplay/error.
    const probe = new Audio();
    probe.preload = 'auto';
    let done = false;
    const finish = (state, detail) => {
      if (done) return; done = true;
      body.insertAdjacentHTML('beforeend', scRow(state, 'Lesson audio (CDN)', detail));
      probe.src = '';
    };
    probe.oncanplay = () => finish('ok', 'CDN reachable — lesson ▶ should play (if still silent, it is a device volume/mute issue).');
    probe.onerror = () => finish('bad', `CDN unreachable (blocked by network / firewall / ad blocker). Quick check: open <code>${SOUND_CHECK_MP3}</code> directly and see if it plays.`);
    probe.src = SOUND_CHECK_MP3;
    setTimeout(() => finish('warn', 'CDN check timed out (slow or blocked network). Quick check: open the mp3 link above directly.'), 6000);
  }

  (function initSoundCheck(){
    const btn = $('soundCheckBtn');
    const overlay = $('soundCheckOverlay');
    const close = $('soundCheckClose');
    const run = $('soundCheckRun');
    if (!btn || !overlay) return;
    // TTS voices load asynchronously; warm them up so the report is accurate.
    if (window.speechSynthesis) {
      try { window.speechSynthesis.getVoices(); } catch (e){}
    }
    btn.addEventListener('click', () => { overlay.classList.remove('hidden'); renderSoundReport(); });
    close.addEventListener('click', () => overlay.classList.add('hidden'));
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });
    run.addEventListener('click', renderSoundReport);
  })();

  kaitiToggle.addEventListener('change', e => {
    kaitiMode = e.target.checked;
    document.body.classList.toggle('kaiti', kaitiMode);
    saveSettings({ kaiti: kaitiMode });
  });

  latinFontToggle.addEventListener('change', e => {
    document.body.classList.toggle('latin-serif', e.target.checked);
    saveSettings({ latin: e.target.checked });
  });

  // Content font-size control — zooms only the practice area (#sentenceBox).
  function applyContentZoom(){
    const zoom = CONTENT_ZOOMS[contentZoomIdx];
    sentenceBox.style.zoom = String(zoom);
    if (fontSizeValue) fontSizeValue.textContent = zoom.toFixed(1) + '×';
    fontDownBtn.disabled = (contentZoomIdx === 0);
    fontUpBtn.disabled = (contentZoomIdx === CONTENT_ZOOMS.length - 1);
  }
  fontUpBtn.addEventListener('click', () => {
    if (contentZoomIdx < CONTENT_ZOOMS.length - 1){ contentZoomIdx++; applyContentZoom(); saveSettings({ zoomIdx: contentZoomIdx }); }
  });
  fontDownBtn.addEventListener('click', () => {
    if (contentZoomIdx > 0){ contentZoomIdx--; applyContentZoom(); saveSettings({ zoomIdx: contentZoomIdx }); }
  });
  applyContentZoom();

  settingsBtn.addEventListener('click', toggleSettings);
  settingsOverlay.addEventListener('click', closeSettings);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape'){ closeSettings(); closeSidebar(); }
  });

  // Study menu: when the Scope buttons drop below their label, stack every
  // setting row the same way (label on its own line above the chips).
  function updateMenuStack(){
    const row = subModeBar.closest('.ctx-row');
    if (!row){ subMenu.classList.remove('stacked'); return; }
    // Measure in the UN-stacked layout, otherwise the column layout would
    // always report "wrapped" and never un-stack.
    subMenu.classList.remove('stacked');
    const label = row.querySelector('.ctx-label');
    const chipsTop = subModeBar.getBoundingClientRect().top;
    const labelTop = label ? label.getBoundingClientRect().top : chipsTop;
    const wrapped = Math.abs(chipsTop - labelTop) > 6;
    subMenu.classList.toggle('stacked', wrapped);
  }
  window.addEventListener('resize', updateMenuStack);

  // Icons-only menus: flipping a toggle widens its chip in place to show the
  // label, then it folds back to the icon. The chip is found again after the
  // toggle's own handler, because View rebuilds its row on every change.
  subMenu.addEventListener('change', e => {
    const input = e.target;
    if (!input || input.type !== 'checkbox' || !input.id) return;
    const id = input.id;
    requestAnimationFrame(() => {
      const label = document.querySelector(`#learnMenu label[for="${id}"]`);
      const text = label && label.querySelector('.btn-text');
      if (!text || text.getBoundingClientRect().width > 2) return;
      label.classList.add('flash-text');
      clearTimeout(label.flashTimer);
      label.flashTimer = setTimeout(() => label.classList.remove('flash-text'), 1400);
    });
  });

  picEnglishToggle.addEventListener('change', e => {
    showPicEnglish = e.target.checked;
    if (currentMode === 'picture') render();
  });

  accumulativeToggle.addEventListener('change', e => {
    if (e.target.checked && listMode && currentMode === 'sentflash'){
      accumulativeToggle.checked = false;
      showListNote('📌 List mode doesn\'t have accumulative');
      return;
    }
    accumulative = e.target.checked;
    const cur = currentLesson;
    score = 0;
    answeredQuestions = {};
    setLesson(cur);
    messageArea.className = 'message info-msg';
    messageArea.textContent = accumulative ? '📈 Accumulative mode ON' : '📚 Single-lesson mode';
  });

  $('resetBtn').addEventListener('click', resetCurrentQuestion);
  $('firstBtn').addEventListener('click', goToFirst);
  $('prevBtn').addEventListener('click', previousQuestion);
  $('nextBtn').addEventListener('click', nextQuestion);

  // =====================================================================
  // Start
  // =====================================================================
  autoSpeak = false;
  autoSpeakToggle.checked = false;
  // Deep link from a cross-level grammar jump: index.html?lesson=<id>&point=<gid>
  const qs = (() => { try { return new URLSearchParams(location.search); } catch (e) { return null; } })();
  const qsLesson = qs ? qs.get('lesson') : '';
  const qsPoint = qs ? (qs.get('point') || '') : '';
  const qsIdx = qsLesson ? LESSONS.findIndex(L => L.id === qsLesson) : -1;
  const last = state.rememberLast ? loadLast() : null;
  if (qsIdx >= 0){
    studyTab = 'grammar';
    if (qsPoint) grammarOpen.add(qsPoint);
    setLesson(qsIdx + 1);
    grammarFocus = qsPoint || null;
    setMode('grammar');
    dismissWelcome();
    try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) { /* file:// */ }
  } else if (last && Number.isInteger(last.lesson)){
    const lesson = Math.min(Math.max(last.lesson, 1), LESSONS.length);
    studyTab = last.studyTab || 'word';
    lastGameMode = last.gameMode || 'pairs';
    setLesson(lesson);
    setMode(last.mode === 'game' ? lastGameMode : 'study');
    dismissWelcome();
  } else {
    buildLessonMenu();
    setLesson(1);
    setMode(state.startMode === 'game' ? lastGameMode : 'study');
  }
  messageArea.className = 'message info-msg';
  messageArea.textContent = 'Select a lesson and mode to start · Auto-pronounce is OFF by default';
})();
