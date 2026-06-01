"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import { ClipboardCheck, GitPullRequest, Search, Smartphone, WalletCards } from "lucide-react";

const steps = [
  {
    title: "Find a bounty",
    description: "Browse open GitHub bounties, simple tasks, and creator work with visible rewards.",
    icon: Search,
  },
  {
    title: "Submit proof",
    description: "Attach a pull request, issue, link, screenshot, or file directly to the task.",
    icon: GitPullRequest,
  },
  {
    title: "Track review",
    description: "Follow pending, approved, and rejected submission states without chasing DMs.",
    icon: ClipboardCheck,
  },
  {
    title: "Get paid",
    description: "Approved work releases stablecoin rewards to a connected noncustodial wallet.",
    icon: WalletCards,
  },
];

export function Workflow() {
  return (
    <motion.section
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
      id="workflow"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex flex-col lg:flex-row gap-8 lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <Badge variant="secondary">How Gibwork works</Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-4">
            From open work to approved payout
          </h2>
          <p className="text-muted-foreground mt-3">
            Gibwork turns task discovery, submission review, and stablecoin rewards into one clear
            workflow for contributors and creators.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-background border">
            <Smartphone className="size-5" />
          </div>
          <div>
            <p className="font-semibold">Mobile-ready by default</p>
            <p className="text-sm text-muted-foreground">Browse, submit, and track work anywhere.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} key={step.title}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
