"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import { AppStoreBadge, GooglePlayBadge } from "./store-badges";
import { Star, Bell, Wallet, Check } from "lucide-react";

const features = [
  "Discover paid bounties and tasks from anywhere",
  "Submit completed work straight from your phone",
  "Track every submission from posted to paid",
  "Manage earnings and payouts in one place",
];

// Illustrative in-app cards. Swap for real screenshots when available.
const previewTasks = [
  { title: "Write a launch thread", amount: "200", token: "USDC" },
  { title: "Design a logo concept", amount: "500", token: "USDC" },
  { title: "Record a 60s demo", amount: "25", token: "USDC" },
];

export function MobileApp() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      id="mobile"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
    >
      {/* Copy */}
      <div className="w-full lg:flex-1 lg:text-left text-center flex flex-col items-center lg:items-start">
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-primary font-semibold text-sm"
        >
          NOW ON MOBILE
        </motion.p>

        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl mt-2"
        >
          Take Gibwork anywhere
        </motion.h2>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 text-muted-foreground max-w-md"
        >
          Find work, complete tasks, and get paid in crypto from your phone. The
          Gibwork app puts the entire marketplace in your pocket.
        </motion.p>

        <motion.ul
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 flex flex-col gap-3 w-full max-w-md"
        >
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-left">
              <span className="mt-0.5 shrink-0 flex items-center justify-center size-5 rounded-full bg-primary/10">
                <Check className="size-3 text-primary" />
              </span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
        >
          <AppStoreBadge href={siteConfig.appStoreUrl} />
          <GooglePlayBadge href={siteConfig.playStoreUrl} />
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 flex items-center gap-4 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-foreground">4.5</span> rating
          </span>
          <span className="h-4 w-px bg-border" />
          <span>
            <span className="font-semibold text-foreground">10K+</span> downloads
          </span>
        </motion.div>
      </div>

      {/* Device mockup */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="w-full lg:flex-1 flex justify-center"
      >
        <div className="relative w-[260px] sm:w-[280px]">
          {/* glow */}
          <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" />

          <div className="relative rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-xl overflow-hidden">
            {/* notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-foreground/90 rounded-b-2xl z-10" />

            {/* screen */}
            <div className="aspect-[9/19] bg-muted/40 flex flex-col">
              {/* header */}
              <div className="px-4 pt-8 pb-4 bg-background border-b">
                <p className="text-xs text-muted-foreground">Your balance</p>
                <p className="text-2xl font-semibold">$1,284.00</p>
              </div>

              {/* feed */}
              <div className="p-3 flex flex-col gap-2.5 grow">
                <p className="text-[11px] font-semibold text-muted-foreground px-1">
                  Open bounties
                </p>
                {previewTasks.map((task) => (
                  <div
                    key={task.title}
                    className="bg-background rounded-xl border p-3 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="size-8 rounded-full bg-primary/10 shrink-0" />
                      <p className="text-xs font-medium truncate">{task.title}</p>
                    </div>
                    <div className="text-xs font-semibold whitespace-nowrap">
                      {task.amount}{" "}
                      <span className="text-muted-foreground">{task.token}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* tab bar */}
              <div className="bg-background border-t px-6 py-3 flex items-center justify-between text-muted-foreground">
                <Wallet className="size-5 text-primary" />
                <Bell className="size-5" />
                <div className="size-5 rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
