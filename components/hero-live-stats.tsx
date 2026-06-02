"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ArrowRight, TrendingUp, Users, DollarSign, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function useCountUp(target: number | string) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const numeric = typeof target === "string" ? Number(target.toString().replace(/[^0-9.]/g, "")) : target;
    if (Number.isNaN(numeric)) {
      return;
    }
    let frame = 0;
    const totalFrames = 40;
    const start = 0;
    const diff = numeric - start;

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setValue(Math.round(start + diff * progress));
      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };
    tick();
  }, [target]);

  return value;
}

export function HeroLiveStats() {
  const [data, setData] = useState({
    activeContributors: 92,
    totalRewardsToday: "$12.4K",
    tasksLast24h: 72,
    activeCampaigns: 18,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/stats/live");
        if (!res.ok) return;
        const json = await res.json();
        setData(json);
      } catch {
        // fallback to initial data
      }
    }
    loadStats();
  }, []);

  const activeContributors = useCountUp(data.activeContributors);
  const tasksLast24h = useCountUp(data.tasksLast24h);
  const activeCampaigns = useCountUp(data.activeCampaigns);

  const accentMap: Record<string, string> = {
    emerald: "bg-emerald-500/15 text-emerald-300",
    cyan: "bg-cyan-500/15 text-cyan-300",
    sky: "bg-sky-500/15 text-sky-300",
    violet: "bg-violet-500/15 text-violet-300",
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 text-white">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950/95 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Live onchain execution marketplace
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Real work is being completed and paid onchain right now.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Gibwork turns task creation into an active execution economy with live campaigns, contributor earnings, fast reviews, and instant wallet payouts.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={siteConfig.appUrl} target="_blank" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Start Earning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href={siteConfig.appUrl} target="_blank" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-300">
                Launch a Campaign
              </Link>
              <Link href={siteConfig.appUrl} target="_blank" className="inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700">
                Download App
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                label: "Active contributors",
                value: activeContributors,
                icon: Users,
                accent: "emerald",
              },
              {
                label: "Rewards distributed today",
                value: data.totalRewardsToday,
                icon: DollarSign,
                accent: "cyan",
              },
              {
                label: "Tasks completed last 24h",
                value: tasksLast24h,
                icon: TrendingUp,
                accent: "sky",
              },
              {
                label: "Active campaigns",
                value: activeCampaigns,
                icon: Sparkles,
                accent: "violet",
              },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/30">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                      <p className="mt-4 text-3xl font-semibold text-white">
                        {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
                      </p>
                    </div>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl ${accentMap[stat.accent]}`}>
                      <StatIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
