"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { TrendingUp, Users, Gift, Clock3, Sparkles, ShieldCheck } from "lucide-react";

const metrics = [
  {
    key: "payoutsToCreators",
    label: "Total payouts to creators",
    icon: Gift,
    accent: "emerald",
  },
  {
    key: "tasksCompleted",
    label: "Total tasks completed",
    icon: TrendingUp,
    accent: "sky",
  },
  {
    key: "activeContributors",
    label: "Active contributors",
    icon: Users,
    accent: "violet",
  },
  {
    key: "averageCompletionRate",
    label: "Average task completion rate",
    icon: ShieldCheck,
    accent: "amber",
  },
  {
    key: "totalRewardsDistributed",
    label: "Total rewards distributed",
    icon: Sparkles,
    accent: "cyan",
  },
  {
    key: "activeCampaigns",
    label: "Active campaigns",
    icon: Clock3,
    accent: "rose",
  },
];

export function PlatformImpactMetrics() {
  const [overview, setOverview] = useState<any>({
    payoutsToCreators: "$4.9M",
    tasksCompleted: 7300,
    activeContributors: "2.3K",
    averageCompletionRate: "92%",
    totalRewardsDistributed: "$5.2M",
    activeCampaigns: 34,
  });

  useEffect(() => {
    async function loadOverview() {
      try {
        const res = await fetch("/api/stats/overview");
        if (!res.ok) return;
        const json = await res.json();
        setOverview(json);
      } catch {
        // keep defaults
      }
    }
    loadOverview();
  }, []);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">PLATFORM IMPACT</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Live KPIs for the Gibwork ecosystem
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          See the scale of payouts, task velocity, contributor activity and campaign momentum driving the marketplace.
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
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.key}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-3xl bg-slate-950/60 p-3 text-slate-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  metric.accent === "emerald"
                    ? "text-emerald-500 bg-emerald-500/10"
                    : metric.accent === "sky"
                    ? "text-sky-500 bg-sky-500/10"
                    : metric.accent === "violet"
                    ? "text-violet-500 bg-violet-500/10"
                    : metric.accent === "amber"
                    ? "text-amber-500 bg-amber-500/10"
                    : metric.accent === "cyan"
                    ? "text-cyan-500 bg-cyan-500/10"
                    : "text-rose-500 bg-rose-500/10"
                }`}>{metric.label.split(" ")[0]}</div>
              </div>
              <p className="mt-6 text-3xl font-semibold text-foreground">
                {overview[metric.key]}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
