"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Coins, FileCheck, SearchCheck, ArrowRightLeft, GitBranch, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const payoutSteps = [
  {
    step: "01",
    title: "Escrow Deposit",
    description: "Client creates task/bounty and funds escrow upfront on Solana.",
    icon: Coins,
  },
  {
    step: "02",
    title: "Check & Submit",
    description: "Developer claims task and submits required deliverables or GitHub PR.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Sponsor Review",
    description: "Sponsor inspects submission details and verifies code or proof.",
    icon: SearchCheck,
  },
  {
    step: "04",
    title: "Approved Payout",
    description: "Approved work releases SOL/USDC instantly to developer wallet.",
    icon: ArrowRightLeft,
  },
];

export function PayoutFlow() {
  return (
    <motion.section
      id="how-payments-work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="py-20 sm:py-28 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t scroll-mt-20"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl tracking-tight"
        >
          From task to payout
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Transparent workflow from escrow funding to sponsor review and secure payout release.
          Approved work gets paid directly from escrow upon sponsor confirmation.
        </motion.p>
      </div>

      {/* Payout Steps */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {payoutSteps.map((stepItem, idx) => {
          const Icon = stepItem.icon;
          return (
            <motion.div
              key={idx}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="relative p-6 rounded-xl border bg-card/60 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground/60 bg-muted px-2.5 py-1 rounded-full">
                    STEP {stepItem.step}
                  </span>
                </div>
                <h3 className="font-semibold text-lg">{stepItem.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Developer / Open-Source Card */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-12 p-6 sm:p-8 rounded-2xl border bg-gradient-to-r from-primary/5 via-card to-background flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-1 sm:mt-0">
            <Code2 className="size-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                Open-Source Bounties
              </span>
            </div>
            <h3 className="font-semibold text-xl mt-2">
              Developer Workflow & GitHub Contributions
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
              For open-source bounties, review the linked GitHub issue, work in a dedicated branch,
              open a clear PR, and submit the PR through Gibwork for sponsor review.
            </p>
          </div>
        </div>
        <Button asChild variant="outline" className="shrink-0 group">
          <Link href={siteConfig.appUrl} target="_blank">
            Explore Open-Source Tasks
            <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
