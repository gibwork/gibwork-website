"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";

const reviewSignals = [
  {
    title: "Clear requirements",
    description:
      "Define the exact deliverable, proof format, and acceptance checks before submissions start.",
  },
  {
    title: "Reviewable proof",
    description:
      "Ask contributors for links, screenshots, demos, or pull requests that let creators verify work quickly.",
  },
  {
    title: "Active cadence",
    description:
      "Set review expectations so contributors know when approvals, questions, or rejections should happen.",
  },
  {
    title: "Approval readiness",
    description:
      "Keep payout and creator decisions ready before a task builds a long queue of unclear submissions.",
  },
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
      className="relative max-w-6xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6 border-y"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-sm font-medium text-muted-foreground">
          Review velocity
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
          Make every submission easier to approve
        </h2>
        <p className="mt-3 text-muted-foreground">
          Funded work moves faster when creators set clear expectations and
          contributors know what proof makes a submission ready for review.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
      >
        {reviewSignals.map((signal) => (
          <Card key={signal.title}>
            <CardHeader>
              <CardTitle className="text-lg">{signal.title}</CardTitle>
              <CardDescription>{signal.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}
