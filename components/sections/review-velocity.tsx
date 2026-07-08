"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

interface ReviewVelocityCard {
  title: string;
  description: string;
}

const cards: ReviewVelocityCard[] = [
  {
    title: "Clear requirements",
    description:
      "Creators define exactly what counts as an acceptable deliverable—whether that's a PR, a demo, a screenshot, or a public link—so contributors know what to submit before they start.",
  },
  {
    title: "Reviewable proof",
    description:
      "Contributors submit evidence that maps directly to the task requirements, making it easy for creators to approve without back-and-forth or guesswork.",
  },
  {
    title: "Active review cadence",
    description:
      "Creators review submissions on a predictable cadence and payout depends on approval, not just submission—keeping queues healthy and expectations aligned.",
  },
];

export default function ReviewVelocity() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Faster reviews start with clearer proof
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Funded work moves faster when the task and the proof are both
            clear. Gibwork helps creators define reviewable requirements and
            helps contributors submit evidence that can be approved without
            back-and-forth.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={FADE_UP_ANIMATION_VARIANTS}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-lg border border-border bg-card p-6 shadow-sm",
                "flex flex-col gap-3"
              )}
            >
              <h3 className="text-xl font-semibold text-card-foreground">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
