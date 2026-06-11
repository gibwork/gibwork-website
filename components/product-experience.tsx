"use client";

import { Button } from "@/components/ui/button";
import { BadgeCheck, BriefcaseBusiness, CircleDollarSign, Search, ShieldCheck, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";

const workflow = [
  {
    icon: BriefcaseBusiness,
    title: "Post funded work",
    description:
      "Create a simple task, service request, or GitHub bounty with clear requirements and an onchain reward.",
  },
  {
    icon: Search,
    title: "Reach active contributors",
    description:
      "Workers discover opportunities across development, design, content, research, testing, and community work.",
  },
  {
    icon: BadgeCheck,
    title: "Review real submissions",
    description:
      "Collect deliverables in one place, give feedback, approve the best work, and keep the project moving.",
  },
  {
    icon: CircleDollarSign,
    title: "Release stablecoin payouts",
    description:
      "Approved work is paid from funded rewards, giving both sides a clear path from task to payout.",
  },
];

const mobileFeatures = [
  "Browse active opportunities from anywhere",
  "Check requirements before starting work",
  "Submit completed work directly in the app",
  "Track submissions, status updates, and earnings",
];

export function ProductExperience() {
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
      id="product"
      className="relative border-y bg-secondary/35 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-sm font-semibold uppercase text-primary"
          >
            Built for onchain work
          </motion.p>
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl"
          >
            One marketplace for bounties, tasks, services, and mobile submissions.
          </motion.h2>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-4 max-w-2xl text-muted-foreground"
          >
            Gibwork connects teams that need work done with contributors who want
            flexible, paid opportunities. The experience is designed around clear
            scopes, transparent rewards, easy submissions, and fast crypto-native
            payouts.
          </motion.p>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {workflow.map((item) => (
              <div key={item.title} className="rounded-lg border bg-background p-5 shadow-sm">
                <item.icon className="size-5 text-primary" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative">
          <div className="rounded-lg border bg-background p-5 shadow-xl shadow-primary/10">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-sm font-semibold text-primary">Gibwork mobile</p>
                <h3 className="mt-1 text-2xl font-semibold">Find bounties. Get paid.</h3>
              </div>
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Smartphone className="size-6" />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {mobileFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-lg bg-secondary/60 p-3">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg border p-4">
                <p className="text-2xl font-semibold">4</p>
                <p className="mt-1 text-xs text-muted-foreground">Core task categories</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-xs text-muted-foreground">Global opportunity access</p>
              </div>
            </div>

            <Button className="mt-6 w-full" asChild>
              <Link href={siteConfig.appStoreUrl} target="_blank">
                View iPhone app
                <Smartphone className="size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
