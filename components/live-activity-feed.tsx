"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Activity, Bell, Sparkles } from "lucide-react";

const initialFeed = [
  "@cardo completed a task and earned $3.20",
  "New campaign launched: Web3 survey",
  "$500 distributed in the last 10 minutes",
  "@noma earned $12.00 for UX feedback",
];

export function LiveActivityFeed() {
  const [feed, setFeed] = useState<string[]>(initialFeed);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    async function refreshFeed() {
      try {
        const res = await fetch("/api/activity/live");
        if (!res.ok) return;
        const json = await res.json();
        setFeed(json.activities);
      } catch {
        // ignore errors
      }
    }
    refreshFeed();
    interval = setInterval(refreshFeed, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl bg-slate-950/5 rounded-[2rem] border border-slate-900/50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-primary font-semibold text-sm">LIVE ACTIVITY</p>
          <h2 className="font-semibold text-3xl sm:text-4xl mt-2">What’s happening on Gibwork right now</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/20">
          <Bell className="h-4 w-4 text-emerald-300" />
          Refreshing every 9 seconds
        </div>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {feed.map((item, index) => (
          <motion.div
            key={`${item}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Activity className="h-4 w-4 text-emerald-400" />
              <div>{item}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
