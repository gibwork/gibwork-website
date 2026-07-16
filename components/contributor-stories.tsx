"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const contributors = [
  {
    name: "Nina",
    role: "Design contributor",
    reward: "$1,540",
    testimonial:
      "Gibwork gave me fast access to work I could complete onchain and get paid instantly after approval.",
  },
  {
    name: "Asher",
    role: "Frontend developer",
    reward: "$2,120",
    testimonial:
      "The platform made it easy to find tasks, submit code, and track approvals in one place.",
  },
  {
    name: "Mika",
    role: "Product tester",
    reward: "$980",
    testimonial:
      "I earned more in one week than expected thanks to clear task scope and direct wallet payouts.",
  },
];

export function ContributorStories() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl bg-muted/30 rounded-3xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">CONTRIBUTOR STORIES</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Real contributors. Real rewards.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Contributors from design, development, testing, and research are earning on Gibwork by completing tasks and receiving instant onchain rewards.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {contributors.map((contributor) => (
          <motion.div
            key={contributor.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-lg">{contributor.name}</p>
                <p className="text-sm text-muted-foreground">{contributor.role}</p>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-2 text-primary font-semibold">{contributor.reward}</div>
            </div>
            <p className="mt-6 text-sm leading-6 text-foreground">“{contributor.testimonial}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
