"use client";

import { Button } from "@/components/ui/button";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Search,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const paths = [
  {
    eyebrow: "For contributors",
    title: "Turn your skills into paid work",
    description:
      "Discover clear tasks and open-source bounties, submit verifiable work, and track every review from one place.",
    cta: "Find work",
    steps: [
      {
        icon: Search,
        title: "Find the right opportunity",
        description:
          "Browse by category, reward, and the kind of work you do best.",
      },
      {
        icon: ClipboardCheck,
        title: "Submit proof of work",
        description:
          "Share the finished deliverable, contribution, or pull request.",
      },
      {
        icon: WalletCards,
        title: "Receive your reward",
        description:
          "Approved rewards are released to your non-custodial wallet.",
      },
    ],
  },
  {
    eyebrow: "For teams",
    title: "Fund outcomes, not busywork",
    description:
      "Publish a scoped task, attract contributors globally, and release the reward only after you approve the result.",
    cta: "Post work",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Define the outcome",
        description:
          "Set the deliverable, acceptance criteria, deadline, and reward.",
      },
      {
        icon: Search,
        title: "Review submissions",
        description:
          "Compare completed work and keep feedback tied to the task.",
      },
      {
        icon: CheckCircle2,
        title: "Approve and settle",
        description:
          "Choose the work that meets the brief and release payment.",
      },
    ],
  },
];

export function Workflow() {
  return (
    <section
      id="how-it-works"
      className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-sm font-semibold text-primary"
        >
          HOW GIBWORK WORKS
        </motion.p>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-2 text-3xl font-semibold sm:text-4xl"
        >
          One marketplace. Two clear paths.
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 text-muted-foreground sm:text-lg"
        >
          Whether you need work completed or want to earn, the whole journey
          stays transparent from brief to payout.
        </motion.p>
      </motion.div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {paths.map((path, pathIndex) => (
          <motion.article
            key={path.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="overflow-hidden rounded-3xl border bg-card shadow-sm"
          >
            <div
              className={
                pathIndex === 0
                  ? "border-b bg-gradient-to-br from-primary/10 via-background to-background p-6 sm:p-8"
                  : "border-b bg-gradient-to-br from-emerald-500/10 via-background to-background p-6 sm:p-8"
              }
            >
              <p
                className={
                  pathIndex === 0
                    ? "text-sm font-semibold text-primary"
                    : "text-sm font-semibold text-emerald-600"
                }
              >
                {path.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{path.title}</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                {path.description}
              </p>
            </div>

            <ol className="space-y-6 p-6 sm:p-8">
              {path.steps.map((step, stepIndex) => {
                const Icon = step.icon;

                return (
                  <li key={step.title} className="flex gap-4">
                    <div className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-muted/40">
                      <Icon
                        className="size-5 text-primary"
                        aria-hidden="true"
                      />
                      <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
                        {stepIndex + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              <Button asChild variant={pathIndex === 0 ? "default" : "outline"}>
                <Link href={siteConfig.appUrl} target="_blank" rel="noreferrer">
                  {path.cta}
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
