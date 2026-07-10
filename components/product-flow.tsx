"use client";

import { BadgeCheck, FileCode, Smartphone, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const flowSteps = [
  {
    icon: FileCode,
    label: "Create funded work",
    description:
      "Post a task, service request, or GitHub bounty with clear scope and visible payout.",
  },
  {
    icon: Smartphone,
    label: "Review from anywhere",
    description:
      "Contributors discover opportunities and track submissions across the web and mobile app.",
  },
  {
    icon: BadgeCheck,
    label: "Submit proof",
    description:
      "Work is reviewed through PRs, issue links, screenshots, or the deliverables requested by the creator.",
  },
  {
    icon: Wallet,
    label: "Release payout",
    description:
      "Approved contributors receive wallet-based stablecoin payouts after acceptance.",
  },
];

export function ProductFlow() {
  return (
    <motion.section
      id="about"
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
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">How Gibwork works</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
          A clearer loop from funded work to accepted proof
        </h2>
        <p className="mt-3 text-muted-foreground">
          Teams fund scoped work, contributors submit evidence, and approvals unlock wallet
          payouts from one workflow.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {flowSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div key={step.label} className="rounded-lg border bg-background p-5">
              <div className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
