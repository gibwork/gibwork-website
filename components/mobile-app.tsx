"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDownToLine,
  Bell,
  Briefcase,
  CheckCircle2,
  Send,
  Star,
  Wallet,
} from "lucide-react";
import workLogo from "@/public/work-logo.png";
import taskOne from "@/public/tasks/image-01.png";
import taskTwo from "@/public/tasks/image-02.png";
import taskThree from "@/public/tasks/image-03.png";

const features = [
  {
    icon: Briefcase,
    title: "Bounties across every skill",
    description:
      "Design, dev, content, marketing, writing, research, UX testing. Filter by skill, payout, and deadline.",
  },
  {
    icon: Send,
    title: "Submit work in minutes",
    description:
      "Attach a PR link, screenshots, or files and ship from your phone. Connect GitHub, X, or Discord to prove the work.",
  },
  {
    icon: Bell,
    title: "Real-time approvals",
    description:
      "Push notifications the moment a creator reviews, requests changes, or approves your work.",
  },
  {
    icon: Wallet,
    title: "USDC straight to your wallet",
    description:
      "Funds are escrowed onchain and released to your noncustodial Solana wallet the moment your submission is approved.",
  },
];

const tasksInFeed = [
  { image: taskOne, title: "Design Gibwork's new landing page", amount: 500 },
  {
    image: taskTwo,
    title: "Create developer challenges for Zircon",
    amount: 500,
  },
  {
    image: taskThree,
    title: "Share a set of links on X or Reddit",
    amount: 100,
  },
];

