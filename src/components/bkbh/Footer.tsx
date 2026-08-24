"use client";

import { Scale, Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { NAV_MENU, CONTACTS, ADDRESS_LINES } from "./data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-charcoal text-emerald-50/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-amber-gold/15 ring-2 ring-amber-gold/40 flex items-center justify-center">
                <Scale className="w-5 h-5 text-amber-gold" strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <div className="font-heading text-lg font-bold text-white">
                  BKBH Kartini
                </div>
                <div className="text-[10px] uppercase tracking-widest text-amber-gold">
                  Tulungagung
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Biro Konsultasi dan Bantuan Hukum Kartini — posko bantuan hukum
              pro bono untuk fakir miskin, perempuan, dan anak di Kabupaten
              Tulungagung. Berdiri sejak 2016, sudah menangani 1.200+ kasus di
              45+ desa.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Media sosial BKBH"
                  className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-amber-gold hover:text-charcoal flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {NAV_MENU.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-amber-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#kontak"
                  className="text-sm hover:text-amber-gold transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-gold flex-shrink-0" />
                <span>{ADDRESS_LINES.join(", ")}</span>
              </li>
              <li>
                <a
                  href={CONTACTS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-amber-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-gold flex-shrink-0" />
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-2.5 hover:text-amber-gold transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-amber-gold flex-shrink-0" />
                  {CONTACTS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1.5">
            Dibuat dengan{" "}
            <Heart className="w-3.5 h-3.5 text-amber-gold fill-amber-gold" /> oleh
            tim BKBH Kartini Tulungagung. © {new Date().getFullYear()} — Hak
            Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <a href="#beranda" className="hover:text-amber-gold transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#beranda" className="hover:text-amber-gold transition-colors">
              Syarat Layanan
            </a>
            <a
              href="#beranda"
              aria-label="Kembali ke atas"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-gold hover:text-charcoal flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
