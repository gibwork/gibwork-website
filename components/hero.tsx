"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SparklesText from "./ui/sparkles-text";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const stats = [
  { value: "5,000+", label: "Tasks Completed" },
  { value: "$2M+", label: "Paid to Contributors" },
  { value: "3,200+", label: "Active Members" },
  { value: "48h", label: "Avg. Completion" },
];

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="relative flex pt-16 sm:pt-24 pb-12 sm:pb-20 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"}>
          <div className="size-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
          Now live on Solana — earn crypto for real work
          <div className="size-1 rounded-full bg-muted-foreground ml-2" />
        </Badge>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          text="Earn Crypto. Find Talent."
          className="font-semibold text-5xl sm:text-6xl mt-4"
        />
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground"
      >
        gibwork is the Web3-native marketplace where skilled contributors complete real tasks
        and get paid instantly in USDC, SOL, and any Solana SPL token.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-3 mt-8 flex-wrap justify-center"
      >
        <Button className="group" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Start Earning Free
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button variant="outline" className="group" asChild>
          <Link href="#mobile-app">
            <Smartphone className="size-4 mr-1" />
            Get the Mobile App
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-2 text-sm mt-4"
      >
        <span className="opacity-80">powered by</span>
        <Link href={"https://solana.com/"} target="_blank" className="hover:scale-105 transition-all">
          <SolanaLogoType className="w-20 fill-foreground" />
        </Link>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 w-full max-w-3xl"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center p-4 rounded-xl bg-muted/50 border">
            <span className="text-2xl font-bold text-primary">{stat.value}</span>
            <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-14 sm:mt-20 relative z-0">
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full">
          <Image alt="gibwork dashboard" src={dashboard} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60" />
      </motion.div>
    </motion.section>
  );
}
