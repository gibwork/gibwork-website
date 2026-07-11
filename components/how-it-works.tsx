"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { FilePlus2, Send, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: FilePlus2,
    title: "Post the work",
    body: "Create a bounty, task, or service and fund it in any Solana SPL token. The reward is locked in on-chain escrow the moment you post.",
  },
  {
    icon: Send,
    title: "Talent delivers",
    body: "Contributors browse, start, and submit work from web or mobile. You review submissions and pick the one that gets it done.",
  },
  {
    icon: ShieldCheck,
    title: "Escrow releases",
    body: "Approve the work and escrow pays out instantly to the worker's non-custodial wallet. Every payment builds on-chain reputation.",
  },
];

export function HowItWorks() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      id="how-it-works"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center"
    >
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-primary font-semibold text-sm"
      >
        HOW IT WORKS
      </motion.p>
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-3xl sm:text-4xl mt-2 text-center"
      >
        Trustless work, settled on-chain
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-3 text-muted-foreground max-w-xl"
      >
        No invoices, no chasing payment. Funds sit in Solana escrow until the work
        is approved &mdash; then they settle in seconds.
      </motion.p>

      <div className="mt-12 grid md:grid-cols-3 gap-6 w-full max-w-3xl md:max-w-full">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="relative rounded-xl border bg-card p-6 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center justify-center size-11 rounded-lg bg-primary/10">
                <step.icon className="size-5 text-primary" />
              </span>
              <span className="text-5xl font-semibold text-muted-foreground/15 leading-none">
                {i + 1}
              </span>
            </div>
            <h3 className="font-semibold text-lg mt-4">{step.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
