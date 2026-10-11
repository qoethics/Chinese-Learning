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
| `grammar.html` | 语法点 | `snippets/grammar-point.html` |
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

# 开始

等我提供文章。
