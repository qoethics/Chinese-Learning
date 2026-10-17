# Chinese-Learning 仓库约定

## 用户控制协议（最高优先级）
> 总则：**不确定就停下来问，不要猜着改；用户说不懂就停止执行、用中文解释；宁可少做，不要多做。**

### 立刻停止执行（触发词）
用户说“**我不懂 / 看不懂 / 这是怎么了 / 先别改 / 停 / 停下来 / 为什么 / 为什么会这样**”时：
停止一切工具调用（不改代码、不跑 Playwright、不读文件），直接用**中文、不用术语**回答这四点：
1. 现在是什么情况（一句话）
2. 为什么这样（一句话）
3. 打算怎么改：有几种方案、各自代价（大白话）
4. 等用户说“继续”再动手 —— **确认前不写任何代码**

### 止损（自动触发，不必等用户说）
- **同一问题改 3 次就停**：若第 3 次仍在冒新问题，说明根因多半不在代码。停下来说明根因（很可能是数据问题），等用户确认再改，不要改第 4 次。
- **不确定就停，不要猜**：若正确性依赖对模糊数据的猜测（变调、轻声、多音字、空格边界、格式歧义等），不要写启发式算法。改为建议在数据层补全信息（如直接存音节级拼音），等用户确认。
- **不要主动验证**：除非用户明说“测试一下 / 截图给我看”，否则不跑 Playwright、不截图、不写测试脚本、不开浏览器；改完只跑 build（若有）并报结果。
- **不要主动探索**：>300 行的文件先 `grep -n` 定位再只读目标 40–80 行；不为“了解上下文”读无关文件；不 `ls` 整个目录逐个看；不建临时计划/笔记文件。
- **不要主动总结**：改完不写总结/报告/改动清单；用户问起再用不超过 3 句话回答。

### 执行模式默认值
| 场景 | 默认行为 |
|---|---|
| 模糊需求 | 先解释方案，等确认，再改 |
| 精确需求（文件+行号+目标） | 直接改，不解释 |
| 用户说“不懂/停/为什么” | 停止执行，只用中文解释 |
| 改完 | 只报“改好了”+ 文件名 |
| 需要验证 | 只跑 build，不跑 Playwright |

### 改动范围守门（改之前先判断）
#### 需要用户明确许可才能动的文件
以下属于“生成物或数据管线”，**未经用户明确说“可以改”，一律不动**：
- `tools/*.py`（parser、ingest、gen 等）
- `hsk1/data/sentences/*.json` / `*.js`（生成物）
- `enrichment.json`
- 任何 `out/` 下的生成物

**例外**：`hsk2/data/sentences/grammar-sentences.json` 与 `hsk2/data/sentences/grammar-topics.js`
是**手写真源**（不是生成物），可以直接改，不需要许可 —— 但改完记得重跑 `gen-sentences-js.py`。

#### 触发条件
需求落在上述文件时，**先停下**，用中文说：
> “这个需求需要改 <文件名>（数据管线/生成物），会影响约 <N> 条数据。确认要改吗？”

**等用户说“改”或“确认”后再动手。**

