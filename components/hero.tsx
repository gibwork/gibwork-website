"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SparklesText from "./ui/sparkles-text";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Hero() {
  return (
    <motion.section
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
      className="relative flex pt-16 sm:pt-24 pb-24 sm:pb-32 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"} className="gap-2">
          <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
          Now on iOS & Android
        </Badge>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          text="The Onchain Work Marketplace"
          className="font-semibold text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-4xl"
        />
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-2xl mt-6 w-full sm:text-lg text-muted-foreground"
      >
        Post bounties, find freelance work, and get paid in crypto — all on Solana.
        From open-source GitHub issues to private consulting gigs, Gibwork connects 
        talent with opportunity worldwide.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        <Button className="group" asChild size="lg">
          <Link href={siteConfig.appUrl} target="_blank">
            Get Started For Free
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button variant="outline" className="gap-2" asChild size="lg">
          <Link href={siteConfig.youtubeUrl} target="_blank">
            <Play className="size-4" />
            Watch Demo
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center justify-center gap-4 mt-6"
      >
        {/* App Store Badges */}
        <Link
          href={siteConfig.appStoreUrl}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-background hover:bg-accent transition-colors"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.92.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <p className="text-[10px] leading-none text-muted-foreground">Download on the</p>
            <p className="text-sm font-semibold leading-tight">App Store</p>
          </div>
        </Link>
        <Link
          href={siteConfig.playStoreUrl}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-background hover:bg-accent transition-colors"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
            <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
          </svg>
          <div className="text-left">
            <p className="text-[10px] leading-none text-muted-foreground">Get it on</p>
            <p className="text-sm font-semibold leading-tight">Google Play</p>
          </div>
        </Link>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-2 text-sm mt-6"
      >
        <span className="opacity-80">secured by</span>
        <Link
          href={"https://solana.com/"}
          target="_blank"
          className="hover:scale-105 transition-all"
        >
          <SolanaLogoType className="w-20 fill-foreground" />
        </Link>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-6 mt-4 text-xs text-muted-foreground"
      >
        <span className="flex items-center gap-1.5">
          <div className="size-1.5 rounded-full bg-green-500" />
          No platform fees
        </span>
        <span className="flex items-center gap-1.5">
          <div className="size-1.5 rounded-full bg-green-500" />
          Instant settlement
        </span>
        <span className="flex items-center gap-1.5">
          <div className="size-1.5 rounded-full bg-green-500" />
          Non-custodial
        </span>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-16 sm:mt-24 relative z-0 w-full max-w-5xl mx-auto"
      >
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full shadow-2xl">
          <Image alt="Gibwork Dashboard" src={dashboard} className="w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
      </motion.div>
    </motion.section>
  );
}
