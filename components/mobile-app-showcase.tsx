"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Phone, Bell, DollarSign, Clipboard, TrendingUp } from "lucide-react";

const screens = [
  {
    title: "Task feed",
    description: "Browse active campaigns, bounties, and tasks from your phone.",
    icon: TrendingUp,
  },
  {
    title: "Earnings dashboard",
    description: "Watch live rewards accumulate and track payouts instantly.",
    icon: DollarSign,
  },
  {
    title: "Notifications & approvals",
    description: "Get notified when work is reviewed and paid onchain.",
    icon: Bell,
  },
];

export function MobileAppShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % screens.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeScreen = screens[index];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 mx-auto w-full max-w-7xl bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-[2rem] border border-slate-800/80 shadow-2xl shadow-slate-950/20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="space-y-6"
        >
          <p className="text-primary font-semibold text-sm">TAKE GIBWORK ANYWHERE</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            The mobile experience for contributors and campaign creators
          </h2>
          <p className="max-w-xl text-slate-300">
            Manage work, submit deliverables, and track approvals on the go with mobile-first access to your earnings and task pipeline.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
              <Phone className="h-4 w-4" />
              Download for iOS
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-500">
              <Clipboard className="h-4 w-4" />
              Download for Android
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid gap-6"
        >
          <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/30">
            <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
              <span>{activeScreen.title}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
                Live preview
              </span>
            </div>
            <div className="mt-6 rounded-[2rem] bg-slate-900 p-6">
              <div className="h-80 rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-900/70 p-6 shadow-inner shadow-slate-950/40">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="rounded-3xl bg-slate-800/70 px-3 py-1 text-xs uppercase">Gibwork</span>
                  <span className="text-xs">9:42</span>
                </div>
                <div className="mt-10 flex items-center justify-center h-[280px] rounded-[1.75rem] bg-slate-900/80">
                  {(() => {
                    const ActiveIcon = activeScreen.icon;
                    return <ActiveIcon className="h-16 w-16 text-emerald-400" />;
                  })()}
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <p>{activeScreen.description}</p>
              <p className="text-slate-400">Swipe through a mobile-first experience built for instant task execution and reward tracking.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
