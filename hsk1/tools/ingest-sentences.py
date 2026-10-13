#!/usr/bin/env python3
"""把 hsk1 语料 txt 转换成按语法点分组的 grammar-sentences.json。

用法：
    python3 hsk1/tools/ingest-sentences.py \
        "hsk1/HSK 1 语料 20261013.txt" \
        hsk1/data/sentences/grammar-sentences.json

txt 是唯一真相源；json（以及 .js 兜底）都是自动生成的，不要手改。

txt 结构：
    Lesson 4: Like, Eat and Drink 我喜欢咖啡     ← 课标题（可带中文副标题）
    基础单词：/ 扩展单词：/ 单词：               ← 词汇段（忽略）
    省份：                                        ← 句子段的软标题（非语法点）
    句子： / 例句： / 语法： / 语法:              ← 句子段开始
    1. 基本动词句 Basic Verb Sentences            ← 语法点（中英标题）
    a. Positive form / b. Negative form           ← 子标记（归属当前语法点）
    Extended:                                     ← 子标记（归属当前语法点）
    我喝咖啡。                                     ← 句子（可带英文，用 | 分隔）
"""

import json
import re
import sys
from pathlib import Path

# 段落标题（行尾带全角/半角冒号的）
SECTION_RE = re.compile(r"^(基础单词|扩展单词|单词|句子|例句|语法|省份|综合|课文)[：:]\s*$")
# 课标题：Lesson 4: ... / Lessons 1-6 Review: / Lesson 1-3 Review: /
#        1-10 Review: / All HSK 1 Review:
LESSON_RE = re.compile(r"^Lesson[s]?\s+([\d\-]+)\s*(Review)?\s*[:：]\s*(.*)$")
REVIEW_RE = re.compile(r"^(?:(?:All\s+)?HSK\s*1\s+Review|([\d]+(?:-[\d]+)?)\s+Review)\s*[:：]?\s*(.*)$", re.I)
# 语法点：以 "1. " / "10. " 开头
POINT_RE = re.compile(r"^(\d{1,2})\.\s+(.+?)\s*$")
# 子标记：a. / b. / c. / Extended: 等
SUB_RE = re.compile(r"^([a-z]\.\s+.+|Extended[:：]?.*)$")


def load_legacy_map(enrichment_path):
    """从 enrichment.json 读取句子的拼音/英文，返回 {cn: {py,en}}。

    语料 txt 只有中文；拼音/英文由人工维护在 data/sentences/enrichment.json 里
    （key 为整句中文）。生成时合并进 json，语料即可自给自足。
    """
    path = Path(enrichment_path)
    if not path.exists():
        return {}
    try:
        raw = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}
    pmap = {}
    for cn, v in raw.items():
        if isinstance(v, dict):
            pmap[cn] = {"py": v.get("py") or "", "en": v.get("en") or ""}
    return pmap


def split_title_en(text):
    """把 '基本动词句 Basic Verb Sentences' 拆成 (cn, en)。

    规则：找到第一个 ASCII 字母开头、且其后全是 "英文短语" 的位置作为分界。
    '能愿动词“会” The Modal Verb “会”' -> cn='能愿动词“会”', en='The Modal Verb “会”'
    '基本动词句 Basic Verb Sentences'    -> cn='基本动词句',   en='Basic Verb Sentences'
    纯英文标题 -> cn='', en=整个
    """
    text = text.strip()
    if not text:
        return "", ""
    # 纯英文（无汉字）
    if not re.search(r"[\u4e00-\u9fff]", text):
        return "", text
    # 在第一个 '汉字/中文标点' 与 'ASCII 字母' 交界处分：
    # 定位第一段 ASCII 字母，其前面必须是非 ASCII 字母（汉字或空格或引号）
    m = re.search(r"[A-Za-z]", text)
    if not m:
        return text, ""
    # 往前吃掉紧邻的空格，分界点取该 ASCII 字母前的第一个空格/汉字后
    cut = m.start()
    # 若 ASCII 字母前是空格，则把空格也算进 en
    while cut > 0 and text[cut - 1] == " ":
        cut -= 1
    cn = text[:cut].strip()
    en = text[cut:].strip()
    return cn, en


