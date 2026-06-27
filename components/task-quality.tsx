"use client";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const qualitySteps = [
  {
    icon: ClipboardCheck,
    title: "Check the task fit",
    description:
      "Review the funded amount, deadline, payout asset, proof format, and verification rules before starting work.",
  },
  {
    icon: FileCheck2,
    title: "Submit proof that can be reviewed",
    description:
      "Attach the public PR, issue, demo, screenshot, or document that proves the work matches the task requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Make review decisions clearer",
    description:
      "Creators can state acceptance criteria, examples of strong submissions, review cadence, and rejection reasons.",
  },
];

const taskSignals = [
  "Funded reward and remaining pool",
  "Required proof format",
  "Submission limits and verification",
  "Pending, reviewed, and approved work",
];

export function TaskQuality() {
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
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase text-muted-foreground">
          Better funded work
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Know the task before you submit
        </h2>
        <p className="mt-3 text-muted-foreground sm:text-lg">
          Gibwork rewards clear, reviewable work. Strong tasks tell workers what
          to prove, and strong submissions make approval easier for creators.
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid gap-4 md:grid-cols-3"
        >
          {qualitySteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-lg border bg-card p-5 text-card-foreground shadow-sm"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="rounded-lg border bg-card p-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <WalletCards className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold">Live task signals</h3>
              <p className="text-sm text-muted-foreground">
                Useful context before someone starts.
              </p>
            </div>
          </div>

          <div className="mt-6 border-t pt-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium">Landing page refresh</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Development task
                </p>
              </div>
              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                350 USDC
              </div>
            </div>

            <div className="mt-4 h-2 rounded-full bg-muted">
              <div className="h-2 w-3/4 rounded-full bg-primary" />
            </div>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {taskSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-2">
                  <ArrowRight className="size-4 shrink-0 text-primary" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
