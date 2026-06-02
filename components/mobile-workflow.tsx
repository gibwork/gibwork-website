"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Smartphone,
    title: "Discover work from your phone",
    description:
      "Browse bounties and online tasks with requirements, reward details, and deadlines in the iPhone app.",
  },
  {
    icon: ClipboardCheck,
    title: "Submit proof in context",
    description:
      "Attach the completed work, PR, or deliverable where the creator can review it without chasing extra links.",
  },
  {
    icon: CheckCircle2,
    title: "Track status through payout",
    description:
      "Follow pending, approved, and paid submissions so contributors know what happens after the work is sent.",
  },
];

export function MobileWorkflow() {
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
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center"
      >
        <div>
          <p className="text-sm font-semibold text-primary">Mobile app</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            A clearer path from bounty discovery to payout
          </h2>
          <p className="mt-4 text-muted-foreground">
            The current Gibwork product is not just a job board. Contributors
            can find paid opportunities, submit completed work, track review
            status, and manage earnings in one mobile-first workflow.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild className="group">
              <Link href={siteConfig.appUrl} target="_blank">
                View open tasks
                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={siteConfig.appStoreUrl} target="_blank">
                Open App Store
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {steps.map((step) => (
            <Card key={step.title} className="overflow-hidden">
              <CardHeader className="flex-row gap-4 space-y-0">
                <div className="shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <CardTitle className="text-lg leading-6">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {step.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-1.5 rounded-full bg-muted">
                  <div className="h-full w-2/3 rounded-full bg-primary/70" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
