"use client";

import { ArrowUpRight, ClipboardList, SearchCheck, Smartphone, WalletCards } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    icon: ClipboardList,
    title: "Post clear work",
    description: "Define a task, choose the reward, and give contributors a crisp finish line.",
  },
  {
    icon: SearchCheck,
    title: "Find your next win",
    description: "Browse bounties by skill and decide what you can ship before you start.",
  },
  {
    icon: WalletCards,
    title: "Submit and get paid",
    description: "Send proof through the platform and receive the approved reward on-chain.",
  },
];

export function ProductProof() {
  return (
    <section id="how-it-works" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="flex flex-col items-center"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant="secondary">One marketplace, three simple steps</Badge>
        </motion.div>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 max-w-3xl text-center text-3xl sm:text-4xl font-semibold"
        >
          Turn useful work into visible progress.
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-3 max-w-2xl text-center text-muted-foreground sm:text-lg"
        >
          Gibwork makes the path from a well-scoped task to a verified payout easy to understand for both sides of the marketplace.
        </motion.p>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-10 grid w-full gap-4 md:grid-cols-3"
        >
          {steps.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full border bg-card/70">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="leading-6">{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 flex w-full flex-col gap-6 rounded-2xl border bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background shadow-sm">
              <Smartphone className="size-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Work from the web or your phone</h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
                Discover opportunities, submit work, and track your earnings wherever you are. The Gibwork app is available on Android and iPhone.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button variant="outline" asChild>
              <Link href={siteConfig.androidUrl} target="_blank" rel="noreferrer">
                Android <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={siteConfig.iosUrl} target="_blank" rel="noreferrer">
                iPhone <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
