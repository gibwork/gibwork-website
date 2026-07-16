"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Ripple from "./ui/ripple";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
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
      className="relative py-24 sm:py-32 border-y px-4 sm:px-6 flex items-center w-full max-w-7xl mx-auto justify-center flex-col overflow-hidden"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center">
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-primary font-semibold text-sm uppercase tracking-wider mb-3"
        >
          Ready to start?
        </motion.p>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center"
        >
          Your next opportunity is
          <br />
          <span className="text-primary">one click away</span>
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-center mt-4 text-muted-foreground max-w-xl mx-auto"
        >
          Join 12,000+ professionals already earning on Gibwork. 
          Create your account in seconds with just a Solana wallet.
        </motion.p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        <Button asChild className="group" size="lg">
          <Link href={siteConfig.appUrl} target="_blank">
            Launch App
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button variant="outline" asChild className="gap-2" size="lg">
          <Link href={siteConfig.playStoreUrl} target="_blank">
            <Download className="size-4" />
            Download Mobile App
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
      >
        <span className="flex items-center gap-1.5">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Non-custodial
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          Instant payments
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          12K+ happy users
        </span>
      </motion.div>

      <Ripple mainCircleSize={320} numCircles={8} mainCircleOpacity={0.2} />
    </motion.section>
  );
}
