"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Wallet, Search, Zap, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Connect Your Wallet",
    description:
      "Sign in with any Solana wallet — Phantom, Backpack, or Solflare. No email or lengthy KYC required to get started.",
  },
  {
    icon: Search,
    step: "02",
    title: "Browse Open Tasks",
    description:
      "Explore design, development, writing, and community tasks with clearly defined scopes and instant crypto rewards.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Complete the Work",
    description:
      "Submit your deliverable through the app or GitHub. Task creators review and approve directly on-platform.",
  },
  {
    icon: DollarSign,
    step: "04",
    title: "Get Paid Instantly",
    description:
      "Once approved, payment is released on-chain in USDC, SOL, or any SPL token — directly to your wallet, no delays.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col items-center text-center"
      >
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-primary font-semibold text-sm"
        >
          HOW IT WORKS
        </motion.p>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl mt-2"
        >
          Simple. Fast. Transparent.
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-muted-foreground mt-3 max-w-lg"
        >
          From task creation to crypto payment — the entire workflow takes minutes, not weeks.
        </motion.p>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="flex flex-col items-start text-left p-6 rounded-2xl border bg-muted/30 hover:bg-muted/60 transition-colors"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-4">
                  <Icon className="size-5 text-primary" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/30 leading-none mb-3">
                  {step.step}
                </span>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
