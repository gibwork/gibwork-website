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
        Start with one specific piece of work.
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-3 max-w-2xl text-muted-foreground"
      >
        Post a task with a clear reward, or find an open bounty you can complete
        today from web or iPhone.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col min-[420px]:flex-row gap-3"
      >
        <Button asChild className="group" size={"lg"}>
          <Link href={siteConfig.appUrl} target="_blank">
            Open Gibwork
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
        <Button asChild variant={"outline"} size={"lg"}>
          <Link href={siteConfig.iosAppUrl} target="_blank">
            <Smartphone className="size-5" />
            iOS app
          </Link>
        </Button>
      </motion.div>

      <Ripple mainCircleSize={320} numCircles={8} mainCircleOpacity={0.2} />
    </motion.section>
  );
}
