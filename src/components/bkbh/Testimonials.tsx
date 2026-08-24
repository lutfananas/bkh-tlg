"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Quote, MapPin, Briefcase, Scale, Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS, FEATURED_TESTIMONIAL } from "./data";

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
            Identitas klien utama ditampilkan apa adanya atas izin beliau.
            Cerita lain dilindungi dengan inisial demi privasi hukum. Arahkan
            kursor ke kartu di bawah untuk menjeda pergerakan marquee.
          </motion.p>
        </div>

        {/* === FEATURED TESTIMONIAL — Ibu Uyin Wulandari === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20 relative"
        >
          <FeaturedTestimonial />
        </motion.div>
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

// === Featured testimonial — Ibu Uyin Wulandari ===
function FeaturedTestimonial() {
  return (
    <article className="relative rounded-3xl overflow-hidden ring-1 ring-gold-accent/30 bg-gradient-to-br from-red-900/40 via-red-950/60 to-red-950/80 backdrop-blur shadow-2xl shadow-red-950/50">
      {/* Glow ambient */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* "Testimoni Utama" badge */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-gold-accent text-charcoal px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-lg">
        <BadgeCheck className="w-3.5 h-3.5" />
        Testimoni Utama
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        {/* Foto asli Ibu Uyin */}
        <div className="md:col-span-2 relative aspect-[4/5] md:aspect-auto md:min-h-[440px] bg-charcoal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FEATURED_TESTIMONIAL.photo}
            alt={`Foto ${FEATURED_TESTIMONIAL.name}, klien BKH Kartini dari ${FEATURED_TESTIMONIAL.location}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent md:bg-gradient-to-r" />

          {/* Bintang rating */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-gold-accent fill-gold-accent"
              />
            ))}
          </div>
        </div>

        {/* Quote text */}
        <div className="md:col-span-3 p-6 md:p-10 flex flex-col">
          <Quote className="w-12 h-12 text-gold-accent/40 mb-5" />

          {/* Garis dekoratif */}
          <div className="h-1 w-16 justice-bar rounded-full mb-5" />

          <p className="font-heading text-lg md:text-2xl lg:text-[1.6rem] italic leading-relaxed text-red-50 mb-6">
            &ldquo;{FEATURED_TESTIMONIAL.quote}&rdquo;
          </p>

          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="font-heading text-lg md:text-xl font-bold text-white">
                  {FEATURED_TESTIMONIAL.name}
                </div>
                <div className="text-xs md:text-sm text-gold-accent font-medium uppercase tracking-wider">
                  Klien BKH Kartini
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center gap-1.5 text-red-50/90">
                <Briefcase className="w-4 h-4 text-gold-accent" />
                <span>{FEATURED_TESTIMONIAL.role}</span>
              </div>
              <div className="flex items-center gap-1.5 text-red-50/90">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span>{FEATURED_TESTIMONIAL.location}</span>
              </div>
            </div>

            <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-gold-accent/15 ring-1 ring-gold-accent/40 text-gold-accent text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5">
              <Scale className="w-3.5 h-3.5" />
              {FEATURED_TESTIMONIAL.case}
            </div>
          </div>
        </div>
      </div>
    </article>
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
      {"photo" in t && t.photo ? (
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

      {/* Case tag */}
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-gold-accent/15 ring-1 ring-gold-accent/30 text-gold-accent text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
        <Scale className="w-3 h-3" />
        {t.case}
      </div>
    </motion.article>
  );
}
