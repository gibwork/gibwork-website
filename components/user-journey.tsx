"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Wallet, Search, CheckCircle2, Award } from "lucide-react";

const journeySteps = [
  {
    step: "01",
    title: "Create Profile",
    description: "Connect your non-custodial wallet and configure your Web3 developer skills and portfolio.",
    icon: Wallet,
  },
  {
    step: "02",
    title: "Find Opportunities",
    description: "Browse curated bounties, developer challenges, and paid gigs tailored to your expertise.",
    icon: Search,
  },
  {
    step: "03",
    title: "Complete Work",
    description: "Build clean code, submit your pull requests or deliverables, and collaborate with project maintainers.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "Get Rewarded",
    description: "Receive instant, escrow-backed crypto payouts in SOL and USDC directly to your wallet.",
    icon: Award,
  },
];

export function UserJourney() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <motion.div
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
        className="flex flex-col items-center text-center"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <span className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            How It Works
          </span>
        </motion.div>

        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-3xl sm:text-4xl font-semibold mt-4 tracking-tight"
        >
          From Discovery to Payout in 4 Simple Steps
        </motion.h2>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-muted-foreground max-w-2xl mt-3 text-sm sm:text-base"
        >
          Gibwork makes earning in open-source and Web3 effortless, transparent, and secure across web and mobile.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full text-left">
          {journeySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="relative flex flex-col p-6 rounded-2xl border bg-card/60 backdrop-blur-sm hover:border-purple-500/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="size-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground/30 group-hover:text-purple-500/40 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
