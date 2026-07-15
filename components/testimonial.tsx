"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const proofCards = [
  {
    audience: "Open-source teams",
    title: "Bounty-funded PRs",
    body:
      "Gibwork gives contributors a clear issue, a funded reward, and one place to submit proof. That makes small open-source fixes easier to scope and review.",
  },
  {
    audience: "Mobile contributors",
    title: "Work on the go",
    body:
      "The mobile app makes task discovery, submission tracking, and payout status visible without keeping a desktop browser open all day.",
  },
  {
    audience: "Project operators",
    title: "Simple task flow",
    body:
      "Fixed-scope tasks are easier to manage when requirements, comments, submitted work, and wallet-based payment live in the same workflow.",
  },
];

export function Testimonial() {
  return (
    <motion.section
      id="testimonial"
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
      className="relative mx-auto flex w-full max-w-7xl flex-col px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase text-primary">Marketplace proof</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Clearer workflows for every side of the marketplace.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Gibwork is built around visible requirements, submission evidence, and wallet-native
          payouts so teams and contributors can understand what happens next.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-10 grid gap-4 md:grid-cols-3"
      >
        {proofCards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                {card.audience}
              </Badge>
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <CardDescription className="text-base leading-7">{card.body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
}
