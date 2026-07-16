"use client";

import { BadgeDollarSign, ClipboardCheck, GitPullRequest, Smartphone, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const flowSteps = [
  {
    icon: ClipboardCheck,
    title: "Post funded outcomes",
    description:
      "Create a task or GitHub bounty with a clear deliverable, deadline, and reward already attached.",
  },
  {
    icon: GitPullRequest,
    title: "Review real submissions",
    description:
      "Compare pull requests, links, demos, and proof of work before approving the strongest result.",
  },
  {
    icon: Wallet,
    title: "Release wallet payouts",
    description:
      "Approved work moves to wallet-native rewards, including stablecoin payouts such as USDC.",
  },
];

export function PlatformFlow() {
  return (
    <motion.section
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
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">HOW GIBWORK RUNS</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            From funded task to approved payout
          </h2>
        </motion.div>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="max-w-2xl text-muted-foreground lg:text-right"
        >
          The current product is more than a generic job board: it combines public task discovery,
          GitHub-based bounty workflows, mobile access, and crypto-native settlement.
        </motion.p>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid gap-4 md:grid-cols-3"
      >
        {flowSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="rounded-lg border bg-background p-6">
              <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid overflow-hidden rounded-lg border bg-muted/40 md:grid-cols-[1fr_1.2fr]"
      >
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-background text-primary">
            <Smartphone className="size-5" />
          </div>
          <h3 className="text-2xl font-semibold">Built for quick mobile discovery</h3>
          <p className="mt-3 text-muted-foreground">
            Contributors can scan opportunities, track requirements, and return to submissions from
            the app while teams keep task details clear enough to review asynchronously.
          </p>
        </div>
        <div className="grid gap-3 border-t bg-background p-6 sm:grid-cols-2 sm:p-8 md:border-l md:border-t-0">
          <div className="rounded-lg border p-5">
            <BadgeDollarSign className="mb-4 size-5 text-primary" />
            <p className="font-semibold">Transparent rewards</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Task cards surface the asset, amount, deadline, and eligibility rules up front.
            </p>
          </div>
          <div className="rounded-lg border p-5">
            <Wallet className="mb-4 size-5 text-primary" />
            <p className="font-semibold">Wallet-first settlement</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Approved contributors receive payouts through connected noncustodial wallets.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
