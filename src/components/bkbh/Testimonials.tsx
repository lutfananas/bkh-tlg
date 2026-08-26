"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Quote, MapPin, Briefcase, Scale, Calendar } from "lucide-react";
import { TESTIMONIALS } from "./data";

// Duplicate list untuk loop infinite seamless
const LOOP_LIST = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="testimoni"
      className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Garis merah-putih dekoratif */}
      <div className="absolute top-0 inset-x-0 h-1 justice-bar" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-accent"
          >
            <span className="h-px w-8 bg-gold-accent/50" />
            Suara Warga yang Didampingi
            <span className="h-px w-8 bg-gold-accent/50" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            11 Kisah Nyata dari{" "}
            <span className="text-gold-accent">Warga Trenggalek</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-red-50/80 leading-relaxed"
          >
            Setiap kisah di bawah diambil dari arsip kasus nyata BKH Kartini.
            Identitas klien dilindungi dengan inisial demi privasi hukum.
            Arahkan kursor ke kartu untuk menjeda pergerakan marquee.
          </motion.p>
        </div>
      </div>

      {/* Marquee track */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex w-max gap-5 md:gap-6 px-3 md:px-6 marquee-track"
          style={{
            animation: "marquee-left 60s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {LOOP_LIST.map((t, i) => {
            // Highlight middle-ish card every rotation
            const isActive =
              i % TESTIMONIALS.length === Math.floor(TESTIMONIALS.length / 2);
            return (
              <TestimonialCard key={`${t.name}-${i}`} t={t} isActive={isActive} />
            );
          })}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <p className="text-xs md:text-sm text-red-50/60">
          <span className="font-semibold text-gold-accent">Tip:</span> Geser
          kursor di atas kartu untuk berhenti sejenak. Semua testimoni sudah
          kami sahkan kebenarannya dari arsip kasus.
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  isActive,
}: {
  t: (typeof TESTIMONIALS)[number];
  isActive: boolean;
  children?: ReactNode;
}) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative w-[290px] sm:w-[340px] md:w-[380px] flex-shrink-0 rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6 md:p-7 hover:ring-gold-accent/40 transition-all duration-500 ${
        isActive ? "shadow-2xl shadow-amber-500/20 ring-gold-accent/30" : ""
      }`}
    >
      {/* Glow ring when active */}
      {isActive && (
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-gold-accent/20 to-gold-accent/20 blur-md -z-10" />
      )}

      {/* Jika punya foto asli, tampilkan; jika tidak, pakai inisial */}
      {"photo" in t && typeof t.photo === "string" ? (
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-accent/50 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.photo}
            alt={`Foto ${t.name}`}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-heading font-bold text-base ring-2 ring-white/20 mb-4`}
        >
          {t.initials}
        </div>
      )}

      <Quote className="w-7 h-7 text-gold-accent/40 mb-2" />
      <p className="text-sm md:text-[0.95rem] text-red-50 leading-relaxed italic">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-white text-sm truncate">
            {t.name}
          </div>
          <div className="text-[11px] text-red-50/70 flex items-center gap-1">
            <Briefcase className="w-3 h-3" />
            <span className="truncate">{t.role}</span>
          </div>
          <div className="text-[11px] text-red-50/70 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{t.location}</span>
          </div>
        </div>
      </div>

      {/* Case tag + Year badge */}
      <div className="mt-3 flex items-center gap-2 flex-wrap">
        <div className="inline-flex items-center gap-1.5 rounded-md bg-gold-accent/15 ring-1 ring-gold-accent/30 text-gold-accent text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
          <Scale className="w-3 h-3" />
          {t.case}
        </div>
        <div className="inline-flex items-center gap-1 rounded-md bg-white/5 ring-1 ring-white/15 text-red-50/80 text-[10px] font-semibold px-2 py-1">
          <Calendar className="w-3 h-3" />
          {t.year}
        </div>
      </div>
    </motion.article>
  );
}