# 说明行里常见的英文功能词 / 语法术语（整词匹配）。用来区分
#   'The Structure “是...的”: used to emphasize…'  （说明，含引号里的汉字）
# 与真正的中英混排句子
#   '这个汉堡是在 McDonald's 买的' / '我是Jackie Chan。'
# 外文专名（McDonald's / Uniqlo / Spider Man）不会命中这些词，因此仍是句子。
NOTE_WORDS = re.compile(
    r"(?<![A-Za-z])("
    r"the|this|that|these|those|is|are|was|were|be|been|being|"
    r"a|an|and|or|but|not|no|to|of|in|on|at|for|with|by|from|"
    r"can|cannot|may|must|should|will|would|"
    r"used|use|uses|when|whenever|where|which|who|whose|how|why|"
    r"it|its|you|your|we|our|they|their|he|she|his|her|"
    r"also|instead|omit|omitted|form|forms|pronoun|preposition|conjunction|"
    r"subject|predicate|object|verb|noun|adjective|adverb|particle|"
    r"note|spoken|verbal|positive|negative|interrogative|"
    r"both|all|between|before|after|end|beginning|"
    r"indicate|indicates|indicating|express|expresses|expressing|emphasize|"
    r"sentence|sentences|word|words|phrase|clause|structure|means|meaning"
    r")(?![A-Za-z])",
    re.I,
)


def is_english_note(line):
    """说明行（语法点注解 -> note）。

    1) 完全没有汉字 -> 说明行；
    2) 含汉字，但去掉括号注释后仍出现常见英文功能词/语法术语 -> 说明行。
       例如 'The Structure “是...的”: used to emphasize…'、
       'a. 用于句尾 used at the end of a sentence'。
       反之 '我是Jackie Chan。'、'这个汉堡是在 McDonald's 买的' 不含这些
       功能词，仍是句子。
    """
    if not re.search(r"[\u4e00-\u9fff]", line):
        return True
    # 去掉 '(clothes)' / '(take out money)' 这类汉字后的词汇注释，避免误判
    stripped = re.sub(r"[\(（][^()（）]*[\)）]", "", line)
    if not re.search(r"[A-Za-z]", stripped):
        return False
    return bool(NOTE_WORDS.search(stripped))


def split_sentence(line):
    """句子行 -> (cn, en)。允许 '中文 | English'；去掉行首的 * / * 标记。"""
    line = line.strip()
    line = re.sub(r"^[*＊]+\s*", "", line)      # 去掉标注星号
    if "|" in line:
        cn, en = line.split("|", 1)
        return cn.strip(), en.strip()
    return line, ""


