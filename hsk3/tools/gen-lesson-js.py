#!/usr/bin/env python3
"""兼容壳：真正逻辑在仓库根的 tools/gen-lesson-js.py（支持任意级别）。"""

import subprocess
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[2] / "tools" / "gen-lesson-js.py"
sys.exit(subprocess.call([sys.executable, str(SCRIPT), "hsk3", *sys.argv[1:]]))
