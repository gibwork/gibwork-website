"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import {
  ShieldCheck,
  Twitter,
  MessageSquare,
  GitPullRequest,
  Users,
  Wallet,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const taskBadges = [
  {
    title: "Verified-only",
    description: "Requires identity verification via Solana wallet signature",
    icon: Wallet,
  },
  {
    title: "GitHub required",
    description: "Connected GitHub profile needed for PR tracking and validation",
    icon: GitPullRequest,
  },
  {
    title: "Wallet/payment required",
    description: "Verified payment address or connected wallet needed for payout",
    icon: ShieldCheck,
  },
  {
    title: "X required",
    description: "Connected X (Twitter) account needed for submission",
    icon: Twitter,
  },
  {
    title: "Discord required",
    description: "Active community member in project Discord",
    icon: MessageSquare,
  },
  {
    title: "Minimum followers",
    description: "Specific social audience or reach threshold",
    icon: Users,
  },
  {
    title: "Submission limit",
    description: "Cap on total entries or max submissions per worker",
    icon: Layers,
  },
  {
    title: "Sponsor approval required",
    description: "Deliverables are reviewed before funds are released",
    icon: CheckCircle2,
  },
];

export function TaskRequirements() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="py-20 sm:py-28 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl tracking-tight"
        >
          Know what each task needs before you start
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Gibwork tasks can require verified profiles, connected accounts, GitHub PRs,
          product feedback, social deliverables, or other specific proof. Clear
          requirements help workers choose tasks they can actually complete.
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {taskBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={idx}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="p-5 sm:p-6 rounded-xl border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg">{badge.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {badge.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t flex items-center text-xs font-medium text-primary/80">
                <CheckCircle2 className="size-3.5 mr-1.5" />
                Requirement Criteria
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
