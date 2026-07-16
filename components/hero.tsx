"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SparklesText from "./ui/sparkles-text";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { AnimatedCounter } from "./animated-counter";
import { MarketplaceDashboard } from "./marketplace-dashboard";


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
      className="relative flex pt-16 sm:pt-24 pb-24 sm:pb-32 px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side - Messaging */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="flex flex-col justify-center"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <Badge variant={"secondary"} className="bg-primary/10 border-primary/20 text-primary w-fit">
              <div className="size-1 rounded-full bg-primary mr-2" />
              Freelancing Built Onchain
              <div className="size-1 rounded-full bg-primary ml-2" />
            </Badge>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0 mt-6">
            <SparklesText
              text="Freelancing Built Onchain"
              className="font-semibold text-5xl sm:text-6xl lg:text-7xl leading-tight"
            />
          </motion.div>

          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="max-w-xl mt-6 text-lg sm:text-xl text-muted-foreground"
          >
            Simple workflow, instant results. From task creation to payment, the entire process happens onchain with transparency and speed.
          </motion.p>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap items-center gap-4 mt-8">
            <Button className="group font-bold text-lg px-8 py-6" size="lg" asChild>
              <Link href={siteConfig.appUrl} target="_blank">
                Create Task
                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
              </Link>
            </Button>
            <Button className="group font-bold text-lg px-8 py-6" variant="outline" size="lg" asChild>
              <Link href={siteConfig.appUrl} target="_blank">
                Explore Tasks
                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="grid grid-cols-2 gap-4 mt-12"
          >
            <div className="p-4 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <p className="text-3xl font-bold text-primary">
                $<AnimatedCounter value={12.8} decimals={1} />M+
              </p>
              <p className="text-sm text-muted-foreground mt-1">Total Payouts</p>
            </div>
            <div className="p-4 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <p className="text-3xl font-bold text-primary">
                <AnimatedCounter value={18732} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Contributors</p>
            </div>
            <div className="p-4 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <p className="text-3xl font-bold text-primary">
                <AnimatedCounter value={24851} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Tasks Completed</p>
            </div>
            <div className="p-4 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <p className="text-3xl font-bold text-primary">
                <AnimatedCounter value={3652} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Projects Served</p>
            </div>
          </motion.div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex items-center gap-2 text-sm mt-8"
          >
            <span className="opacity-80">powered by</span>
            <Link
              href={"https://solana.com/"}
              target="_blank"
              className="hover:scale-105 transition-all"
            >
              <SolanaLogoType className="w-20 fill-foreground" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Product Showcase */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative"
        >
          <MarketplaceDashboard />
        </motion.div>
      </div>
    </motion.section>
  );
}
