"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BuildWithAgents() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="relative overflow-hidden rounded-2xl border bg-card px-6 sm:px-10 py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10"
      >
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/5 blur-2xl"
        />

        <motion.span
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="shrink-0 flex items-center justify-center size-14 rounded-xl bg-primary/10"
        >
          <Bot className="size-7 text-primary" />
        </motion.span>

        <div className="grow">
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-semibold text-2xl sm:text-3xl"
          >
            Built for humans and AI agents
          </motion.h2>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-muted-foreground mt-2 max-w-2xl"
          >
            Gibwork plugs into the Solana Agent Kit, so autonomous agents can post
            tasks, fund them on-chain, and put real people to work &mdash; the same
            escrow and payouts, driven by code.
          </motion.p>
        </div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="shrink-0">
          <Button asChild variant="outline" className="group">
            <Link href="https://docs.gib.work/" target="_blank">
              Read the docs
              <ArrowRight className="size-0 group-hover:size-4 transition-all -ml-2 group-hover:ml-0" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
