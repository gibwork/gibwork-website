"use client";

import { Button } from "@/components/ui/button";
import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import dashboard from "@/public/dashboard-2.png";

const highlights = [
  "Browse and complete bounties from anywhere",
  "Track submissions and earnings in real time",
  "Get notified the moment new work drops",
];

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
      className="relative border-y px-4 sm:px-6 py-24 sm:py-32 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center overflow-hidden"
    >
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl"
        >
          Take gibwork with you
        </motion.h2>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-2 text-muted-foreground sm:text-lg max-w-md"
        >
          The gibwork mobile app puts the entire onchain work marketplace in
          your pocket. Find work, complete tasks, and get paid on the go.
        </motion.p>

        <motion.ul
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 flex flex-col gap-3 text-sm sm:text-base"
        >
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-foreground" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <Button asChild size="lg">
            <Link href={siteConfig.androidUrl} target="_blank">
              <IconBrandGooglePlay className="size-5" />
              Get it on Google Play
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={siteConfig.iosUrl} target="_blank">
              <IconBrandApple className="size-5" />
              Download on iOS
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative w-[260px] sm:w-[300px] aspect-[9/19] rounded-[2.5rem] border-8 border-foreground/90 bg-foreground/90 shadow-2xl overflow-hidden">
          <div className="absolute top-0 inset-x-0 z-10 flex justify-center">
            <div className="mt-2 h-5 w-28 rounded-full bg-background/20" />
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-muted">
            <Image
              alt="gibwork mobile app"
              src={dashboard}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
