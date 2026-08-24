"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "./data";

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);
  const [firstShown, setFirstShown] = useState(false);

  // Auto-show bubble pertama kali setelah 3 detik
  useEffect(() => {
    const t = setTimeout(() => {
      setShowBubble(true);
      setFirstShown(true);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      {/* Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="relative max-w-[280px] rounded-2xl bg-card shadow-2xl ring-1 ring-border p-4 pr-10"
          >
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card rotate-45 ring-1 ring-border ring-t-0 ring-l-0" />
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-charcoal text-sm">
                  Posbakum BKBH Kartini
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Ada masalah hukum? Kami siap mendampingi gratis. Klik chat
                  sekarang ya, Bu/Pak!
                </p>
                <div className="mt-1.5 text-[10px] font-semibold text-green-600">
                  ● Online sekarang · Balas cepat
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowBubble(false)}
              aria-label="Tutup pesan"
              className="absolute top-2 right-2 w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat WhatsApp ${WHATSAPP_DISPLAY}`}
        onMouseEnter={() => setShowBubble(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl shadow-green-600/40 animate-wa-pulse"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="white" strokeWidth={1.5} />
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
          1
        </span>
      </motion.a>
    </div>
  );
}
