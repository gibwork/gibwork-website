"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
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
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-3xl sm:text-4xl text-center"
      >
        Start earning today
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-3 text-muted-foreground max-w-xl"
      >
        Join thousands of builders, designers, and creators who get paid in USDC
        on Solana for the work they ship.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col sm:flex-row items-center gap-3 z-10"
      >
        <Button asChild className="group w-full sm:w-auto" size="lg">
          <Link href={siteConfig.appUrl} target="_blank">
            Open the web app
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="group w-full sm:w-auto"
          size="lg"
        >
          <Link href="#mobile-app">
            <Smartphone className="size-4" />
            Get the mobile app
          </Link>
        </Button>
      </motion.div>

      <Ripple mainCircleSize={320} numCircles={8} mainCircleOpacity={0.2} />
    </motion.section>
  );
}
