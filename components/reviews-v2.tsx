"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, CheckCircle2 } from "lucide-react";

const projectReviews = [
  {
    profile: "DeFi Protocol",
    taskType: "Smart Contract Audit",
    review: "Gibwork connected us with top-tier auditors who delivered comprehensive security reviews. The onchain payment system made the entire process seamless.",
    outcome: "Security audit completed, 3 vulnerabilities found and fixed",
  },
  {
    profile: "NFT Marketplace",
    taskType: "UX/UI Design",
    review: "Found exceptional designers through Gibwork. The task completion and review workflow was transparent, and payments were instant upon approval.",
    outcome: "New marketplace design launched, user engagement up 40%",
  },
  {
    profile: "Gaming DAO",
    taskType: "Community Management",
    review: "Our community manager from Gibwork has been outstanding. The platform's review system ensured quality before payment.",
    outcome: "Community grew by 5,000 members in 2 months",
  },
];

const contributorReviews = [
  {
    profile: "crypto_ava",
    taskType: "Smart Contract Development",
    review: "Gibwork provides real opportunities with transparent payments. I've completed 156 tasks and received instant wallet payouts every time.",
    outcome: "Earned $42,800 across 156 completed tasks",
  },
  {
    profile: "ui_zen",
    taskType: "Product Design",
    review: "The review process is fair and payments are immediate. No delays, no partial payments—just straightforward work and rewards.",
    outcome: "Earned $28,100 across 128 completed tasks",
  },
  {
    profile: "devsora",
    taskType: "Full-Stack Development",
    review: "Gibwork is the future of freelancing. Onchain payments mean I get paid instantly for approved work without intermediaries.",
    outcome: "Earned $36,250 across 142 completed tasks",
  },
];

export function ReviewsV2() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm">REVIEWS</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          What people are saying
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Hear from both projects and contributors who have experienced the Gibwork marketplace.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-12"
      >
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Project Reviews
            </TabsTrigger>
            <TabsTrigger value="contributors" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Contributor Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-8">
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
              className="grid md:grid-cols-3 gap-6"
            >
              {projectReviews.map((review, index) => (
                <motion.div
                  key={index}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="p-6 rounded-2xl border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{review.profile}</p>
                      <p className="text-sm text-muted-foreground">{review.taskType}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4">{review.review}</p>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground">{review.outcome}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="contributors" className="mt-8">
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
              className="grid md:grid-cols-3 gap-6"
            >
              {contributorReviews.map((review, index) => (
                <motion.div
                  key={index}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="p-6 rounded-2xl border bg-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{review.profile}</p>
                      <p className="text-sm text-muted-foreground">{review.taskType}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4">{review.review}</p>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground">{review.outcome}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
