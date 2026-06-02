"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import { Bell, BriefcaseBusiness, CheckCircle2, Smartphone, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const mobileFeatures = [
  {
    title: "Instant task alerts",
    description:
      "Get notified when bounty updates, approvals, or payout milestones need your attention.",
    icon: Bell,
  },
  {
    title: "Solana-native mobile flow",
    description:
      "Keep Web3 work accessible on the go, with mobile-first discovery and submission flows.",
    icon: Smartphone,
  },
  {
    title: "Track work anywhere",
    description:
      "Review deliverables, manage your pipeline, and follow approval status from your phone.",
    icon: CheckCircle2,
  },
];

const audienceCards = [
  {
    title: "For talent",
    description:
      "Find scoped tasks, submit proof of work, and build a visible record of completed Web3 work.",
    icon: UsersRound,
  },
  {
    title: "For projects",
    description:
      "Post clear bounties, source contributors, and keep decentralized work moving with fewer handoffs.",
    icon: BriefcaseBusiness,
  },
];

export function MobileEcosystem() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      id="mobile"
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Web + mobile
        </p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">Gibwork in your pocket</h2>
        <p className="mt-3 text-muted-foreground">
          Discover bounties, submit work, and follow approvals without waiting until you are back
          at your desk.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid gap-4 md:grid-cols-3"
      >
        {mobileFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title} className="overflow-hidden">
              <CardHeader>
                <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid gap-4 rounded-3xl border bg-muted/40 p-4 sm:p-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center"
      >
        {audienceCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="rounded-2xl bg-background p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center lg:order-2">
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link href={siteConfig.mobileAppUrl} target="_blank">
              Download iOS app
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}
