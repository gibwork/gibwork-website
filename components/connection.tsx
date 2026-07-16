"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ArrowRight, Building2, Users, Code, Palette, Bug, Search, TrendingUp, FileText, BarChart3 } from "lucide-react";

export function Connection() {
  const projectNeeds = [
    { icon: Code, label: "Development" },
    { icon: Palette, label: "Design" },
    { icon: Bug, label: "Testing" },
    { icon: Search, label: "Research" },
    { icon: TrendingUp, label: "Growth" },
  ];

  const contributorSkills = [
    { icon: Code, label: "Code" },
    { icon: Palette, label: "Design" },
    { icon: FileText, label: "Feedback" },
    { icon: Search, label: "Analysis" },
    { icon: BarChart3, label: "Execution" },
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
        <p className="text-primary font-semibold text-sm">CONNECTION</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Projects Meet Contributors
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Value flows through Gibwork as projects post tasks and contributors deliver solutions.
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
              staggerChildren: 0.15,
            },
          },
        }}
        className="mt-12 grid md:grid-cols-3 gap-8 items-center"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-xl">Projects Need</h3>
          </div>
          {projectNeeds.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col items-center justify-center py-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowRight className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
          </div>
          <p className="mt-4 text-sm font-semibold text-primary">Marketplace</p>
        </motion.div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-xl">Contributors Provide</h3>
          </div>
          {contributorSkills.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
