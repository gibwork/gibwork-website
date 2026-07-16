"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Palette, Code, Server, Bug, PenTool, Search, GitBranch, Layers, TrendingUp, MessageSquare, Megaphone, Users } from "lucide-react";

const taskCategories = [
  {
    icon: Code,
    title: "Development",
    description: "Frontend, backend, smart contracts, and infrastructure",
    exampleReward: "$500",
    tasksCompleted: "2,341",
  },
  {
    icon: GitBranch,
    title: "GitHub Bounties",
    description: "Open source contributions, pull requests, and issue resolution",
    exampleReward: "$300",
    tasksCompleted: "1,892",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Interface design, user research, wireframes, and visual systems",
    exampleReward: "$400",
    tasksCompleted: "1,456",
  },
  {
    icon: MessageSquare,
    title: "Product Feedback",
    description: "User testing, feedback collection, and product insights",
    exampleReward: "$150",
    tasksCompleted: "987",
  },
  {
    icon: Bug,
    title: "Product Testing",
    description: "Quality assurance, bug testing, and user acceptance testing",
    exampleReward: "$200",
    tasksCompleted: "1,234",
  },
  {
    icon: Search,
    title: "Research",
    description: "Market research, competitive analysis, and product strategy",
    exampleReward: "$350",
    tasksCompleted: "756",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Social media, content marketing, and growth strategies",
    exampleReward: "$250",
    tasksCompleted: "1,089",
  },
  {
    icon: PenTool,
    title: "Content",
    description: "Technical writing, marketing copy, documentation, and content creation",
    exampleReward: "$200",
    tasksCompleted: "1,567",
  },
  {
    icon: Users,
    title: "Community",
    description: "Community management, moderation, and engagement",
    exampleReward: "$180",
    tasksCompleted: "678",
  },
  {
    icon: Layers,
    title: "Custom Tasks",
    description: "Miscellaneous work and specialized project requirements",
    exampleReward: "Varies",
    tasksCompleted: "2,345",
  },
];

export function LookingFor() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">MARKETPLACE</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          One Marketplace. Thousands of Opportunities.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Explore diverse task categories and find opportunities that match your skills.
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
        className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12"
      >
        {taskCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="p-6 rounded-2xl border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {category.description}
              </p>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Example Reward</span>
                  <span className="font-semibold text-primary">{category.exampleReward}</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Tasks Completed</span>
                  <span className="font-semibold">{category.tasksCompleted}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
