"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SparklesText from "./ui/sparkles-text";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { PhoneMockup } from "@/components/mobile-app";

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
      className="relative flex overflow-hidden pt-16 sm:pt-24 pb-20 sm:pb-28 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"}>
          <div className="size-1 rounded-full bg-muted-foreground mr-2" />
          Work and payments, onchain
          <div className="size-1 rounded-full bg-muted-foreground ml-2" />
        </Badge>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          text="Work. Get paid instantly. Anywhere."
          className="font-semibold text-5xl sm:text-6xl mt-4 max-w-4xl"
        />
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground"
      >
        Create work, take it on, and get paid in USDC or any Solana token — no
        invoices, no waiting, no borders.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 min-[420px]:w-auto min-[420px]:flex-row"
      >
        <Button className="group" size="lg" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Get Started For Free
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#mobile-app">
            <ArrowDownToLine className="size-4" />
            Download the app
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-5"
      >
        <span className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-primary" />
          Funds protected by smart-contract escrow
        </span>
        <span className="flex items-center gap-2">
          <Zap className="size-4 text-primary" />
          Onchain settlement in seconds
        </span>
      </motion.div>

      {/* <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-2 text-sm mt-4 p-1 font-light"
      >
        <div className="flex relative flex-row bg-stone-100 rounded-sm">
          <div className="flex justify-center align-middle pt-2 mb-2 px-1">
            <img src="https://media.gib.work/work-logo.png" className="rounded-full w-5" />
            <span className="ms-2 opacity-80 font-medium md:visible hidden">CA</span>
          </div>
          <div className="md:flex hidden pt-2">
            F7Hwf8ib5DVCoiuyGr618Y3gon429Rnd1r5F9R5upump
          </div>
          <div className="flex md:hidden pt-2">
            F7Hwf8ib5D.....d1r5F9R5upump
          </div>
          <div className="bg-stone-100 hidden md:flex items-center w-16 py-1 justify-center border-s-2 border-white ms-1 rounded-e-lg">
            <Clipboard.WithIconText className="bg-stone-50 border-none p-0 px-1 text-black hover:text-black"
              valueToCopy="F7Hwf8ib5DVCoiuyGr618Y3gon429Rnd1r5F9R5upump" />
          </div>
          <div className="bg-stone-100 block w-16 md:hidden items-center justify-start border-s-2 border-white ms-1 rounded-e-lg">
            <Clipboard.WithIconText className="bg-stone-100 border-none p-0 pt-2 px-1 flex text-black hover:text-black"
              valueToCopy="F7Hwf8ib5DVCoiuyGr618Y3gon429Rnd1r5F9R5upump" />
          </div>
        </div>
      </motion.div> */}

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="relative z-0 mt-12 flex w-full justify-center sm:hidden"
      >
        <PhoneMockup />
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-20 hidden w-full min-w-0 max-w-6xl sm:block relative z-0"
      >
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="w-full max-w-full overflow-hidden rounded-lg border bg-muted">
          <Image
            alt="Gibwork task marketplace dashboard"
            src={dashboard}
            className="h-auto w-full min-w-0 object-cover object-left-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60" />
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-2 flex items-center gap-2 text-xs text-muted-foreground"
      >
        <span>Powered by</span>
        <Link href="https://solana.com/" target="_blank" className="transition-transform hover:scale-105">
          <SolanaLogoType className="w-20 fill-foreground" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
