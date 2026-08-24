"use client";

import { motion } from "framer-motion";
import { Newspaper, MapPin, Quote } from "lucide-react";
import { BERITA_PERS } from "./data";

export default function PressNews() {
  return (
    <section
      id="berita"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Decorative red-white top rule */}
      <div className="absolute top-0 inset-x-0 h-1 justice-bar" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--justice-red) 0 2px, transparent 2px 22px)",
        }}
      />

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <span className="h-px w-8 bg-primary/50" />
            <Newspaper className="w-3.5 h-3.5" />
            {BERITA_PERS.category}
            <span className="h-px w-8 bg-primary/50" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight"
          >
            Kisah Nyata Klien,{" "}
            <span className="text-primary">Suara Akar Rumput</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Cerita langsung dari warga Trenggalek yang sudah didampingi BKH Kartini.
            Setiap kasus di sini bukan sekadar angka — ini adalah keluarga yang kami
            wal sejak awal konsultasi sampai putusan pengadilan, tanpa memungut
            sepeser pun.
          </motion.p>
        </div>

        {/* Article card */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden ring-1 ring-border bg-card shadow-xl shadow-red-950/10"
        >
          {/* Article image with caption */}
          <figure className="relative">
            <div className="aspect-[16/9] bg-charcoal overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BERITA_PERS.image}
                alt={BERITA_PERS.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Date/category strip overlay */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-lg">
              <MapPin className="w-3.5 h-3.5" />
              {BERITA_PERS.dateline}
            </div>

            <figcaption className="sr-only">{BERITA_PERS.imageAlt}</figcaption>
          </figure>

          {/* Article body */}
          <div className="p-6 md:p-10">
            {/* Dateline + lead */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <span className="font-bold uppercase tracking-wider text-primary">
                {BERITA_PERS.dateline}
              </span>
              <span className="text-muted-foreground/50">—</span>
              <span>{BERITA_PERS.category}</span>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-tight mb-4">
              {BERITA_PERS.headline}
            </h3>

            <p className="font-heading text-lg md:text-xl text-primary font-semibold leading-relaxed mb-6 italic border-l-4 border-primary/60 pl-4">
              {BERITA_PERS.lead}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-4 text-sm md:text-base text-charcoal/90 leading-relaxed">
              {BERITA_PERS.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Pull quote — testimonial dari klien utama */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 md:mt-10 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50/40 ring-1 ring-primary/20 p-6 md:p-8 relative"
            >
              <Quote className="absolute -top-3 -left-2 w-10 h-10 text-primary/30 bg-card rounded-full" />
              <p className="font-heading text-base md:text-lg italic text-charcoal leading-relaxed">
                &ldquo;{BERITA_PERS.pullQuote.text}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-primary">
                — {BERITA_PERS.pullQuote.attribution}
              </footer>
            </motion.blockquote>

            {/* Source footer */}
            <div className="mt-8 pt-6 border-t border-border flex items-start gap-2 text-xs text-muted-foreground">
              <Newspaper className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span className="leading-relaxed">
                Sumber: {BERITA_PERS.source}
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
