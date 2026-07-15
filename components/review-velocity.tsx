"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reviewSteps = [
  {
    title: "Define acceptance",
    description:
      "Set the exact deliverable, required proof format, deadline, and reasons a submission may be rejected.",
    Icon: FileCheck2,
  },
  {
    title: "Submit evidence",
    description:
      "Share one public proof link with a short summary, screenshots, demo, PR, or task-fit notes when needed.",
    Icon: CheckCircle2,
  },
  {
    title: "Review openly",
    description:
      "Keep creator cadence, approval criteria, queue status, and payout readiness visible before work starts.",
    Icon: Clock3,
  },
];

const healthStats = [
  { label: "Reward pool", value: "350 USDC" },
  { label: "Status", value: "Open" },
  { label: "Pending", value: "99" },
  { label: "Rejected", value: "12" },
  { label: "Approved", value: "0" },
  { label: "Health", value: "Stale" },
];

export function ReviewVelocity() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6">
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
        className="flex flex-col items-center"
      >
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-primary font-semibold text-sm"
        >
          REVIEWABLE WORK
        </motion.p>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl text-center mt-2"
        >
          Faster reviews start with clearer proof
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-center mt-4 text-muted-foreground max-w-2xl"
        >
          Funded work moves faster when task requirements and proof align.
          Gibwork helps creators define reviewable requirements and helps
          contributors submit evidence that can be approved without
          back-and-forth.
        </motion.p>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid gap-4 md:grid-cols-3 w-full mt-10"
        >
          {reviewSteps.map(({ title, description, Icon }) => (
            <Card key={title} className="h-full">
              <CardHeader>
                <div className="size-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 w-full rounded-lg border bg-muted/30 p-5 sm:p-6"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-semibold">Example task health panel</p>
              <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                Clear health signals help creators adjust the task and help
                contributors decide whether their proof can be reviewed.
              </p>
            </div>
            <span className="rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground w-fit">
              Payout follows approval
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
            {healthStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border bg-background p-3 min-h-20"
              >
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-semibold mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <Button asChild>
            <Link href={siteConfig.appUrl} target="_blank">
              Browse funded work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`${siteConfig.appUrl}new`} target="_blank">
              Create a clearer task
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
