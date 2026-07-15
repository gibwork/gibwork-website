"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  TimerReset,
} from "lucide-react";
import Link from "next/link";

const proofSteps = [
  {
    title: "Define acceptance",
    description:
      "Name the exact deliverable, proof format, review window, and rejection risk before submissions start.",
    icon: ClipboardCheck,
  },
  {
    title: "Submit evidence",
    description:
      "Share a public URL, concise summary, screenshot, demo, PR, or other proof that reviewers can verify quickly.",
    icon: CheckCircle2,
  },
  {
    title: "Review openly",
    description:
      "Keep contributors oriented with creator cadence, approval criteria, queue state, and payout readiness.",
    icon: TimerReset,
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
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-10 items-start">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="lg:sticky lg:top-24 text-center lg:text-left"
        >
          <p className="text-primary font-semibold text-sm">
            REVIEW VELOCITY
          </p>
          <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
            Faster reviews start with clearer proof
          </h2>
          <p className="mt-4 text-muted-foreground">
            Funded work moves faster when the task and the proof are both
            clear. Gibwork helps creators define reviewable requirements and
            helps contributors submit evidence that can be approved without
            back-and-forth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row lg:justify-start justify-center gap-3">
            <Button asChild>
              <Link href={siteConfig.appUrl} target="_blank">
                Browse funded work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={siteConfig.appUrl} target="_blank">
                Create a clearer task
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {proofSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">Example task health</CardTitle>
                <CardDescription>
                  Queue signals help creators tighten proof examples, split
                  large tasks, or set a clearer review cadence before
                  contributors lose momentum.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {healthStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-md border bg-muted/40 p-3"
                    >
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="font-semibold mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-md border border-primary/20 bg-primary/5 p-4">
                  <p className="font-semibold">What this teaches</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Approval is tied to reviewable proof, not simply to
                    submitting first. Clear examples, visible queue health, and
                    active creator cadence give both sides better odds.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
