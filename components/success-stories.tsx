"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { CheckCircle2, Briefcase, Clock } from "lucide-react";

export function SuccessStories() {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    async function loadStories() {
      try {
        const res = await fetch("/api/projects/success-stories");
        if (!res.ok) return;
        const json = await res.json();
        setStories(json.stories);
      } catch {
        setStories([]);
      }
    }
    loadStories();
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
        <p className="text-primary font-semibold text-sm">SUCCESS STORIES</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Top projects proving Gibwork delivers results
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Real campaign outcomes, fast task completion, and measurable engagement from founders and project leads.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {(stories.length ? stories : [
          {
            project: "DeFi growth sprint",
            testimonial: "Gibwork matched us with execution talent fast and helped us validate the launch with real feedback.",
            tasksCompleted: 18,
            engagementRate: "86%",
            completionTime: "24h",
          },
          {
            project: "Product launch research",
            testimonial: "We received actionable insights quickly and got paid contributors to handle the discovery work.",
            tasksCompleted: 12,
            engagementRate: "78%",
            completionTime: "36h",
          },
          {
            project: "UX audit campaign",
            testimonial: "The workflow made approvals easy and payouts immediate for contributors.",
            tasksCompleted: 9,
            engagementRate: "91%",
            completionTime: "18h",
          },
        ]).map((story) => (
          <motion.div
            key={story.project}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <p className="text-sm font-semibold text-primary">{story.project}</p>
            <p className="mt-4 text-2xl font-semibold text-foreground">“{story.testimonial}”</p>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>{story.tasksCompleted} tasks completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-sky-400" />
                <span>Engagement rate {story.engagementRate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-violet-400" />
                <span>Completion time {story.completionTime}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
