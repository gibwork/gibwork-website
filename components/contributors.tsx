"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Palette, Code, Search, PenTool, Bug, TrendingUp, Puzzle } from "lucide-react";

export function Contributors() {
  const contributorTypes = [
    {
      icon: Palette,
      title: "Designers",
      description: "UX/UI designers creating beautiful interfaces",
    },
    {
      icon: Code,
      title: "Developers",
      description: "Frontend and backend engineers building products",
    },
    {
      icon: Search,
      title: "Researchers",
      description: "Product researchers and market analysts",
    },
    {
      icon: PenTool,
      title: "Writers",
      description: "Copywriters and content creators",
    },
    {
      icon: Bug,
      title: "Product Testers",
      description: "QA specialists ensuring quality",
    },
    {
      icon: TrendingUp,
      title: "Growth Contributors",
      description: "Marketing and growth experts",
    },
    {
      icon: Puzzle,
      title: "Problem Solvers",
      description: "Generalists tackling diverse challenges",
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
        <p className="text-primary font-semibold text-sm">WHO CONTRIBUTES</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Diverse skills, one execution market
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From designers to developers, researchers to writers—Gibwork brings together contributors with all types of expertise.
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
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
      >
        {contributorTypes.map((type) => {
          const Icon = type.icon;
          return (
            <motion.div
              key={type.title}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{type.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {type.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-12 text-center"
      >
        <p className="text-lg font-medium text-primary">
          Different skills. Same execution market.
        </p>
      </motion.div>
    </section>
  );
}
