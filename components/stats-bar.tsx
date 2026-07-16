"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const stats = [
  { label: "Tasks completed", value: "10,000+" },
  { label: "Total paid out", value: "$2.4M+" },
  { label: "Active contributors", value: "5,000+" },
  { label: "Partner projects", value: "200+" },
];

export function StatsBar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="border-y bg-muted/40 px-4 sm:px-6 py-10 w-full"
    >
      <dl className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 text-center">
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={FADE_UP_ANIMATION_VARIANTS}>
            <dt className="text-sm text-muted-foreground mb-1">{stat.label}</dt>
            <dd className="text-3xl font-bold tracking-tight">{stat.value}</dd>
          </motion.div>
        ))}
      </dl>
    </motion.section>
  );
}
