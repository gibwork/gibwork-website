"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import {
  CheckCircle2,
  ClipboardList,
  Github,
  Smartphone,
  UploadCloud,
  Users,
  Wallet,
} from "lucide-react";

const workDetails = [
  {
    image: "/tasks/image-01.png",
    title: "Design a product landing page",
    amount: 500,
    token: "usdc",
  },
  {
    image: "/tasks/image-02.png",
    title: "Complete a GitHub bounty",
    amount: 500,
    token: "usdc",
  },
  {
    image: "/tasks/image-03.png",
    title: "Create growth content",
    amount: 100,
    token: "usdc",
  },
];

const postOptions = [
  {
    icon: Github,
    title: "Open Source Bounty",
    description:
      "Attach a reward to a GitHub issue and review completed pull requests.",
    image: "https://cdn.gib.work/misc/open_source_bounty.png",
    alt: "Open source bounty illustration",
  },
  {
    icon: ClipboardList,
    title: "Simple Task",
    description:
      "Publish a clear brief for research, feedback, testing, content, or operations.",
    image: "https://cdn.gib.work/misc/simple_task.png",
    alt: "Simple task illustration",
  },
  {
    icon: Users,
    title: "Services",
    description:
      "Find repeat contributors for scoped creative, product, and technical work.",
    image: "https://cdn.gib.work/misc/services.png",
    alt: "Services illustration",
  },
];

const workerSteps = [
  {
    icon: Smartphone,
    title: "Browse anywhere",
    description: "Use web or mobile to find tasks with clear requirements.",
  },
  {
    icon: UploadCloud,
    title: "Submit proof",
    description: "Attach the PR, file, screenshot, or link requested by the brief.",
  },
  {
    icon: Wallet,
    title: "Track payout",
    description: "Follow status updates and receive approved stablecoin rewards.",
  },
];

export function LookingFor() {
  return (
    <section className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <Tabs defaultValue="1" className="w-full flex flex-col items-center">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TabsList className="mx-auto rounded-full">
            <TabsTrigger className="rounded-full px-4" value="1">
              Post work
            </TabsTrigger>
            <TabsTrigger className="rounded-full px-4" value="2">
              Do work
            </TabsTrigger>
          </TabsList>
        </motion.div>
        <TabsContent value="1" className="mt-8 w-full">
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
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
          >
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="lg:sticky lg:top-24 lg:text-left text-center"
            >
              <Badge variant={"secondary"}>For teams</Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
                Publish scoped work people can actually finish.
              </h2>

              <p className="mt-4 text-muted-foreground">
                Create bounties, tasks, or service requests with a clear reward,
                deadline, and submission format. Gibwork keeps the ask specific
                so contributors know exactly what to deliver.
              </p>

              <div className="mt-6 space-y-3 text-left">
                {[
                  "Reward tasks in USDC, SOL, or supported tokens.",
                  "Use GitHub issues for open source work.",
                  "Review submissions before approving payout.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid gap-4 md:grid-cols-3"
            >
              {postOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <Card key={option.title} className="overflow-hidden rounded-md">
                    <div className="relative h-40 border-b bg-muted">
                      <Image
                        src={option.image}
                        alt={option.alt}
                        className="h-full w-full object-cover"
                        width={360}
                        height={200}
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>
        </TabsContent>
        <TabsContent value="2" className="mt-8 w-full">
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
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
          >
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="lg:text-left text-center"
            >
              <Badge variant={"secondary"}>For contributors</Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
                Find a task, submit the work, track the reward.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Gibwork makes the path from discovery to payout visible, whether
                the deliverable is a pull request, a design file, research, or a
                screenshot-backed task submission.
              </p>
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid gap-4 sm:grid-cols-3"
            >
              {workerSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <Card key={step.title} className="rounded-md">
                    <CardHeader>
                      <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-3 lg:col-span-2"
            >
              {workDetails.map((_detail) => (
                <Card
                  key={_detail.title}
                  className="p-4 flex items-center gap-4 rounded-md"
                >
                  <div className="relative aspect-square rounded-md shrink-0 w-12 bg-muted overflow-hidden">
                    <Image
                      alt=""
                      fill
                      src={_detail.image}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 grow">
                    <p className="truncate font-semibold">{_detail.title}</p>
                    <p className="text-sm text-muted-foreground">
                      Clear brief, required proof, review status
                    </p>
                  </div>

                  <div className="font-semibold flex items-center justify-end gap-2 shrink-0">
                    <p>{_detail.amount}</p>
                    <div className="relative aspect-square rounded-full w-8 bg-muted overflow-hidden">
                      <Image
                        alt=""
                        fill
                        src={`/token-${_detail.token}.png`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
