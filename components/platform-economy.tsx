"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { AnimatedCounter } from "./animated-counter";

export function PlatformEconomy() {
  const economyStats = [
    { label: "Total Rewards Distributed", value: 12.8, prefix: "$", suffix: "M+", decimals: 1 },
    { label: "Total Contributors", value: 18732, decimals: 0 },
    { label: "Contributors Paid", value: 15234, decimals: 0 },
    { label: "Tasks Completed", value: 24851, decimals: 0 },
    { label: "Projects Served", value: 3652, decimals: 0 },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl bg-gradient-to-b from-muted/30 to-background">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">REAL PLATFORM ECONOMY</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Real Work. Real Rewards.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Track the economic activity on Gibwork. Every task completed, every reward distributed, all transparent and onchain.
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
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12"
      >
        {economyStats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="p-8 rounded-2xl border bg-card hover:bg-accent/50 transition-colors text-center"
          >
            <p className="text-4xl font-bold text-primary">
              {stat.prefix}
              <AnimatedCounter value={stat.value} decimals={stat.decimals} />
              {stat.suffix}
            </p>
            <p className="text-sm text-muted-foreground mt-3">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
