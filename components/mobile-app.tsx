"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Smartphone, WalletCards } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Browse bounties",
    description: "Find active opportunities across content, design, testing, research, and more.",
    icon: ClipboardCheck,
  },
  {
    title: "Submit from anywhere",
    description: "Review the requirements, complete the work, and send your submission in the app.",
    icon: Smartphone,
  },
  {
    title: "Track payouts",
    description: "Follow submissions from review to approval and manage earnings in one place.",
    icon: WalletCards,
  },
];

export function MobileApp() {
  return (
    <motion.section
      id="mobile"
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
      className="relative w-full bg-muted/20 border-y"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center py-16 sm:py-24 px-4 sm:px-6">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <p className="text-sm font-semibold uppercase text-muted-foreground">
            Now on iPhone
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            Find paid work from your phone
          </h2>
          <p className="mt-4 text-muted-foreground">
            Gibwork&apos;s iPhone app helps contributors browse bounties,
            submit completed work, track status updates, and manage payouts
            without leaving the task flow.
          </p>

          <Button className="group mt-6" asChild>
            <Link href={siteConfig.mobileAppUrl} target="_blank">
              Download on App Store
              <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3"
        >
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <div
                key={highlight.title}
                className="rounded-lg border bg-background p-4 flex gap-3"
              >
                <div className="size-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{highlight.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
