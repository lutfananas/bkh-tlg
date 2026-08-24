"use client";

import { motion } from "framer-motion";
import { FileText, Download, Check, ChevronRight, AlertCircle } from "lucide-react";
import { SKTM_STEPS, WHATSAPP_LINK } from "./data";

export default function Eligibility() {
  return (
    <section id="syarat" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.06) 0, transparent 30%), radial-gradient(circle at 80% 80%, rgba(245,158,11,0.06) 0, transparent 30%)",
          }}
        />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <span className="h-px w-8 bg-primary/50" />
            Syarat SKTM &amp; Cara Mengajukan
            <span className="h-px w-8 bg-primary/50" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
          >
            Empat Langkah Mendapatkan{" "}
            <span className="text-primary">Pendampingan Gratis</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Tidak rumit, tidak birokratis berlebihan. Cukup siapkan KTP dan
            Surat Keterangan Tidak Mampu (SKTM) dari kelurahan, lalu datang ke
            posko kami. Tim advokad akan menerima dan menyusun strategi pendampingan
            dalam waktu 1×24 jam.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {SKTM_STEPS.map((step, i) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl bg-card ring-1 ring-border hover:ring-primary/40 hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-500 p-6 md:p-8"
            >
              {/* Connector arrow (desktop only) */}
              {i < SKTM_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-primary/30">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Step number */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-emerald-700 text-primary-foreground flex items-center justify-center font-heading text-xl md:text-2xl font-bold shadow-lg shadow-emerald-700/30">
                    {step.no}
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-gold text-charcoal flex items-center justify-center">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Documents list */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.documents.map((doc) => (
                      <span
                        key={doc}
                        className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 ring-1 ring-primary/20"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Intake form & note */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Download intake form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-primary to-emerald-800 text-primary-foreground p-7 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-gold/15 blur-2xl" />
            <FileText className="w-10 h-10 text-amber-gold mb-4" />
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
              Formulir Pengajuan Intake
            </h3>
            <p className="text-sm md:text-base text-emerald-50/90 leading-relaxed mb-5">
              Unduh formulir intake resmi BKBH Kartini. Cetak, isi, dan bawa
              bersama dokumen pendukung ke posko kami untuk mempercepat proses
              registrasi kasus Anda.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  // Placeholder — nantinya menggantikan link file PDF riil
                  alert(
                    "Formulir intake PDF akan tersedia setelah deploy ke domain resmi BKBH Kartini."
                  );
                }}
                className="inline-flex items-center gap-2 rounded-full bg-amber-gold text-charcoal hover:brightness-110 px-5 py-2.5 text-sm font-semibold transition"
              >
                <Download className="w-4 h-4" />
                Unduh PDF (Gratis)
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold transition"
              >
                Minta Lewat WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Important note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-amber-50 ring-1 ring-amber-300/60 p-7 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-7 h-7 text-amber-600" />
              <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal">
                Catatan Penting untuk Pemohon
              </h3>
            </div>
            <ul className="space-y-3 text-sm md:text-[0.95rem] text-charcoal/80 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-amber-600 font-bold">1.</span>
                <span>
                  SKTM hanya berlaku 6 bulan sejak diterbitkan. Jika sudah lewat
                  masa, segera perbarui ke kelurahan sebelum datang ke posko
                  kami.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-amber-600 font-bold">2.</span>
                <span>
                  Warga difabel, lansia, atau sakit berkepanjangan dapat
                  didampingi langsung di rumah oleh tim keliling kami — cukup
                  WhatsApp posko terlebih dahulu.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-amber-600 font-bold">3.</span>
                <span>
                  Kasus darurat (penangkapan, ancaman kekerasan, teror Pinjol)
                  dapat ditangani di luar jam operasional melalui jalur
                  WhatsApp 24 jam.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-amber-600 font-bold">4.</span>
                <span>
                  Seluruh data pemohon kami jaga kerahasiaannya sesuai UU
                  Perlindungan Data Pribadi. Tidak akan dibocorkan ke pihak
                  manapun.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