def parse(txt):
    lessons = []
    cur_lesson = None
    cur_section = None      # 当前段落类型：vocab / sentences / other
    cur_point = None        # 当前语法点 dict
    cur_sub = ""            # 当前子标记文本（a. Positive form）
    pending_soft = []       # 软标题（省份 等）下的句子，尚未遇到编号语法点
    soft_title = "句子"     # pending_soft 对应的标题
    soft_no = 0             # 同一课内软标题组的递增序号（保证 id 唯一）

    def flush_point():
        nonlocal cur_point
        if cur_point is not None and cur_lesson is not None:
            if cur_point["items"]:
                cur_lesson["points"].append(cur_point)
            cur_point = None

    def flush_soft():
        """把 pending_soft 的句子落成独立一组。"""
        nonlocal pending_soft, soft_no
        if pending_soft and cur_lesson is not None:
            cur_lesson["points"].append({
                "id": f"{cur_lesson['key']}-s{soft_no}", "no": 0,
                "cn": soft_title, "en": "", "items": pending_soft,
            })
            soft_no += 1
            pending_soft = []

    for raw in txt.splitlines():
        line = raw.rstrip()
        stripped = line.strip()
        if not stripped:
            continue

        # 源文件里的注释（// ...）与纯数字/ASCII 噪声行（电话号码等）直接丢弃
        if stripped.startswith("//") or stripped.startswith("#"):
            continue
        if not re.search(r"[\u4e00-\u9fff]", stripped) and re.fullmatch(r"[\d\s\-+*]+", stripped):
            continue

        m = LESSON_RE.match(stripped)
        is_review = False
        if m:
            num = m.group(1)
            is_review = bool(m.group(2))
            title = m.group(3).strip()
        else:
            rm = REVIEW_RE.match(stripped)
            if rm:
                num = rm.group(1) or "all"
                is_review = True
                title = rm.group(2).strip() or f"Review {num}"
            else:
                num = title = None
        if num is not None:
            flush_soft()
            flush_point()
            cur_lesson = {
                "lesson": None if is_review else int(num.split("-")[0]),
                "key": num,
                "review": is_review,
                "title": title,
                "titleCn": "",
                "points": [],
            }
            # 课标题里可能有中文副标题：'Like, Eat and Drink 我喜欢咖啡'
            mm = re.search(r"([\u4e00-\u9fff].*)$", title)
            if mm:
                cur_lesson["titleCn"] = mm.group(1).strip()
            lessons.append(cur_lesson)
            cur_section = None
            cur_point = None
            pending_soft = []
            soft_no = 0
            continue

        sm = SECTION_RE.match(stripped)
        if sm:
            name = sm.group(1)
            if name in ("基础单词", "扩展单词", "单词"):
                cur_section = "vocab"
            elif name in ("句子", "例句"):
                cur_section = "sentences"
                soft_title = name
            elif name == "语法":
                cur_section = "sentences"
            else:  # 省份 / 综合 / 课文 —— 自成一组
                cur_section = "other"
                soft_title = name
            flush_point()
            cur_sub = ""
            continue

        # 无冒号的软标题（如裸 '省份'）——自成一组，不当作句子
        if stripped in ("省份", "综合", "课文"):
            cur_section = "other"
            soft_title = stripped
            flush_point()
            cur_sub = ""
            continue

        if cur_lesson is None:
            continue

        # 语法点：'1. 基本动词句 Basic Verb Sentences'
        pm = POINT_RE.match(stripped)
        if pm and cur_section in ("sentences", "other") and cur_section is not None:
            # 若有软标题句子（省份等），先让它们自成一组
            flush_soft()
            flush_point()
            cn, en = split_title_en(pm.group(2))
            cur_point = {"id": f"{cur_lesson['key']}-{pm.group(1)}", "no": int(pm.group(1)),
                         "cn": cn, "en": en, "items": []}
            cur_sub = ""
            continue

        # 子标记 a. / b. / c. / Extended:（先于英文注解判断，否则纯英文的
        # "a. Positive form" 会被误当成 note 吸走，丢失分组）
        if cur_section in ("sentences", "other") and SUB_RE.match(stripped):
            cur_sub = stripped
            continue

        # 纯英文说明行（语法点内的注解）-> 当前点的 note，不是句子
        if is_english_note(stripped) and cur_point is not None:
            prev = cur_point.get("note", "")
            cur_point["note"] = (prev + " " + stripped).strip() if prev else stripped
            continue

        # 词汇段里混进的句子：以句末标点结尾的行，视为句子（部分 Review 课
        # 只有 单词： 没有 句子： 标记，句子直接跟在词表后）。
        if cur_section == "vocab" and re.search(r"[。！？]\s*$", stripped):
            cur_section = "sentences"

        # 句子行
        if cur_section in ("sentences", "other"):
            cn, en = split_sentence(stripped)
            if not cn:
                continue
            item = {"c": cn}
            if en:
                item["en"] = en
            if cur_sub:
                item["sub"] = cur_sub
            if cur_point is not None:
                cur_point["items"].append(item)
            else:
                # 尚无编号语法点：先攒着，flush_soft 会落成 "<key>-0" 组
                pending_soft.append(item)

    flush_soft()
    flush_point()
    return lessons


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    dst = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("hsk1/data/sentences/grammar-sentences.json")
    data = parse(src.read_text(encoding="utf-8"))

    # 用 data/sentences/enrichment.json 的拼音/英文补齐语料，使其自给自足。
    legacy = load_legacy_map(Path(__file__).resolve().parent.parent / "data" / "sentences" / "enrichment.json")
    filled = 0
    for L in data:
        for p in L["points"]:
            for it in p["items"]:
                lp = legacy.get(it["c"])
                if not lp:
                    continue
                if not it.get("py") and lp["py"]:
                    it["py"] = lp["py"]
                    filled += 1
                if not it.get("en") and lp["en"]:
                    it["en"] = lp["en"]

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    total = sum(len(p["items"]) for L in data for p in L["points"])
    withpy = sum(1 for L in data for p in L["points"] for it in p["items"] if it.get("py"))
    withen = sum(1 for L in data for p in L["points"] for it in p["items"] if it.get("en"))
    print(f"wrote {dst}")
    print(f"lessons: {len(data)}  grammar points: {sum(len(L['points']) for L in data)}  sentences: {total}")
    print(f"pinyin源自enrichment: {filled}  最终带拼音: {withpy}  带英文: {withen}")
    for L in data:
        print(f"  L{L['key']:<7} points={len(L['points']):<2} sentences={sum(len(p['items']) for p in L['points'])}")


if __name__ == "__main__":
    main()
