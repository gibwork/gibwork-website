"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import {
  Zap,
  Shield,
  Github,
  Lock,
  Smartphone,
  Globe,
  CreditCard,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Crypto Payments",
    description:
      "Get paid in USDC, SOL, or any SPL token within seconds. No bank delays, no currency conversion fees — just fast, borderless transactions on Solana.",
    highlight: "Fast",
  },
  {
    icon: Shield,
    title: "Secure Escrow System",
    description:
      "Funds are held in smart contract escrow until work is approved. Both clients and freelancers are protected — no more payment disputes or scope creep.",
    highlight: "Secure",
  },
  {
    icon: Github,
    title: "GitHub-Integrated Bounties",
    description:
      "Create bounties directly from GitHub issues. Contributors submit PRs, maintainers review and merge — payments release automatically upon approval.",
    highlight: "Open Source",
  },
  {
    icon: Lock,
    title: "Private Tasks",
    description:
      "Need discretion? Create private tasks visible only to selected freelancers. Perfect for sensitive projects and exclusive collaborations.",
    highlight: "Exclusive",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Browse bounties, submit work, and manage tasks on the go. Available on iOS and Android with push notifications for real-time updates.",
    highlight: "iOS & Android",
  },
  {
    icon: Globe,
    title: "Global Talent Pool",
    description:
      "Access skilled professionals from 150+ countries. Categories span Development, Design, Social Media, and Open Source contributions.",
    highlight: "150+ Countries",
  },
  {
    icon: CreditCard,
    title: "Multiple Token Support",
    description:
      "Pay and get paid in any SPL token — USDC, SOL, and beyond. Connect your Phantom, Solflare, or any Solana wallet in one click.",
    highlight: "Flexible",
  },
  {
    icon: Award,
    title: "Premium Subscriptions",
    description:
      "Upgrade to Gibwork Plus or Pro for verified badges, priority placement, unlimited submissions, and exclusive verified-only task access.",
    highlight: "Premium",
  },
];

export function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      id="features"
      className="relative py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl border-y"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider">
          Why Gibwork
        </p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Built for the future of work
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          From open-source bounties to private consulting gigs — everything you need to 
          find work or hire talent, powered by Solana&apos;s high-speed blockchain.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="group relative p-6 rounded-xl border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="size-5 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
            <span className="inline-block mt-4 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {feature.highlight}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
