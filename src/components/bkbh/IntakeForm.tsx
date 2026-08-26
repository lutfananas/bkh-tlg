"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Upload,
  CheckCircle2,
  User,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { CASE_CATEGORIES, OPERATING_HOURS, ADDRESS_LINES, CONTACTS } from "./data";

export default function IntakeForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    category: "",
    caseDate: "",
    description: "",
    fileName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((f) => ({ ...f, fileName: file.name }));
    }
  };

  const validate = () => {
    const err: Record<string, string> = {};
    if (!form.name.trim()) err.name = "Nama wajib diisi";
    if (!/^[0-9+\-\s]{8,20}$/.test(form.phone))
      err.phone = "Nomor HP tidak valid (8-20 digit)";
    if (!form.address.trim()) err.address = "Alamat wajib diisi";
    if (!form.category) err.category = "Pilih kategori kasus";
    if (!form.description.trim() || form.description.length < 20)
      err.description = "Deskripsi minimal 20 karakter";
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    // Simulasi submit - di produksi, kirim ke endpoint API atau WhatsApp
    setSubmitted(true);
    setTimeout(() => {
      // Reset & juga bisa kirim ke WhatsApp untuk konfirmasi cepat
      const waText = encodeURIComponent(
        `Assalamualaikum BKH Kartini,\n\nNama: ${form.name}\nHP: ${form.phone}\nAlamat: ${form.address}\nKategori: ${form.category}\nPeristiwa: ${form.caseDate}\n\nKronologi:\n${form.description}\n\nDokumen: ${form.fileName || "belum ada"}`
      );
      window.open(`https://wa.me/${CONTACTS.whatsapp.match(/wa\.me\/(\d+)/)?.[1] ?? "6281331922614"}?text=${waText}`, "_blank");
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        address: "",
        category: "",
        caseDate: "",
        description: "",
        fileName: "",
      });
    }, 1500);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-background">
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
            Formulir Pengajuan &amp; Kontak
            <span className="h-px w-8 bg-primary/50" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
          >
            Ajukan Kasus Anda{" "}
            <span className="text-primary">Sekarang Juga</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Isi formulir intake digital berikut dengan sejujur-jujurnya. Setelah
            dikirim, tim kami akan menghubungi Anda dalam 1×24 jam melalui
            WhatsApp untuk konfirmasi sesi konsultasi awal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Form column */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-5"
            noValidate
          >
            {/* Two-column inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Nama Lengkap"
                icon={<User className="w-4 h-4" />}
                error={errors.name}
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Contoh: Siti Aminah"
                  className="input-base"
                />
              </Field>
              <Field
                label="Nomor WhatsApp / HP"
                icon={<Phone className="w-4 h-4" />}
                error={errors.phone}
              >
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="08xxxx"
                  className="input-base"
                />
              </Field>
            </div>

            <Field
              label="Alamat Domisili (Kecamatan/Desa)"
              icon={<MapPin className="w-4 h-4" />}
              error={errors.address}
            >
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Contoh: RT 02/RW 04, Desa Boyolangu, Kec. Boyolangu"
                className="input-base"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Kategori Kasus"
                error={errors.category}
                icon={<AlertCircle className="w-4 h-4" />}
              >
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="input-base appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5rem] pr-10"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                  }}
                >
                  <option value="">— Pilih kategori —</option>
                  {CASE_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label="Tanggal / Estimasi Peristiwa"
                icon={<Calendar className="w-4 h-4" />}
              >
                <input
                  type="date"
                  name="caseDate"
                  value={form.caseDate}
                  onChange={handleChange}
                  className="input-base"
                />
              </Field>
            </div>

            <Field
              label="Kronologi Kasus (sedetail mungkin)"
              error={errors.description}
            >
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Ceritakan kronologi kejadian mulai dari awal sampai hari ini, pelaku, saksi-saksi yang ada, dokumen pendukung, dan upaya yang sudah Anda lakukan..."
                className="input-base resize-none"
              />
            </Field>

            {/* Upload */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Upload Dokumen Pendukung (opsional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="document"
                  onChange={handleFile}
                  className="sr-only"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="document"
                  className="flex flex-col items-center justify-center text-center px-6 py-8 border-2 border-dashed border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all"
                >
                  <Upload className="w-8 h-8 text-primary mb-3" />
                  <span className="text-sm font-medium text-charcoal">
                    {form.fileName || "Klik untuk pilih file (KTP, SKTM, surat panggilan, dll)"}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Format: PDF, JPG, PNG — maks. 5 MB
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitted}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-primary text-primary-foreground hover:bg-red-700 disabled:opacity-70 px-7 py-3.5 font-semibold transition-colors shadow-lg shadow-red-800/40"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Kirim &amp; Sambungkan ke WhatsApp
                </>
              )}
            </button>
          </motion.form>

          {/* Contact column */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-border bg-card">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                {/* Stylized map */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(16,185,129,0.2) 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, rgba(16,185,129,0.2) 0 1px, transparent 1px 32px)",
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-red-800/50 animate-wa-pulse">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-charcoal ring-1 ring-border shadow">
                    Posbakum BKH Kartini
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-[10px] font-semibold text-charcoal ring-1 ring-border">
                  Trenggalek, Jatim
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  Lokasi Posko
                </h3>
                {ADDRESS_LINES.map((line) => (
                  <p
                    key={line}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Operating hours */}
            <div className="rounded-2xl bg-card ring-1 ring-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Jam Operasional
                </h3>
              </div>
              <ul className="space-y-2">
                {OPERATING_HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-3 text-sm border-b border-border/60 last:border-0 pb-2 last:pb-0"
                  >
                    <span className="font-medium text-charcoal">{h.day}</span>
                    <span
                      className={`text-right ${
                        /Tutup|libur/i.test(h.time)
                          ? "text-red-500"
                          : /WhatsApp/i.test(h.time)
                          ? "text-amber-600 font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick contact */}
            <div className="rounded-2xl bg-secondary text-secondary-foreground p-5">
              <h3 className="font-heading text-lg font-bold text-white mb-3">
                Kontak Darurat
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href={CONTACTS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-red-50 hover:text-gold-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-accent" />
                  {CONTACTS.phone}
                </a>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-3 text-red-50 hover:text-gold-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-accent" />
                  {CONTACTS.email}
                </a>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-amber-400/15 ring-1 ring-amber-400/30 text-xs text-amber-100 leading-relaxed">
                <strong className="text-gold-accent">Kasus Darurat:</strong>{" "}
                penangkapan, ancaman kekerasan, atau teror Pinjol — hubungi kami
                24 jam via WhatsApp.
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-charcoal mb-2">
        <span className="inline-flex items-center gap-1.5">
          {icon}
          {label}
        </span>
      </label>
      <div className="relative">{children}</div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
}
