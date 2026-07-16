"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { AnimatedCounter } from "./animated-counter";
import { TrendingUp, Users, CheckCircle, Wallet, ArrowUpRight, Activity, Zap, DollarSign } from "lucide-react";

export function MarketplaceDashboard() {
  const recentActivity = [
    { type: "Task Completed", user: "crypto_ava", amount: "$450", time: "2m ago", avatar: "CA" },
    { type: "Task Completed", user: "devsora", amount: "$820", time: "5m ago", avatar: "DS" },
    { type: "Task Completed", user: "ui_zen", amount: "$320", time: "8m ago", avatar: "UZ" },
    { type: "Task Completed", user: "buildflow", amount: "$1,200", time: "12m ago", avatar: "BF" },
    { type: "Task Completed", user: "taskpilot", amount: "$580", time: "15m ago", avatar: "TP" },
  ];

  const topEarners = [
    { rank: 1, name: "crypto_ava", earnings: "$42,800", change: "+12%" },
    { rank: 2, name: "devsora", earnings: "$36,250", change: "+8%" },
    { rank: 3, name: "ui_zen", earnings: "$28,100", change: "+15%" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="relative w-full h-full min-h-[500px] lg:min-h-[600px]"
    >
      <div className="relative w-full h-full rounded-3xl border border-border/50 bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl p-6 lg:p-8 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">Marketplace Command Center</h3>
            <p className="text-sm text-muted-foreground">Live platform activity</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary">Live</span>
          </div>
        </div>

        {/* Main Metrics */}
        <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Total Paid Out</span>
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-primary">
              $<AnimatedCounter value={12.8} decimals={1} />M+
            </p>
            <div className="flex items-center gap-1 mt-1 text-xs text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>+24% this week</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Contributors</span>
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-primary">
              <AnimatedCounter value={18732} />
            </p>
            <div className="flex items-center gap-1 mt-1 text-xs text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>+18% this week</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Tasks Completed</span>
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-primary">
              <AnimatedCounter value={24851} />
            </p>
            <div className="flex items-center gap-1 mt-1 text-xs text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>+32% this week</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Active Tasks</span>
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-primary">
              <AnimatedCounter value={847} />
            </p>
            <div className="flex items-center gap-1 mt-1 text-xs text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>+15% this week</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Recent Activity + Top Earners */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recent Activity */}
          <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold">Recent Activity</h4>
              <Zap className="w-4 h-4 text-primary animate-pulse" />
            </div>
            <div className="space-y-2">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-background/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-xs font-bold text-background">
                      {activity.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-medium">{activity.user}</p>
                      <p className="text-[10px] text-muted-foreground">{activity.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-primary">{activity.amount}</p>
                    <p className="text-[10px] text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Earners */}
          <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold">Top Earners</h4>
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </div>
            <div className="space-y-2">
              {topEarners.map((earner) => (
                <div key={earner.rank} className="flex items-center justify-between p-2 rounded-lg bg-background/50">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {earner.rank}
                    </div>
                    <p className="text-xs font-medium">{earner.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-primary">{earner.earnings}</p>
                    <p className="text-[10px] text-green-500">{earner.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
