"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ArrowRight, CheckCircle2, Users, FileText, Zap } from "lucide-react";

export function Workflow() {
  const steps = [
    {
      icon: FileText,
      title: "Create Task",
      description: "Projects publish work with rewards",
    },
    {
      icon: Users,
      title: "Complete Task",
      description: "Contributors submit solutions",
    },
    {
      icon: CheckCircle2,
      title: "Review",
      description: "Projects review submissions",
    },
    {
      icon: Zap,
      title: "Get Paid",
      description: "Approved work receives instant wallet payouts",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">HOW IT WORKS</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Simple workflow, instant results
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From task creation to payment, the entire process happens onchain with transparency and speed.
        </p>
      </motion.div>

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
        className="grid md:grid-cols-4 gap-6 mt-12"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="relative rounded-3xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-3">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-1/2 right-0 translate-x-1/2 hidden md:block w-6 h-6 text-muted-foreground" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
