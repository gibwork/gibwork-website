"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Search, ListChecks, Send, BarChart3 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Bounty Discovery",
    description: "Browse active opportunities across content creation, design, dev, and more.",
    icon: Search,
  },
  {
    title: "Task Management",
    description: "View clear instructions and requirements for each bounty directly on your phone.",
    icon: ListChecks,
  },
  {
    title: "Direct Submission",
    description: "Submit your completed work through the app and get paid in your favorite SPL tokens.",
    icon: Send,
  },
  {
    title: "Earnings Tracking",
    description: "Manage payouts and track the status of your submissions in one centralized location.",
    icon: BarChart3,
  },
];

export function MobileExperience() {
  return (
    <section id="mobile" className="relative py-16 sm:py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto border-t">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col items-center"
      >
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-primary font-semibold text-sm"
        >
          MOBILE APP
        </motion.p>
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl mt-2 text-center"
        >
          Work from anywhere, anytime
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 text-muted-foreground text-center max-w-2xl"
        >
          The Gibwork mobile app brings the full power of our decentralized freelance marketplace to your pocket.
          Available now on iOS and Android.
        </motion.p>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full"
        >
          {features.map((feature) => (
            <Card key={feature.title} className="border-none bg-muted/50">
              <CardHeader>
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
