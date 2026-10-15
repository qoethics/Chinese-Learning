// 讲练 (Drill) — 分类单词表
// ---------------------------------------------------------------------------
// 每个词是 [中文, 英文] 一对。英文用于鼠标 hover 时的提示，可以留空 ''。
// 词里可以带 emoji（如 "网球 🎾"）—— 朗读和拼音会自动忽略 emoji。
//
// 类别结构：
//   { cn:'中文名', en:'English name', words:[[cn,en],...], subs:['子类别id',...] }
//   subs = 嵌套类别：点它 → 气泡网格进入该类别，左上角有返回三角形。
// ---------------------------------------------------------------------------

window.DRILL_CATEGORIES = {

  // ── L1 复习 / 综合 ────────────────────────────────────────────────
  place: {
    cn: '地点', en: 'Place',
    words: [
      ['商场', 'mall'], ['餐馆', 'restaurant'], ['学校', 'school'], ['公司', 'company'],
      ['车站', 'station'], ['商店', 'store'], ['银行', 'bank'], ['公园', 'park'],
      ['家', 'home'], ['外面', 'outside'],
    ],
  },
  weekday: {
    cn: '星期几', en: 'Weekday (星期~)',
    words: [['一', 'one'], ['二', 'two'], ['三', 'three'], ['四', 'four'],
            ['五', 'five'], ['六', 'six'], ['天', 'day (Sunday)']],
  },
  zhou: {
    cn: '周几', en: 'Weekday (周~)',
    words: [['一', 'Mon'], ['二', 'Tue'], ['三', 'Wed'], ['四', 'Thu'],
            ['五', 'Fri'], ['六', 'Sat'], ['日', 'Sun']],
  },
  timeofday: {
    cn: '时间', en: 'Time of day',
    words: [['早上', 'morning'], ['上午', 'forenoon'], ['中午', 'noon'],
            ['下午', 'afternoon'], ['晚上', 'evening']],
  },

  // ── 嵌套类别示范：社交行为里嵌一个 [运动] ─────────────────────────
  social: {
    cn: '社交行为', en: 'Social activity',
    words: [['喝咖啡', 'drink coffee'], ['吃饭', 'eat a meal'], ['玩', 'play'],
            ['买东西', 'go shopping'], ['旅游', 'travel'], ['散步', 'take a walk']],
    subs: ['sport'],                 // 点「运动」→ 进入 sport 类别
  },
  sport: {
    cn: '运动', en: 'Sports',
    words: [
      ['网球 🎾', 'tennis'], ['足球 ⚽️', 'football'], ['高尔夫球 ⛳️', 'golf'],
      ['橄榄球 🏈', 'rugby'], ['排球 🏐', 'volleyball'], ['乒乓球 🏓', 'table tennis'],
      ['羽毛球 🏸', 'badminton'], ['棒球 ⚾️', 'baseball'], ['篮球 🏀', 'basketball'],
      ['攀岩 🧗', 'rock climbing'], ['瑜伽 🧘', 'yoga'], ['爬山', 'mountain climbing'],
      ['徒步', 'hiking'],
    ],
  },

  travelElem: {
    cn: '旅游元素', en: 'Travel element',
    words: [['美食', 'food'], ['风景', 'scenery'], ['文化', 'culture'],
            ['历史', 'history'], ['天气', 'weather']],
  },
  action: {
    cn: '行为', en: 'Action',
    words: [
      ['看电视', 'watch TV'], ['看书', 'read a book'], ['睡觉', 'sleep'],
      ['打电话', 'make a call'], ['做饭', 'cook'], ['学习', 'study'],
      ['努力', 'work hard'], ['考试', 'take an exam'], ['散步', 'take a walk'],
      ['写字', 'write'], ['游泳', 'swim'], ['拍照', 'take photos'],
      ['唱歌', 'sing'], ['跳舞', 'dance'], ['打篮球', 'play basketball'],
      ['踢足球', 'play football'], ['旅游', 'travel'], ['玩', 'play'],
      ['玩游戏', 'play games'], ['玩手机', 'use phone'], ['玩电脑', 'use computer'],
      ['玩猫', 'play with cat'], ['看视频', 'watch videos'],
    ],
  },
  genre: {
    cn: '电影类型', en: 'Film genre',
    words: [
      ['犯罪片', 'crime film'], ['戏剧片', 'drama film'], ['喜剧片', 'comedy'],
      ['史诗片', 'epic film'], ['动作片', 'action film'], ['恐怖片', 'horror film'],
      ['爱情片', 'romance film'], ['科幻片', 'sci-fi film'], ['战争片', 'war film'],
      ['西部片', 'western'], ['歌舞片', 'musical'], ['纪录片', 'documentary'],
      ['动画片', 'animated film'],
    ],
  },
  goods: {
    cn: '商品', en: 'Product',
    words: [
      ['面包', 'bread'], ['水果', 'fruit'], ['苹果', 'apple'], ['鸡蛋', 'egg'],
      ['面条', 'noodles'], ['咖啡', 'coffee'], ['茶', 'tea'], ['水', 'water'],
      ['杯子', 'cup'], ['电脑', 'computer'], ['手机', 'phone'], ['衣服', 'clothes'],
      ['鞋子', 'shoes'], ['书', 'book'],
    ],
  },

  // ── Topics 专用 ──────────────────────────────────────────────────
  platform: {
    cn: '平台', en: 'Platform',
    words: [['Netflix', 'Netflix'], ['Hulu', 'Hulu'], ['Bilibili', 'Bilibili']],
  },
  foodCat: {
    cn: '食物分类', en: 'Food category',
    words: [['肉', 'meat'], ['海鲜', 'seafood'], ['水果', 'fruit'],
            ['蔬菜', 'vegetables'], ['主食', 'staple food'], ['口味', 'flavour']],
  },
  cnCuisine: {
    cn: '中国菜系', en: 'Chinese cuisine',
    words: [['川菜', 'Sichuan cuisine'], ['粤菜', 'Cantonese cuisine'],
            ['上海菜', 'Shanghai cuisine'], ['湖北菜', 'Hubei cuisine'],
            ['东北菜', 'Northeastern cuisine']],
  },
  worldCuisine: {
    cn: '世界菜系', en: 'World cuisine',
    words: [['中国菜', 'Chinese'], ['法国菜', 'French'], ['美国菜', 'American'],
            ['日本菜', 'Japanese'], ['越南菜', 'Vietnamese'], ['意大利菜', 'Italian']],
  },
  hsk1food: {
    cn: 'HSK1 食物', en: 'HSK1 food',
    words: [['草莓', 'strawberry'], ['蓝莓', 'blueberry'], ['虾', 'shrimp'],
            ['披萨', 'pizza'], ['寿司', 'sushi'], ['鸡蛋', 'egg'], ['面条', 'noodles']],
  },
  province: {
    cn: '省份', en: 'Province',
    words: [['海南', 'Hainan'], ['湖北', 'Hubei'], ['山东', 'Shandong'],
            ['湖南', 'Hunan'], ['广东', 'Guangdong'], ['四川', 'Sichuan'],
            ['云南', 'Yunnan'], ['浙江', 'Zhejiang']],
  },
};

// 模板里 [方括号] 的中文 → category id
window.DRILL_ALIASES = {
  '地点': 'place',
  '星期几': 'weekday',
  '周几': 'zhou',
  '时间': 'timeofday',
  '社交行为': 'social',
  '运动': 'sport',
  '旅游元素': 'travelElem',
  '行为': 'action',
  '电影类型': 'genre',
  '商品': 'goods',
  '平台': 'platform',
  '食物分类': 'foodCat',
  '中国菜系': 'cnCuisine',
  '世界菜系': 'worldCuisine',
  'HSK1 食物': 'hsk1food',
  '省份': 'province',
};
