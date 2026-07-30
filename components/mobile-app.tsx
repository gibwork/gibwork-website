"use client";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Apple,
  BellRing,
  CheckCircle2,
  Play,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const mobileBenefits = [
  {
    icon: BellRing,
    title: "Catch new opportunities",
    description: "Browse active tasks and bounties wherever you are.",
  },
  {
    icon: CheckCircle2,
    title: "Track every submission",
    description: "Keep requirements, deadlines, and review status in one place.",
  },
  {
    icon: WalletCards,
    title: "Manage approved earnings",
    description: "Follow payouts from completed work without leaving the app.",
  },
];

export function MobileApp() {
  return (
    <motion.section
      id="mobile-app"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="relative mx-auto grid w-full max-w-7xl scroll-mt-24 gap-12 overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center"
    >
      <div className="absolute inset-x-8 top-1/2 -z-10 h-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Gibwork mobile
        </motion.p>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          Find work before the feed moves on.
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
        >
          Discover paid opportunities, submit your work, and track earnings from
          the Gibwork app. Your web account and mobile workflow stay together.
        </motion.p>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {mobileBenefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur"
            >
              <Icon aria-hidden="true" className="size-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="h-auto min-h-14 justify-start px-5">
            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Gibwork on the App Store"
            >
              <Apple aria-hidden="true" className="size-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium uppercase tracking-wide opacity-80">
                  Download on the
                </span>
                <span className="block text-base">App Store</span>
              </span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-auto min-h-14 justify-start px-5"
          >
            <Link
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Gibwork on Google Play"
            >
              <Play aria-hidden="true" className="size-6 fill-current" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  Get it on
                </span>
                <span className="block text-base">Google Play</span>
              </span>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
          Payouts are released after the work creator approves your submission.
        </motion.div>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="relative mx-auto w-full max-w-sm"
        role="img"
        aria-label="Illustration of the Gibwork mobile task feed"
      >
        <div className="absolute -inset-8 -z-10 rounded-full bg-primary/15 blur-3xl" />
        <div className="rounded-[2.75rem] border-[10px] border-foreground bg-background p-3 shadow-2xl">
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-foreground/20" />
          <div className="rounded-[2rem] bg-muted/60 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Discover</p>
                <p className="text-lg font-semibold">Work that fits you</p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/15">
                <BellRing aria-hidden="true" className="size-5 text-primary" />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border bg-background p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Development
                  </span>
                  <span className="text-sm font-semibold">350 USDC</span>
                </div>
                <p className="mt-3 text-sm font-semibold">
                  Improve a product experience
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Clear scope · tracked submission
                </p>
              </div>

              <div className="rounded-2xl border bg-background p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-600">
                    Research
                  </span>
                  <span className="text-sm font-semibold">50 USDC</span>
                </div>
                <p className="mt-3 text-sm font-semibold">
                  Write a concise ecosystem brief
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Due in 5 days · two deliverables
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-foreground p-4 text-background">
              <div className="flex items-center gap-3">
                <CheckCircle2 aria-hidden="true" className="size-5 text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold">Submission received</p>
                  <p className="text-xs text-background/65">
                    Track review and payout status
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
