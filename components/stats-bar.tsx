"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const stats = [
  { value: "10k+", label: "Downloads" },
  { value: "$500k+", label: "Paid out in USDC" },
  { value: "5k+", label: "Contributors" },
  { value: "50+", label: "Partner projects" },
];

export function StatsBar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      className="w-full border-y bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex flex-col items-center gap-0.5 text-center"
          >
            <span className="text-2xl sm:text-3xl font-bold text-foreground">
              {s.value}
            </span>
            <span className="text-xs text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