export function MobileApp() {
  return (
    <motion.section
      id="mobile-app"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Phone mockup */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative order-2 lg:order-1 flex justify-center"
        >
          <div className="absolute inset-0 -z-10 mx-auto h-[500px] w-[500px] max-w-full rounded-full bg-primary/10 dark:bg-primary/30 blur-3xl" />

          {/* Device frame */}
          <div className="isolate relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2.5rem] border-[10px] border-black bg-black shadow-2xl shadow-black/20">
            {/* Dynamic Island */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-black rounded-full z-20 shadow-inner" />

            {/* Screen - forced light mode regardless of site theme */}
            <div className="force-light absolute inset-0 rounded-[1.75rem] overflow-hidden bg-background flex flex-col">
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-2 pb-3 text-[10px] font-semibold">
                <span className="pl-1">9:41</span>
                <div className="flex items-center gap-1 opacity-70 pr-1">
                  <div className="h-2 w-3 rounded-sm bg-foreground" />
                  <div className="h-2 w-2 rounded-full bg-foreground" />
                  <div className="h-2 w-4 rounded-sm border border-foreground" />
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b">
                <div className="flex items-center gap-2">
                  <Image
                    src={workLogo}
                    alt=""
                    className="size-7 rounded-md"
                    width={28}
                    height={28}
                  />
                  <span className="font-bold text-sm">gibwork</span>
                </div>
                <Bell className="size-4 text-muted-foreground" />
              </div>

              {/* Earnings card */}
              <div className="mx-3 mt-3 rounded-xl bg-primary p-3 text-primary-foreground">
                <p className="text-[10px] uppercase tracking-wide opacity-70">
                  Lifetime earnings
                </p>
                <p className="text-xl font-bold mt-0.5">$1,148.00</p>
                <div className="flex items-center gap-1 mt-1 text-[10px] opacity-80">
                  <ArrowDownToLine className="size-3" />
                  Paid in USDC · Solana
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 px-4 mt-4 text-[11px] font-semibold border-b">
                <span className="border-b-2 border-foreground pb-2">
                  For you
                </span>
                <span className="text-muted-foreground pb-2">Bounties</span>
                <span className="text-muted-foreground pb-2">Tasks</span>
              </div>

              {/* Task list */}
              <div className="flex flex-col gap-2 px-3 mt-3 overflow-hidden">
                {tasksInFeed.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg border p-2 bg-card"
                  >
                    <div className="relative size-9 shrink-0 rounded-full overflow-hidden bg-muted">
                      <Image
                        alt=""
                        src={t.image}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div className="grow min-w-0">
                      <p className="text-[10.5px] font-semibold truncate leading-tight">
                        {t.title}
                      </p>
                      <p className="text-[9px] text-muted-foreground mt-0.5">
                        ${t.amount} USDC
                      </p>
                    </div>
                    <div className="text-[9px] font-semibold rounded-md bg-secondary px-1.5 py-0.5">
                      Open
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom toast */}
              <div className="mx-3 mt-auto mb-4 rounded-lg border bg-card p-2.5 flex items-center gap-2 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-1">
                  <CheckCircle2 className="size-3 text-emerald-600" />
                </div>
                <div className="grow min-w-0">
                  <p className="text-[10px] font-semibold">
                    Submission approved
                  </p>
                  <p className="text-[9px] text-muted-foreground truncate">
                    +$120 USDC sent to your wallet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy + features */}
        <div className="order-1 lg:order-2 lg:text-left text-center">
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <Badge variant="secondary" className="mb-4">
              MOBILE
            </Badge>
          </motion.div>

          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-semibold text-3xl sm:text-4xl"
          >
            Find bounties. Get paid. From anywhere.
          </motion.h2>

          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-3 text-muted-foreground max-w-xl lg:mx-0 mx-auto"
          >
            Built for modern online work: simple tasks, clear requirements,
            real payouts in USDC. Browse bounties, submit work, and watch USDC
            land in your wallet, all from your phone.
          </motion.p>

          <motion.ul
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="grid sm:grid-cols-2 gap-4 mt-8"
          >
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-3 text-left">
                <div className="rounded-md border bg-card p-2 shrink-0">
                  <f.icon className="size-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{f.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-3"
          >
            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            >
              <AppleIcon className="size-7" />
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-70 leading-none">
                  Download on the
                </div>
                <div className="text-base font-semibold leading-tight">
                  App Store
                </div>
              </div>
            </Link>

            <Link
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            >
              <GooglePlayIcon className="size-7" />
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-70 leading-none">
                  Get it on
                </div>
                <div className="text-base font-semibold leading-tight">
                  Google Play
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-4 flex flex-wrap items-center lg:justify-start justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              4.9 on App Store
            </span>
            <span className="opacity-30">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              4.5 on Google Play
            </span>
            <span className="opacity-30">·</span>
            <span>10k+ downloads</span>
          </motion.div>

          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-1.5 text-[11px] text-muted-foreground/70 lg:text-left text-center"
          >
            Also runs on macOS (Apple Silicon) and visionOS.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.6 1.5c-.3.3-.5.7-.5 1.3v18.4c0 .6.2 1 .5 1.3l11.4-11L3.6 1.5z"
        fill="#34A853"
      />
      <path
        d="M19.2 9.1l-3.7-2.1-3.5 3.4 3.4 3.4 3.8-2.1c1.2-.7 1.2-2 0-2.6z"
        fill="#FBBC04"
      />
      <path
        d="M3.6 22.5c.4.4 1 .4 1.7.1l13.4-7.6-3.8-3.7L3.6 22.5z"
        fill="#EA4335"
      />
      <path
        d="M15 10.4L5.3 1.4C4.6 1 4 1 3.6 1.4L14.9 12 15 10.4z"
        fill="#4285F4"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.05 12.94c-.03-3.13 2.56-4.64 2.67-4.71-1.45-2.13-3.72-2.42-4.52-2.45-1.93-.2-3.76 1.13-4.74 1.13-.98 0-2.49-1.1-4.09-1.07-2.11.03-4.05 1.23-5.13 3.11-2.18 3.79-.56 9.4 1.57 12.48 1.04 1.51 2.28 3.21 3.91 3.15 1.57-.06 2.16-1.02 4.06-1.02 1.89 0 2.43 1.02 4.09.99 1.69-.03 2.76-1.55 3.8-3.07 1.2-1.76 1.69-3.47 1.72-3.55-.04-.02-3.3-1.27-3.34-5.04zM14.36 4.04c.86-1.04 1.44-2.49 1.28-3.93-1.24.05-2.74.83-3.62 1.86-.79.92-1.49 2.4-1.3 3.81 1.38.11 2.79-.7 3.64-1.74z" />
    </svg>
  );
}
