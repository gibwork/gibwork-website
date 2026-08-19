"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function MobileApp() {
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
      id="app"
      className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center justify-center w-full max-w-7xl mx-auto"
    >
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-3xl sm:text-4xl text-center font-semibold"
      >
        Take Gibwork with you
      </motion.h2>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-4 max-w-2xl text-muted-foreground"
      >
        Browse bounties, submit work, and track your payouts — all from the Gibwork app. 
        Rated 4.9★ on Google Play.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-3 mt-8"
      >
        <Link href={siteConfig.iosAppUrl} target="_blank">
          <Image src="/app-store-badge.svg" alt="Download on the App Store" width={135} height={40} />
        </Link>
        <Link href={siteConfig.androidAppUrl} target="_blank">
          <Image src="/google-play-badge.svg" alt="Get it on Google Play" width={135} height={40} />
        </Link>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-12">
        <Button className="group" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Open Web App
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
