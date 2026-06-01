"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Smartphone, Star } from "lucide-react";
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
        <Link
          href={siteConfig.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge
            variant={"secondary"}
            className="gap-2 px-3 py-1 hover:bg-secondary/80 transition-colors"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            The Gibwork Android app is live
            <ArrowRight className="size-3" />
          </Badge>
        </Link>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          text="Onchain work, paid in USDC."
          className="font-semibold text-4xl sm:text-6xl mt-4 max-w-4xl"
        />
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground"
      >
        Gibwork is the onchain work marketplace. Post bounties on GitHub issues,
        complete paid tasks, or list your services — and get paid in USDC on
        Solana. From your browser or your phone.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full sm:w-auto"
      >
        <Button className="group w-full sm:w-auto" size="lg" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Open the web app
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="group w-full sm:w-auto"
          asChild
        >
          <Link
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Smartphone className="size-4" />
            Get it on Google Play
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm mt-6 text-muted-foreground"
      >
        <span className="inline-flex items-center gap-1.5">
          <Star className="size-3.5 fill-current" />
          4.5 on Google Play
        </span>
        <span className="opacity-30">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Github className="size-3.5" />
          GitHub bounties
        </span>
        <span className="opacity-30">·</span>
        <span className="inline-flex items-center gap-1.5">
          Powered by
          <Link
            href={"https://solana.com/"}
            target="_blank"
            className="hover:scale-105 transition-transform"
            aria-label="Solana"
          >
            <SolanaLogoType className="w-16 fill-foreground" />
          </Link>
        </span>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-16 sm:mt-24 relative z-0 w-full"
      >
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full">
          <Image alt="Gibwork web app dashboard" src={dashboard} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60" />
      </motion.div>
    </motion.section>
  );
}
