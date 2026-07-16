"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ShieldCheck, Sparkles, Users, TrendingUp, Layers, Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    label: "Total rewards paid",
    value: "$2.3M+",
  },
  {
    icon: Sparkles,
    label: "Total tasks completed",
    value: "4.8K+",
  },
  {
    icon: TrendingUp,
    label: "Tasks completed today",
    value: "12",
  },
  {
    icon: Users,
    label: "Contributors rewarded",
    value: "1.9K+",
  },
  {
    icon: Layers,
    label: "Active contributors",
    value: "428",
  },
  {
    icon: ShieldCheck,
    label: "Projects served",
    value: "320+",
  },
];

export function PlatformProof() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">PLATFORM PROOF</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Trusted onchain execution for founders and contributors
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Real tasks, real approvals, real wallet payouts. These metrics reflect the market activity and trust powering Gibwork today.
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
        className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-3 mb-6">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
