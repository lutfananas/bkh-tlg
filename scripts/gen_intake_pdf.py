#!/usr/bin/env python3
"""
Generator Formulir Pengajuan Bantuan Hukum — BKH Kartini Trenggalek
Output: /home/z/my-project/public/uploads/formulir-intake-bkh.pdf

Halaman 1 = Formulir resmi (Data Pemohon + Data Kasus + Pernyataan)
Halaman 2 = Lembar lampiran petugas + catatan internal + footer kontak
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor, black, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer,
    Table, TableStyle, Image, KeepTogether,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# ============================================================================
# Paths & constants
# ============================================================================
ROOT = "/home/z/my-project"
LOGO_PATH = os.path.join(ROOT, "public/uploads/logo-bkh.png")
OUTPUT_PDF = os.path.join(ROOT, "public/uploads/formulir-intake-bkh.pdf")

# Theme — match website red-white justice palette
JUSTICE_RED = HexColor("#B71C1C")
DEEP_RED = HexColor("#7F1D1D")
MAROON = HexColor("#4A0E0E")
GOLD = HexColor("#B8860B")
CHARCOAL = HexColor("#1F2937")
LIGHT_GREY = HexColor("#F3F4F6")
MID_GREY = HexColor("#9CA3AF")
RULE_GREY = HexColor("#D1D5DB")

# ============================================================================
# Font registration — DejaVu Sans for unicode glyph support (☐, ●, etc.)
# ============================================================================
def register_fonts():
    try:
        pdfmetrics.registerFont(
            TTFont("DejaVu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
        )
        pdfmetrics.registerFont(
            TTFont("DejaVu-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        ))
        return "DejaVu", "DejaVu-Bold"
    except Exception as e:
        print(f"[warn] DejaVu not registered: {e}; falling back to Helvetica")
        return "Helvetica", "Helvetica-Bold"

BODY_FONT, BOLD_FONT = register_fonts()

# ============================================================================
# Page templates
# ============================================================================
PAGE_W, PAGE_H = A4
MARGIN_L = 1.6 * cm
MARGIN_R = 1.6 * cm
MARGIN_T = 1.4 * cm
MARGIN_B = 1.4 * cm

def draw_page_chrome(canv: canvas.Canvas, doc):
    """Background, header band, footer, page number — applied to every page."""
    canv.saveState()

    # === Top header band (thin red strip with org name) ===
    band_h = 0.55 * cm
    canv.setFillColor(JUSTICE_RED)
    canv.rect(0, PAGE_H - band_h, PAGE_W, band_h, stroke=0, fill=1)

    canv.setFillColor(white)
    canv.setFont(BOLD_FONT, 8)
    canv.drawString(MARGIN_L, PAGE_H - band_h + 0.16 * cm,
                    "BKH KARTINI TRENGGALEK — FORMULIR PENGAJUAN BANTUAN HUKUM")
    canv.drawRightString(PAGE_W - MARGIN_R, PAGE_H - band_h + 0.16 * cm,
                         "Resmi · Gratis · Tidak Dipungut Biaya")

    # Gold accent line just below band
    canv.setStrokeColor(GOLD)
    canv.setLineWidth(1.4)
    canv.line(0, PAGE_H - band_h - 2, PAGE_W, PAGE_H - band_h - 2)

    # === Footer: contact + page number (2 baris agar tidak overlap) ===
    foot_y = MARGIN_B - 0.6 * cm
    # Garis pemisah digeser sedikit ke atas agar muat 2 baris
    canv.setStrokeColor(RULE_GREY)
    canv.setLineWidth(0.4)
    canv.line(MARGIN_L, foot_y + 0.55 * cm, PAGE_W - MARGIN_R, foot_y + 0.55 * cm)

    # Baris 1: alamat posbakum (bold 6.5pt)
    canv.setFillColor(CHARCOAL)
    canv.setFont(BOLD_FONT, 6.5)
    canv.drawString(MARGIN_L, foot_y + 0.18 * cm,
                    "Posbakum BKH Kartini  \u00b7  Lantai 1 Gedung PN Trenggalek  \u00b7  Jl. Diponegoro No. 11, Sudimoro, Trenggalek")
    # Halaman tetap di kanan, sejajar dengan baris 1
    canv.setFont(BODY_FONT, 6.5)
    canv.drawRightString(PAGE_W - MARGIN_R, foot_y + 0.18 * cm, f"Halaman {doc.page}")

    # Baris 2: WA + email (body 6pt)
    canv.setFont(BODY_FONT, 6)
    canv.drawString(MARGIN_L, foot_y - 0.12 * cm,
                    "Bantuan Hukum Gratis  \u00b7  WA 081331922614  \u00b7  posbakum@bkhkartini.or.id")

    # Bottom red+white justice bar
    bar_h = 0.35 * cm
    half_w = PAGE_W / 2
    canv.setFillColor(JUSTICE_RED)
    canv.rect(0, 0, half_w, bar_h, stroke=0, fill=1)
    canv.setFillColor(white)
    canv.rect(half_w, 0, half_w, bar_h, stroke=0, fill=1)
    canv.restoreState()


def draw_form_line(canv, x, y, width, color=CHARCOAL, lw=0.7, dashed=False):
    """Helper to draw an underline-style field line."""
    canv.saveState()
    canv.setStrokeColor(color)
    canv.setLineWidth(lw)
    if dashed:
        canv.setDash(1, 2)
    canv.line(x, y, x + width, y)
    canv.restoreState()


# ============================================================================
# Styles
# ============================================================================
def style(name, **kw):
    base = dict(
        name=name,
        fontName=BODY_FONT,
        fontSize=9,
        leading=12,
        textColor=CHARCOAL,
    )
    base.update(kw)
    return ParagraphStyle(**base)

S_TITLE = style("title", fontName=BOLD_FONT, fontSize=15, leading=18,
                alignment=TA_CENTER, textColor=DEEP_RED, spaceAfter=2)
S_SUBTITLE = style("subtitle", fontName=BODY_FONT, fontSize=8.5, leading=11,
                   alignment=TA_CENTER, textColor=CHARCOAL, spaceAfter=2)
S_SECTION = style("section", fontName=BOLD_FONT, fontSize=10, leading=13,
                  textColor=white, alignment=TA_LEFT, leftIndent=4)
S_SECTION_S = style("section_s", fontName=BODY_FONT, fontSize=7.5,
                    textColor=MID_GREY, alignment=TA_LEFT, leftIndent=4)
S_FIELD_LABEL = style("label", fontName=BOLD_FONT, fontSize=8, leading=10,
                      textColor=CHARCOAL)
S_FIELD_HINT = style("hint", fontName=BODY_FONT, fontSize=6.5, leading=8,
                     textColor=MID_GREY)
S_NOTE = style("note", fontName=BODY_FONT, fontSize=7.5, leading=10,
               textColor=CHARCOAL, alignment=TA_JUSTIFY)
S_NOTE_BOLD = style("note_bold", fontName=BOLD_FONT, fontSize=7.5, leading=10,
                    textColor=DEEP_RED, alignment=TA_JUSTIFY)
S_SIG_LABEL = style("sig", fontName=BOLD_FONT, fontSize=8, leading=10,
                    alignment=TA_CENTER, textColor=CHARCOAL)
S_SIG_SUB = style("sig_sub", fontName=BODY_FONT, fontSize=7, leading=9,
                  alignment=TA_CENTER, textColor=MID_GREY)
S_SMALL_CENTER = style("small_c", fontName=BODY_FONT, fontSize=7.5, leading=10,
                       alignment=TA_CENTER, textColor=CHARCOAL)

# ============================================================================
# Helper: section header bar
# ============================================================================
def section_bar(letter, title, subtitle=None):
    """A red section header bar like 'A. DATA PEMOHON'."""
    txt = f"{letter}.  {title}"
    sub = subtitle or ""
    cell = [[Paragraph(txt, S_SECTION)]]
    if sub:
        cell[0].append(Paragraph(sub, S_SECTION_S))
    t = Table(cell, colWidths=[None])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), JUSTICE_RED),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return t


# ============================================================================
# Helper: checkbox cell (☐) using DejaVu glyph
# ============================================================================
CHK = "\u2610"  # ballot box — supported by DejaVu Sans

def chk_row(options, col_widths=None):
    """Row of [checkbox] label, evenly distributed."""
    cells = []
    for opt in options:
        cells.append(Paragraph(f"<font name='{BODY_FONT}' size='11'>{CHK}</font>  {opt}",
                               ParagraphStyle(
                                   name="chk",
                                   fontName=BODY_FONT, fontSize=8.5,
                                   leading=11, textColor=CHARCOAL,
                               )))
    n = len(options)
    if col_widths is None:
        col_widths = [None] * n
    t = Table([cells], colWidths=col_widths)
    t.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return t


# ============================================================================
# Helper: field row — label on left, fillable line on right
# ============================================================================
def field_row(label, line_width_pct=60, hint=None):
    """A label followed by a horizontal fillable line that auto-expands."""
    content_w = PAGE_W - MARGIN_L - MARGIN_R

    # Use a table: [label | line-cell]
    label_p = Paragraph(f"<b>{label}</b>", S_FIELD_LABEL)
    # Empty cell — background white, bottom-border = the fill line
    line_cell = ""
    hint_p = Paragraph(hint, S_FIELD_HINT) if hint else ""

    if hint:
        rows = [[label_p, ""],
                ["", hint_p]]
        col_widths = [content_w * 0.30, content_w * 0.70]
        t = Table(rows, colWidths=col_widths)
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 4),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            # Bottom border on the right cell, row 0 = fill line
            ("LINEBELOW", (1, 0), (1, 0), 0.7, CHARCOAL),
        ]))
    else:
        rows = [[label_p, line_cell]]
        col_widths = [content_w * 0.30, content_w * 0.70]
        t = Table(rows, colWidths=col_widths)
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 4),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ("LINEBELOW", (1, 0), (1, 0), 0.7, CHARCOAL),
        ]))
    return t


# ============================================================================
# Helper: large fillable box (for kronologi / notes)
# ============================================================================
def fill_box(label, height_cm=2.2, hint=None):
    content_w = PAGE_W - MARGIN_L - MARGIN_R
    label_p = Paragraph(f"<b>{label}</b>", S_FIELD_LABEL)
    if hint:
        label_p = Paragraph(f"<b>{label}</b>  <font name='{BODY_FONT}' size='6.5' color='#9CA3AF'>— {hint}</font>",
                             S_FIELD_LABEL)

    # Empty cell with border = the fill area
    box = Table([[""]], colWidths=[content_w], rowHeights=[height_cm * cm])
    box.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.7, CHARCOAL),
        ("BACKGROUND", (0, 0), (-1, -1), white),
    ]))
    rows = [[label_p], [box]]
    t = Table(rows, colWidths=[content_w])
    t.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


# ============================================================================
# Build story
# ============================================================================
def build_story():
    story = []

    # === Page 1 — Header + Section A + B + C ===

    # Logo (centered, ~2.5cm tall)
    if os.path.exists(LOGO_PATH):
        logo = Image(LOGO_PATH)
        # Preserve aspect — 4710x4370 ≈ 1.0775 ratio
        target_h = 2.4 * cm
        target_w = target_h * (4710 / 4370)
        logo.drawWidth = target_w
        logo.drawHeight = target_h
        logo.hAlign = "CENTER"
        story.append(logo)
        story.append(Spacer(1, 0.15 * cm))

    # Org name block
    story.append(Paragraph("BIRO KONSULTASI DAN BANTUAN HUKUM KARTINI", S_TITLE))
    story.append(Paragraph("TRENGGALEK", S_SUBTITLE))
    story.append(Paragraph(
        "Bantuan Hukum Gratis untuk Warga Kurang Mampu · Perempuan · Anak",
        S_SUBTITLE))
    story.append(Spacer(1, 0.2 * cm))

    # Decorative red+gold justice rule under header
    rule_tbl = Table([[""]], colWidths=[PAGE_W - MARGIN_L - MARGIN_R],
                     rowHeights=[0.12 * cm])
    rule_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), JUSTICE_RED),
        ("LINEBELOW", (0, 0), (-1, -1), 0.8, GOLD),
    ]))
    story.append(rule_tbl)
    story.append(Spacer(1, 0.3 * cm))

    # Form title block
    story.append(Paragraph(
        "<b>FORMULIR PENGAJUAN<br/>BANTUAN HUKUM</b>",
        ParagraphStyle(name="form_title", fontName=BOLD_FONT, fontSize=14,
                       leading=17, alignment=TA_CENTER, textColor=DEEP_RED)
    ))
    story.append(Spacer(1, 0.1 * cm))
    story.append(Paragraph(
        "Nomor Registrasi: BH-________ / ____ / ____   ·   Tanggal: ____ / ____ / 20____",
        S_SMALL_CENTER))
    story.append(Spacer(1, 0.35 * cm))

    # === Section A: Data Pemohon ===
    story.append(section_bar("A", "DATA PEMOHON (Identitas Pemohon)"))
    story.append(Spacer(1, 0.18 * cm))

    # 2-column field grid
    content_w = PAGE_W - MARGIN_L - MARGIN_R
    half_w = content_w / 2

    def field_grid(rows):
        """rows = list of [label1, label2] pairs; each becomes a fillable field."""
        table_rows = []
        for r in rows:
            cells = []
            for label in r:
                if label is None:
                    cells.append("")
                else:
                    cells.append(Paragraph(f"<b>{label}</b>", S_FIELD_LABEL))
                cells.append("")
            table_rows.append(cells)
        # Two pairs of [label | blank] per row
        col_widths = [half_w * 0.35, half_w * 0.65, half_w * 0.35, half_w * 0.65]
        t = Table(table_rows, colWidths=col_widths)
        style_cmds = [
            ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 4),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            # Lines under the "blank" columns (indices 1 and 3)
            ("LINEBELOW", (1, 0), (1, -1), 0.7, CHARCOAL),
            ("LINEBELOW", (3, 0), (3, -1), 0.7, CHARCOAL),
        ]
        t.setStyle(TableStyle(style_cmds))
        return t

    story.append(field_grid([
        ["Nama Lengkap", "NIK (No. KTP)"],
        ["Tempat Lahir", "Tanggal Lahir"],
        ["Jenis Kelamin", "Agama"],
        ["Pekerjaan", "Pendidikan Terakhir"],
        ["Status Perkawinan", "Jumlah Tanggungan"],
    ]))
    story.append(Spacer(1, 0.15 * cm))

    # Alamat (full width)
    addr_table = Table(
        [[Paragraph("<b>Alamat Domisili</b>", S_FIELD_LABEL), ""]],
        colWidths=[content_w * 0.22, content_w * 0.78]
    )
    addr_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LINEBELOW", (1, 0), (1, 0), 0.7, CHARCOAL),
    ]))
    story.append(addr_table)
    story.append(Paragraph(
        "<font size='6.5' color='#9CA3AF'>RT / RW, Dusun, Desa, Kecamatan, Kabupaten, Kode Pos</font>",
        S_FIELD_HINT))
    story.append(Spacer(1, 0.15 * cm))

    story.append(field_grid([
        ["No. WhatsApp / HP", "Email (opsional)"],
        ["Pemilik rumah tinggal", "Jumlah anggota keluarga"],
    ]))
    story.append(Spacer(1, 0.35 * cm))

    # === Section B: Data Kasus ===
    story.append(section_bar("B", "DATA KASUS (Ringkasan Perkara)"))
    story.append(Spacer(1, 0.2 * cm))

    # Kategori — checkboxes
    story.append(Paragraph("<b>Kategori Kasus</b> <font size='6.5' color='#9CA3AF'>(pilih salah satu)</font>",
                            S_FIELD_LABEL))
    story.append(Spacer(1, 0.1 * cm))
    story.append(chk_row(["Pidana", "Perdata", "KDRT", "Pertanahan"],
                          col_widths=[content_w/4]*4))
    story.append(chk_row(["Perlindungan Anak", "Buruh / Upah", "Pinjol Ilegal", "Lainnya"],
                          col_widths=[content_w/4]*4))
    story.append(Spacer(1, 0.2 * cm))

    # Tanggal & lokasi kejadian
    story.append(field_grid([
        ["Tanggal Kejadian", "Waktu (estimasi)"],
        ["Lokasi Kejadian", "Kecamatan"],
    ]))
    story.append(Spacer(1, 0.25 * cm))

    # Pihak terlibat
    story.append(fill_box("Pihak-pihak yang terlibat (nama, peran, hubungan)",
                           height_cm=1.6))
    story.append(Spacer(1, 0.2 * cm))

    # Kronologi
    story.append(fill_box("Kronologi singkat kejadian",
                           height_cm=3.5,
                           hint="tulis urutan peristiwa sejelas-jelasnya"))
    story.append(Spacer(1, 0.2 * cm))

    # Upaya yang sudah dilakukan
    story.append(fill_box("Upaya hukum / penyelesaian yang sudah dilakukan",
                           height_cm=1.6,
                           hint="pelaporan polisi, mediasi RT/RW, somasi, dll"))
    story.append(Spacer(1, 0.2 * cm))

    # Dokumen pendukung
    story.append(Paragraph(
        "<b>Dokumen Pendukung yang Disertakan</b> <font size='6.5' color='#9CA3AF'>(centang yang dilampirkan)</font>",
        S_FIELD_LABEL))
    story.append(Spacer(1, 0.1 * cm))
    story.append(chk_row(["KTP", "KK", "SKTM", "Akta Nikah"],
                          col_widths=[content_w/4]*4))
    story.append(chk_row(["Surat Panggilan", "Visum", "Bukti Foto", "Lainnya"],
                          col_widths=[content_w/4]*4))
    story.append(Spacer(1, 0.35 * cm))

    # === Section C: Pernyataan ===
    story.append(section_bar("C", "PERNYATAAN DAN TANDA TANGAN"))
    story.append(Spacer(1, 0.2 * cm))

    statement_text = (
        "Saya yang bertanda tangan di bawah ini, setelah memahami dan mengisi formulir ini "
        "dengan sebenar-benarnya, menyatakan <b>setiap keterangan yang saya berikan adalah benar</b> "
        "dan dapat dipertanggungjawabkan secara hukum. Apabila di kemudian hari terbukti pernyataan "
        "ini tidak benar, saya siap menanggung akibat hukum yang berlaku. Saya juga mengizinkan "
        "BKH Kartini melakukan verifikasi lapangan atas data yang saya berikan."
    )
    story.append(Paragraph(statement_text, S_NOTE))
    story.append(Spacer(1, 0.25 * cm))

    # Two-column signature blocks
    sig_label = Paragraph("Tanda Tangan Pemohon", S_SIG_LABEL)
    sig_sub = Paragraph("Nama jelas & cap jari / cap tangan", S_SIG_SUB)
    sig_label2 = Paragraph("Penerima Formulir (Petugas BKH)", S_SIG_LABEL)
    sig_sub2 = Paragraph("Nama advokad penerima & cap lembaga", S_SIG_SUB)

    sig_box = Table(
        [[sig_label, sig_label2],
         ["", ""],
         ["", ""],
         ["", ""],
         [sig_sub, sig_sub2]],
        colWidths=[content_w * 0.50, content_w * 0.50],
        rowHeights=[None, 1.6 * cm, 0.3 * cm, 0.2 * cm, None]
    )
    sig_box.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        # Left column: no left pad, big right pad (= gap between columns)
        ("LEFTPADDING", (0, 0), (0, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, -1), 24),
        # Right column: big left pad (= gap), no right pad
        ("LEFTPADDING", (1, 0), (1, -1), 24),
        ("RIGHTPADDING", (1, 0), (1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(sig_box)

    # === Page break to page 2 ===
    from reportlab.platypus import PageBreak
    story.append(PageBreak())

    # === Page 2 — Petugas internal: lampiran & catatan ===
    story.append(Spacer(1, 0.3 * cm))
    story.append(Paragraph(
        "<b>LAMPIRAN PETUGAS — INTERNAL BKH KARTINI</b>",
        ParagraphStyle(name="h_internal", fontName=BOLD_FONT, fontSize=11,
                       leading=14, alignment=TA_CENTER, textColor=DEEP_RED)
    ))
    story.append(Paragraph(
        "Hanya diisi oleh advokad penerima / kurator kasus. Tidak untuk pemohon.",
        S_SMALL_CENTER))
    story.append(Spacer(1, 0.35 * cm))

    story.append(section_bar("D", "VERIFIKASI AWAL PETUGAS"))
    story.append(Spacer(1, 0.2 * cm))
    story.append(field_grid([
        ["Tanggal Penerimaan", "No. Registrasi"],
        ["Advokad Penerima", "Verifikator Lapangan"],
    ]))
    story.append(Spacer(1, 0.25 * cm))

    # Verifikasi checklists
    story.append(Paragraph("<b>Hasil Verifikasi Lapangan</b> (cek status ekonomi & kasus)",
                            S_FIELD_LABEL))
    story.append(Spacer(1, 0.1 * cm))
    story.append(chk_row(["SKTM sah", "KK cocok", "KTP sah", "Domisili terverifikasi"],
                          col_widths=[content_w/4]*4))
    story.append(chk_row(["Kasus layak", "Perlu advokad senior", "Diprioritaskan", "Ditolak (sebab)"],
                          col_widths=[content_w/4]*4))
    story.append(Spacer(1, 0.25 * cm))

    # Rincian kasus petugas
    story.append(fill_box("Catatan hukum petugas (jenis perkara, pasal terkait, strategi awal)",
                           height_cm=3.0))
    story.append(Spacer(1, 0.2 * cm))

    # Tahapan pendampingan
    story.append(Paragraph(
        "<b>Rencana Tahapan Pendampingan</b> <font size='6.5' color='#9CA3AF'>(centang yang akan ditempuh)</font>",
        S_FIELD_LABEL))
    story.append(Spacer(1, 0.1 * cm))
    story.append(chk_row(["Konsultasi awal", "Penyusunan jawaban", "Sidang P-21", "Mediasi"],
                          col_widths=[content_w/4]*4))
    story.append(chk_row(["Banding", "Kasasi", "Restorative Justice", "Itsbat Nikah"],
                          col_widths=[content_w/4]*4))
    story.append(Spacer(1, 0.3 * cm))

    # Estimasi timeline
    story.append(field_grid([
        ["Estimasi Durasi", "Estimasi Sidang Awal"],
        ["Catatan khusus", "Pendamping Lapang"],
    ]))
    story.append(Spacer(1, 0.4 * cm))

    # Approval signatures
    story.append(section_bar("E", "PERSETUJUAN KETUA POSBAKUM"))
    story.append(Spacer(1, 0.25 * cm))

    appr_text = (
        "Setelah mempelajari berkas pemohon, saya menyetujui kasus ini untuk ditangani "
        "secara <b>gratuitas (bantuan hukum gratis penuh)</b> sesuai dengan kriteria BKH Kartini. "
        "Biaya pendaftaran, materai, dan transport tim akan ditanggung oleh posbakum."
    )
    story.append(Paragraph(appr_text, S_NOTE))
    story.append(Spacer(1, 0.4 * cm))

    appr_sig = Table(
        [
            [Paragraph("Disetujui oleh, Ketua Posbakum", S_SIG_LABEL),
             Paragraph("Mengetahui, Pembina BKH Kartini", S_SIG_LABEL)],
            ["", ""],
            [Paragraph("( ___________________________ )", S_SIG_SUB),
             Paragraph("( ___________________________ )", S_SIG_SUB)],
            [Paragraph("Nama & cap lembaga", S_SIG_SUB),
             Paragraph("Nama & cap lembaga", S_SIG_SUB)],
        ],
        colWidths=[content_w * 0.50, content_w * 0.50],
        rowHeights=[None, 1.8 * cm, None, None]
    )
    appr_sig.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        # Left column: no left pad, big right pad (= gap between columns)
        ("LEFTPADDING", (0, 0), (0, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, -1), 24),
        # Right column: big left pad (= gap), no right pad
        ("LEFTPADDING", (1, 0), (1, -1), 24),
        ("RIGHTPADDING", (1, 0), (1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(appr_sig)

    return story


# ============================================================================
# Main
# ============================================================================
def main():
    os.makedirs(os.path.dirname(OUTPUT_PDF), exist_ok=True)

    doc = BaseDocTemplate(
        OUTPUT_PDF,
        pagesize=A4,
        leftMargin=MARGIN_L, rightMargin=MARGIN_R,
        topMargin=MARGIN_T, bottomMargin=MARGIN_B,
        title="Formulir Pengajuan Bantuan Hukum — BKH Kartini Trenggalek",
        author="BKH Kartini Trenggalek",
        subject="Formulir resmi intake Bantuan Hukum",
        creator="BKH Kartini Trenggalek",
    )

    frame = Frame(
        MARGIN_L, MARGIN_B,
        PAGE_W - MARGIN_L - MARGIN_R,
        PAGE_H - MARGIN_T - MARGIN_B,
        id="main", showBoundary=0,
        leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0,
    )
    doc.addPageTemplates([
        PageTemplate(id="all", frames=[frame], onPage=draw_page_chrome),
    ])

    story = build_story()
    doc.build(story)

    size = os.path.getsize(OUTPUT_PDF)
    print(f"OK  {OUTPUT_PDF}")
    print(f"    size: {size/1024:.1f} KB")


if __name__ == "__main__":
    main()
