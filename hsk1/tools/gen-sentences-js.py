#!/usr/bin/env python3
"""把 grammar-sentences.json 转成可在 file:// 下直接加载的 .js 兜底。

用法：
    python3 hsk1/tools/gen-sentences-js.py \
        hsk1/data/sentences/grammar-sentences.json \
        hsk1/data/sentences/grammar-sentences.js

json 是唯一真相源；本脚本自动生成 .js，不要手改 .js。
"""

import json
import sys
from pathlib import Path


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    dst = Path(sys.argv[2]) if len(sys.argv) > 2 else src.with_suffix(".js")
    data = json.loads(src.read_text(encoding="utf-8"))
    body = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    dst.write_text(
        "// AUTO-GENERATED from grammar-sentences.json — do not edit.\n"
        "// Regenerate: python3 hsk1/tools/gen-sentences-js.py\n"
        f"window.GRAMMAR_SENTENCES = {body};\n",
        encoding="utf-8",
    )
    print(f"wrote {dst} ({dst.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
