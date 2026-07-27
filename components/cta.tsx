"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, PlusCircle, Search } from "lucide-react";
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
        Start exploring
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-2 text-muted-foreground"
      >
        Check out gibwork to browse active bounties, post tasks, or learn how payments work.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 z-10"
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

      <Ripple mainCircleSize={320} numCircles={8} mainCircleOpacity={0.2} />
    </motion.section>
  );
}
