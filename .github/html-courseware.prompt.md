---
mode: agent
description: 根据新文章生成 HTML 精读课件（片段式，省 token）
---

# 任务

为新材料生成课件。**不要读、不要写 `<style>`/`<script>`** —— 它们由
`templates/shell.html` 提供，组装时自动带上。

你只需做两件事：

1. 填写 `templates/parts/` 下要用的片段
2. 写一份 `meta.json`，然后运行组装脚本

# 步骤

## 1. 写 meta.json

```json
{
  "TITLE": "文章标题",
  "SUBTITLE": "时事阅读 · 单词与语法",
  "FOOTER": "© 2026 Chinese-Learning"
}
```

## 2. 填写片段

只改 `templates/parts/` 里的对应文件。**保持片段开头的
`<details class="section" id="...">` 包装不动**，只替换里面的占位注释。
格式样板在 `snippets/`，需要时再读：

| 片段 | 填什么 | 格式参考 |
|---|---|---|
| `toc.html` | 目录链接 | `snippets/toc.html` |
| `vocab.html` | 单词分组 | `snippets/word-card.html` |
| `original.html` | 原文段落 | 片段内注释 |
| `grammar.html` | 语法点（说明用英语） | `snippets/grammar-point.html` |
| `speaking.html` | 口语练习 | — |
| `discussion.html` | 讨论问题 | `snippets/discussion.html` |
| `summary.html` | 总结 | — |

不用某节就跳过，组装时用 `--parts` 省略它。

## 3. 组装

```bash
python3 build.py --meta meta.json --out ../out/文章标题.html
```

# 拼音规则（重要）

**不要手写拼音。** 需要注音的词用 `<span class="py">词语</span>` 包裹，
页面 JS 会自动用 pinyin-pro 生成带声调着色的拼音。

- 单词卡：`<span class="zh"><span class="py">联合打击</span></span>`
- 例句：`<p class="ex-zh"><span class="py">美国</span>和<span class="py">以色列</span>...</p>`
- 原文高亮：`<mark class="hl"><span class="py">美国</span></mark>`

# 内容要求

- **单词**：按主题分组（4-6 组），每组 5-8 词；每词含词条、词性、英文释义、中英例句（尽量取自原文）
- **原文**：完整保留，按段 `<p>`；关键生词用 `<mark class="hl">` 高亮
- **语法**：4-6 个点，每点含用法说明、3 例句、注意事项；易混时加 `.g-diff`
- **讨论**：4-6 个深度问题，用 `.q-list`
- **总结**：核心话题、重点生词、重点语法

# 语法部分用英语写（重要）

`grammar.html` 里除例句外的说明文字**全部用英语**，方便学生用英语理解语法：

- `<h3>` 句式标题：中文句式 + 英文标签，如 `<h3>“即使……也……”（even if… still…）</h3>`
- `.g-en`：英文名，可留空
- `.g-usage`：纯英文说明，如
  `<p class="g-usage"><b>Usage:</b> “即使 A，也 B” concedes an extreme or unfavourable case (A), then stresses that B still holds.</p>`
- `.g-note`：英文提示，如 `<p class="g-note"><b>Note:</b> “即使” introduces a hypothetical case, while “虽然” introduces a fact.</p>`
- `.g-diff`：英文对比说明
- **`.g-ex` 例句保持中文原文**，只给句中虚词/关键词加 `<span class="py">`，句式本身不翻译


# 省 token 约束（重要）

- **不要读 `templates/shell.html`** —— 它由组装脚本提供，与内容无关，2000 行会严重浪费 token
- **不要读 `snippets/*.html`** —— 格式已在本文件说明，除非某节确实不确定
- 不要在 `out/` 之外创建临时文件
- 完成后**只输出：生成的文件名 + 字节数**，不要写总结、不要贴 HTML 内容