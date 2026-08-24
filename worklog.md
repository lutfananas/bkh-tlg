# Worklog — BKBH Kartini Tulungagung Website

---
Task ID: 1
Agent: Super Z (main)
Task: Initial build — single-page profile website for "BKBH Kartini Tulungagung" (NGO providing free legal aid for poor, women, and children) — Indonesian language, highly interactive, ready for GitHub + Cloudflare Pages deployment.

Work Log:
- Initialized Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui project.
- Designed visual theme in `src/app/globals.css`: Emerald Green primary, Deep Charcoal secondary, Amber Gold accent. Added custom keyframe animations.
- Set up `src/app/layout.tsx` with Inter + Playfair Display fonts, SEO metadata in Indonesian.
- Created `src/components/bkbh/data.ts` with all content centralized.
- Built 10 components in `src/components/bkbh/` covering all 9 required sections.
- Added `next.config.ts` supporting both standalone & export (Cloudflare Pages static export).
- Added `build:cf` npm script for `NEXT_PUBLIC_STATIC_EXPORT=true next build`.
- Verified via Agent Browser: title correct in Indonesian, no runtime errors, all 9 sections render, mobile menu drawer works, gallery lightbox opens, intake form validation works, mobile viewport tested (390×844).

Stage Summary: ✅ Initial website complete with all 9 sections, all 10 testimonials, lint passing (0 errors), runtime clean.

---
Task ID: 2
Agent: Super Z (main)
Task: Redesign dengan tema Merah-Putih keadilan, integrasi logo BKH asli, pakai foto-foto kegiatan aktual BKH, dan jadikan Ibu Uyin Wulandari sebagai testimoni utama dengan foto asli.

Work Log:
- Extracted `gambar gambar BKH.zip` → 11 foto kegiatan BKH disalin ke `public/uploads/bkh-01.jpeg` sampai `bkh-11.jpeg`.
- Salin `BKH KARTINI REPAINT LOGO.png` → `public/uploads/logo-bkh.png` (4710×4370 PNG).
- Salin foto testimoni → `public/uploads/testimoni-uyin.jpeg` (1248×1289 JPEG).
- Ganti tema di `src/app/globals.css` dari Emerald Green → Deep Crimson Red + White + Warm Gold accent:
  - Primary: oklch(0.42 0.18 18) — deep crimson justice red
  - Secondary: oklch(0.20 0.05 15) — maroon charcoal
  - Accent: oklch(0.78 0.13 80) — warm gold
  - Tambah utility class `.justice-bar` (garis merah-Putih dekoratif)
  - Custom scrollbar dengan warna keadilan merah
  - Update focus ring shadow jadi `rgba(185, 28, 28, 0.15)`
- Update `data.ts`:
  - HERO_SLIDES: ganti semua URL Unsplash → 4 foto lokal BKH (`/uploads/bkh-08`, `bkh-03`, `bkh-07`, `bkh-11`)
  - GALLERY: ganti semua 6 URL Unsplash → 11 foto lokal BKH dengan deskripsi konten aktual (Posko Hukum Keliling, Pendampingan Warga, Konsultasi Massal, Tim & Warga Binaan, Sosialisasi Anti Pinjol, dll.)
  - TESTIMONIALS: tambah Ibu Uyin Wulandari sebagai item #1 dengan foto asli (`photo: "/uploads/testimoni-uyin.jpeg"`, `isFeatured: true`, quote otentik tentang bantuan hukum gratis yang dia terima di Kec. Watulimo)
  - Tambah export `FEATURED_TESTIMONIAL` untuk dipakai di section featured
  - Tambah export `LOGO_SRC` (`/uploads/logo-bkh.png`) — dipakai di Navbar, Hero badge, Footer
  - Ejaan "BKBH Kartini" → "BKH Kartini" (sesuai ejaan file logo klien)
