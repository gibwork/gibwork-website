"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Users, Briefcase, Wallet, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K+",
    label: "Premium Members",
    description: "Active users earning and hiring",
  },
  {
    icon: Briefcase,
    value: "10K+",
    label: "Tasks Completed",
    description: "Bounties, tasks, and services delivered",
  },
  {
    icon: Wallet,
    value: "$2M+",
    label: "Paid to Creators",
    description: "In USDC, SOL, and SPL tokens",
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries",
    description: "Global reach, borderless payments",
  },
];

export function Stats() {
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
      className="relative py-16 sm:py-20 px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <stat.icon className="size-5 text-primary" />
              </div>
            </div>
            <p className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              {stat.value}
            </p>
            <p className="font-semibold text-foreground mt-1">{stat.label}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
