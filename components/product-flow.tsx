"use client";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  Coins,
  GitPullRequest,
  Smartphone,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const flowSteps: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Create funded work",
    description:
      "Post bounties, tasks, or services with a clear deliverable, reward, and proof format.",
    icon: Coins,
  },
  {
    title: "Collect submissions",
    description:
      "Review pull requests, links, screenshots, walkthroughs, or mobile-friendly proofs in one place.",
    icon: ClipboardCheck,
  },
  {
    title: "Approve and pay",
    description:
      "Use verified submissions and wallet-native payouts to move useful work from review to reward.",
    icon: BadgeCheck,
  },
];

const productHighlights = [
  { label: "GitHub PR bounties", icon: GitPullRequest },
  { label: "Mobile-friendly submissions", icon: Smartphone },
  { label: "USDC and SOL rewards", icon: Wallet },
];

export function ProductFlow() {
  return (
    <motion.section
      id="workflow"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="lg:sticky top-24"
        >
          <p className="text-primary font-semibold text-sm">WORKFLOW</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
            Built for work that needs proof before payout
          </h2>
          <p className="mt-4 text-muted-foreground">
            Gibwork gives creators a place to fund specific outcomes and gives
            contributors a clear path from discovering work to submitting proof
            and receiving crypto rewards.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {productHighlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm"
                >
                  <Icon className="size-4 text-primary" />
                  <span>{highlight.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid gap-4"
        >
          {flowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-lg border bg-card p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
