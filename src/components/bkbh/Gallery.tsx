"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";
import { GALLERY } from "./data";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Keyboard nav
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="galeri" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <span className="h-px w-8 bg-primary/50" />
            Galeri Kegiatan
            <span className="h-px w-8 bg-primary/50" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
          >
            Sorotan Kegiatan{" "}
            <span className="text-primary">Penyuluhan &amp; Persidangan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Setiap momen pendampingan kami dokumentasikan jujur untuk
            meyakinkan warga lain bahwa bantuan hukum gratis itu nyata, bukan
            pajangan. Klik tiap foto untuk melihat kisah di baliknya.
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {GALLERY.map((photo, idx) => (
            <motion.button
              type="button"
              key={photo.src}
              onClick={() => setActiveIndex(idx)}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-xl ring-1 ring-border hover:ring-primary/40 focus:ring-2 focus:ring-primary focus:outline-none transition-all ${photo.span}`}
              aria-label={`Lihat foto: ${photo.caption}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-left">
                <div className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold mb-0.5">
                  BKH Kartini
                </div>
                <div className="text-xs md:text-sm font-semibold text-white leading-tight">
                  {photo.caption}
                </div>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
          <Camera className="w-4 h-4 text-primary" />
          <span>
            Foto kegiatan aktual lapangan. Identitas warga yang dilindungi
            telah dikaburkan demi menjaga kerahasiaan.
          </span>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Blur backdrop */}
            <div
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
              onClick={() => setActiveIndex(null)}
              aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-2.5 py-1 font-semibold">
                    <Camera className="w-3.5 h-3.5" />
                    Foto {activeIndex + 1} / {GALLERY.length}
                  </span>
                  <span className="text-muted-foreground hidden sm:inline">
                    {GALLERY[activeIndex].caption}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Image */}
                <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto md:min-h-[420px] bg-charcoal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={GALLERY[activeIndex].src}
                    alt={GALLERY[activeIndex].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Nav arrows */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(
                        (i) =>
                          i === null
                            ? i
                            : (i - 1 + GALLERY.length) % GALLERY.length
                      );
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/60 ring-1 ring-white/20 hover:bg-charcoal/80 text-white flex items-center justify-center backdrop-blur"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(
                        (i) => (i === null ? i : (i + 1) % GALLERY.length)
                      );
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/60 ring-1 ring-white/20 hover:bg-charcoal/80 text-white flex items-center justify-center backdrop-blur"
                    aria-label="Foto berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption side */}
                <div className="md:col-span-2 p-6 md:p-7 flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                    Kisah Di Balik Foto
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal mb-3">
                    {GALLERY[activeIndex].caption}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                    {GALLERY[activeIndex].description}
                  </p>
                  <div className="mt-5 pt-5 border-t border-border text-xs text-muted-foreground">
                    Lokasi: Kabupaten Tulungagung, Jawa Timur.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
