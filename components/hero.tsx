"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeDollarSign, CheckCircle2, Smartphone } from "lucide-react";
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
      className="relative flex pt-16 sm:pt-24 pb-20 sm:pb-28 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_58%)]" />

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"} className="gap-2">
          <Smartphone className="size-3.5 text-primary" />
          Web and iPhone bounties marketplace
        </Badge>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          text="Gibwork"
          className="font-semibold text-6xl sm:text-7xl mt-5"
        />
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-3xl mt-5 w-full sm:text-xl text-muted-foreground"
      >
        The onchain work marketplace for teams that need tasks done and contributors
        who want to earn from anywhere. Post bounties, review submissions, and release
        stablecoin payouts through one simple flow.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <Button className="group w-full sm:w-auto" size="lg" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Open Gibwork
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button className="w-full sm:w-auto" size="lg" variant="outline" asChild>
          <Link href={siteConfig.appStoreUrl} target="_blank">
            Download iPhone app
            <Smartphone className="size-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3"
      >
        {[
          { icon: BadgeDollarSign, label: "Stablecoin payouts", detail: "USDC and SPL token rewards" },
          { icon: CheckCircle2, label: "Submission tracking", detail: "Review, approve, and release" },
          { icon: Smartphone, label: "Mobile ready", detail: "Find and submit work on iPhone" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur"
          >
            <item.icon className="size-5 text-primary" />
            <p className="mt-3 font-semibold">{item.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
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
        <div className="rounded-lg overflow-hidden border bg-muted w-full shadow-2xl shadow-primary/10">
          <Image alt="" src={dashboard} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45" />
        <div className="absolute -right-2 bottom-6 hidden w-56 rounded-[2rem] border bg-background p-3 text-left shadow-2xl shadow-primary/20 md:block">
          <div className="rounded-[1.5rem] border bg-muted/50 p-4">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-foreground/20" />
            <div className="rounded-lg bg-background p-3 shadow-sm">
              <p className="text-xs font-medium text-primary">Active bounty</p>
              <p className="mt-1 text-sm font-semibold">Submit landing page UX review</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Reward</span>
                <span className="font-semibold">$350 USDC</span>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-primary p-3 text-primary-foreground">
              <p className="text-xs opacity-80">Status</p>
              <p className="text-sm font-semibold">Ready to submit</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
