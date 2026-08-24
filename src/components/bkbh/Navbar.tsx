"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_MENU, WHATSAPP_LINK } from "./data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary text-primary-foreground shadow-xl shadow-emerald-900/20"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div
              className={`relative w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                scrolled
                  ? "bg-amber-gold/20 ring-2 ring-amber-gold/40"
                  : "bg-white/15 ring-2 ring-white/30 backdrop-blur"
              }`}
            >
              <Scale className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <div className="font-heading text-base md:text-xl font-bold tracking-tight">
                BKBH Kartini
              </div>
              <div
                className={`text-[10px] md:text-xs font-medium uppercase tracking-widest ${
                  scrolled ? "text-amber-gold" : "text-amber-200"
                }`}
              >
                Tulungagung
              </div>
            </div>
          </a>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_MENU.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? "hover:bg-white/10"
                      : "hover:bg-white/15 backdrop-blur"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 animate-cta-glow ${
                scrolled
                  ? "bg-amber-gold text-charcoal hover:brightness-110"
                  : "bg-amber-400 text-charcoal hover:bg-amber-300"
              }`}
            >
              <Phone className="w-4 h-4" />
              Hubungi Posbakum
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition ${
              scrolled ? "hover:bg-white/10" : "hover:bg-white/15 backdrop-blur"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-primary text-primary-foreground"
          >
            <ul className="container mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1">
              {NAV_MENU.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-amber-gold text-charcoal font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Hubungi Posbakum
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
