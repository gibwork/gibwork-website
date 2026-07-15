"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ArrowRight, Bell, WalletCards, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const mobileFeatures = [
  {
    icon: Bell,
    title: "Real-time updates",
    description: "Track new work, comments, approvals, and submission status while you are away from your desk.",
  },
  {
    icon: WalletCards,
    title: "Wallet-native workflow",
    description: "Browse funded work and receive stablecoin payments through the same Solana-native flow.",
  },
  {
    icon: Workflow,
    title: "Earnings dashboard",
    description: "Keep completed work, pending submissions, and payout history easy to scan from mobile.",
  },
];

export function MobileApp() {
  return (
    <motion.section
      id="mobile-app"
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
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="lg:w-[46%]">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant="secondary">Now available on iOS and Android</Badge>
        </motion.div>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 text-3xl font-semibold sm:text-4xl"
        >
          Work from anywhere, get paid on-chain.
        </motion.h2>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="mt-4 text-muted-foreground">
          The Gibwork mobile app puts bounties, task submissions, comments, and earnings in one
          pocket-sized workspace so contributors can keep momentum between deep work sessions.
        </motion.p>
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
        >
          {mobileFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="group">
            <Link href={siteConfig.googlePlayUrl} target="_blank">
              Google Play
              <ArrowRight className="size-0 transition-all group-hover:ml-0 group-hover:size-5" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={siteConfig.appStoreUrl} target="_blank">
              App Store
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid flex-1 grid-cols-2 items-end gap-4 sm:gap-6"
      >
        <div className="rounded-[2rem] border bg-background p-3 shadow-xl">
          <div className="rounded-[1.5rem] border bg-muted/50 p-4">
            <div className="mb-5 h-2 w-16 rounded-full bg-foreground/20" />
            <div className="space-y-3">
              <div className="rounded-lg bg-background p-3 shadow-sm">
                <p className="text-xs text-muted-foreground">Open bounty</p>
                <p className="mt-1 text-sm font-semibold">Fix Android deep linking</p>
                <p className="mt-3 text-sm font-semibold text-primary">$100 USDC</p>
              </div>
              <div className="rounded-lg bg-background p-3 shadow-sm">
                <p className="text-xs text-muted-foreground">Development task</p>
                <p className="mt-1 text-sm font-semibold">Landing page enhancement</p>
                <p className="mt-3 text-sm font-semibold text-primary">$350 USDC</p>
              </div>
              <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                <p className="text-xs opacity-80">Submission status</p>
                <p className="mt-1 text-sm font-semibold">Review in progress</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 rounded-[2rem] border bg-foreground p-3 text-background shadow-xl">
          <div className="rounded-[1.5rem] bg-background/10 p-4">
            <div className="mb-5 h-2 w-16 rounded-full bg-background/40" />
            <p className="text-xs text-background/70">Earnings</p>
            <p className="mt-2 text-3xl font-semibold">$1,240</p>
            <div className="mt-6 space-y-3">
              {["PR merged", "Task approved", "Payout released"].map((item) => (
                <div key={item} className="rounded-lg bg-background/10 p-3">
                  <p className="text-sm font-medium">{item}</p>
                  <p className="mt-1 text-xs text-background/60">Solana settlement ready</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
