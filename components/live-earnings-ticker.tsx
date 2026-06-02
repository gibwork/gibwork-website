"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Activity } from "lucide-react";

const tickerSamples = [
  "@sol-tasker earned $24.80 for completing a frontend task",
  "@designpix completed 3 tasks in the last hour",
  "New payout: $520.00 processed",
  "@growthgal earned $18.00 for campaign QA",
  "@devnoir completed a GitHub bounty",
  "@user01 earned $5.20 for product feedback",
];

export function LiveEarningsTicker() {
  const [liveStats, setLiveStats] = useState({
    totalEarnedToday: "$14.3K",
    activeContributors: 128,
    tasksLast24h: 58,
  });

  const [items, setItems] = useState<string[]>(tickerSamples);

  useEffect(() => {
    async function loadStats() {
      try {
        const [liveRes, earningsRes] = await Promise.all([
          fetch("/api/stats/live"),
          fetch("/api/earnings/recent"),
        ]);
        if (liveRes.ok) {
          const liveData = await liveRes.json();
          setLiveStats({
            totalEarnedToday: liveData.totalEarnedToday,
            activeContributors: liveData.activeContributors,
            tasksLast24h: liveData.tasksLast24h,
          });
        }
        if (earningsRes.ok) {
          const earningsData = await earningsRes.json();
          setItems(earningsData.recentEarnings);
        }
      } catch {
        // Keep mocks if fetch fails.
      }
    }
    loadStats();
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 text-sm sm:px-6">
        <div className="hidden items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-green-600 md:flex">
          <Activity className="h-4 w-4" />
          Live ecosystem activity
        </div>

        <div className="relative overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap gap-8 py-1">
            {items.concat(items).map((text, index) => (
              <span key={`${text}-${index}`} className="inline-flex items-center gap-2 text-muted-foreground">
                <span className="rounded-full bg-muted px-2 py-1 text-xs uppercase tracking-[0.2em] text-primary">Live</span>
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-6 text-xs text-muted-foreground md:flex">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1">
            <span className="font-semibold text-foreground">Total reward distributed in the past seven days</span>
            <span className="text-foreground">{liveStats.totalEarnedToday}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1">
            <span className="font-semibold text-foreground">Active contributors</span>
            <span className="text-foreground">{liveStats.activeContributors}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1">
            <span className="font-semibold text-foreground">Tasks last 24h</span>
            <span className="text-foreground">{liveStats.tasksLast24h}</span>
          </div>
        </div>

        <ArrowRight className="hidden h-4 w-4 text-muted-foreground md:block" />
      </div>
    </div>
  );
}
