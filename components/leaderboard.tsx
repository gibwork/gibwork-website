"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ArrowRight } from "lucide-react";

const leaderboardData = {
  allTime: [
    { rank: 1, name: "crypto_ava", tasksCompleted: 156, earnings: "$42,800" },
    { rank: 2, name: "devsora", tasksCompleted: 142, earnings: "$36,250" },
    { rank: 3, name: "ui_zen", tasksCompleted: 128, earnings: "$28,100" },
    { rank: 4, name: "buildflow", tasksCompleted: 98, earnings: "$19,750" },
    { rank: 5, name: "taskpilot", tasksCompleted: 87, earnings: "$14,900" },
  ],
  monthly: [
    { rank: 1, name: "modular_mia", tasksCompleted: 34, earnings: "$8,600" },
    { rank: 2, name: "launch_lee", tasksCompleted: 29, earnings: "$7,300" },
    { rank: 3, name: "design_don", tasksCompleted: 27, earnings: "$6,900" },
    { rank: 4, name: "qa_quinn", tasksCompleted: 22, earnings: "$5,200" },
    { rank: 5, name: "growth_grace", tasksCompleted: 19, earnings: "$4,500" },
  ],
  weekly: [
    { rank: 1, name: "task_tara", tasksCompleted: 12, earnings: "$2,300" },
    { rank: 2, name: "code_cody", tasksCompleted: 10, earnings: "$1,950" },
    { rank: 3, name: "review_rae", tasksCompleted: 9, earnings: "$1,720" },
    { rank: 4, name: "feedback_finn", tasksCompleted: 8, earnings: "$1,450" },
    { rank: 5, name: "market_mo", tasksCompleted: 7, earnings: "$1,200" },
  ],
};

const tabs = [
  { id: "allTime", label: "All Time" },
  { id: "monthly", label: "Monthly" },
  { id: "weekly", label: "Weekly" },
];

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState("allTime");
  const currentBoard = leaderboardData[activeTab as keyof typeof leaderboardData];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">TOP CONTRIBUTORS</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Top Contributors
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          See the active contributors who are earning real rewards through completed tasks and approvals.
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
        className="mt-10"
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-primary text-background"
                  : "bg-muted/60 text-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentBoard.map((contributor) => (
            <motion.div
              key={contributor.rank}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-lg font-semibold text-primary">
                    {contributor.rank}
                  </div>
                  <div>
                    <p className="font-semibold">{contributor.name}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary">{contributor.earnings}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tasks Completed</span>
                <span className="font-semibold">{contributor.tasksCompleted}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 flex justify-center"
        >
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90">
            View all contributors
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
