"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import Link from "next/link";

const approvalSteps = [
  {
    icon: ClipboardCheck,
    title: "Define the work clearly",
    description:
      "Set the deliverable, deadline, reward, review criteria, and proof required before contributors start.",
  },
  {
    icon: FileCheck2,
    title: "Submit verifiable proof",
    description:
      "Use public PRs, issue links, screenshots, post URLs, or source files so creators can review without guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Review quality, not volume",
    description:
      "Verified submissions, originality checks, and specific acceptance notes help reduce spam and weak entries.",
  },
  {
    icon: WalletCards,
    title: "Release wallet payouts",
    description:
      "Approved work can be paid out in supported Solana tokens, including stablecoin rewards for global contributors.",
  },
];

const submissionChecks = [
  "Public link to the finished work",
  "Screenshots or files matching the task requirements",
  "Short note explaining what changed and why",
  "No duplicate, misleading, or copy-paste submissions",
];

export function SubmissionStandards() {
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
      id="proof"
      className="relative border-y px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Proof that gets approved
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Make every task easier to review
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Gibwork already supports bounties, tasks, and services. The landing page should also
            show the review loop that keeps work credible: clear scope, visible proof, quality
            checks, and wallet payout.
          </p>

          <Card className="mt-8 p-5">
            <p className="text-sm font-semibold">A strong submission includes</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {submissionChecks.map((check) => (
                <li key={check} className="flex gap-3">
                  <FileCheck2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Button asChild className="group mt-8">
            <Link href={siteConfig.appUrl} target="_blank">
              Explore live work
              <ArrowRight className="size-0 -ml-2 transition-all group-hover:ml-0 group-hover:size-5" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {approvalSteps.map((step) => (
            <motion.div key={step.title} variants={FADE_UP_ANIMATION_VARIANTS}>
              <Card className="h-full p-5">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
