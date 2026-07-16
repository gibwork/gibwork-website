"use client";

import { Button } from "@/components/ui/button";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  ClipboardList,
  GitPullRequest,
  Search,
  Smartphone,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dashboard from "@/public/dashboard-2.png";

const mobileHighlights = [
  {
    icon: Bell,
    title: "Discover work faster",
    description:
      "Browse fresh tasks, bounties, and submission updates from your phone.",
  },
  {
    icon: ClipboardList,
    title: "Submit from anywhere",
    description:
      "Keep requirements, proof links, and task progress close while you work.",
  },
  {
    icon: Wallet,
    title: "Track payouts",
    description: "Follow approvals and earnings without switching between tools.",
  },
];

const sponsorSteps = [
  "Post a task or fund a GitHub issue.",
  "Review submissions with clear proof of work.",
  "Approve the best deliverable and release escrowed USDC.",
];

const earnerSteps = [
  "Browse bounties by skill, budget, and requirements.",
  "Submit a PR, report, design, or proof link.",
  "Get approved and claim stablecoin rewards.",
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
      className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-6">
        <p className="text-sm font-semibold text-primary">MOBILE WORKFLOW</p>
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Take paid work from discovery to payout.
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            The Gibwork app brings the task feed, submission flow, and payout
            tracking into a compact experience for contributors on the move.
          </p>
        </div>

        <div className="grid gap-3">
          {mobileHighlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-3 rounded-lg border bg-background p-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild>
            <Link href={siteConfig.appStoreUrl} target="_blank">
              <Smartphone className="size-4" />
              Download for iPhone
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={siteConfig.playStoreUrl} target="_blank">
              <Smartphone className="size-4" />
              Get it on Android
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border bg-foreground p-2 shadow-2xl">
          <div className="overflow-hidden rounded-[1.5rem] bg-background">
            <Image
              alt="Gibwork task feed preview"
              src={dashboard}
              className="h-[520px] w-full object-cover object-left-top"
            />
          </div>
        </div>

        <div className="grid content-center gap-4">
          <WorkflowCard
            title="For sponsors"
            icon={GitPullRequest}
            steps={sponsorSteps}
          />
          <WorkflowCard
            title="For earners"
            icon={Search}
            steps={earnerSteps}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

function WorkflowCard({
  title,
  icon: Icon,
  steps,
}: {
  title: string;
  icon: typeof GitPullRequest;
  steps: string[];
}) {
  return (
    <div className="rounded-lg border bg-background p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ol className="space-y-3">
        {steps.map((step) => (
          <li key={step} className="flex gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
