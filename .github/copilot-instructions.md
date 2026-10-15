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
- `data/sentences/*.json` / `*.js`
- `enrichment.json`
- 任何 `out/` 下的生成物

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
1. 先读 `hsk1/data/manifest.json`（应用地图）与本文档，**不要整读** `data.js`（~1400 行）/
   `app.js`（~2700 行）；用 `grep -n` 定位后只读目标 40–80 行。
2. 需求模糊时，先向用户复述：你理解的结构 + 计划改哪几个文件，等确认再改（精确需求直接改）。
3. `data/sentences/*.json|.js` 是生成物，**禁止手改**；改语料要改 txt 再跑脚本。
4. 改完只跑 build 并报结果；`file://`/`http://` 浏览器验证需用户明确要求（见“验证”）。
5. 不碰无关的既有改动（`.DS_Store`、`classroom/` 等）。

## 课件构建（每次改完必须执行，除非用户说不要 build）
cd courseware && python3 build.py --meta meta.json --out out/<当前文章标题>.html
- 输出只用于本地查看，不要提交 out/ 下的 HTML
- 改前先 `git status`，不要碰已存在的 out/ 文件（可能含他人未提交改动）

## shell.html 修改规范
- 先 `grep -n` 定位，再 `view` 只读目标 40–80 行，禁止整文件读取
- 只做局部改动，不重构、不重新格式化、不加无关注释

## hsk1 应用结构（已拆分，务必遵守）
`hsk1/index.html` 只是骨架（~170 行），不要再往里塞代码。改动前先读
`hsk1/data/manifest.json`（应用地图），按需只打开对应文件：
- 样式 → `hsk1/css/app.css`
- 词汇 / 课文 → `hsk1/js/data.js`（`window.COURSE_LESSONS`，兼容别名 `HSK1_LESSONS`）
  每课必须有唯一 `id`，与句子语料的 `key` 对应（如 `'10'` / `'1-10'` / `'all'`）
- 句子语料 → 改 `hsk1/HSK 1 语料 <date>.txt`，再重跑：
  ```
  python3 hsk1/tools/ingest-sentences.py "hsk1/HSK 1 语料 <date>.txt" hsk1/data/sentences/grammar-sentences.json
  python3 hsk1/tools/gen-sentences-js.py hsk1/data/sentences/grammar-sentences.json
  ```
  （`data/sentences/*.json|.js` 是自动生成，**不要手改**；
  句子拼音/英文人工维护在 `data/sentences/enrichment.json`，key 为整句中文）
- 交互 / 渲染逻辑 → `hsk1/js/app.js`（~2700 行，**禁止整文件读**，用 `grep -n` 定位后只读 40–80 行）
- 加载顺序固定：`data/sentences/grammar-sentences.js` → `js/data.js` → `js/app.js`，不要改

### 新增级别（HSK3 等）
复制整个 `hsk2/` 目录改名即可（如 `hsk3/`），换 data.js 内容：
- 变量名是中性的（`window.COURSE_LESSONS` / `window.SENTENCE_CORPUS`），
  只要每课 `id` 与语料 `key` 对应，就不会因数组顺序错位而出错
- `js/vendor/pinyin-pro.js` 要一起复制（拼音靠它分词注音）
- `js/app.js` / `css/app.css` 不需要改；`data/manifest.json` 里的路径说明要跟着改名

### hsk2（已建好，与 hsk1 的差异）
- 结构、`app.js`、`css/app.css` 都由 hsk1 复制而来，逻辑一致
- **课文**：L1-L15 × 4 段对话，来自 `hsk2/887830144-Dialogues-HSK-2.pdf`；
  `data.js` 的 `texts[].lines` **不存拼音**（与 hsk1 相同），拼音由 app.js 现场生成
- **拼音**：`hsk2/js/vendor/pinyin-pro.js`（本地库，离线可用）负责分词+注音。
  `app.js` 里 `perCharPinyin()` / `PINYIN_PRO` 是入口；库缺失时自动退回
  `wordMap` + `SINGLE_CHAR_PINYIN`（会漏字，属预期降级）
- **无生词表**：`core`/`extended` 为空 → 图片/打地鼠/记忆配对 无素材；
  句卡/填空/语法无内容（`data/sentences/grammar-sentences.js` 是空数组占位）
- 改语料：写好 txt 后跑
  `python3 hsk2/tools/gen-sentences-js.py hsk2/data/sentences/grammar-sentences.json`
  （ingest 脚本的 `HSK 1 Review` 正则已改为 `HSK 2`）

## 已知陷阱
1. 任何 .textContent 读取都必须排除 ruby 注音 —— 用 wordOf()/hanziOf()，不要直接 textContent。
2. 不要在嵌套作用域里用 py 命名局部变量（会遮蔽全局 pinyin-pro），用 syllable/pyBtn/pyLine。
3. .pickable 状态用 dataset.pyOn / dataset.defOn（'1'/'0'），高亮类为 mode-py / mode-def。
4. 按钮条 .word-panel 挂在 <body>，position:fixed，不能参与原文排版。
5. hsk2 拼音走 `window.pinyinPro`（`js/vendor/pinyin-pro.js`）；改 `app.js` 拼音逻辑时
   别改 `perCharPinyin()` 的"每字一条"契约——`pinyin(type:'array')` 必须与字符串等长。
   加载顺序：`js/vendor/pinyin-pro.js` 必须在 `js/app.js` 之前。

- 不要改 courseware/.DS_Store

## 验证
- 默认只跑 build，不跑 Playwright、不截图、不写测试
- 用户明确要求“测试一下 / 截图给我看”时才做浏览器验证

