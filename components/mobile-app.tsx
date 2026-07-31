"use client";

import { Button } from "@/components/ui/button";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import logo from "@/public/work-logo.png";
import usdc from "@/public/token-usdc.png";
import {
  Apple,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Search,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const mobileBenefits = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse opportunities wherever you are.",
  },
  {
    icon: CheckCircle2,
    title: "Track",
    description: "Follow submissions and approvals in one place.",
  },
  {
    icon: WalletCards,
    title: "Earn",
    description: "Keep rewards close in your non-custodial wallet.",
  },
];

export function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="relative overflow-hidden rounded-[2rem] border bg-[#0b0a12] px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-14 lg:px-16">
        <div
          className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-primary/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -left-32 size-[30rem] rounded-full bg-emerald-400/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
            >
              <Smartphone className="size-3.5" aria-hidden="true" />
              Gibwork for iOS and Android
            </motion.div>

            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-5 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl"
            >
              Work moves fast. Take Gibwork with you.
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Find new opportunities, manage submissions, and keep an eye on
              rewards from the mobile app—without waiting to get back to your
              desk.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="h-14 justify-start rounded-2xl bg-white px-5 text-black hover:bg-white/90"
              >
                <Link
                  href={siteConfig.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download Gibwork on the App Store"
                >
                  <Apple className="mr-3 size-6" aria-hidden="true" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wide text-black/60">
                      Download on the
                    </span>
                    <span className="block text-base font-semibold">
                      App Store
                    </span>
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="h-14 justify-start rounded-2xl border border-white/20 bg-white/5 px-5 text-white hover:bg-white/10"
              >
                <Link
                  href={siteConfig.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get Gibwork on Google Play"
                >
                  <Play
                    className="mr-3 size-6 fill-current"
                    aria-hidden="true"
                  />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wide text-white/60">
                      Get it on
                    </span>
                    <span className="block text-base font-semibold">
                      Google Play
                    </span>
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {mobileBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="flex gap-3 sm:block">
                    <Icon
                      className="mt-0.5 size-5 shrink-0 text-violet-300"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="mt-0 sm:mt-2 text-sm font-semibold">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[22rem]"
          >
            <div
              className="absolute inset-x-8 bottom-0 h-20 rounded-full bg-primary/40 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative rounded-[2.75rem] border border-white/15 bg-black p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2.25rem] bg-[#f7f7fb] text-[#111018]">
                <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-black" />

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={logo}
                        alt="Gibwork"
                        className="size-9 rounded-xl"
                      />
                      <div>
                        <p className="text-xs text-black/45">Welcome back</p>
                        <p className="text-sm font-semibold">
                          Find your next win
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex size-9 items-center justify-center rounded-full border border-black/10 bg-white"
                      aria-hidden="true"
                    >
                      <Search className="size-4" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl bg-[#17141f] p-5 text-white shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-violet-400/15 px-2.5 py-1 text-[10px] font-medium text-violet-200">
                        DEVELOPMENT
                      </span>
                      <ArrowUpRight
                        className="size-4 text-white/45"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-4 text-lg font-semibold leading-snug">
                      Improve a product experience
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      Ship a meaningful enhancement and submit proof of work.
                    </p>
                    <div className="mt-5 flex items-end justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src={usdc}
                          alt="USDC"
                          className="size-7 rounded-full"
                        />
                        <div>
                          <p className="text-[10px] text-white/40">
                            Reward pool
                          </p>
                          <p className="text-sm font-semibold">350 USDC</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-white/45">
                        Open now
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-black/5 bg-white p-4">
                      <ShieldCheck
                        className="size-5 text-emerald-500"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-xs font-semibold">
                        Proof attached
                      </p>
                      <p className="mt-1 text-[10px] text-black/40">
                        Ready for review
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/5 bg-white p-4">
                      <WalletCards
                        className="size-5 text-violet-500"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-xs font-semibold">Wallet ready</p>
                      <p className="mt-1 text-[10px] text-black/40">
                        Non-custodial
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-emerald-500/15 bg-emerald-50 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <CheckCircle2 className="size-5" aria-hidden="true" />
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold">
                          Submission approved
                        </p>
                        <p className="mt-0.5 text-[10px] text-black/45">
                          Reward released to your wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-black/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
