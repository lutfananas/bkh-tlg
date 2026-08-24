"use client";

import { motion } from "framer-motion";
import { Scale, Heart, Users, BookOpen, Quote } from "lucide-react";
import { WHATSAPP_LINK } from "./data";

export default function About() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Kiri: narasi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary/50" />
              Tentang Kami
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              Posko Hukum{" "}
              <span className="text-primary">Pro Bono</span> untuk Warga
              Tulungagung yang Kurang Mampu
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              BKBH Kartini adalah singkatan dari{" "}
              <strong className="text-charcoal">
                Biro Konsultasi dan Bantuan Hukum Kartini
              </strong>
              . Kami berdiri tahun 2016 atas prakarsa beberapa advokat muda dan
              mahasiswa Fakultas Hukum asli Tulungagung yang resah melihat
              warga kurang mampu dianiaya sistem peradilan karena tidak mampu
              menyewa pengacara. Sejak itu, kami sudah menangani lebih dari
              1.200 kasus di seluruh kecamatan Tulungagung.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Fokus kami tiga kelompok paling rentan:{" "}
              <strong className="text-charcoal">perempuan korban KDRT</strong>,{" "}
              <strong className="text-charcoal">
                anak yang berhadapan dengan hukum
              </strong>
              , serta{" "}
              <strong className="text-charcoal">
                fakir miskin dan difabel
              </strong>
              . Pendampingan kami benar-benar gratis — biaya pendaftaran, materai,
              bahkan ongkos transportasi tim ke desa, semuanya kami tanggung dari
              sumbangan relawan dan donatur pribadi yang peduli keadilan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#syarat"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground hover:bg-emerald-700 px-6 py-3 text-sm font-semibold transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Lihat Cara Mendapatkan Pendampingan
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-amber-gold text-charcoal hover:brightness-110 px-6 py-3 text-sm font-semibold transition"
              >
                Konsultasi Langsung
              </a>
            </div>
          </motion.div>

          {/* Kanan: kartu nilai & quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {[
              {
                icon: Heart,
                title: "Berempati",
                desc: "Setiap warga didampingi layaknya keluarga sendiri. Tidak ada yang akan diabaikan karena sepele atau dirinya dianggap lemah.",
              },
              {
                icon: Scale,
                title: "Berkeadilan",
                desc: "Kami berpihak pada kebenaran. Tidak ada pemalsuan bukti, tidak ada suap, tidak ada rekayasa — semua harus jujur dan sah.",
              },
              {
                icon: Users,
                title: "Bersama Warga",
                desc: "Setiap minggu tim kami turun ke desa. Bukan hanya menunggu warga datang, tapi kami yang mendekati mereka lebih dulu.",
              },
              {
                icon: BookOpen,
                title: "Mencerahkan",
                desc: "Hukum yang rumit kami terjemahkan ke bahasa Jawa kromo dan bahasa Indonesia sederhana yang dimengerti warga akar rumput.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="rounded-2xl bg-card ring-1 ring-border p-5 md:p-6 hover:ring-primary/40 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* Quote block */}
            <div className="col-span-2 rounded-2xl bg-secondary text-secondary-foreground p-6 md:p-7 relative overflow-hidden">
              <Quote className="absolute -top-2 -left-2 w-16 h-16 text-amber-gold/15 -rotate-12" />
              <p className="relative font-heading text-base md:text-lg italic leading-relaxed text-emerald-50">
                &ldquo;Hukum seharusnya tidak mengenal kasta. Sebesar apa pun
                gugatan, sekecil apa pun warga, kami berdiri di sisi mereka yang
                benar.&rdquo;
              </p>
              <div className="mt-4 text-xs text-amber-200 font-semibold uppercase tracking-wider">
                — Pernyataan Pendiri BKBH Kartini
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
