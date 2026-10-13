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
  function pinyinFor(text){
    if (!text) return '';
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
  function escapeHtml(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
  // Render Chinese text as <ruby> tags with tone-coloured pinyin above each character.
  function rubyHtml(text){
    if (!text) return '';
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
  // Render Chinese text with tone-coloured ruby where every Han character is
  // wrapped in a clickable .char-btn (click to read that single character).
  function rubyHtmlChars(text){
    if (!text) return '';
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
        const c = hit[k];
        out += `<span class="char-btn" data-ch="${escapeHtml(c)}"><ruby>${escapeHtml(c)}<rt class="tone-${toneOf(s)}">${escapeHtml(s)}</rt></ruby></span>`;
      }
      i += hit.length;
    }
    return out;
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
  let speakTimeout = null;
  function speak(text, cb){
    if (muted){ if (cb) cb(); return; }
    if (!window.speechSynthesis){ if (cb) cb(); return; }
    window.speechSynthesis.cancel();
    if (speakTimeout) clearTimeout(speakTimeout);
    speakTimeout = setTimeout(()=>{
      if (muted){ if (cb) cb(); return; }
      const u = new SpeechSynthesisUtterance(text);
      u.lang='zh-CN'; u.rate=0.85; u.pitch=1;
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

  function fmtTime(s){
    if (!isFinite(s) || s < 0) s = 0;
    s = Math.floor(s);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }
  function setBarPlaying(bar, playing){
    const btn = bar.querySelector('.text-play-btn');
    if (!btn) return;
    btn.classList.toggle('playing', playing);
    btn.innerHTML = (playing ? '⏸ ' : '▶ ') + (btn.dataset.label || '');
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
  function stopTextAudio(){
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
  function startTextAudio(bar){
    const url = bar.dataset.audio;
    if (!url) return;
    // Same track already loaded → toggle pause / resume.
    if (textAudioBar === bar && textAudio){
      if (textAudio.paused){
        textAudio.play().catch(() => stopTextAudio());
        setBarPlaying(bar, true);
      } else {
        textAudio.pause();
        setBarPlaying(bar, false);
      }
      return;
    }
    stopTextAudio();
    if (muted) return;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const a = new Audio(url);
    a.playbackRate = textPlayRate;
    textAudio = a;
    textAudioBar = bar;
    a.onloadedmetadata = () => syncBarFromAudio();
    a.ontimeupdate = () => syncBarFromAudio();
    a.onended = () => stopTextAudio();
    a.onerror = () => stopTextAudio();
    setBarPlaying(bar, true);
    a.play().catch(() => stopTextAudio());
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
  let contentZoomIdx=2;        // 0..5 → 0.8× … 1.3× zoom of the practice area (default 1×)
  let readRepeat=1;            // sentence-list read-aloud: times per sentence (1..5)
  let readTimer=null;
  let readActive=false;
  let readPaused=false;
  let readIndex=0;
  let readList=[];             // texts to read in display order (word or sentence list)
  let accumulative=false;
  let subMode='all';
  let listMode=false;          // card vs list (wordflash / sentflash only)
  let studyTab='word';         // Study module: word / sentence / texts
  let sentCardView='hanzi';    // sentence card front: hanzi / pinyin / english
  let showListPinyin=true;     // word/sentence list: global pinyin visibility
  let showListEnglish=false;   // word/sentence list: global english visibility (default OFF)
  let showVocab=true;          // text view: show the per-text vocabulary rows (default ON)
  let showHl={ core:true, ext:true, 'acc-core':true, 'acc-ext':true };  // grammar highlight categories
  let listRevealed=new Set();  // word list: per-word reveal state
  let textRevealed=new Set();  // text list: per-line English reveal state
  let grammarOpen=new Set();   // grammar sections currently expanded (persist across re-renders)
  let grammarSub='all';        // grammar scope: all / core / ext
  let sentenceSub='all';       // sentence-tab scope: all / core / ext
  let noteTimer=null;

  let words=[];
  let phrases=[];              // current (possibly shuffled) sentence list
  let lessonPhrases=[];        // original sentence list for the lesson
  let lessonTexts=[];          // lesson texts (dialogues/passages) with audio
  let lessonGrammar=[];        // lesson grammar sections (grammar view)
  let lessonCoreWords=[];
  let lessonExtendedWords=[];
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
  function lessonWordSets(idx){
    const L = LESSONS[idx-1];
    if (!L) return { core: [], extended: [] };
    if (L.reviewRange){
      let core=[], ext=[];
      for (let j=L.reviewRange[0]; j<=L.reviewRange[1]; j++){
        const src = LESSONS[j-1];
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

  // =====================================================================
  // Core / Extended classification of whole sentences
  //   A sentence is "core" when it only uses this lesson's Core words plus the
  //   Core words of earlier lessons. Everything else — this lesson's Extended
  //   words, previously learned Extended words, later lessons' words, or words
  //   outside HSK 1 — makes it "extended".
  // =====================================================================
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
    const futWords = new Set();
    for (let i = lessonIdx + 1; i <= LESSONS.length; i++){
      const p = lessonWordSets(i);
      p.core.forEach(w => futWords.add(w.hanzi));
      p.extended.forEach(w => futWords.add(w.hanzi));
    }
    const known = new Set([...curCore, ...curExt, ...accCore, ...accExt, ...futWords]);
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

  function initLessonData(){
    const data = getLessonData(currentLesson, accumulative);
    lessonCoreWords = data.core;
    lessonExtendedWords = data.extended;
    lessonPhrases = data.phrases || [];
    lessonTexts = data.texts || [];
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
      cn: p.cn || '',
      py: p.py || '',
      en: p.en || '',
      note: p.note || '',
      items: (p.items || []).map(it => {
        const lp = pmap[it.c];
        const py = it.py || p.py || (lp && (lp.pinyin || lp.py)) || '';
        const en = it.en || (lp && lp.en) || '';
        const o = { c: it.c };
        if (py) o.py = py;
        if (en) o.en = en;
        if (it.sub) o.sub = it.sub;
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
        <button class="${grammarSub==='all'?'active':''}" data-gsub="all">📚📖 All</button>
        <button class="${grammarSub==='core'?'active':''}" data-gsub="core">📚 Core HSK</button>
        <button class="${grammarSub==='ext'?'active':''}" data-gsub="ext">📖 Extended</button>
      `;
      subModeBar.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function(){
          if (this.dataset.gsub === grammarSub) return;
          grammarSub = this.dataset.gsub;
          renderPreservingScroll();
        });
      });
      return;
    }
    if (currentMode === 'texts'){
      if (row) row.style.display = 'flex';
      subModeBar.innerHTML = '<button class="ctx-na" disabled>n/a</button>';
      return;
    }
    // Sentence tab: the same All / Core / Extended scope the Grammar tab uses,
    // filtering the sentence list by the lesson's Core-vs-Extended split.
    if (studyTab === 'sentence' && (currentMode === 'wordflash' || currentMode === 'sentflash')){
      if (row) row.style.display = 'flex';
      subModeBar.innerHTML = `
        <button class="${sentenceSub==='all'?'active':''}" data-ssub="all">📚📖 All</button>
        <button class="${sentenceSub==='core'?'active':''}" data-ssub="core">📚 Core HSK</button>
        <button class="${sentenceSub==='ext'?'active':''}" data-ssub="ext">📖 Extended</button>
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
        });
      });
      return;
    }
    if (row) row.style.display = 'flex';
    subModeBar.innerHTML = `
      <button class="${subMode==='all'?'active':''}" data-sub="all">📚📖 All</button>
      <button class="${subMode==='core'?'active':''}" data-sub="core">📚 Core HSK</button>
      <button class="${subMode==='ext'?'active':''}" data-sub="ext">📖 Extended</button>
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
        statusBadge.textContent = (subMode === 'all' ? '📚📖 ' : subMode === 'ext' ? '📖 ' : '📚 ') + subModeLabel();
      });
    });
  }

  // =====================================================================
  // Study module: Word / Sentence / Texts tab (sits above Core/Extended/All)
  // =====================================================================
  function renderStudyTabBar(){
    const isStudy = (currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar');
    if (!isStudy){
      studyTabBar.style.display = 'none';
      studyTabBar.innerHTML = '';
      return;
    }
    studyTabBar.style.display = 'flex';
    studyTabBar.innerHTML = `
      <button class="${studyTab === 'word' ? 'active' : ''}" data-tab="word">🀄 Word</button>
      <button class="${studyTab === 'sentence' ? 'active' : ''}" data-tab="sentence">📝 Sentence</button>
      <button class="${studyTab === 'texts' ? 'active' : ''}" data-tab="texts">📄 Texts</button>
      <button class="${studyTab === 'grammar' ? 'active' : ''}" data-tab="grammar">🧩 Grammar</button>
    `;
    studyTabBar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', function(){
        if (this.dataset.tab === studyTab) return;
        studyTab = this.dataset.tab;
        setMode(studyTab === 'texts' ? 'texts' : (studyTab === 'grammar' ? 'grammar' : (studyTab === 'sentence' ? 'sentflash' : 'wordflash')));
      });
    });
  }

  // =====================================================================
  // Card vs List view (Word Cards & Sentence Cards only)
  // =====================================================================
  function isListModeActive(){ return currentMode === 'texts' || currentMode === 'grammar' || (listMode && (currentMode === 'wordflash' || currentMode === 'sentflash')); }
  function showListNote(text){
    // The status text row was removed from the UI — these notes are intentionally not shown.
  }
  function renderViewModeBar(){
    if (currentMode === 'grammar'){
      viewModeBar.style.display = 'flex';
      viewModeBar.innerHTML = `
        <div class="random-toggle"><input type="checkbox" id="hlCoreToggle" data-hl="core" ${showHl['core'] ? 'checked' : ''}><label for="hlCoreToggle"><span class="sw sw-core"></span>Core</label></div>
        <div class="random-toggle"><input type="checkbox" id="hlExtToggle" data-hl="ext" ${showHl['ext'] ? 'checked' : ''}><label for="hlExtToggle"><span class="sw sw-ext"></span>Extended</label></div>
        <div class="random-toggle"><input type="checkbox" id="hlAccCoreToggle" data-hl="acc-core" ${showHl['acc-core'] ? 'checked' : ''}><label for="hlAccCoreToggle"><span class="sw sw-acc-core"></span>Learned Core</label></div>
        <div class="random-toggle"><input type="checkbox" id="hlAccExtToggle" data-hl="acc-ext" ${showHl['acc-ext'] ? 'checked' : ''}><label for="hlAccExtToggle"><span class="sw sw-acc-ext"></span>Learned Ext</label></div>
      `;
      viewModeBar.querySelectorAll('.random-toggle input').forEach(inp => {
        inp.addEventListener('change', function(){
          showHl[this.dataset.hl] = this.checked;
          renderPreservingScroll();
        });
      });
      return;
    }
    if (currentMode !== 'wordflash' && currentMode !== 'sentflash'){
      viewModeBar.style.display = 'none';
      viewModeBar.innerHTML = '';
      return;
    }
    viewModeBar.style.display = 'flex';
    viewModeBar.innerHTML = `
      <button class="${listMode ? '' : 'active'}" data-view="card">🃏 Card</button>
      <button class="${listMode ? 'active' : ''}" data-view="list">📋 List</button>
    `;
    viewModeBar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', function(){
        const wantList = this.dataset.view === 'list';
        if (wantList === listMode) return;
        listMode = wantList;
        listRevealed.clear();
        render();
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
    const isStudy = (currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar');
    studyPickBtn.classList.toggle('active', isStudy);
    gamePickBtn.classList.toggle('active', !isStudy);
    learnMenu.classList.toggle('hidden', !isStudy);
    gameMenuWrap.classList.toggle('hidden', isStudy);
    gameMenu.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.game === currentMode);
    });
  }

  function render(){
    // In sentence-list mode the question area is empty — hide it (no blank row).
    questionArea.style.display = ((currentMode === 'sentflash' && listMode) || currentMode === 'grammar') ? 'none' : '';
    if (readActive && !(listMode && (currentMode === 'sentflash' || currentMode === 'wordflash'))) stopSentenceRead();
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
      case 'fill': renderFill(); break;
      case 'mole': renderMole(); break;
      case 'memory': renderMemory(); break;
      case 'picture': renderPicture(); break;
    }
    updateCounter();
    updateScore();
    updateMenuStack();
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
      html = `<div class="flash-card" id="flashCard">
        <div class="front">${item.hanzi}</div>
        <div class="hint-text">👆 Tap to flip</div>
      </div>`;
    }
    flashContainer.innerHTML = html;

    const playBtn = $('flashPlayBtn');
    if (playBtn) playBtn.addEventListener('click', () => speakChinese(item.hanzi));
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
      </div>`;
    optionsContainer.style.display = 'none';
    flashContainer.style.display = 'block';
    fillContainer.style.display = 'none';
    moleContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    pictureContainer.style.display = 'none';

    let html = '<div class="text-list">';
    lessonTexts.forEach((t, i) => {
      const tId = t.id || String(i + 1);
      html += `<div class="text-item" data-i="${i}">`;
      // Location / title — emoji + Chinese + English always visible inline.
      if (t.title){
        const tcn = showListPinyin ? rubyHtmlChars(t.title.cn) : escapeHtml(t.title.cn);
        html += `<div class="text-title-line">
          <span class="text-title-emoji">${escapeHtml(t.title.emoji || '')}</span>
          <span class="text-title-cn">${tcn}</span>
          <span class="text-title-en">${escapeHtml(t.title.en || '')}</span>
        </div>`;
      }
      // Audio player: play button + draggable progress bar + time.
      html += `<div class="text-audio" data-audio="${escapeHtml(t.audio || '')}">
        <button class="text-play-btn" data-label="${escapeHtml(tId)}">▶ ${escapeHtml(tId)}</button>
        <input type="range" class="text-seek" min="0" max="0" value="0" step="0.1">
        <span class="text-time">0:00</span>
      </div>`;
      // Sentences.
      (t.lines || []).forEach((line, li) => {
        const key = tId + '-' + li;
        const shown = showListEnglish || textRevealed.has(key);
        const cnHtml = showListPinyin ? rubyHtmlChars(line.cn) : escapeHtml(line.cn);
        html += `<div class="text-line" data-key="${escapeHtml(key)}">
          <div class="text-line-cn">${cnHtml}</div>
          <div class="text-line-en" style="display:${shown ? 'block' : 'none'};">${escapeHtml(line.en || '')}</div>
        </div>`;
      });
      // Vocabulary words (always show English).
      if (showVocab && t.words && t.words.length){
        html += '<div class="text-vocab">';
        t.words.forEach(w => {
          const vcn = showListPinyin ? rubyHtml(w.cn) : escapeHtml(w.cn);
          html += `<div class="text-vocab-row" data-read="${escapeHtml(w.cn)}">
            <span class="text-vocab-cn">${vcn}</span>
            <span class="text-vocab-en">${escapeHtml(w.en)}</span>
          </div>`;
        });
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    flashContainer.innerHTML = html;

    // Audio players.
    flashContainer.querySelectorAll('.text-audio').forEach(bar => {
      const btn = bar.querySelector('.text-play-btn');
      if (btn) btn.addEventListener('click', () => startTextAudio(bar));
      const seek = bar.querySelector('.text-seek');
      if (seek) seek.addEventListener('input', function(){
        if (textAudio && textAudioBar === bar){
          textAudio.currentTime = parseFloat(this.value) || 0;
          const t = bar.querySelector('.text-time');
          if (t) t.textContent = fmtTime(textAudio.currentTime) + ' / ' + fmtTime(textAudio.duration);
        }
      });
    });
    // Line bars: reveal / hide the individual English translation.
    flashContainer.querySelectorAll('.text-line').forEach(line => {
      line.addEventListener('click', function(){
        if (showListEnglish) return;
        const key = this.dataset.key;
        if (textRevealed.has(key)) textRevealed.delete(key); else textRevealed.add(key);
        const en = this.querySelector('.text-line-en');
        if (en) en.style.display = textRevealed.has(key) ? 'block' : 'none';
      });
    });
    // Characters: click to read that single character aloud.
    flashContainer.querySelectorAll('.char-btn').forEach(ch => {
      ch.addEventListener('click', function(e){
        e.stopPropagation();
        speakChinese(this.dataset.ch);
      });
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
    statusBadge.textContent = `📄 Texts · ${lessonTexts.length} items`;
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
    const allWords = new Set([...curCore, ...curExt, ...accCore, ...accExt]);
    const classifyWord = w => curCore.has(w) ? 'core' : curExt.has(w) ? 'ext' : accCore.has(w) ? 'acc-core' : accExt.has(w) ? 'acc-ext' : null;
    const renderSentence = cn => {
      if (!cn) return '';
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
        const ruby = showListPinyin ? rubyHtml(hit) : escapeHtml(hit);
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
      const items = g.items.slice()
        .map(it => ({ c: it.c, py: it.py, en: it.en, sub: it.sub || '', ext: isExtended(it.c) }))
        .filter(it => grammarSub === 'all' || (grammarSub === 'ext') === it.ext);
      if (!items.length) return;
      shownSections++; shownItems += items.length;
      // Keep sub-groups (a./b./c.) contiguous: bucket by sub in first-seen order,
      // then order items inside each bucket by core-before-extended.
      const groups = [];
      const bySub = new Map();
      items.forEach(it => {
        if (!bySub.has(it.sub)){ const bucket = []; bySub.set(it.sub, bucket); groups.push({ sub: it.sub, bucket }); }
        bySub.get(it.sub).push(it);
      });
      groups.forEach(gr => gr.bucket.sort((a, b) => (a.ext ? 1 : 0) - (b.ext ? 1 : 0)));
      html += `<div class="grammar-section" data-g="${gi}">
        <button class="grammar-head">
          <span class="grammar-head-inner">
          <span class="grammar-caret">${grammarOpen.has(g.id) ? '▾' : '▸'}</span>
          <span class="grammar-title"><span class="grammar-title-cn">${titleRuby(g.cn, g.py)}</span> <span class="grammar-title-en">${escapeHtml(g.en || '')}</span></span>
          <span class="grammar-count">${items.length}</span>
          </span>
        </button>
        <div class="grammar-body${grammarOpen.has(g.id) ? '' : ' collapsed'}" data-gid="${escapeHtml(g.id || '')}">`;
      if (g.note) html += `<div class="grammar-intro">${escapeHtml(g.note)}</div>`;
      groups.forEach(gr => {
        if (gr.sub) html += `<div class="grammar-sub">${escapeHtml(gr.sub)}</div>`;
        gr.bucket.forEach(it => {
          const en = showListEnglish ? ((pmap[it.c] && pmap[it.c].en) || it.en || '') : '';
          const cn = it.py && showListPinyin
            ? `<ruby class="py-override">${escapeHtml(it.c)}<rt>${colorPinyin(it.py)}</rt></ruby>`
            : renderSentence(it.c);
          html += `<div class="grammar-item${it.ext ? ' ext' : ''}" data-read="${escapeHtml(it.c)}">
            <span class="grammar-cn">${cn}</span>
            ${en ? `<span class="grammar-en">${escapeHtml(en)}</span>` : ''}
          </div>`;
        });
      });
      html += '</div></div>';
    });
    html += '</div>';
    flashContainer.innerHTML = html;

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
      });
    });
    // Click a sentence to read the whole sentence aloud.
    flashContainer.querySelectorAll('.grammar-item').forEach(item => {
      item.addEventListener('click', function(){ speakChinese(this.dataset.read); });
    });
    const scopeLabel = grammarSub === 'all' ? 'All' : grammarSub === 'ext' ? 'Extended' : 'Core HSK';
    statusBadge.textContent = `🧩 Grammar · ${scopeLabel} · ${shownSections} sections · ${shownItems} sentences`;
  }

  // ---- Read menu (shared by word list & sentence list) ----
  function readMenuHtml(){
    const playing = readActive && !readPaused;
    return `
      <div class="sentence-read-menu">
        <button id="sentenceReadBtn" class="${readActive ? 'reading' : ''}">${playing ? '🔊 Reading…' : readActive ? '▶ Resume' : '🔊 Read'}</button>
        <button id="sentencePauseBtn" ${playing ? '' : 'disabled'}>⏸ Pause</button>
        <div class="read-repeat" id="readRepeatBar">
          ${[1,2,3,4,5].map(r => `<button class="${readRepeat === r ? 'active' : ''}" data-r="${r}">${r}x</button>`).join('')}
        </div>
      </div>`;
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
    const rrb = $('readRepeatBar');
    if (rrb){
      rrb.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          readRepeat = parseInt(b.dataset.r, 10) || 1;
          rrb.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
        });
      });
    }
  }

  // Read-aloud: read each item in readList readRepeat times, in display order.
  function stopSentenceRead(){
    readActive = false;
    readPaused = false;
    if (readTimer){ clearTimeout(readTimer); readTimer = null; }
    if (speakTimeout){ clearTimeout(speakTimeout); speakTimeout = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    updateReadButtons();
    document.querySelectorAll('.sentence-list-item.reading, .word-list-item.reading').forEach(el => el.classList.remove('reading'));
  }
  function pauseSentenceRead(){
    if (!readActive || readPaused) return;
    readPaused = true;
    if (readTimer){ clearTimeout(readTimer); readTimer = null; }
    if (speakTimeout){ clearTimeout(speakTimeout); speakTimeout = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    updateReadButtons();
  }
  function resumeSentenceRead(){
    if (!readActive || !readPaused) return;
    readPaused = false;
    updateReadButtons();
    sentenceReadNext();
  }
  function startSentenceRead(fromIndex){
    if (readActive && !readPaused) return;
    if (!readList.length) return;
    if (typeof fromIndex === 'number'){
      if (fromIndex < 0 || fromIndex >= readList.length) return;
      readIndex = fromIndex;
    } else if (!readActive){
      readIndex = 0;
    }
    readActive = true;
    readPaused = false;
    updateReadButtons();
    sentenceReadNext();
  }
  function updateReadButtons(){
    const rb = $('sentenceReadBtn');
    const pb = $('sentencePauseBtn');
    const playing = readActive && !readPaused;
    if (rb){
      rb.classList.toggle('reading', readActive);
      rb.textContent = playing ? '🔊 Reading…' : readActive ? '▶ Resume' : '🔊 Read';
    }
    if (pb) pb.disabled = !playing;
  }
  function sentenceReadNext(){
    if (!readActive || readPaused) return;
    if (readIndex >= readList.length){ stopSentenceRead(); return; }
    const txt = readList[readIndex];
    let n = 0;
    const step = () => {
      if (!readActive || readPaused) return;
      document.querySelectorAll('.sentence-list-item.reading, .word-list-item.reading').forEach(el => el.classList.remove('reading'));
      const el = document.querySelector('.sentence-list-item[data-i="' + readIndex + '"]') || document.querySelector('.word-list-item[data-i="' + readIndex + '"]');
      if (el){ el.classList.add('reading'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      speak(txt, () => {
        if (!readActive || readPaused) return;
        n++;
        if (n < readRepeat) readTimer = setTimeout(step, 700);
        else { readIndex++; readTimer = setTimeout(sentenceReadNext, 1000); }
      });
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
      <div class="sent-view-bar" id="sentViewBar">
        <button class="${sentCardView === 'hanzi' ? 'active' : ''}" data-view="hanzi">🀄 汉字</button>
        <button class="${sentCardView === 'pinyin' ? 'active' : ''}" data-view="pinyin">🔠 拼音</button>
        <button class="${sentCardView === 'english' ? 'active' : ''}" data-view="english">🔤 English</button>
      </div>
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

  function updateCounter(){
    if (isListModeActive()){
      const n = currentMode === 'wordflash' ? flashItems.length : (currentMode === 'texts' ? lessonTexts.length : (currentMode === 'grammar' ? grammarTotal() : phrases.length));
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
    if (mode === 'study') mode = studyTab === 'texts' ? 'texts' : (studyTab === 'grammar' ? 'grammar' : (studyTab === 'sentence' ? 'sentflash' : 'wordflash'));
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
    statusBadge.textContent = (mode === 'wordflash' || mode === 'sentflash' || mode === 'texts' || mode === 'grammar') ? '📖 Study' : (names[mode] || mode);
    applyRandomOrder();
    reseedFillBlank();
    render();
    updateScore();
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
    buildLessonMenu();
    initLessonData();
    render();
    updateScore();
    messageArea.className = 'message info-msg';
    messageArea.textContent = `Loaded ${getLessonData(lesson, accumulative).name}`;
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
    if (!(currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar')) setMode('study');
  });
  gamePickBtn.addEventListener('click', () => {
    if (currentMode === 'wordflash' || currentMode === 'sentflash' || currentMode === 'texts' || currentMode === 'grammar'){
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

  kaitiToggle.addEventListener('change', e => {
    kaitiMode = e.target.checked;
    document.body.classList.toggle('kaiti', kaitiMode);
  });

  latinFontToggle.addEventListener('change', e => {
    document.body.classList.toggle('latin-serif', e.target.checked);
  });

  // Content font-size control — zooms only the practice area (#sentenceBox).
  const CONTENT_ZOOMS = [0.8, 0.9, 1, 1.1, 1.2, 1.3];
  function applyContentZoom(){
    sentenceBox.style.zoom = String(CONTENT_ZOOMS[contentZoomIdx]);
    fontDownBtn.disabled = (contentZoomIdx === 0);
    fontUpBtn.disabled = (contentZoomIdx === CONTENT_ZOOMS.length - 1);
  }
  fontUpBtn.addEventListener('click', () => {
    if (contentZoomIdx < CONTENT_ZOOMS.length - 1){ contentZoomIdx++; applyContentZoom(); }
  });
  fontDownBtn.addEventListener('click', () => {
    if (contentZoomIdx > 0){ contentZoomIdx--; applyContentZoom(); }
  });
  applyContentZoom();

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
  updateMenuStack();

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
  $('nextBtn').addEventListener('click', nextQuestion);

  // Welcome screen: only choosing a lesson from the hamburger menu dismisses it.
  // Clicking the welcome screen itself does nothing.
  let welcomeDismissed = false;
  function dismissWelcome(){
    if (welcomeDismissed) return;
    welcomeDismissed = true;
    const w = $('welcomeOverlay');
    if (w){ w.classList.add('hidden'); setTimeout(() => w.remove(), 450); }
  }

  // =====================================================================
  // Start
  // =====================================================================
  autoSpeak = false;
  autoSpeakToggle.checked = false;
  buildLessonMenu();
  setLesson(1);
  messageArea.className = 'message info-msg';
  messageArea.textContent = 'Select a lesson and mode to start · Auto-pronounce is OFF by default';
})();