- Update `Navbar.tsx`: ganti ikon Scale → `<img src={LOGO_SRC}>` di container bulat dengan ring emas/putih.
- Update `Hero.tsx`: badge di hero sekarang pakai mini logo + teks "Pro Bono · Untuk Fakir Miskin, Perempuan & Anak" dengan warna gold.
- Update `Footer.tsx`: ganti ikon Scale → `<img src={LOGO_SRC}>` di container bulat putih.
- Update `Testimonials.tsx`: tambah `FeaturedTestimonial` component (kartu besar 2-kolom dengan foto asli Ibu Uyin di kiri, quote panjang + nama + lokasi di kanan, badge "Testimoni Utama", rating 5-bintang). Marquee carousel di bawahnya juga sudah updated untuk render foto asli kalau ada (Uyin muncul 3x karena LOOP_LIST = 2x testimonials).
- Batch replace `amber-gold` → `gold-accent` di seluruh komponen (64 referensi) karena tema baru pakai nama color token baru.
- Batch replace `emerald-*` → `red-*` di seluruh komponen (shadows, hover bg, gradient stops, text colors).
- Lint: 0 errors, 8 warnings (cosmetic unused eslint-disable directives).
- Agent Browser verifikasi:
  - Page title benar: "BKH Kartini Tulungagung — Bantuan Hukum Gratis..."
  - No errors, console bersih
  - 3 instances logo BKH load (Navbar + Hero badge + Footer)
  - 18 total `/uploads/` images loaded (3 logo + 4 hero + 11 gallery + 3 foto Uyin di marquee)
  - Featured testimonial section render dengan benar: foto asli Ibu Uyin Wulandari, quote panjang, "Ibu Uyin Wulandari" name, "Ds. Ngembel, Kec. Watulimo" location, dan badge "Testimoni Utama"
  - Screenshot saved di `scripts/red-hero.png`, `scripts/red-services.png`, `scripts/red-testimoni-featured.png`

Stage Summary:
- ✅ Tema merah-putih keadilan diterapkan menyeluruh
- ✅ Logo BKH asli dipakai di Navbar, Hero badge, dan Footer
- ✅ 11 foto kegiatan BKH tampil di hero slider (4 foto) + gallery masonry (11 foto)
- ✅ Ibu Uyin Wulandari (Ds. Ngembel, Kec. Watulimo) jadi testimoni utama dengan foto asli di kartu besar prominent di atas marquee
- ✅ Marquee carousel tetap jalan infinite dengan pause-on-hover
- ✅ Lint passing (0 errors), runtime clean, lint hanya 8 cosmetic warnings
- 📂 File final siap push ke GitHub

---
Task ID: 3
Agent: Super Z (main)
Task: Revisi konten sesuai berita pers Pemkab Trenggalek (Perda No. 5/2015). Brand BKH Kartini dialihkan dari "Tulungagung" menjadi "Trenggalek" menyeluruh, Ibu Uyin Wulandari dipastikan sebagai klien Trenggalek, dan susunan halaman diubah jadi: Berita → Testimoni → Pendaftaran di bagian atas.

