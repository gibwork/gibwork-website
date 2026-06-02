"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Search,
  Smartphone,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const stats = [
  "Tasks",
  "Bounties",
  "Submissions",
  "Stablecoin payouts",
];

const taskCards = [
  {
    title: "Open source PR",
    detail: "Fix a repo issue",
    amount: "500 USDC",
    icon: Github,
  },
  {
    title: "Product feedback",
    detail: "Submit notes and screens",
    amount: "75 USDC",
    icon: Search,
  },
  {
    title: "Growth task",
    detail: "Create and verify work",
    amount: "120 USDC",
    icon: Wallet,
  },
];

export function Hero() {
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
      className="relative overflow-hidden px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24 w-full mx-auto max-w-7xl"
    >
      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(440px,1.05fr)] items-center gap-10 lg:gap-14">
        <div className="relative z-10 lg:text-left text-center">
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <Badge variant={"secondary"} className="gap-2 px-3 py-1">
              <Smartphone className="size-3.5" />
              Onchain tasks, bounties, and mobile submissions
            </Badge>
          </motion.div>

          <motion.h1
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-5 max-w-4xl text-5xl sm:text-6xl font-semibold tracking-normal"
          >
            Get work done. Get paid from anywhere.
          </motion.h1>

          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-5 max-w-2xl w-full sm:text-lg text-muted-foreground lg:mx-0 mx-auto"
          >
            Gibwork is an onchain work marketplace where teams post tasks and
            GitHub bounties, contributors submit finished work, and approved
            payouts move through stablecoins.
          </motion.p>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 flex flex-col min-[420px]:flex-row items-center lg:justify-start justify-center gap-3"
          >
            <Button size={"lg"} className="group w-full min-[420px]:w-auto" asChild>
              <Link href={siteConfig.appUrl} target="_blank">
                Explore tasks
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-full min-[420px]:w-auto"
              asChild
            >
              <Link href={siteConfig.iosAppUrl} target="_blank">
                Download iOS app
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 flex flex-wrap lg:justify-start justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground"
          >
            {stats.map((stat) => (
              <span key={stat} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                {stat}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-6 flex items-center lg:justify-start justify-center gap-2 text-sm"
          >
            <span className="opacity-80">powered by</span>
            <Link
              href={"https://solana.com/"}
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <SolanaLogoType className="w-20 fill-foreground" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[640px]"
        >
          <div className="absolute inset-x-0 top-8 rounded-md border bg-background p-2 shadow-2xl shadow-primary/10">
            <div className="rounded-md bg-foreground/5 h-3 mx-10" />
            <div className="rounded-md bg-foreground/10 h-3 mx-5" />
            <div className="mt-2 rounded-md overflow-hidden border bg-muted">
              <Image
                alt="Gibwork dashboard showing task and bounty opportunities"
                src={dashboard}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 w-[min(92vw,360px)] -translate-x-1/2 lg:left-0 lg:translate-x-0 rounded-[2rem] border bg-background p-3 shadow-2xl shadow-foreground/10">
            <div className="rounded-[1.5rem] border bg-muted/40 p-4">
              <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-foreground/20" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Open work
                  </p>
                  <p className="mt-1 text-xl font-semibold">Active bounties</p>
                </div>
                <Badge>Live</Badge>
              </div>

              <div className="mt-5 space-y-3">
                {taskCards.map((task) => {
                  const Icon = task.icon;

                  return (
                    <div
                      key={task.title}
                      className="rounded-md border bg-background p-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <div className="min-w-0 grow">
                          <p className="truncate font-semibold">{task.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {task.detail}
                          </p>
                        </div>
                        <p className="shrink-0 text-sm font-semibold">
                          {task.amount}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-md border bg-background p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Submission status</span>
                  <span className="font-semibold text-primary">In review</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted">
                  <div className="h-2 w-2/3 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
