#!/usr/bin/env python3
"""从 hsk3/data/lessonNN.json 生成两个运行时文件。

用法：
    python3 hsk3/tools/gen-lesson-js.py            # 生成
    python3 hsk3/tools/gen-lesson-js.py --check    # 只校验，不写盘

真源是 hsk3/data/lessonNN.json（手写）；本脚本只做「搬运 + 去重」：
  1. hsk3/js/data.js
     window.COURSE_LESSONS = [{name, id:key, core, extended:[], texts}]
     core = 按 texts 顺序合并 words，按汉字去重（只留 hanzi/en）
     另写 window.HSK3_LESSONS 别名
  2. hsk3/data/sentences/grammar-sentences.js
     window.SENTENCE_CORPUS = [{lesson, key, review:false, title, titleCn, points}]
     points = grammar[] + tips[]（小语助力可以有多条，顺序追加在 grammar 后面）
     另写 window.GRAMMAR_SENTENCES 别名

不要手改上面两个 .js。改完 lessonNN.json 就跑这个脚本。
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "hsk3" / "data"
DATA_JS = ROOT / "hsk3" / "js" / "data.js"
CORPUS_JS = DATA / "sentences" / "grammar-sentences.js"

LESSON_RE = re.compile(r"^lesson(\d+)\.json$")


def load_lessons():
    lessons = []
    for path in sorted(DATA.iterdir()):
        m = LESSON_RE.match(path.name)
        if not m:
            continue
        data = json.loads(path.read_text(encoding="utf-8"))
        expected = int(m.group(1))
        if data.get("lesson") != expected:
            sys.exit(f"{path.name}: lesson 字段是 {data.get('lesson')}，与文件名不一致")
        for field in ("key", "name", "titleCn", "titleEn", "texts", "grammar"):
            if field not in data:
                sys.exit(f"{path.name}: 缺少字段 {field}")
        lessons.append((path, data))
    if not lessons:
        sys.exit("hsk3/data 下没有 lessonNN.json")
    lessons.sort(key=lambda pair: pair[1]["lesson"])
    return lessons


def check_lesson(path, data):
    problems = []
    text_ids = {t["id"] for t in data["texts"]}
    for t in data["texts"]:
        for i, line in enumerate(t["lines"], 1):
            if not line.get("cn"):
                problems.append(f"{path.name} {t['id']} line {i}: cn 为空")
            if not line.get("en"):
                problems.append(f"{path.name} {t['id']} line {i}: en 为空（可接受，但会缺译文）")
    for g in data["grammar"] + data.get("tips", []):
        if g.get("textId") not in text_ids:
            problems.append(f"{path.name} {g['id']}: textId {g.get('textId')} 不在 texts 里")
    return problems


def build(data_lessons):
    lessons_out = []
    corpus_out = []
    for data in data_lessons:
        core, seen = [], set()
        for text in data["texts"]:
            for word in text["words"]:
                if word["cn"] in seen:
                    continue
                seen.add(word["cn"])
                core.append({"hanzi": word["cn"], "en": word["en"]})
        lessons_out.append({
            "name": data["name"],
            "id": data["key"],
            "core": core,
            "extended": [],
            "texts": data["texts"],
        })

        points = []
        for point in data["grammar"] + data.get("tips", []):
            points.append({
                "id": point["id"],
                "textId": point["textId"],
                "no": point["no"],
                "cn": point["cn"],
                "en": point["en"],
                "note": point.get("note"),
                "noteEn": point.get("noteEn"),
                "practice": point.get("practice"),
                "items": point["items"],
            })
        corpus_out.append({
            "lesson": data["lesson"],
            "key": data["key"],
            "review": False,
            "title": data["titleEn"],
            "titleCn": data["titleCn"],
            "points": points,
        })
    return lessons_out, corpus_out


def source_line(names):
    return " + ".join(names)


def render_data_js(lessons_out, names):
    head = (
        "// HSK3 lesson texts. Read-only at runtime.\n"
        f"// Source: {source_line(names)} (hand-authored; book page ranges in hsk3/data/manifest.json).\n"
        "// Pinyin is NOT stored: shared/js/app.js derives it with pinyin-pro (window.pinyinPro).\n"
        "// Grammar points live in data/sentences/grammar-sentences.js (window.SENTENCE_CORPUS);\n"
        "// each point carries a textId so renderTextList can show it under its own text.\n"
        "window.COURSE_LESSONS = "
    )
    tail = (
        ";\n\n// Backwards-compatible alias (neutral name is COURSE_LESSONS).\n"
        "window.HSK3_LESSONS = window.COURSE_LESSONS;\n"
    )
    return head + json.dumps(lessons_out, indent=2, ensure_ascii=False) + tail


def render_corpus_js(corpus_out, names):
    head = (
        f"// AUTO-GENERATED from {source_line(names)} — do not edit by hand.\n"
        f"// Hand-authored source of truth: {' / '.join(names)}\n"
        "// Regenerate: python3 hsk3/tools/gen-lesson-js.py\n"
        "window.SENTENCE_CORPUS = "
    )
    tail = ";\n\n// Backwards-compatible alias.\nwindow.GRAMMAR_SENTENCES = window.SENTENCE_CORPUS;\n"
    return head + json.dumps(corpus_out, indent=2, ensure_ascii=False) + tail


def main():
    check_only = "--check" in sys.argv
    loaded = load_lessons()
    warnings = []
    for path, data in loaded:
        warnings.extend(check_lesson(path, data))

    data_lessons = [data for _, data in loaded]
    names = [f"hsk3/data/{path.name}" for path, _ in loaded]

    lessons_out, corpus_out = build(data_lessons)
    files = {
        DATA_JS: render_data_js(lessons_out, names),
        CORPUS_JS: render_corpus_js(corpus_out, names),
    }

    if check_only:
        stale = [str(p.relative_to(ROOT)) for p, text in files.items()
                 if not p.exists() or p.read_text(encoding="utf-8") != text]
        if stale:
            print("需要重新生成：" + ", ".join(stale))
            return 1
    else:
        for path, text in files.items():
            path.write_text(text, encoding="utf-8")
            print(f"wrote {path.relative_to(ROOT)}")

    for data in data_lessons:
        texts = sum(len(t["lines"]) for t in data["texts"])
        points = len(data["grammar"]) + len(data.get("tips", []))
        print(f"  L{data['lesson']}: {len(data['texts'])} texts / {texts} lines / {points} grammar points")

    if warnings:
        print("提示：")
        for w in warnings[:20]:
            print("  - " + w)
        if len(warnings) > 20:
            print(f"  ... 还有 {len(warnings) - 20} 条")
    return 0


if __name__ == "__main__":
    sys.exit(main())
