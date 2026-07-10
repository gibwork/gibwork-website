"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
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
      className="relative flex pt-12 sm:pt-24 pb-16 sm:pb-32 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"}>
          <div className="size-1 rounded-full bg-muted-foreground mr-2" />
          Paid work, bounties, and mobile-first submissions
          <div className="size-1 rounded-full bg-muted-foreground ml-2" />
        </Badge>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          as={<h1 />}
          text="Fund work. Ship proof. Get paid."
          className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl"
        />
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground"
      >
        Gibwork connects teams with contributors through funded tasks, open-source
        bounties, and service requests that can be discovered, submitted, and tracked
        from the web or mobile app.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <Button className="group" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Explore work
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
        <Button variant="secondary" className="group" asChild>
          <Link href={`${siteConfig.appUrl}new`} target="_blank">
            Fund a task
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground"
      >
        <span className="inline-flex items-center gap-1 rounded-full border bg-background px-3 py-1">
          <Smartphone className="size-4" />
          Mobile app ready
        </span>
        <span className="rounded-full border bg-background px-3 py-1">USDC payouts</span>
        <span className="rounded-full border bg-background px-3 py-1">GitHub bounty support</span>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-2 text-sm mt-4"
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

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-12 sm:mt-24 relative z-0">
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full">
          <Image alt="" src={dashboard} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60" />
      </motion.div>
    </motion.section>
  );
}
