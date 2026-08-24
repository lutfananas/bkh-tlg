"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, FileText, ChevronDown, Heart, Users, Scale } from "lucide-react";
import { HERO_SLIDES, WHATSAPP_LINK, LOGO_SRC } from "./data";

// Komponen teks dengan reveal kata-per-kata
function RevealWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="text-reveal-word"
          style={{
            animationDelay: `${0.3 + i * 0.07}s`,
            marginRight: "0.25em",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Rotasi slider tiap 5.5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          {HERO_SLIDES.map((slide, idx) =>
            idx === activeSlide ? (
              <motion.div
                key={slide.src}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover animate-slow-zoom"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Layer gelap untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/85 via-red-900/75 to-red-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.18),transparent_50%)]" />

        {/* Blobs ambient */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl animate-float-blob" />
        <div className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-red-400/15 rounded-full blur-3xl animate-float-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Konten */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/15 ring-1 ring-gold-accent/40 px-3 py-1.5 md:px-4 mb-6 backdrop-blur"
          >
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_SRC} alt="Logo BKH Kartini" className="w-full h-full object-contain" />
            </div>
            <span className="text-[10px] md:text-xs font-semibold text-gold-accent uppercase tracking-wider">
              Pro Bono · Untuk Fakir Miskin, Perempuan & Anak
            </span>
          </motion.div>

          {/* Headline dengan reveal word-by-word */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            <RevealWords text="Keadilan untuk Semua:" />
            <br />
            <span className="text-amber-300">
              <RevealWords text="Bantuan Hukum Gratis Warga Kurang Mampu Tulungagung" />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-6 text-base md:text-lg text-red-50/90 leading-relaxed max-w-2xl"
          >
            Posko bantuan hukum kami menyediakan pendampingan gratis untuk perempuan
            korban KDRT, anak yang berhadapan dengan hukum, dan warga kurang mampu di
            seluruh Kabupaten Tulungagung. Tanpa biaya pendaftaran, tanpa upeti, tanpa
            pungutan. Cukup datang dengan KTP dan SKTM — sisanya biar kami yang
            urus.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-green-500 hover:bg-green-400 px-6 md:px-8 py-3.5 md:py-4 text-white font-semibold shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Minta Bantuan Hukum (WhatsApp)
            </a>
            <a
              href="#syarat"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 hover:bg-white/20 px-6 md:px-8 py-3.5 md:py-4 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5" />
              Pelajari Syarat SKTM
            </a>
          </motion.div>

          {/* Mini highlight row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-red-50"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-300" />
              <span className="text-sm">Untuk Perempuan &amp; Anak</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-300" />
              <span className="text-sm">45+ Desa Penyuluhan</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-300" />
              <span className="text-sm">1.200+ Kasus Selesai</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setActiveSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              activeSlide === idx
                ? "w-8 bg-gold-accent"
                : "w-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Slide caption */}
      <div className="absolute bottom-8 right-4 md:right-8 z-20 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="text-right"
          >
            <div className="text-[10px] uppercase tracking-widest text-amber-200">
              Posko BKH Kartini
            </div>
            <div className="text-sm font-medium text-white">
              {HERO_SLIDES[activeSlide].caption}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#tentang"
        aria-label="Scroll ke bawah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 md:left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.a>
    </section>
  );
}
