"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="relative py-24 sm:py-32 border-y px-4 sm:px-6 flex items-center w-full max-w-7xl mx-auto justify-center flex-col overflow-hidden"
    >
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-primary font-semibold text-sm"
      >
        GET STARTED TODAY
      </motion.p>
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-3xl sm:text-4xl text-center mt-2"
      >
        Ready to earn your first crypto payment?
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-3 text-muted-foreground max-w-md"
      >
        Join thousands of contributors and hundreds of Web3 projects. Connect your wallet and
        start in minutes — no fees, no middlemen.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-3 mt-8 flex-wrap justify-center"
      >
        <Button asChild className="group">
          <Link href={siteConfig.appUrl} target="_blank">
            Get Started Free
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="https://docs.gib.work/" target="_blank">
            Read the Docs
          </Link>
        </Button>
      </motion.div>

      <Ripple mainCircleSize={320} numCircles={8} mainCircleOpacity={0.2} />
    </motion.section>
  );
}