#### 只读 vs 写入
- **只读定位**（grep、view 小范围）不需要许可，可直接做。
- **写入生成物、重跑 ingest/gen、改 tools/*.py** 一律需要用户明确同意。

#### 发现无关 bug 时
修 A 的过程中发现无关的 B bug：**只报告 B，不顺手修**；报告用一句话说清“B 是什么、在哪个文件、影响什么”。除非用户说“一起修”，否则不动 B。

> 用户往往不知道一个需求会牵动数据管线；先说清影响范围比事后解释更安全、更省 token。

## 新任务开场（冷启动必做）
1. 先读**当前级别**的 `data/manifest.json`（应用地图）与本文档，**不要整读**
   `data.js`（hsk2 ~1590 行）/ `app.js`（hsk2 ~3150 行）；用 `grep -n` 定位后只读目标 40–80 行。
   做 hsk2 的事就读 `hsk2/data/manifest.json`，不要拿 hsk1 的地图套。
2. 需求模糊时，先向用户复述：你理解的结构 + 计划改哪几个文件，等确认再改（精确需求直接改）。
3. `hsk1/data/sentences/*.json|.js` 是生成物，**禁止手改**；改语料要改 txt 再跑脚本。
   `hsk2/data/sentences/grammar-sentences.json` 例外 —— 它是手写真源，直接改，改完重跑
   `gen-sentences-js.py` 生成同名 `.js`（详见「hsk2 语法点数据结构」）。
4. 改完只跑 build 并报结果；`file://`/`http://` 浏览器验证需用户明确要求（见“验证”）。
5. 不碰无关的既有改动（`.DS_Store`、`classroom/` 等）。

## 课件构建（每次改完必须执行，除非用户说不要 build）
cd courseware && python3 build.py --meta meta.json --out out/<当前文章标题>.html
- 输出只用于本地查看，不要提交 out/ 下的 HTML
- 改前先 `git status`，不要碰已存在的 out/ 文件（可能含他人未提交改动）

## shell.html 修改规范
- 先 `grep -n` 定位，再 `view` 只读目标 40–80 行，禁止整文件读取
- 只做局部改动，不重构、不重新格式化、不加无关注释

## 多级别页面架构：shared/ 共享层（改动前必读）
所有 HSK 级别页面（`hsk1/`、`hsk2/`、以后的 `hsk3/` …）走同一套代码，**不要复制出第二份 app.js/app.css**。

- 交互 / 渲染逻辑 → `shared/js/app.js`（~3200 行，IIFE，**禁止整文件读**，用 `grep -n` 定位后只读 40–80 行）
- 样式 → `shared/css/app.css`（~1700 行）
- 页面骨架 → 各级别自己的 `index.html`（各 ~200 行），只放 DOM，不塞逻辑
- 课程数据 → 各级别自己的 `js/data.js`（`window.COURSE_LESSONS`，兼容别名 `HSK1_LESSONS`）；
  hsk2 另有 `js/core-vocab.js`、`data/sentences/grammar-topics.js`
- 加载顺序固定：`js/vendor/pinyin-pro.js` → `data/sentences/grammar-sentences.js`
  （hsk2 再加 `grammar-topics.js`、`js/core-vocab.js`）→ `js/data.js` → `../shared/js/app.js`
  —— app.js 是 IIFE 且**末尾自动启动**（`setLesson` / `setMode`），所以必须最后加载
- 级别差异只靠全局量切换（如 `const LESSONS = window.COURSE_LESSONS || window.HSK1_LESSONS`），
  不要在 shared 里写 `if (hsk1)` 之类的分支

### ⚠️ 改共享层时的落点规则
| 要改的东西 | 落点 | 是否需要成对改 |
|---|---|---|
| 逻辑、渲染、状态、事件 | `shared/js/app.js` | 否（改一次全部级别生效） |
| 样式、布局、组件外观 | `shared/css/app.css` | 否 |
| DOM 结构、按钮、抽屉、区块 | 各级别 `index.html` | **是**：`hsk1/index.html` 与 `hsk2/index.html` 必须同步改 |
| 课程/句子数据 | 各级别 `js/data.js`、`data/sentences/*` | 按级别单独改 |

- 加 DOM 元素时优先**复用已有 id**（如 settings 抽屉里的 `kaitiToggle`、`fontUpBtn`、
  `soundCheckBtn`），这样 `shared/js/app.js` 里的 `$('…')` 和事件绑定都不用改
- 新增元素 id 必须两个页面保持一致；改完用
  `grep -o 'id="[^"]*"' hsk1/index.html | sort | uniq -d` 自查重复 id
- 导航条 `#navBar`（⏮ / ⟳ 左，← / → Next 右）跟随内容面板：**游戏模式全显示**，
  学习模式只在 Word / Sentence 的 **Card 视图**显示（List、Texts、Grammar、Topics 隐藏），
  由 `updateNavBar()` 在 `render()` 末尾统一切换 `.hidden`

### 设置持久化约定
- 全局设置存 `localStorage['hsk.settings.v1']`，默认值集中在 `DEFAULT_SETTINGS`
  （`kaiti` / `latin` / `zoomIdx` / `startMode` / `rememberLast`）
- 上次位置存 `localStorage['hsk.last.v1']`（`lesson` / `mode` / `studyTab` / `gameMode`），
  由 `setLesson()`、`setMode()` 末尾调 `persistLast()` 写入
- 新增设置项的固定流程：
  1. 加进 `DEFAULT_SETTINGS`；
  2. 在 settings 抽屉 DOM 里加控件（两个 `index.html` 都加）；
  3. 初始化时从 `saved` 回填并写进内存 `state`（`saveSettings()` 只写 `state`，不要重新读 localStorage，
     否则会把未改动的字段覆盖掉）；
  4. 变更时调 `saveSettings({...})`；
  5. `settingsResetBtn` 的 reset 逻辑里用 `Object.assign(state, DEFAULT_SETTINGS)` 一并复位
- settings 抽屉文字统一用**英文**

## hsk1 应用结构（务必遵守）
`hsk1/index.html` 只是骨架（~200 行），不要再往里塞代码。改动前先读
`hsk1/data/manifest.json`（应用地图），按需只打开对应文件：
- 样式 → `shared/css/app.css`
- 交互 / 渲染逻辑 → `shared/js/app.js`
- 词汇 / 课文 → `hsk1/js/data.js`（`window.COURSE_LESSONS`，兼容别名 `HSK1_LESSONS`）
  每课必须有唯一 `id`，与句子语料的 `key` 对应（如 `'10'` / `'1-10'` / `'all'`）
- 句子语料 → 改 `hsk1/HSK 1 语料 <date>.txt`，再重跑：
  ```
  python3 hsk1/tools/ingest-sentences.py "hsk1/HSK 1 语料 <date>.txt" hsk1/data/sentences/grammar-sentences.json
  python3 hsk1/tools/gen-sentences-js.py hsk1/data/sentences/grammar-sentences.json
  ```
  （`data/sentences/*.json|.js` 是自动生成，**不要手改**；
  句子拼音/英文人工维护在 `data/sentences/enrichment.json`，key 为整句中文）

### 新增级别（HSK3 等）
复制整个 `hsk2/` 目录改名即可（如 `hsk3/`），换 data.js 内容：
- 变量名是中性的（`window.COURSE_LESSONS` / `window.SENTENCE_CORPUS`），
  只要每课 `id` 与语料 `key` 对应，就不会因数组顺序错位而出错
- `js/vendor/pinyin-pro.js` 要一起复制（拼音靠它分词注音）
- `shared/js/app.js` / `shared/css/app.css` 不需要改，新级别直接引用 `../shared/`；
  `data/manifest.json` 里的路径说明要跟着改名

### hsk2（已建好，与 hsk1 的关键差异）
- 结构与本段规则一致：页面骨架 `hsk2/index.html`，逻辑/样式全部走 `shared/`；
  hsk2 的差异只体现在自己的 `js/data.js`、`data/sentences/*` 与额外脚本（`grammar-topics.js`、`core-vocab.js`）
- **课文**：L1-L15 × 4 段对话，来自 `hsk2/887830144-Dialogues-HSK-2.pdf`；
  `data.js` 的 `texts[].lines` **不存拼音**（与 hsk1 相同），拼音由 app.js 现场生成
- **拼音**：`hsk2/js/vendor/pinyin-pro.js`（本地库，离线可用）负责分词+注音。
  `app.js` 里 `perCharPinyin()` / `PINYIN_PRO` 是入口；库缺失时自动退回
  `wordMap` + `SINGLE_CHAR_PINYIN`（会漏字，属预期降级）
- **无生词表**：`core`/`extended` 为空 → 图片/打地鼠/记忆配对 无素材
- **语法语料是手写的，不是生成物**（与 hsk1 不同，务必注意）：
  - `hsk2/data/sentences/grammar-sentences.json` 是**唯一真源，直接手改**
  - `hsk2/data/sentences/grammar-sentences.js` 是生成物，改完 json 后重跑：
    ```
    python3 hsk2/tools/gen-sentences-js.py hsk2/data/sentences/grammar-sentences.json
    ```
  - **不要用 hsk1 的 txt → ingest 流程来改 hsk2 语法**；hsk2 没有对应 txt
  - 现状：L1-L15 共 51 个语法点 / 232 条例句；每点都有 `en` + `note` + `subs[]`
- **跨课专题**：`hsk2/data/sentences/grammar-topics.js`（手写，非生成物）→
  `window.GRAMMAR_TOPICS`，6 个专题 / 27 行对比；界面是「🔗 Topics」标签页

#### hsk2 语法点数据结构（改语法前必读）
```jsonc
{
  "id": "7-g1", "no": 1,
  "cn": "语气副词“还”（2）",
  "en": "The Modal Adverb 还 (2)",
  "note": "点级英文解释，渲染在标题正下方（.grammar-intro）",
  "subs": [                                  // 用法拆分表；id 一般是 'a'/'b'/'c'
    { "id": "a", "label": "还 1 · 状态持续", "exp": "用法级英文解释" }
  ],
  "items": [
    { "c": "他还在教室学习呢。", "en": "...", "sub": "a" }   // sub 存 subs[].id
  ]
}
```
- `items[].sub` 存 **subs[] 的 id**，不是标签文本（字符串匹配已废弃，太脆）
  实际用过的 id：`a`/`b`/`c`/`d`/`e`，以及 `8-g4` 动词重叠用的 `aa`/`abab`
- **向后兼容**：没有 `subs[]` 的点会走老分支，此时 `items[].sub` 当普通公式字符串用
  （hsk1 的 11 个点是这种情况）
- 专题结构：`{ id, cn, en, note, lessons:[课id...], points:[语法点id...], rows:[{label,cn,en}] }`
  - `points[i]` 与 `lessons[i]` **按位置配对**；两者长度不等时不预选任何点

#### 两条硬性规则（都踩过坑）
1. **新增任何语料字段，必须同时加进 `externalLessonGrammar()` 适配器**
   （`shared/js/app.js`，搜 `externalLessonGrammar`）。该函数逐字段手工搬运语料 → 应用结构；
   只改渲染层不改适配器，新字段会被静默丢掉（`subs` 就因此一度不显示）。
2. **`note` / `sub` / `exp` 一律用 `rubyHtml()` 渲染，不要用 `escapeHtml()`**
   （要显示拼音）。对应 CSS 里 `ruby rt` 字号为 `0.55em`，与例句一致。
   `rubyHtml()` 只包中日韩字符，公式里的拉丁文（如 `S + V + result`）会原样通过。

#### hsk2 加载顺序（不要改）
`js/vendor/pinyin-pro.js` → `data/sentences/grammar-sentences.js` →
`data/sentences/grammar-topics.js` → `js/core-vocab.js` → `js/data.js` → `../shared/js/app.js`

#### hsk1 / hsk2 同步策略
逻辑与样式已全部收敛到 `shared/`，**不存在两份 app.js 需要同步**。
唯一需要成对改的是两个 `index.html` 的 DOM（见「shared/ 共享层」一节的落点规则）。
改 shared 后必须在 hsk1 与 hsk2 两边都确认：hsk1 的 70 个点里 11 个有 `note`（其中 3 个是多行），
4 个有 `subs[]`（6-1 / 9-1 / 14-1 / 15-1），其余走老分支（无 `subs[]`、`sub` 当标签文本）。
`note` 用 `\n` 分行，渲染时一行一个 `.grammar-intro`。

## Ruby 拼音显示 SOP（所有模块/新页面一律照此执行）

拼音显示是本仓库**最容易反复踩坑**的地方（原型里为它返工过 5+ 轮）。新写任何带拼音的
模块前，先读这一节，不要自己另发明一套。

### 唯一正确方案：交还给浏览器原生 ruby

```css
ruby { ruby-position: over; ruby-align: center; }
ruby rt {
  font-size: 0.45em;      /* 主站正文用 0.55em，卡片/例句用 0.5em；按上下文选 */
  font-weight: 700;
  line-height: 1.2;
  padding: 0 1px;
}
```

`ruby-position: over` 让 `rt` 由浏览器贴在汉字正上方，行高、基线和标点位置全部自动算对。

### ⛔ 禁止：用 flex 自绘「拼音在上」

```css
/* 绝对不要这样写 */
ruby { display: inline-flex; flex-direction: column-reverse; align-items: center; }
rt   { margin-bottom: 1px; }
```

`column-reverse` 会把 ruby 变成一个比汉字行**高得多**的 flex 盒子。后果是连环的：

1. **标点漂到拼音那一行** —— 后面的 `。`/`？` 按 flex 盒底部对齐，视觉上落在拼音行。
2. **槽位/输入框跟原句对不齐** —— 行内各元素的基线不再一致，怎么调 `vertical-align` 都补不回来。
3. **拼音离字太远** —— 得靠 `margin-bottom` 手动往回拉，越调越乱。

这些问题**无法通过微调数值修好**，因为根因是丢掉了原生的 ruby 布局算法。
原型为此返工多轮（试过 `inline-block`、`vertical-align: bottom`、固定 `min-height`…全都没用），
最后改回原生 ruby 一次解决。**看到「标点跑到拼音行」「拼音太高/太远」「槽位对不齐」，
第一反应就应该是检查有没有人加了 flex 自绘 ruby，然后删掉它。**

### 生成 HTML 的契约

拼音字符串必须**逐字**注入，且**只有中日韩字符**包 `<ruby>`：

```js
const HAN = /[\u3400-\u9fff\uf900-\ufaff]/;
// pinyinPro.pinyin(text, {type:'array'}) 返回数组，长度 === text.length
for (let i = 0; i < text.length; i++) {
  const ch = text[i];
  if (!HAN.test(ch)) { out += esc(ch); continue; }   // emoji / 拉丁 / 标点原样透传
  out += `<ruby>${esc(ch)}<rt>${esc(arr[i] || '')}</rt></ruby>`;
}
```

- **长度相等是硬契约**：`pinyin(text, {type:'array'}).length === text.length`。
  不相等时必须整体退化为无拼音（`return esc(text)`），不要硬拼，否则空 `<rt>` 会错位。
- **非汉字绝不包 `<ruby>`**：emoji（`网球 🎾`）、拉丁词（`Netflix`）原样透传，
  否则会出现空 `<rt>`，把整行撑歪。
- 主站还应给 `rt` 加 `class="tone-N"`（1 红 / 2 橙 / 3 绿 / 4 蓝 / 5 灰），见 `shared/css/app.css`。
- 复用现成函数：主站用 `rubyHtml()` / `perCharPinyin()`（`shared/js/app.js`），不要另写一份。

### 读文本时必须剔除注音

任何从含 ruby 的 DOM 读文字的地方，都用 `wordOf()` / `hanziOf()`，
**不要用 `.textContent`** —— 否则拼音会被当成正文读进结果（朗读、判分、复制全会错）。
见「已知陷阱」第 1 条。

### 顺手检查清单（新模块加完拼音后过一遍）

- [ ] CSS 里**没有** `flex-direction: column-reverse` 配在 `ruby` 上
- [ ] 汉字上方有拼音，且**只有汉字**有；emoji / 拉丁词上方是空的但不塌陷
- [ ] 句末标点（`。？！`）跟汉字在同一行，不在拼音行
- [ ] 句子里若有填空/输入框，其文字和拼音与前后静态文字**同一基线、同一拼音高度**
- [ ] 字号：正文 `0.55em`，例句/卡片 `0.5em`，大号标题按比例调小

## 已知陷阱
1. 任何 .textContent 读取都必须排除 ruby 注音 —— 用 wordOf()/hanziOf()，不要直接 textContent。
2. 不要在嵌套作用域里用 py 命名局部变量（会遮蔽全局 pinyin-pro），用 syllable/pyBtn/pyLine。
3. .pickable 状态用 dataset.pyOn / dataset.defOn（'1'/'0'），高亮类为 mode-py / mode-def。
4. 按钮条 .word-panel 挂在 <body>，position:fixed，不能参与原文排版。
5. hsk2 拼音走 `window.pinyinPro`（`js/vendor/pinyin-pro.js`）；改 `app.js` 拼音逻辑时
   别改 `perCharPinyin()` 的"每字一条"契约——`pinyin(type:'array')` 必须与字符串等长。
   加载顺序：`js/vendor/pinyin-pro.js` 必须在 `js/app.js` 之前。
6. **新增语料字段必须同时改 `externalLessonGrammar()` 适配器**（见 hsk2 段），
   否则渲染层拿不到该字段（`subs` 踩过这个坑）。
7. **`studyTab` 与 `currentMode` 是两套状态**：`setLesson()` 只换数据、**不改 `currentMode`**。
   任何"跳到某标签页"的代码，改完 `studyTab` 后必须再调 `setMode(...)`，
   否则标签高亮变了但视图还是旧的（Topics 课程 chip 踩过这个坑）。
8. 不要手改 `hsk2/data/sentences/grammar-sentences.js`（生成物）；改 `.json` 后重跑脚本。

- 不要改 courseware/.DS_Store

## 验证
- 默认只跑 build，不跑 Playwright、不截图、不写测试
- 用户明确要求“测试一下 / 截图给我看”时才做浏览器验证

