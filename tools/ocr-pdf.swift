// macOS Vision OCR helper for HSK textbook PDFs (e.g. hsk3/hsk-course-3.pdf).
// Pipeline and rules: tools/README.md
//
// Why this exists: the PDF's own text layer is a bad OCR layer ("突出" -> "宋出",
// "俩经常" -> "俪经", speaker names mangled), so it cannot be used.
//
// This helper runs Vision on the whole page once, merges fragments into visual
// lines, and prefixes every line with its horizontal position (x, 0..1):
//
//   0.17  您搬到蓝天小区一段时间了，觉得怎么样？
//   0.63  ① 蓝 lán adj. blue
//
// Why x instead of splitting the page: text pages are two-column (dialogue left,
// new words right) while grammar / exercise / appendix pages are single-column,
// and the gutter shifts from page to page. Prefixing x never clips anything —
// read the 0.1x lines for the dialogue, the 0.6x lines for new words, and the
// whole page top-to-bottom for single-column pages.
//
// Usage:
//   ocr-pdf <pdf> <pages> [--json] [--scale N]
//
//   <pages>   "136" / "136,137" / "135-143"  (0-based PDF index; book page N = index N + 11)
//   --json    emit structured JSON (lines carry t / conf / x / y)
//   --scale N render scale, default 3.0

import Foundation
import PDFKit
import Vision
import AppKit

struct Row {
    let t: String
    let x: Double
    let y: Double
    let w: Double
    let h: Double
    let conf: Float
    var centerY: Double { y + h / 2 }
}

let argv = CommandLine.arguments
guard argv.count >= 3 else {
    FileHandle.standardError.write("usage: ocr-pdf <pdf> <pages> [--json] [--scale N]\n".data(using: .utf8)!)
    exit(2)
}
let pdfPath = argv[1]

func expandPages(_ spec: String) -> [Int] {
    var out: [Int] = []
    for part in spec.split(separator: ",") {
        let bits = part.split(separator: "-").compactMap { Int($0) }
        if bits.count == 2 { out.append(contentsOf: bits[0]...bits[1]) }
        else if bits.count == 1 { out.append(bits[0]) }
    }
    return out
}

let pageIndexes = expandPages(argv[2])
let jsonMode = argv.contains("--json")
var scale: CGFloat = 3.0
if let i = argv.firstIndex(of: "--scale"), i + 1 < argv.count, let v = Double(argv[i + 1]) { scale = CGFloat(v) }

guard let doc = PDFDocument(url: URL(fileURLWithPath: pdfPath)) else {
    FileHandle.standardError.write("cannot open PDF: \(pdfPath)\n".data(using: .utf8)!)
    exit(1)
}

func render(_ page: PDFPage) -> CGImage? {
    let rect = page.bounds(for: .mediaBox)
    let w = Int(rect.width * scale), h = Int(rect.height * scale)
    guard w > 0, h > 0 else { return nil }
    guard let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: 0,
                              space: CGColorSpaceCreateDeviceRGB(),
                              bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue) else { return nil }
    ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    ctx.fill(CGRect(x: 0, y: 0, width: w, height: h))
    ctx.scaleBy(x: scale, y: scale)
    page.draw(with: .mediaBox, to: ctx)
    return ctx.makeImage()
}

func recognise(_ image: CGImage) -> [Row] {
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.recognitionLanguages = ["zh-Hans", "en-US"]
    request.usesLanguageCorrection = false
    let handler = VNImageRequestHandler(cgImage: image, options: [:])
    do { try handler.perform([request]) } catch { return [] }
    var rows: [Row] = []
    for obs in (request.results ?? []) {
        guard let cand = obs.topCandidates(1).first else { continue }
        let b = obs.boundingBox
        rows.append(Row(t: cand.string, x: Double(b.minX), y: Double(b.minY),
                        w: Double(b.width), h: Double(b.height), conf: cand.confidence))
    }
    return rows
}

let han = try! NSRegularExpression(pattern: "[\\u3400-\\u9fff\\uf900-\\ufaff]")
func isHan(_ s: String) -> Bool {
    !s.isEmpty && han.firstMatch(in: s, range: NSRange(s.startIndex..., in: s)) != nil
}

// Merge fragments that sit on the same visual line, then order each line left-to-right.
func groupLines(_ rows: [Row]) -> [[Row]] {
    guard !rows.isEmpty else { return [] }
    let heights = rows.map { $0.h }.sorted()
    let medianH = heights[heights.count / 2]
    let tolerance = max(medianH * 0.55, 0.006)
    var lines: [[Row]] = []
    for row in rows.sorted(by: { $0.centerY > $1.centerY }) {
        if var last = lines.last, abs(row.centerY - last[0].centerY) <= tolerance {
            last.append(row)
            lines[lines.count - 1] = last
            continue
        }
        lines.append([row])
    }
    return lines.map { $0.sorted { $0.x < $1.x } }
}

func lineText(_ line: [Row]) -> String {
    var out = ""
    for row in line {
        if out.isEmpty { out = row.t; continue }
        let a = String(out.suffix(1)), b = String(row.t.prefix(1))
        out += (isHan(a) && isHan(b)) ? row.t : " " + row.t
    }
    return out
}

struct OutRow: Encodable { let t: String; let conf: Float; let x: Double; let y: Double }
struct OutRegion: Encodable { let name: String; let lines: [[OutRow]] }
struct OutPage: Encodable { let index: Int; let regions: [OutRegion] }
struct OutDoc: Encodable { let pdf: String; let pageCount: Int; let pages: [OutPage] }

var pagesOut: [OutPage] = []
for idx in pageIndexes {
    guard let page = doc.page(at: idx), let image = render(page) else { continue }
    let lines = groupLines(recognise(image)).filter { !$0.isEmpty }.map { line in
        line.map { OutRow(t: $0.t, conf: $0.conf, x: ($0.x * 1000).rounded() / 1000, y: ($0.y * 1000).rounded() / 1000) }
    }
    pagesOut.append(OutPage(index: idx, regions: [OutRegion(name: "full", lines: lines)]))
}

if jsonMode {
    let encoder = JSONEncoder()
    encoder.outputFormatting = [.prettyPrinted, .withoutEscapingSlashes]
    FileHandle.standardOutput.write(try encoder.encode(OutDoc(pdf: pdfPath, pageCount: doc.pageCount, pages: pagesOut)))
} else {
    for page in pagesOut {
        for region in page.regions {
            print("===== index \(page.index) =====")
            for line in region.lines {
                let text = lineText(line.map { Row(t: $0.t, x: $0.x, y: $0.y, w: 0, h: 1, conf: $0.conf) })
                print(String(format: "%.2f  %@", line[0].x, text))
            }
        }
    }
}
