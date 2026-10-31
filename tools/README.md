# 课本录入管线（OCR → lessonNN.json → 生成物）

适用于**数据真源是 `<level>/data/lessonNN.json`** 的级别：`hsk3` 已用，`hsk4/5/6` 以后照此。
不适用：`hsk1`（txt → `ingest-sentences.py`）、`hsk2`（语法语料是手写 json）。

## 目录

| 文件 | 作用 |
|---|---|
| `tools/ocr-pdf.swift` | macOS Vision 整页 OCR，每行带 `x` 前缀（0..1）。**这是唯一 OK 的取字方式** |
| `tools/gen-lesson-js.py` | `<level>/data/lessonNN.json` → `<level>/js/data.js` + `<level>/data/sentences/grammar-sentences.js` |
| `tools/lesson-template.json` | lessonNN.json 全字段骨架，复制后填 |
| `<level>/data/manifest.json` | 该级别的页码表、已知坑、工具说明 |

## 绝对不要做的事

- **不要用 PDF 自带文本层**（`PDFPage.string`）。它是坏 OCR 层：「突出」→「宋出」、「俩经常」→「俪经」、说话人姓名被改。已验证不可用。
- **不要按固定比例切左右两栏**。每页栏缝位置都不同，切了必截字，而且调阈值调不出来。用 `x` 前缀自己分组。
- **不要手改生成物**（`js/data.js`、`data/sentences/grammar-sentences.js`），只改 `lessonNN.json` 再跑脚本。

## 每课四步

1. **定位页码**：书页 N = PDF index N+11。目录页在 index 9–11，先确认本课起止。
2. **OCR 落文件**（一次做完，被中断也不用重跑）：
   ```bash
   swiftc -O tools/ocr-pdf.swift -o /tmp/ocr-pdf        # 只需编译一次
   mkdir -p /tmp/ocr && /tmp/ocr-pdf <level>/<book>.pdf 155-164 > /tmp/ocr/l16.txt
   ```
   课文英文在书末《课文英文翻译》（book p.183 起，hsk3 = index 194 起），单独 OCR 一段存文件。
3. **读 OCR 写 `lessonNN.json`**：复制 `tools/lesson-template.json` 填满。字段规则见下。
4. **生成 + 校验**：
   ```bash
   python3 tools/gen-lesson-js.py hsk3          # 生成
   python3 tools/gen-lesson-js.py hsk3 --check  # 生成物是否最新（CI 式校验）
   ```

## OCR 文本怎么读

每行形如 `0.17  台词` 或 `0.63  ① 蓝 lán adj. blue`：

- 双栏页：左栏 `0.10`（说话人）/`0.17`（台词），右栏 `0.47–0.70`（生词表）。
- 单栏页（语法/练习/翻译附录）：自上而下顺序读。
- 行尾偶尔混入右栏残片，按**行首** `x` 判断归属。
- **说话人排在台词块之后**：OCR 顺序是「台词行…→ 说话人」，别把说话人算到下一句。

## lessonNN.json 字段

顶层：`lesson`（数字，与文件名一致）/ `key`（字符串）/ `name`（`L16 · 中文标题`）/ `titleCn` /
`titleEn` / `texts[]` / `grammar[]` / `tips[]` / `exercises`。

- `texts[]`：`id`（`NN-01`）/ `title{cn,en,emoji}` / `intro{cn,en}` / `audio` / `wordAudio` /
  `questions[{type:"choice",q,options[],answer}]` / `postQuestions[{q}]` / `lines[{speaker,cn,en}]` / `words[{cn,pos,en}]`
  - 日记体 `speaker` 写 `""`；每句都要 `en`；`cn` 按「。！？」一句一行。
- `grammar[]`：`id`（`NN-g1`）/ `textId`（挂到哪篇课文）/ `no`（1,2,3…）/ `cn` / `en` /
  `note`（中文解释）/ `noteEn` / `items[{c,en}]` / `practice[{cn,en}]`（可选）。
- `tips[]`：小语助力，结构同 `grammar[]`，**数量不限**，`no` 接着 grammar 往下编。
  生成器把 `grammar[] + tips[]` 顺序拼成 `points`，`shared/js/app.js` 不区分两者。
  没有小语助力就写 `[]`（旧的单数 `tip` 字段已废弃）。
- `exercises`：`fillInTheBlank{group1,group2}` / `describePictures[]` / `classroomActivity`。
  **页面不渲染**，但仍要录全（数据留档）。

示例见 `hsk3/data/lesson16.json`（含 tips 两条）与 `hsk3/data/lesson18.json`（tips 为空数组）。

## 生成物规则（脚本已固化，别手写）

- `data.js`：`window.COURSE_LESSONS = [{name,id:key,core,extended:[],texts}]`，按课号升序；
  `core` = 按 `texts` 顺序合并 `words`、按汉字去重、只留 `{hanzi,en}`；
  另有别名 `window.<LEVEL>_LESSONS`（`hsk3` → `HSK3`）。
- `grammar-sentences.js`：`window.SENTENCE_CORPUS = [{lesson,key,review:false,title,titleCn,points}]`，
  别名 `window.GRAMMAR_SENTENCES`。
- 输出用 `json.dumps(indent=2, ensure_ascii=False)`，与历史生成物逐字节一致。

## 成本规则（每课 5–8 分钱，都是这几条省出来的）

1. **先 OCR 落文件**，别边读边 OCR；被中断也不用重跑。
2. **不看图**。只有 OCR 出现明确形近字错时才把**那一页**转图核对，不要整页整本转。
3. **不重复读模板**：字段结构记在心里，一次读够。
4. **一次成稿**：读 OCR → 写 JSON → 生成 → 校验，四步走完，不要中途试探参数。
5. 遇到 OCR 看不出来的东西（如练习题的填空位置），**不要猜着试**，记进 manifest 的 findings
   并在回复里一句话说明。

## 新级别接入（HSK4 等）

1. 复制已有级别目录（如 `cp -r hsk3 hsk4`），换课本 PDF、`js/data.js` 真源（`data/lessonNN.json`）。
2. OCR 目录页确认每课起止页，把页码表写进 `hsk4/data/manifest.json`。
3. `python3 tools/gen-lesson-js.py hsk4` —— 别名自动是 `HSK4`。
4. `shared/js/app.js` / `shared/css/app.css` 不用改；级别差异只靠 `index.html` 里加载的全局量。
