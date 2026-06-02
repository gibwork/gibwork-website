"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ShieldCheck, Trophy } from "lucide-react";

const tabs = [
  { id: "today", label: "Today" },
  { id: "weekly", label: "Weekly" },
  { id: "alltime", label: "All-time" },
];

export function TopEarnersLeaderboard() {
  const [activeTab, setActiveTab] = useState("alltime");
  const [board, setBoard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBoard() {
      setLoading(true);
      try {
        const res = await fetch(`/api/leaderboard/top-earners?period=${activeTab}`);
        if (!res.ok) return;
        const json = await res.json();
        setBoard(json.topEarners);
      } catch {
        setBoard([]);
      } finally {
        setLoading(false);
      }
    }
    loadBoard();
  }, [activeTab]);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">TOP EARNERS</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Contributors earning real rewards now
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Active contributors are earning every day across campaigns, reviews, bounties, and research tasks.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-primary text-background"
                : "bg-muted/70 text-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {loading ? (
          <div className="col-span-full rounded-3xl border border-border bg-card p-8 text-center text-muted-foreground">
            Loading leaderboard...
          </div>
        ) : board.length ? (
          board.map((item, index) => (
            <div key={item.username} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary font-semibold">
                    #{index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{item.username}</p>
                    <p className="text-sm text-muted-foreground">{item.tasksCompleted} tasks completed</p>
                  </div>
                </div>
                <p className="text-lg font-semibold">{item.totalEarnings}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-border bg-card p-8 text-center text-muted-foreground">
            No leaderboard activity available right now.
          </div>
        )}
      </motion.div>
    </section>
  );
}
