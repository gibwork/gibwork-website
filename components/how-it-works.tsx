"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { CheckCircle2, CircleDollarSign, ClipboardCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Rocket,
    title: "Post a work item",
    description: "Choose a bounty, task, or service request, define the scope, and fund the reward.",
  },
  {
    icon: ClipboardCheck,
    title: "Review contributors",
    description: "Contributors apply, submit proof, or open pull requests against the linked GitHub issue.",
  },
  {
    icon: CheckCircle2,
    title: "Approve the result",
    description: "Accept the best submission, request changes, and keep the conversation tied to the work.",
  },
  {
    icon: CircleDollarSign,
    title: "Release payment",
    description: "Approved work is paid on-chain in seconds through the contributor's connected wallet.",
  },
];

export function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
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
      className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase text-primary">How it works</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
          A simple path from posted work to paid work.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Gibwork keeps the workflow familiar for teams and contributors while moving rewards into
          fast, transparent Solana-native payments.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step, index) => (
          <Card key={step.title} className="relative overflow-hidden">
            <CardHeader>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}
