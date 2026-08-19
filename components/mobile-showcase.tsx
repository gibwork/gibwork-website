"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Smartphone, Zap, DollarSign, Bell, ShieldCheck, Compass } from "lucide-react";

const mobileFeatures = [
  {
    icon: Compass,
    title: "Browse Tasks on the Go",
    description: "Explore hundreds of verified crypto bounties and dev tasks filtered by skills and rewards.",
  },
  {
    icon: Zap,
    title: "Instant Application",
    description: "Submit proposals and claim work in seconds directly from your mobile device.",
  },
  {
    icon: DollarSign,
    title: "Real-time Earnings Tracker",
    description: "Track submitted work status, escrow balances, and instant USDC/SOL payout notifications.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Never miss a high-value bounty alert or review comment with real-time push alerts.",
  },
];

export function MobileShowcase() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <motion.div
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
        className="rounded-3xl border bg-gradient-to-b from-card/80 to-card/40 p-8 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-md"
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 size-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 size-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Copy and Features */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                <Smartphone className="size-3.5" /> Mobile Experience
              </span>
            </motion.div>

            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 tracking-tight"
            >
              Take Gibwork Anywhere with the Mobile App
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Designed for speed and simplicity. Discover high-reward bounties, manage your active tasks, and get notified the moment rewards are released to your wallet.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full"
            >
              {mobileFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border bg-background/50 backdrop-blur-sm flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <div className="size-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Icon className="size-4" />
                      </div>
                      {feat.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* App Store & Google Play Download CTAs */}
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t w-full"
            >
              <Link
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-0.91.04-2.04.62-2.69 1.37-.57.65-1.07 1.71-0.93 2.74 1.01.08 2.08-.49 2.7-1.24z" />
                </svg>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] opacity-80 uppercase tracking-wider">Download on the</span>
                  <span className="font-bold text-sm">App Store</span>
                </div>
              </Link>

              <Link
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border text-foreground font-semibold text-sm hover:bg-muted transition-colors shadow-sm"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.597 1.597 0 0 1-.61-.954V2.768c.07-.37.288-.707.609-.954zm11.233 11.234l2.457 2.457-12.01 6.89 9.553-9.347zm2.457-2.096L14.842 8.495 5.29 -.852l12.009 6.89zm1.05 1.048c.37.214.651.57.651 1 0 .43-.281.786-.651 1l-2.096 1.2-2.457-2.2 2.457-2.2 2.096 1.2z" />
                </svg>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] opacity-80 uppercase tracking-wider">Get it on</span>
                  <span className="font-bold text-sm">Google Play</span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual Device Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="relative w-full max-w-xs sm:max-w-sm rounded-[2.5rem] border-4 border-foreground/20 bg-background p-4 shadow-2xl"
            >
              {/* Phone Header Notch / Island */}
              <div className="mx-auto h-4 w-28 rounded-full bg-foreground/10 mb-4" />

              {/* Mock Screen Content */}
              <div className="flex flex-col gap-3 rounded-2xl bg-muted/40 p-4 border text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">Active Bounties</span>
                  <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>

                {/* Mock Card 1 */}
                <div className="rounded-xl border bg-card p-3 shadow-xs">
                  <div className="flex justify-between items-center text-xs font-semibold text-foreground">
                    <span>Rust Sol-Client Core</span>
                    <span className="text-emerald-500 font-bold">$1,200 USDC</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">
                    Implement asynchronous zero-copy transaction pipeline for RPC node endpoints.
                  </p>
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[9px] bg-muted px-1.5 py-0.5 rounded font-mono">Rust</span>
                    <span className="text-[9px] bg-muted px-1.5 py-0.5 rounded font-mono">Solana</span>
                  </div>
                </div>

                {/* Mock Card 2 */}
                <div className="rounded-xl border bg-card p-3 shadow-xs">
                  <div className="flex justify-between items-center text-xs font-semibold text-foreground">
                    <span>Mobile Wallet Connect</span>
                    <span className="text-emerald-500 font-bold">$650 USDC</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">
                    Add native biometric authorization for non-custodial key signers.
                  </p>
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[9px] bg-muted px-1.5 py-0.5 rounded font-mono">React Native</span>
                    <span className="text-[9px] bg-muted px-1.5 py-0.5 rounded font-mono">Security</span>
                  </div>
                </div>

                {/* Mock Payout Notification */}
                <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-3 flex items-center gap-2.5">
                  <div className="size-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                    <ShieldCheck className="size-3.5" />
                  </div>
                  <div className="flex flex-col text-[10px]">
                    <span className="font-semibold text-foreground">Bounty Verified & Paid</span>
                    <span className="text-muted-foreground">+500 USDC transferred to wallet</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
