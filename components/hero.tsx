"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, PlusCircle, Search } from "lucide-react";
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
        <Badge variant={"secondary"}>
          <div className="size-1 rounded-full bg-muted-foreground mr-2" />
          Introducing gibwork
          <div className="size-1 rounded-full bg-muted-foreground ml-2" />
        </Badge>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          text="Find Talent, Find Work"
          className="font-semibold text-5xl sm:text-6xl mt-4"
        />
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground"
      >
        Whether you&apos;re searching for your next gig or seeking skilled individuals, our platform
        connects you with the perfect match.
      </motion.p>

      {/* 3-split CTA buttons */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8"
      >
        <Button className="group" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            <Search className="size-4 mr-2" />
            Browse Tasks
            <ArrowRight className="size-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </Button>

        <Button variant="secondary" className="group" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            <PlusCircle className="size-4 mr-2" />
            Post a Task
          </Link>
        </Button>

        <Button variant="outline" className="group" asChild>
          <Link href="#how-payments-work">
            <HelpCircle className="size-4 mr-2" />
            Learn How Payments Work
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-2 text-sm mt-6"
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

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-16 sm:mt-24 relative z-0">
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full">
          <Image alt="" src={dashboard} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60" />
      </motion.div>
    </motion.section>
  );
}
