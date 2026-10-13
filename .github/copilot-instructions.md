# Chinese-Learning 仓库约定

## 课件构建（每次改完必须执行，除非用户说不要 build）
cd courseware && python3 build.py --meta meta.json --out out/<当前文章标题>.html
- 输出只用于本地查看，不要提交 out/ 下的 HTML
- 改前先 `git status`，不要碰已存在的 out/ 文件（可能含他人未提交改动）

## shell.html 修改规范
- 先 `grep -n` 定位，再 `view` 只读目标 40–80 行，禁止整文件读取
- 只做局部改动，不重构、不重新格式化、不加无关注释

## 已知陷阱
已知陷阱（务必遵守）：
1. 任何 .textContent 读取都必须排除 ruby 注音 —— 用 wordOf()/hanziOf()，不要直接 textContent。
2. 不要在嵌套作用域里用 py 命名局部变量（会遮蔽全局 pinyin-pro），用 syllable/pyBtn/pyLine。
3. .pickable 状态用 dataset.pyOn / dataset.defOn（'1'/'0'），高亮类为 mode-py / mode-def。
4. 按钮条 .word-panel 挂在 <body>，position:fixed，不能参与原文排版。

## 验证
- 默认只跑 build，不跑 Playwright、不截图、不写测试
- 用户明确要求时才做浏览器验证

## 不要做
- 不要创建临时 .md 计划/笔记文件
- 不要改 courseware/.DS_Store
