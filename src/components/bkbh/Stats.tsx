"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Gift } from "lucide-react";
import { STATS } from "./data";

function Counter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

const ICONS = [Award, Users, Gift];

export default function Stats() {
  return (
    <section className="relative -mt-10 md:-mt-16 z-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl md:rounded-3xl bg-secondary text-secondary-foreground shadow-2xl shadow-emerald-900/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((stat, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative p-6 md:p-10 hover:bg-white/5 transition-colors duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-gold/20 ring-1 ring-amber-gold/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-amber-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        <Counter target={stat.target} suffix={stat.suffix} />
                      </div>
                      <div className="mt-1 text-sm md:text-base font-semibold text-amber-gold uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <p className="mt-2 text-xs md:text-sm text-emerald-50/70 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
