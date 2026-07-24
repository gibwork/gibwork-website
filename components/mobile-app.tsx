"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AppleLogoMark } from "@/components/logo/apple";
import { GooglePlayLogoMark } from "@/components/logo/googleplay";
import { siteConfig } from "@/lib/site-config";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const features = [
  "Browse and filter open bounties on the go",
  "Submit work and message creators from your phone",
  "Get paid in USDC or any Solana token, straight to your wallet",
];

const previewTasks = [
  { title: "Write API docs for the SDK", amount: "250", token: "usdc" },
  { title: "Design a landing page hero", amount: "500", token: "usdc" },
  { title: "Fix a Solana program bug", amount: "3", token: "sol" },
];

export function MobileApp() {
  return (
    <motion.section
      id="app"
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
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="relative shrink-0 mx-auto"
      >
        <div className="relative w-[260px] h-[540px] rounded-[2.5rem] border-8 border-foreground/90 bg-background shadow-xl overflow-hidden">
          <div className="absolute top-2 inset-x-0 flex justify-center">
            <div className="h-1.5 w-20 rounded-full bg-foreground/20" />
          </div>
          <div className="pt-10 px-4 pb-4 flex flex-col gap-3 h-full">
            <div className="flex items-center gap-2">
              <Image
                alt=""
                src="/work-logo.png"
                width={28}
                height={28}
                className="size-7 rounded-md"
              />
              <p className="font-bold text-lg">gibwork</p>
            </div>
            <p className="text-xs font-semibold text-muted-foreground mt-1">
              OPEN BOUNTIES
            </p>
            <div className="flex flex-col gap-2">
              {previewTasks.map((task) => (
                <div
                  key={task.title}
                  className="rounded-lg border bg-card p-3 flex items-center gap-2"
                >
                  <p className="text-xs font-medium grow leading-tight">
                    {task.title}
                  </p>
                  <div className="flex items-center gap-1 shrink-0 font-semibold">
                    <span className="text-xs">{task.amount}</span>
                    <Image
                      alt={task.token}
                      src={`/token-${task.token}.png`}
                      width={16}
                      height={16}
                      className="size-4 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col grow items-center text-center lg:items-start lg:text-left">
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-primary font-semibold text-sm"
        >
          MOBILE APP
        </motion.p>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl mt-2"
        >
          Your work, in your pocket
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-3 text-muted-foreground max-w-md"
        >
          Browse bounties, submit work, and track your earnings from anywhere.
          Payouts settle on-chain to a wallet you control &mdash; no middlemen,
          no waiting.
        </motion.p>

        <motion.ul
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground max-w-md"
        >
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-left">
              <Check className="size-4 mt-0.5 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          {siteConfig.androidUrl && (
            <Link
              href={siteConfig.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Gibwork on Google Play"
              className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 text-white px-5 h-14 hover:bg-neutral-800 transition-colors"
            >
              <GooglePlayLogoMark className="size-7" />
              <span className="flex flex-col leading-none text-left">
                <span className="text-[10px] opacity-80">GET IT ON</span>
                <span className="text-lg font-semibold mt-0.5">Google Play</span>
              </span>
            </Link>
          )}
          {siteConfig.iosUrl && (
            <Link
              href={siteConfig.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Gibwork on the App Store"
              className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 text-white px-5 h-14 hover:bg-neutral-800 transition-colors"
            >
              <AppleLogoMark className="size-6" />
              <span className="flex flex-col leading-none text-left">
                <span className="text-[10px] opacity-80">Download on the</span>
                <span className="text-lg font-semibold mt-0.5">App Store</span>
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
