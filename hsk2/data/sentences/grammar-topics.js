// Cross-lesson grammar topics (跨课专题): side-by-side comparisons that span
// more than one lesson. Hand-authored — NOT generated. Companion to
// grammar-sentences.js (per-lesson points).
//
// Shape:
//   { id, cn, en, note, lessons:[lessonId...], points:[grammarPointId...],
//     rows:[ { label, cn, en } ] }
// `points[i]` is the grammar point the i-th lesson chip links to; it is
// positionally paired with `lessons[i]` when the lengths match, and otherwise
// no single point is prefilled.
// `label` is a short tag shown on the left (e.g. "过" / "了" / "Structure 2").
window.GRAMMAR_TOPICS = [
  {
    id: 'guo-vs-le',
    cn: '过 vs 了',
    en: 'Experiential 过 vs Completed 了',
    note: '过 marks EXPERIENCE (have ever done); 了 marks COMPLETION or a change of state.',
    lessons: ['14', '4'],
    points: ['14-g1', '4-g1'],
    rows: [
      { label: '过 · 经历', cn: '我去过北京。', en: 'I have been to Beijing (experience).' },
      { label: '过 · 否定', cn: '我没去过日本。', en: 'I have never been to Japan.' },
      { label: '了 · 完成', cn: '昨天我去北京了。', en: 'I went to Beijing yesterday (completed).' },
      { label: '了 · 变化', cn: '现在是十二点了。', en: 'It is twelve o\'clock now (change of state).' },
      { label: '过 + 了', cn: '你吃过药了吗？', en: 'Have you taken the medicine? (experience + change of state)' },
    ],
  },
  {
    id: 'complements',
    cn: '补语总览',
    en: 'Overview of Complements',
    note: 'HSK 2 has five complement types. They all sit AFTER the verb, but answer different questions.',
    lessons: ['9', '12', '14', '13'],
    points: ['9-g1', '12-g1', '14-g1', '13-g4'],
    rows: [
      { label: '结果补语', cn: '我的作业做完了。', en: 'Result complement — the outcome of the action (完/懂/好/到).' },
      { label: '可能补语', cn: '我听得见他说话。', en: 'Potential complement — whether the result is possible (得/不).' },
      { label: '程度补语', cn: '他歌唱得好。', en: 'Degree complement — how well the action is done (得 + adj).' },
      { label: '数量补语', cn: '他在北京住了一天。', en: 'Quantity complement — duration or frequency of the action.' },
      { label: '趋向补语', cn: '他进来了。', en: 'Directional complement — the direction of motion (来/去).' },
    ],
  },
  {
    id: 'duo-vs-ji',
    cn: '多 vs 几',
    en: '多 vs 几',
    note: '多 has three uses at HSK 2; 几 only makes an approximate number.',
    lessons: ['2', '10', '1'],
    points: ['2-g3', '10-g3', '1-g3'],
    rows: [
      { label: '多 · 疑问', cn: '你多大？多高？', en: 'Interrogative 多 — asks "how + adjective?"' },
      { label: '多 · 形容词/副词', cn: '人很多。/ 你要多休息。', en: 'Adjective / adverb 多 — "many" or "more".' },
      { label: '多 · 概数', cn: '二十多块钱。', en: 'Numeral 多 — an approximate number.' },
      { label: '几 · 概数', cn: '买几个椅子。', en: '几 — a small approximate number (less than ten).' },
      { label: '十几 / 几十', cn: '十几个人 / 几十个椅子', en: '几 inside a larger number — "a dozen-ish / dozens".' },
    ],
  },
  {
    id: 'hai',
    cn: '还（3 用法）',
    en: 'The Adverb 还',
    note: '还 has three main uses: a state continues, an action repeats, or something is added on.',
    lessons: ['7', '5'],
    points: ['7-g1', '5-g2'],
    rows: [
      { label: '还 1 · 持续', cn: '他还在教室学习呢。', en: 'Continuation — the action or state is still going on.' },
      { label: '还 2 · 重复', cn: '今天我还想吃饺子。', en: 'Repetition — do it again / want more.' },
      { label: '还 3 · 追加', cn: '我喜欢看电视，还喜欢听音乐。', en: 'Further supplement — "and also".' },
    ],
  },
  {
    id: 'jiu',
    cn: '就（2 用法）',
    en: 'The Adverb 就',
    note: '就 either settles firmly on something, or stresses that something happens early / quickly.',
    lessons: ['5', '7'],
    points: ['5-g1', '7-g2'],
    rows: [
      { label: '就 1 · 限定/强调', cn: '就买这件吧。/ 这就是我的家。', en: 'Settling on a choice, or affirming firmly.' },
      { label: '就 1 · 限定/强调', cn: '书就在桌子上面。', en: '"Right there" — emphasises the position.' },
      { label: '就 2 · 时间早/快', cn: '他七点就来了。', en: 'Happens early — as early as seven.' },
      { label: '就 2 · 时间早/快', cn: '我二十分钟就到。', en: 'Happens soon — in twenty minutes.' },
      { label: '一……就……', cn: '我到了北京就给你打电话。', en: '"As soon as … then …".' },
    ],
  },
  {
    id: 'cong-vs-li',
    cn: '从 vs 离',
    en: '从 vs 离',
    note: '从 marks a STARTING POINT (place or time); 离 marks the DISTANCE between two points.',
    lessons: ['9', '7'],
    points: ['9-g2', '7-g3'],
    rows: [
      { label: '从 · 起点', cn: '我从早上八点开始上课。', en: '从 — the starting point of a time or place.' },
      { label: '从……到……', cn: '从北京到上海要坐几个小时的飞机？', en: '从…到… — "from … to …".' },
      { label: '离 · 距离', cn: '我家离学校很远。', en: '离 — the distance between two places.' },
      { label: '离 · 距离', cn: '超市离我家两百米。', en: '离 with a measure phrase.' },
    ],
  },
];
