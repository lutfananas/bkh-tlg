import type { NextConfig } from "next";

// Untuk deploy ke Cloudflare Pages / GitHub Pages:
// 1. Set env NEXT_PUBLIC_STATIC_EXPORT=true saat build
// 2. Jalankan: bun run build:cf  (atau npm run build:cf)
// 3. Folder `out/` siap deploy ke Cloudflare Pages
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Standalone mode untuk deploy ke VPS / Docker (default)
  // Export mode untuk Cloudflare Pages / GitHub Pages static hosting
  output: isStaticExport ? "export" : "standalone",

  // Untuk static export, gambar Unsplash perlu di-allow di unoptimized mode
  images: isStaticExport
    ? {
        unoptimized: true,
      }
    : undefined,

  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
