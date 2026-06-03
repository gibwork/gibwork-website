"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { CheckCircle2, PlusCircle, Wallet } from "lucide-react";

const steps = [
  {
    label: "01",
    icon: PlusCircle,
    title: "Post work or find work",
    description:
      "Creators post bounties tied to GitHub issues, simple tasks, or services. Workers browse and pick what fits.",
  },
  {
    label: "02",
    icon: CheckCircle2,
    title: "Submit on web or mobile",
    description:
      "Workers attach a PR link, screenshots, or files from their browser or the iOS / Android app. Creators review on their own time.",
  },
  {
    label: "03",
    icon: Wallet,
    title: "Get paid in USDC",
    description:
      "Once a submission is approved, escrowed USDC is released straight to the worker's noncustodial Solana wallet.",
  },
];

export function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
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
          From bounty to USDC in three steps.
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-muted-foreground mt-3"
        >
          Funds are escrowed onchain at the moment work is posted, so workers
          know the payout is real before they start.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-12 relative">
        <div
          aria-hidden
          className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {steps.map((step) => (
          <motion.div
            key={step.label}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="relative flex flex-col items-start rounded-xl border bg-card p-6"
          >
            <div className="flex items-center justify-between w-full">
              <div className="rounded-lg border bg-background p-2.5">
                <step.icon className="size-5 text-primary" />
              </div>
              <span className="text-xs font-mono text-muted-foreground tracking-widest">
                {step.label}
              </span>
            </div>
            <h3 className="font-semibold text-lg mt-5">{step.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
