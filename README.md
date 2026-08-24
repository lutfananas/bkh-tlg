# BKH Kartini Trenggalek — Website Profil

Website single-page untuk **BKH Kartini** (Biro Konsultasi dan Bantuan Hukum
Kartini) Trenggalek — NGO yang menyediakan bantuan hukum gratis (pro bono)
bagi fakir miskin, perempuan, dan anak. Posbakum berlokasi di Lantai 1 Gedung
Pengadilan Negeri Trenggalek, Jl. Diponegoro No. 11, Sudimoro, Trenggalek.

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
git commit -m "feat: initial BKH Kartini Trenggalek website"
git branch -M main
git remote add origin https://github.com/USERNAME/bkh-kartini-trenggalek.git
git push -u origin main
```

### Langkah 2 — Setup Cloudflare Pages

**Opsi A — Auto-deploy via Cloudflare Pages dashboard (paling gampang):**

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
7. Anda akan dapat subdomain `https://bkhkartini.pages.dev`
8. (Opsional) Tambahkan custom domain `bkhkartini.or.id` via **Custom domains** tab

**Opsi B — Auto-deploy via GitHub Actions (CI/CD otomatis):**

Workflow `.github/workflows/deploy-cloudflare-pages.yml` sudah disiapkan.
Setiap push ke `main` akan memicu build + deploy otomatis.

1. Buat Cloudflare API token di https://dash.cloudflare.com/profile/api-tokens
   (gunakan template "Edit Cloudflare Workers" atau buat custom token dengan
   permission `Cloudflare Pages: Edit`).
2. Catat Account ID Anda (ada di dashboard Cloudflare kanan atas).
3. Di GitHub repo → **Settings** → **Secrets and variables** → **Actions** →
   **New repository secret**, tambahkan:
   - `CLOUDFLARE_API_TOKEN` = token langkah 1
   - `CLOUDFLARE_ACCOUNT_ID` = account ID langkah 2
4. Push commit ke `main`. GitHub Actions akan otomatis build + deploy ke
   project Cloudflare Pages `bkhkartini`. Project akan dibuat
   otomatis oleh wrangler bila belum ada.

**Opsi C — Deploy manual dari lokal:**

```bash
# Set env dulu, atau letakkan di .env
export CLOUDFLARE_API_TOKEN=xxx
bun run cf:deploy   # build + deploy sekaligus
```

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

© BKH Kartini Trenggalek. Kode sumber bebas digunakan untuk keperluan
non-komersial oleh lembaga bantuan hukum lain di Indonesia.
