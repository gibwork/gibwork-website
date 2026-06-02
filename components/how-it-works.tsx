"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import {
  Search,
  FileText,
  Users,
  Wallet,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const clientSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Create a Task or Bounty",
    description:
      "Describe your project, set your budget in USDC or any SPL token, and choose between open source bounties, simple tasks, or private engagements.",
  },
  {
    icon: Users,
    step: "02",
    title: "Review Submissions",
    description:
      "Skilled freelancers and developers submit their work. Browse portfolios, check on-chain reputation, and pick the best fit for your needs.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Approve & Pay",
    description:
      "Review the completed work, approve with one click, and funds are released instantly from escrow to the freelancer&apos;s wallet.",
  },
];

const freelancerSteps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & Apply",
    description:
      "Explore open bounties, tasks, and services across Development, Design, Social Media, and Open Source categories. Filter by budget and skill level.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Submit Your Work",
    description:
      "Complete the task and submit your work directly through the platform. For bounties, submit a PR on GitHub and link it to the task.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Get Paid Instantly",
    description:
      "Once approved, payment is released immediately to your Solana wallet in the token of your choice — no waiting periods, no middlemen.",
  },
];

export function HowItWorks() {
  return (
    <motion.section
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
      id="how-it-works"
      className="relative py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mb-12"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-wider">
          How It Works
        </p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Start in minutes, not days
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Whether you&apos;re hiring talent or looking for your next gig,
          Gibwork streamlines the entire process from posting to payment.
        </p>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Tabs defaultValue="client" className="w-full">
          <TabsList className="mx-auto flex w-fit rounded-full mb-12">
            <TabsTrigger value="client" className="rounded-full px-6">
              I Want to Hire
            </TabsTrigger>
            <TabsTrigger value="freelancer" className="rounded-full px-6">
              I Want to Work
            </TabsTrigger>
          </TabsList>

          <TabsContent value="client">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {clientSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <step.icon className="size-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <h3 className="font-semibold text-lg mt-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < clientSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-6 -right-4 w-8 justify-center items-center -translate-y-1/2">
                      <ArrowRight className="size-5 text-muted-foreground/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="freelancer">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {freelancerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <step.icon className="size-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <h3 className="font-semibold text-lg mt-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < freelancerSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-6 -right-4 w-8 justify-center items-center -translate-y-1/2">
                      <ArrowRight className="size-5 text-muted-foreground/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.section>
  );
}
