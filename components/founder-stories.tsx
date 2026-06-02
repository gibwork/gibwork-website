"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const stories = [
  {
    project: "Solana Launch",
    category: "Product testing",
    outcome: "Faster release validation",
    testimonial:
      "Gibwork helped us launch faster with trusted contributors handling core QA and user feedback.",
  },
  {
    project: "DAO Growth",
    category: "Marketing and growth",
    outcome: "Onchain engagement boost",
    testimonial:
      "We found contributors who moved quickly on campaigns and hit our milestone goals within days.",
  },
  {
    project: "UX Sprint",
    category: "Design review",
    outcome: "Higher conversion"
    ,
    testimonial:
      "The task workflow made it easy to review work, approve quality output, and reward talent instantly.",
  },
];

export function FounderStories() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">FOUNDER SUCCESS</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          What founders are saying
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Stories from founders and project leads who used Gibwork to scope work, approve outcomes, and pay contributors onchain.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {stories.map((story) => (
          <motion.div
            key={story.project}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <p className="text-sm text-primary font-semibold">{story.category}</p>
            <h3 className="mt-4 font-semibold text-xl">{story.project}</h3>
            <p className="mt-2 text-muted-foreground">{story.outcome}</p>
            <blockquote className="mt-6 text-sm leading-6 text-foreground">
              “{story.testimonial}”
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
