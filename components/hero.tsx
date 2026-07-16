"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
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
      className="relative flex pt-16 sm:pt-24 pb-16 sm:pb-24 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      {/* Badge */}
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"} className="gap-1.5">
          <div className="size-1.5 rounded-full bg-green-500" />
          Onchain work marketplace on Solana
        </Badge>
      </motion.div>

      {/* Headline */}
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0 mt-4">
        <SparklesText
          text="Get paid to build Web3"
          className="font-semibold text-5xl sm:text-6xl"
        />
      </motion.div>

      {/* Subtext */}
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-xl mt-5 w-full sm:text-lg text-muted-foreground leading-relaxed"
      >
        Post tasks, run open-source bounties on GitHub issues, and pay
        contributors instantly with any Solana SPL token — funds held in escrow
        until work is approved.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-col sm:flex-row items-center gap-3 mt-8"
      >
        <Button asChild className="group w-full sm:w-auto">
          <Link href={siteConfig.appUrl} target="_blank">
            Start for free
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button asChild variant={"outline"} className="gap-2 w-full sm:w-auto">
          <Link href={"https://docs.gib.work"} target="_blank">
            <Github className="size-4" />
            Post a bounty
          </Link>
        </Button>
      </motion.div>

      {/* Powered by Solana */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-2 text-sm mt-4"
      >
        <span className="opacity-60 text-xs">powered by</span>
        <Link
          href={"https://solana.com/"}
          target="_blank"
          className="hover:scale-105 transition-all"
        >
          <SolanaLogoType className="w-20 fill-foreground" />
        </Link>
      </motion.div>

      {/* Dashboard screenshot */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-16 sm:mt-24 relative z-0 w-full"
      >
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full shadow-2xl">
          <Image alt="Gibwork app dashboard" src={dashboard} priority />
        </div>
        {/* Softer fade — only covers the bottom third so the dashboard is visible */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </motion.div>
    </motion.section>
  );
}
