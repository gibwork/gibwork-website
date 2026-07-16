"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Smartphone, Search, Upload, CheckCircle, Bell, Wallet, Moon, Sun } from "lucide-react";

export function MobileApp() {
  const features = [
    {
      icon: Search,
      title: "Browse Tasks",
      description: "Discover and filter tasks from anywhere",
    },
    {
      icon: Upload,
      title: "Submit Work",
      description: "Upload completed work directly from your phone",
    },
    {
      icon: CheckCircle,
      title: "Track Approvals",
      description: "Monitor review status in real-time",
    },
    {
      icon: Bell,
      title: "Payment Notifications",
      description: "Get instant alerts when you're paid",
    },
    {
      icon: Wallet,
      title: "Wallet Activity",
      description: "Track your earnings and transaction history",
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
        <p className="text-primary font-semibold text-sm">MOBILE EXPERIENCE</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Work from anywhere, anytime
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Gibwork is fully mobile-optimized with support for both light and dark modes. Browse tasks, submit work, track approvals, and receive payment notifications—all from your phone.
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
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="p-6 rounded-2xl border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {feature.description}
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
        className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <div className="relative w-64 h-[500px] bg-gradient-to-b from-background to-muted rounded-3xl border-4 border-foreground/10 p-4 flex flex-col items-center justify-center">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <Sun className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold">Light Mode</span>
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-foreground/20 rounded-full" />
        </div>

        <div className="relative w-64 h-[500px] bg-gradient-to-b from-foreground to-muted-foreground rounded-3xl border-4 border-background/10 p-4 flex flex-col items-center justify-center">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <Moon className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold text-background">Dark Mode</span>
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
              <Search className="w-6 h-6 text-background" />
            </div>
            <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
              <Upload className="w-6 h-6 text-background" />
            </div>
            <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-background" />
            </div>
            <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-background" />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-background/20 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
