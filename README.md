# BKBH Kartini Tulungagung — Website Profil

Website single-page untuk **BKBH Kartini** (Biro Konsultasi dan Bantuan Hukum
Kartini) Tulungagung — NGO yang menyediakan bantuan hukum gratis (pro bono)
bagi fakir miskin, perempuan, dan anak.

Dibangun dengan **Next.js 16**, **Tailwind CSS 4**, **Framer Motion**, dan
**lucide-react**. Siap deploy ke **GitHub** + **Cloudflare Pages**.

## 🧱 Struktur

```
src/
├── app/
│   ├── layout.tsx           # Root layout + metadata SEO bahasa Indonesia
│   ├── page.tsx             # Assemble seluruh section
│   └── globals.css          # Tema Emerald Green + Amber Gold + animasi
├── components/
│   └── bkbh/
│       ├── Navbar.tsx           # Transparent → solid emerald on scroll
│       ├── Hero.tsx             # Slider background + text reveal word-by-word
│       ├── Stats.tsx            # Scroll-triggered counters
│       ├── About.tsx            # Tentang Kami
│       ├── Services.tsx         # 3D tilt cards
│       ├── Eligibility.tsx     # Syarat SKTM step-by-step
│       ├── Gallery.tsx          # Masonry + lightbox modal
│       ├── Testimonials.tsx    # Infinite marquee carousel (pause on hover)
│       ├── IntakeForm.tsx      # Form pengajuan kasus interaktif
│       ├── Footer.tsx
│       ├── FloatingWhatsApp.tsx
│       └── data.ts              # Semua konten Bahasa Indonesia terpusat
```

## 🚀 Cara Menjalankan Lokal

```bash
# Install dependency (pakai bun lebih cepat, atau npm/yarn)
bun install

# Jalankan dev server
bun run dev
# buka http://localhost:3000

# Lint check
bun run lint
```

## 📦 Build untuk Cloudflare Pages (Static Export)

```bash
# Build static export ke folder ./out/
bun run build:cf
# atau: NEXT_PUBLIC_STATIC_EXPORT=true next build

# Hasilnya ada di folder `out/` — siap upload ke Cloudflare Pages
```

## 🌐 Deploy ke GitHub + Cloudflare Pages

### Langkah 1 — Push ke GitHub

```bash
git init
git add .
git commit -m "feat: initial BKBH Kartini Tulungagung website"
git branch -M main
git remote add origin https://github.com/USERNAME/bkbh-kartini-ta.git
git push -u origin main
```

### Langkah 2 — Setup Cloudflare Pages

1. Login ke [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. Klik **Create a project** → **Connect to Git**
3. Pilih repository GitHub Anda
4. Konfigurasi build:

   | Field | Value |
   |-------|-------|
   | **Framework preset** | Next.js (Static HTML Export) |
   | **Build command** | `NEXT_PUBLIC_STATIC_EXPORT=true bun run build:cf` atau `NEXT_PUBLIC_STATIC_EXPORT=true npm run build:cf` |
   | **Build output directory** | `out` |
   | **Environment variables** | `NEXT_PUBLIC_STATIC_EXPORT=true` |
   | **Node version** | `20` (atau lebih baru) |

5. Klik **Save and Deploy**
6. Tunggu build selesai (sekitar 2-3 menit)
7. Anda akan dapat subdomain `https://bkbh-kartini-ta.pages.dev`
8. (Opsional) Tambahkan custom domain `bkbh-kartini-ta.or.id` via **Custom domains** tab

### Langkah 3 — Update Kontak & Gambar

Sebelum go-live, update data berikut di `src/components/bkbh/data.ts`:

- `WHATSAPP_NUMBER` — ganti dengan nomor resmi BKBH
- `ADDRESS_LINES` — alamat lengkap posko
- `CONTACTS.email` — email resmi
- `HERO_SLIDES` & `GALLERY` — ganti dengan foto asli kegiatan BKBH
  (simpan di `public/gallery/` lalu update path)
- `TESTIMONIALS` — tambahkan/ubah testimoni sesuai arsip kasus aktual
- `STATS` — perbarui jumlah kasus, desa, dll. tiap tahun

## 🎨 Sistem Desain

- **Primary**: Emerald Green (keadilan, hukum, pertumbuhan)
- **Secondary**: Deep Charcoal (readability, 60-30 rule)
- **Accent**: Amber Gold (CTA, highlight)
- **Body font**: Inter
- **Heading font**: Playfair Display

## ♿ Aksesibilitas & Performa

- Semantic HTML5 (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels pada semua tombol interaktif
- Keyboard navigation (Esc / ← / → di lightbox gallery)
- Mobile-first responsive design
- Smooth scroll, sticky footer
- Animasi performant via Framer Motion & CSS transforms

## 📝 Lisensi

© BKBH Kartini Tulungagung. Kode sumber bebas digunakan untuk keperluan
non-komersial oleh lembaga bantuan hukum lain di Indonesia.
