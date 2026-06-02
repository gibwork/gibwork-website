"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Smartphone, Bell, Search, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Search,
    title: "Browse on the Go",
    description: "Discover bounties and tasks from anywhere, anytime.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Get instant alerts for new tasks, submissions, and payments.",
  },
  {
    icon: Zap,
    title: "Submit Work Fast",
    description: "Complete tasks and submit work directly from your phone.",
  },
  {
    icon: Smartphone,
    title: "Wallet Connected",
    description: "Connect your Solana wallet and receive payments instantly.",
  },
];

export function MobileApp() {
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
      id="mobile"
      className="relative py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl border-y overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">
            Mobile App
          </p>
          <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
            Work doesn&apos;t wait. <br className="hidden sm:block" />
            <span className="text-primary">Neither should you.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Download the Gibwork app and take the marketplace with you. 
            Browse bounties, submit work, track progress, and get paid — all from your phone.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <feature.icon className="size-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{feature.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Button asChild variant="outline" className="gap-2">
              <Link href={siteConfig.appStoreUrl} target="_blank">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.92.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href={siteConfig.playStoreUrl} target="_blank">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
                </svg>
                Google Play
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative lg:h-[480px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm mx-auto">
            {/* Phone mockup */}
            <div className="relative bg-card border-2 rounded-[2.5rem] p-3 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-card border-x-2 border-b-2 rounded-b-xl" />
              <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/16] max-h-[420px]">
                <div className="p-4 h-full flex flex-col">
                  {/* Mock header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">G</span>
                      </div>
                      <span className="font-semibold text-sm">gibwork</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-muted" />
                  </div>
                  {/* Mock balance */}
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4 mb-4">
                    <p className="text-xs text-muted-foreground">Total Earnings</p>
                    <p className="text-2xl font-bold">$9,320.00</p>
                  </div>
                  {/* Mock tabs */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 py-2 px-3 bg-primary text-primary-foreground rounded-lg text-center text-xs font-medium">
                      Looking For Work
                    </div>
                    <div className="flex-1 py-2 px-3 bg-muted rounded-lg text-center text-xs text-muted-foreground">
                      To Hire
                    </div>
                  </div>
                  {/* Mock task list */}
                  <div className="space-y-3 flex-1 overflow-hidden">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg border">
                        <div className="w-10 h-10 rounded-full bg-muted shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                          <div className="h-2 bg-muted/50 rounded w-1/2" />
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-semibold">500 USDC</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
