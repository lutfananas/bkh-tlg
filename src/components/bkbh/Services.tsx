"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Gavel, Handshake, Users, ArrowRight } from "lucide-react";
import { SERVICES } from "./data";

// Card 3D tilt berbasis mouse position
function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0, mx: 50, my: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    setRot({
      x: (py - 0.5) * -10, // tilt X
      y: (px - 0.5) * 10, // tilt Y
      mx: px * 100,
      my: py * 100,
    });
  };

  const handleLeave = () =>
    setRot({ x: 0, y: 0, mx: 50, my: 50 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-[transform] duration-200 ease-out ${className}`}
    >
      {/* Glow mengikuti kursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${rot.mx}% ${rot.my}%, rgba(245, 158, 11, 0.18), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

const ICONS: Record<string, typeof Gavel> = {
  Gavel,
  Handshake,
  Users,
};

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <span className="h-px w-8 bg-primary/50" />
            Layanan Hukum Kami
            <span className="h-px w-8 bg-primary/50" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
          >
            Tiga Pilar Pendampingan{" "}
            <span className="text-primary">BKH Kartini</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Setiap kasus punya jalur penyelesaian yang berbeda. Tim advokad kita
            ngebaca kasus Anda dulu, baru menentukan strategi paling efektif —
            apakah litigasi formal, mediasi non-litigasi, atau cukup penyuluhan
            preventif di desa.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((svc, i) => {
            const Icon = ICONS[svc.icon] ?? Gavel;
            const isGold = svc.accent === "gold";
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <TiltCard className="h-full rounded-2xl bg-card ring-1 ring-border hover:ring-primary/40 hover:shadow-2xl hover:shadow-red-950/20 transition-shadow p-7 md:p-8">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl mb-5"
                    style={{
                      transform: "translateZ(50px)",
                      background: isGold
                        ? "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(245,158,11,0.05))"
                        : "linear-gradient(135deg, rgba(185,28,28,0.18), rgba(185,28,28,0.05))",
                      boxShadow: isGold
                        ? "0 0 0 1px rgba(245,158,11,0.3) inset"
                        : "0 0 0 1px rgba(185,28,28,0.3) inset",
                    }}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isGold ? "text-amber-600" : "text-primary"
                      }`}
                    />
                  </div>

                  <div style={{ transform: "translateZ(30px)" }}>
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-widest mb-2 ${
                        isGold ? "text-amber-600" : "text-primary"
                      }`}
                    >
                      {svc.short}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                      {svc.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {svc.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-charcoal/80"
                        >
                          <ArrowRight
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              isGold ? "text-amber-600" : "text-primary"
                            }`}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
