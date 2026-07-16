"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-3.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SparklesText from "./ui/sparkles-text";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Hero() {
  return (
    /**
     * PARALLAX BASE LAYER:
     * - sticky top-0 z-0 → pins in place while z-10 sections scroll over it
     * - h-screen overflow-hidden → full viewport, clips dashboard image bottom
     * - bg-background → explicit so nothing bleeds through
     * Layout: flex column — text block on top, image panel below, no overlap
     */
    <section className="sticky top-0 z-0 h-screen overflow-hidden bg-background flex flex-col">

      {/* ── Text content: flex-none, sits at top with nav clearance ── */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex-none flex flex-col items-center text-center px-4 sm:px-6 pt-24 sm:pt-28 pb-6"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant={"secondary"}>
            <div className="size-1.5 rounded-full bg-primary mr-2 animate-pulse" />
            Introducing gibwork
            <div className="size-1.5 rounded-full bg-primary ml-2 animate-pulse" />
          </Badge>
        </motion.div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative">
          <SparklesText
            text="Find Talent, Find Work"
            className="font-semibold text-4xl sm:text-6xl lg:text-7xl mt-4"
          />
        </motion.div>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="max-w-xl mt-3 w-full sm:text-lg text-muted-foreground"
        >
          Whether you&apos;re searching for your next gig or seeking skilled individuals, our
          platform connects you with the perfect match.
        </motion.p>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Button className="group mt-5 text-base px-6 py-5" asChild>
            <Link href={siteConfig.appUrl} target="_blank">
              Get Started For Free
              <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="flex items-center gap-2 text-sm mt-3"
        >
          <span className="opacity-60">powered by</span>
          <Link
            href={"https://solana.com/"}
            target="_blank"
            className="hover:scale-105 transition-all"
          >
            <SolanaLogoType className="w-20 fill-foreground" />
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Dashboard image: flex-1 fills all remaining viewport height ── */}
      <div className="flex-1 min-h-0 relative flex justify-center">
        <div className="w-full max-w-7xl px-2 sm:px-4 flex flex-col h-full">
          <div className="rounded-t-lg bg-foreground/5 h-2 mx-8" />
          <div className="rounded-t-lg bg-foreground/10 h-2 mx-4" />
          <div className="rounded-t-xl overflow-hidden border border-b-0 bg-muted w-full flex-1 min-h-0">
            <Image
              alt="Gibwork dashboard"
              src={dashboard}
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full"
            />
          </div>
        </div>
        {/* Gradient fade at the bottom to blend into parallax */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
      </div>

    </section>
  );
}
