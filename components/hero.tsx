"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SparklesText from "./ui/sparkles-text";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Clipboard } from "flowbite-react";

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
      className="relative flex pt-16 sm:pt-24 pb-24 sm:pb-32 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"}>
          <div className="size-1 rounded-full bg-muted-foreground mr-2" />
          Introducing gibwork
          <div className="size-1 rounded-full bg-muted-foreground ml-2" />
        </Badge>
      </motion.div>

      {/* Updated headline */}
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText
          text="Earn Crypto for Everyday Tasks & Code Contributions"
          className="font-semibold text-5xl sm:text-6xl mt-4"
        />
      </motion.div>

      {/* Updated subheadline */}
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground"
      >
        Complete bounties, solve GitHub issues, and get paid instantly in Solana SPL
        tokens. Built for builders, creators, and online earners.
      </motion.p>

      {/* Primary CTA */}
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Button className="group mt-8" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Get Started For Free
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
      </motion.div>

      {/* New App Store buttons */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex gap-4 mt-4"
      >
        <Button asChild variant="secondary">
          <Link href={siteConfig.googlePlayUrl ?? "#"} target="_blank">
            Google Play
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={siteConfig.appleAppStoreUrl ?? "#"} target="_blank">
            App Store
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION