"use client";

import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

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
      className="relative py-16 sm:py-24 px-4 sm:px-6 flex items-center w-full max-w-7xl mx-auto justify-center flex-col"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-2 mb-4">
        <Smartphone className="size-6" />
        <h2 className="font-semibold text-3xl sm:text-4xl text-center">
          Work from Anywhere
        </h2>
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-2 text-muted-foreground max-w-2xl"
      >
        Download the Gibwork mobile app to discover bounties, complete tasks, and get paid in crypto - all from your phone.
      </motion.p>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button asChild className="group" size="lg">
          <Link href={siteConfig.googlePlayUrl} target="_blank">
            <Download className="size-5 mr-2" />
            Get it on Google Play
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl"
      >
        <div className="text-center">
          <div className="font-semibold text-2xl">Discover</div>
          <div className="text-muted-foreground text-sm mt-1">
            Browse bounties and tasks on the go
          </div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-2xl">Complete</div>
          <div className="text-muted-foreground text-sm mt-1">
            Submit work directly from your phone
          </div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-2xl">Get Paid</div>
          <div className="text-muted-foreground text-sm mt-1">
            Track earnings and receive crypto payments
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
