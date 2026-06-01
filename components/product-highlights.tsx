"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import { CheckCircle2, Smartphone, WalletCards } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Work from mobile",
    description:
      "Browse opportunities, track active submissions, and follow creator updates from the app when you are away from your desk.",
  },
  {
    icon: CheckCircle2,
    title: "Clear submission flow",
    description:
      "Creators can collect deliverables, review work, and approve completed tasks from one focused workflow.",
  },
  {
    icon: WalletCards,
    title: "Wallet-native payouts",
    description:
      "Fund tasks and release stablecoin or token rewards directly to contributors through their noncustodial wallets.",
  },
];

export function ProductHighlights() {
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
      className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6 border-y"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex lg:flex-row flex-col gap-x-16 gap-y-4 justify-between lg:text-left text-center"
      >
        <div className="lg:w-96 lg:shrink-0 w-full">
          <p className="text-primary font-semibold text-sm uppercase">Built for current Gibwork</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
            Tasks, bounties, and payouts, in one app
          </h2>
        </div>

        <p className="lg:max-w-3xl w-full text-muted-foreground">
          Gibwork helps teams publish work, contributors find paid opportunities, and both sides
          keep progress visible until the reward is approved and released.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid md:grid-cols-3 gap-4 mt-10"
      >
        {highlights.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <Card key={highlight.title} className="h-full">
              <CardHeader>
                <div className="size-11 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{highlight.title}</CardTitle>
                <CardDescription>{highlight.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
