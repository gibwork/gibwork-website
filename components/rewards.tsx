"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Wallet, Clock, CheckCircle, Zap, ArrowRight, FileText, Users, Send } from "lucide-react";

export function Rewards() {
  const flow = [
    { icon: FileText, label: "Task Created" },
    { icon: Users, label: "Work Submitted" },
    { icon: CheckCircle, label: "Reviewed" },
    { icon: CheckCircle, label: "Approved" },
    { icon: Send, label: "Reward Sent To Wallet" },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Paid After Approval",
      description: "Payments are triggered only when work is approved, ensuring quality before reward",
    },
    {
      icon: Wallet,
      title: "Direct to Your Wallet",
      description: "Payments sent directly to contributor wallets with no intermediaries",
    },
    {
      icon: Clock,
      title: "No Delays",
      description: "Instant onchain payments mean no waiting periods or processing delays",
    },
    {
      icon: Zap,
      title: "No Vesting, No Partial Payments",
      description: "Full payment received immediately upon approval with no lockup periods",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">INSTANT ONCHAIN PAYMENTS</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Payout Transparency
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Every payment is transparent, instant, and direct to your wallet. No intermediaries, no delays.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-12"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          {flow.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{step.label}</span>
                </div>
                {index < flow.length - 1 && <ArrowRight className="w-5 h-5 text-muted-foreground" />}
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="p-6 rounded-2xl border bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
