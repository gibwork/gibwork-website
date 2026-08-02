"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Search,
  WalletCards,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Discover active bounties",
    description: "Explore opportunities across design, development, content, and growth.",
  },
  {
    icon: CheckCircle2,
    title: "Submit work on the go",
    description: "Review requirements and send completed work directly from your phone.",
  },
  {
    icon: WalletCards,
    title: "Follow earnings and payouts",
    description: "Keep submissions, status updates, and earnings together in one place.",
  },
];

const previewBounties = [
  { label: "Design", title: "Refresh a product onboarding flow", reward: "$250 USDC" },
  { label: "Content", title: "Create a launch walkthrough", reward: "$100 USDC" },
];

export function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="relative overflow-hidden border-y bg-foreground/[0.025] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium"
          >
            <Apple className="size-4" aria-hidden="true" />
            Gibwork for iPhone
          </motion.div>
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-5 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Your next opportunity fits in your pocket.
          </motion.h2>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Find funded work, submit deliverables, and follow every decision without
            waiting until you are back at your desk.
          </motion.p>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
          >
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-9">
            <Button asChild className="group">
              <Link href={siteConfig.appStoreUrl} target="_blank">
                <Apple className="size-4" aria-hidden="true" />
                Download on the App Store
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[390px]"
          aria-label="Preview of the Gibwork iPhone app"
        >
          <div className="absolute -inset-12 -z-10 rounded-full bg-primary/15 blur-3xl" />
          <div className="rounded-[3rem] border-[10px] border-foreground bg-background p-2 shadow-2xl shadow-primary/15">
            <div className="relative overflow-hidden rounded-[2.25rem] bg-muted/60 px-4 pb-6 pt-5">
              <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground" />
              <div className="mb-7 mt-8 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Good morning</p>
                  <p className="font-semibold">Find your next bounty</p>
                </div>
                <div className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  GW
                </div>
              </div>

              <div className="rounded-2xl bg-foreground p-4 text-background">
                <p className="text-xs opacity-70">Available earnings</p>
                <p className="mt-1 text-2xl font-semibold">$1,240 USDC</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs opacity-80">
                  <Clock3 className="size-3.5" aria-hidden="true" />
                  3 submissions in review
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="font-semibold">Recommended</p>
                <span className="text-xs font-medium text-primary">View all</span>
              </div>
              <div className="mt-3 space-y-3">
                {previewBounties.map((bounty) => (
                  <div key={bounty.title} className="rounded-2xl border bg-background p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary">
                        {bounty.label}
                      </span>
                      <span className="text-xs font-semibold">{bounty.reward}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-5">{bounty.title}</p>
                    <div className="mt-3 h-1.5 rounded-full bg-muted">
                      <div className="h-full w-2/3 rounded-full bg-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
