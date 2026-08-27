"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { SmartPhone, Monitor, Wallet, Zap } from "lucide-react";

const features = [
  {
    icon: SmartPhone,
    title: "Native mobile apps",
    description: "Available on iOS and Android. Browse and complete bounties from anywhere.",
  },
  {
    icon: Monitor,
    title: "Web app",
    description: "Full-featured web experience for desktop users who prefer a larger screen.",
  },
  {
    icon: Wallet,
    title: "USDC payments",
    description: "Earnings go straight to your Solana wallet. No intermediaries, no delays.",
  },
  {
    icon: Zap,
    title: "Instant payouts",
    description: "Funds are released on-chain the moment your work is approved.",
  },
];

export function MobileApps() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col items-center"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant={"secondary"}>
            Available everywhere
          </Badge>
        </motion.div>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-3xl sm:text-4xl font-semibold mt-4 text-center"
        >
          Work from your phone or desktop
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-center mt-2 text-muted-foreground max-w-2xl"
        >
          Gibwork is a true cross-platform experience. Download the mobile app or use the
          web version — your bounties, earnings, and wallet travel with you.
        </motion.p>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card"
            >
              <feature.icon className="size-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
