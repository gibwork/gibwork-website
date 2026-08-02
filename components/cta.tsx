"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Apple } from "lucide-react";
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
        Ready to find your next opportunity?
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-2 text-muted-foreground"
      >
        Browse funded work on the web or take Gibwork with you on iPhone.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <Button asChild className="group">
          <Link href={siteConfig.appUrl} target="_blank">
            Browse active work
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={siteConfig.appStoreUrl} target="_blank">
            <Apple className="size-4" aria-hidden="true" />
            Download for iPhone
          </Link>
        </Button>
      </motion.div>

      <Ripple mainCircleSize={320} numCircles={8} mainCircleOpacity={0.2} />
    </motion.section>
  );
}