Work Log:
- Update `src/components/bkbh/data.ts`:
  - Header comment: "BKH Kartini Tulungagung" → "BKH Kartini Trenggalek".
  - `STATS[1].description`: daftar kecamatan Trenggalek (Panggul, Watulimo, Tugu, Campurdarat, Pogalan, Durenan) menggantikan kecamatan Tulungagung.
  - `FEATURED_TESTIMONIAL` (Uyin Wulandari): role & location ditulis eksplisit sebagai "Warga Pesisir Trenggalek" dan "Ds. Ngembel, Kec. Watulimo, Trenggalek".
  - `TESTIMONIALS` array: AM (Pak AM dari Wonocoyo, Panggul, Trenggalek) dipindah ke posisi #1 — kartu paling atas di carousel — sesuai instruksi "berita ini menjadi paling atas". Uyin Wulandari turun ke posisi #2 sebagai kartu foto asli. Semua label lokasi (`Boyolangu`, `Kauman`, `Ngunut`, `Trenggalek Kota`, `Sumbergempol`, `Rejotangan`, `Karangrejo`, `Kedungwaru`, `Pakel`, `Gondang`) dipasangkan suffix `Trenggalek` menggantikan `Tulungagung`.
  - `GALLERY[0/4/7].description`: "Tulungagung" → "Trenggalek" (3 deskripsi).
  - `ADDRESS_LINES`: alamat kantor diganti dari "Jl. Raya Kartini No. 14, Kelurahan Tamanan, Kecamatan Tulungagung, Kabupaten Tulungagung, 66211" → "Jl. R.A. Kartini No. 14, Kelurahan Sudimoro, Kecamatan Trenggalek, Kabupaten Trenggalek, 66312".
  - `CONTACTS.email`: `posbakum@bkh-kartini-ta.or.id` → `posbakum@bkhkartini.or.id` (suffix `-ta` Tulungagung dibuang).
  - `NAV_MENU` diurutkan ulang jadi: Beranda → Berita → Testimoni → Pendaftaran (#kontak) → Tentang Kami → Layanan → Syarat SKTM → Galeri (sesuai fokus: berita-testimoni-pendaftaran paling depan).
- Update `src/components/bkbh/Navbar.tsx`: alt logo + chip bawah nama brand "Tulungagung" → "Trenggalek".
- Update `src/components/bkbh/Hero.tsx`: headline reveal "Warga Kurang Mampu Tulungagung" → "Trenggalek"; subtitle "seluruh Kabupaten Tulungagung" → "seluruh Kabupaten Trenggalek".
- Update `src/components/bkbh/About.tsx`: 3 mention "Tulungagung" pada heading + narasi pendiri → "Trenggalek".
- Update `src/components/bkbh/Footer.tsx`: alt logo, chip, paragraf brand, signature footer → semua jadi "Trenggalek".
- Update `src/components/bkbh/Gallery.tsx`: caption "Kabupaten Tulungagung" → "Kabupaten Trenggalek".
- Update `src/components/bkbh/IntakeForm.tsx`: badge peta "Tulungagung, Jatim" → "Trenggalek, Jatim".
- Update `src/components/bkbh/Testimonials.tsx`: heading "Warga Tulungagung & Trenggalek" → "Warga Trenggalek".
- Update `src/app/page.tsx`: urutan section disusun ulang jadi Hero → Stats → PressNews → Testimonials → IntakeForm → About → Services → Eligibility → Gallery. Fokus halaman jadi jelas: berita → testimoni → pendaftaran paling atas.
- Verifikasi: `bun run build` sukses, 0 error TypeScript, 4 static pages ter-generate.

Stage Summary: ✅ Brand BKH Kartini sepenuhnya dialihkan ke Trenggalek (alamat kantor, semua mention, semua testimoni, NAV menu). AM dari Wonocoyo/Panggul jadi kartu paling atas di carousel testimoni. Urutan halaman: Berita → Testimoni → Pendaftaran naik ke atas (setelah Hero+Stats), About/Layanan/Syarat/Galeri turun ke bawah sebagai konteks pendukung. Build sukses tanpa error.

---
Task ID: 4
Agent: Super Z (main)
Task: Update formulir intake PDF + pindah alamat posbakum ke Pengadilan Negeri Trenggalek, sesuai instruksi "update formulirnya juga, dan alamatnya pengadilan trenggalek".

Work Log:
- Update `src/components/bkbh/data.ts` `ADDRESS_LINES`:
  - Baris 1 (sebelumnya "Posbakum BKH Kartini") → "Posbakum BKH Kartini — Lantai 1, Gedung Pengadilan Negeri Trenggalek"
  - Baris 2 → "Jl. Diponegoro No. 11, Kelurahan Sudimoro"
  - Baris 3-4 tetap Kec. Trenggalek, Kab. Trenggalek, 66312.
  - IntakeForm.tsx otomatis ikut (pakai `ADDRESS_LINES.map`).
- Update `scripts/gen_intake_pdf.py`:
  - Header docstring: "Tulungagung" → "Trenggalek".
  - Top header band: "BKH KARTINI TULUNGAGUNG — FORMULIR ..." → "BKH KARTINI TRENGGALEK — ...".
  - Footer address bar: "Jl. Raya Kartini No. 14, Tamanan, Tulungagung" → "Lantai 1 Gedung PN Trenggalek, Jl. Diponegoro No. 11, Sudimoro, Trenggalek".
  - Subtitle org name: "TULUNGAGUNG" → "TRENGGALEK".
  - PDF metadata (title/author/creator): "Tulungagung" → "Trenggalek".
- Regenerate PDF: `python scripts/gen_intake_pdf.py` → sukses, 1348.8 KB, output ke `/public/uploads/formulir-intake-bkh.pdf`.
- Update `src/app/layout.tsx` metadata SEO (10 referensi "Tulungagung" pada title, description, keywords, authors, openGraph, twitter) → "Trenggalek".
- Verifikasi: `rg "Tulungagung|Tulung" src/` → 0 hasil. `bun run build` → sukses, 0 error, 4 static pages.

Stage Summary: ✅ Formulir PDF & metadata SEO sepenuhnya dialihkan ke Trenggalek. Alamat posbakum kini resmi berlokasi di Lantai 1 Gedung Pengadilan Negeri Trenggalek, Jl. Diponegoro No. 11, Sudimoro, Trenggalek. PDF formulir sudah ter-generate ulang dan siap diunduh dari `/uploads/formulir-intake-bkh.pdf`.
