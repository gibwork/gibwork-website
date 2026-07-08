"use client";

import {
  ClipboardList,
  GitPullRequestArrow,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const flowSteps = [
  {
    icon: ClipboardList,
    title: "Create funded work",
    description:
      "Post a task, service request, or open-source bounty with clear deliverables and reward terms.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Submit proof",
    description:
      "Builders attach PRs, links, screenshots, or files so creators can review the completed work.",
  },
  {
    icon: ShieldCheck,
    title: "Review submissions",
    description:
      "Creators compare the submitted proof against the scope before approving the winning work.",
  },
  {
    icon: Wallet,
    title: "Release rewards",
    description:
      "Approved contributors receive token rewards directly in their noncustodial wallets.",
  },
];

export function ProductFlow() {
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
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold">
          One flow across web and mobile
        </h2>
        <p className="mt-2 text-muted-foreground">
          Gibwork connects funded opportunities, verified work submissions, and
          wallet payouts in a single review flow.
        </p>
        <p className="mt-4 text-sm font-medium text-primary">
          Funds sit in smart-contract escrow and settle on-chain in seconds.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {flowSteps.map((step) => (
          <motion.div key={step.title} variants={FADE_UP_ANIMATION_VARIANTS}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
