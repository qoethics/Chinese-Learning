#!/usr/bin/env python3
"""把 shell + parts 拼成完整课件 HTML。

模型只需产出 templates/parts/ 下的片段和一份 meta.json；
<div class="page"> 之外的 CSS/JS 由 shell.html 提供，永远不用模型复述。
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TEMPLATES = ROOT / "templates"
PARTS_DIR = TEMPLATES / "parts"
SHELL = TEMPLATES / "shell.html"

# 片段拼接顺序（可按需增删；section 名对应 parts/<name>.html）
DEFAULT_PARTS = [
    "hero",
    "vocab",
    "original",
    "grammar",
    "speaking",
    "discussion",
    "summary",
]


def read_part(name: str) -> str:
    path = PARTS_DIR / f"{name}.html"
    if not path.exists():
        sys.exit(f"缺少片段: {path}")
    return path.read_text(encoding="utf-8").strip("\n")


def substitute(text: str, meta: dict) -> str:
    """替换 {{KEY}} 占位符。未知占位符保留原样并告警。"""
    def repl(m):
        key = m.group(1)
        if key == "CONTENT":  # 组装标记，不是 metadata
            return m.group(0)
        if key in meta:
            return str(meta[key])
        print(f"警告: 未提供 meta['{key}']，保留占位符", file=sys.stderr)
        return m.group(0)

    return re.sub(r"\{\{([A-Z0-9_]+)\}\}", repl, text)


def build(meta: dict, part_order) -> str:
    shell = SHELL.read_text(encoding="utf-8")

    # hero 里的 {{TITLE}}/{{SUBTITLE}} 与 shell 里的 {{TITLE}} 一起替换
    shell = substitute(shell, meta)

    blocks = []
    for name in part_order:
        if name == "toc":
            shell = shell.replace(
                "<!-- AI 根据内容自动生成目录项，或手动填写 -->",
                read_part("toc"),
            )
            continue
        blocks.append(substitute(read_part(name), meta))

    content = "\n\n".join(blocks)
    if "{{CONTENT}}" not in shell:
        sys.exit("shell.html 缺少 {{CONTENT}} 标记")
    return shell.replace("{{CONTENT}}", content)


def main() -> None:
    ap = argparse.ArgumentParser(description="组装课件 HTML")
    ap.add_argument("--meta", required=True, help="meta.json 路径（含 title/subtitle/footer 等）")
    ap.add_argument("--out", required=True, help="输出 HTML 路径")
    ap.add_argument(
        "--parts",
        default=",".join(DEFAULT_PARTS),
        help="片段顺序，逗号分隔；可用省略来删掉某节（如 hero,vocab,original,grammar）",
    )
    ap.add_argument(
        "--toc",
        default=True,
        action=argparse.BooleanOptionalAction,
        help="是否注入目录片段",
    )
    args = ap.parse_args()

    meta = json.loads(Path(args.meta).read_text(encoding="utf-8"))
    order = [p.strip() for p in args.parts.split(",") if p.strip()]
    if args.toc:
        order = ["toc"] + order

    html = build(meta, order)
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")
    print(f"已生成 {out}  ({len(html)} 字节)")


if __name__ == "__main__":
    main()
