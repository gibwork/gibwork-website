"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { AnimatedCounter } from "./animated-counter";

export function LiveStats() {
  const stats = [
    { label: "Total Payouts", value: 12.8, prefix: "$", suffix: "M+", decimals: 1 },
    { label: "Total Contributors", value: 18732, decimals: 0 },
    { label: "Contributors Paid", value: 15234, decimals: 0 },
    { label: "Total Tasks Completed", value: 24851, decimals: 0 },
    { label: "Tasks Completed Today", value: 342, decimals: 0 },
    { label: "Active Contributors", value: 892, decimals: 0 },
    { label: "Projects Served", value: 3652, decimals: 0 },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">LIVE PLATFORM STATS</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Real activity, real results
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Track the live activity on Gibwork. All statistics update in real-time as tasks are completed and rewards are distributed.
        </p>
      </motion.div>

      <motion.div
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
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="p-6 rounded-2xl border bg-card hover:bg-accent/50 transition-colors"
          >
            <p className="text-3xl font-bold text-primary">
              {stat.prefix}
              <AnimatedCounter value={stat.value} decimals={stat.decimals} />
              {stat.suffix}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
