"use client";

import { FileCheck2, ListChecks, WalletCards } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const steps = [
  {
    icon: ListChecks,
    eyebrow: "1. Define acceptance",
    title: "Make the outcome clear",
    description:
      "Describe the exact deliverable, proof format, due date, reward asset, and approval criteria before work begins.",
  },
  {
    icon: FileCheck2,
    eyebrow: "2. Submit evidence",
    title: "Show the work, not just a promise",
    description:
      "Attach a public PR, URL, demo, or reproducible notes so the creator can review the result against the brief.",
  },
  {
    icon: WalletCards,
    eyebrow: "3. Review and pay",
    title: "Approval unlocks payout",
    description:
      "Creators review openly and approve the submission. Once approved, the funded reward is released to the worker's wallet.",
  },
];

export function ProofLoop() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      aria-labelledby="proof-loop-title"
      className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-medium text-primary">A clearer path from work to payout</p>
        <h2 id="proof-loop-title" className="font-semibold text-3xl sm:text-4xl mt-2">
          Funded work moves faster when proof is easy to review
        </h2>
        <p className="text-muted-foreground mt-3">
          Align the brief, the evidence, and the review cadence so creators and workers know what happens next on desktop or mobile.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid md:grid-cols-3 gap-4 mt-10"
      >
        {steps.map(({ icon: Icon, eyebrow, title, description }) => (
          <Card key={eyebrow} className="h-full bg-background/80">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
              </div>
              <CardTitle className="text-xl mt-4">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center text-sm text-muted-foreground mt-6"
      >
        Rewards are released after the creator approves qualifying work; submitting alone does not guarantee payment.
      </motion.p>
    </motion.section>
  );
}
