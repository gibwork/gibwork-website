"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import {
  Apple,
  CheckCircle2,
  ExternalLink,
  Play,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const appHighlights = [
  "Browse live bounties, tasks, services, and social work from one feed.",
  "Submit proof, links, files, and updates without waiting for desktop time.",
  "Track approved rewards and wallet payouts wherever you are working.",
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
      className="w-full border-y bg-muted/30"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_0.9fr]">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mx-auto mb-4 flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary lg:mx-0"
          >
            <Smartphone className="size-6" />
          </motion.div>

          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Your work, one place.
          </motion.h2>

          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-3 text-muted-foreground"
          >
            Browse bounties, submit work, and track earnings from anywhere with
            Gibwork on iOS, Android, and web.
          </motion.p>

          <motion.ul
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-6 grid gap-3 text-left"
          >
            {appHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button asChild size="lg" className="gap-2">
              <Link href={siteConfig.appStoreUrl} target="_blank">
                <Apple className="size-5" />
                App Store
                <ExternalLink className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href={siteConfig.googlePlayUrl} target="_blank">
                <Play className="size-5" />
                Google Play
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative mx-auto h-[30rem] w-full max-w-md overflow-hidden"
        >
          <div className="absolute left-4 top-14 h-[24rem] w-[12rem] -rotate-6 rounded-[2rem] border bg-background p-3 shadow-xl sm:left-10">
            <div className="h-full rounded-[1.45rem] border bg-muted/60 p-4">
              <div className="mb-5 h-5 w-20 rounded-full bg-foreground/10" />
              <div className="space-y-3">
                <div className="rounded-md bg-background p-3 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">
                    Open bounty
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Landing page refresh
                  </p>
                  <p className="mt-2 text-xs text-primary">350 USDC</p>
                </div>
                <div className="rounded-md bg-background p-3 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">
                    Simple task
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Product walkthrough
                  </p>
                  <p className="mt-2 text-xs text-primary">300 USDC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-4 top-4 h-[27rem] w-[13rem] rotate-3 rounded-[2.25rem] border bg-background p-3 shadow-2xl sm:right-10">
            <div className="h-full rounded-[1.65rem] border bg-muted/50 p-4">
              <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-foreground/20" />
              <div className="rounded-md bg-background p-4 shadow-sm">
                <p className="text-xs font-medium text-muted-foreground">
                  Submission
                </p>
                <p className="mt-1 text-sm font-semibold">
                  PR and mobile screenshots attached
                </p>
              </div>
              <div className="mt-4 rounded-md bg-primary/10 p-4 text-primary">
                <p className="text-xs font-medium">Ready for review</p>
                <p className="mt-1 text-sm font-semibold">
                  Release reward after approval
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
