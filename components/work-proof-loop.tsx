"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  ImageIcon,
  Search,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import taskFeedbackImg from "@/public/tasks/image-01.png";
import taskDesignImg from "@/public/tasks/image-02.png";
import taskCodeImg from "@/public/tasks/image-03.png";

const fundedWork = [
  {
    image: taskCodeImg,
    category: "Open Source",
    title: "Ship a GitHub pull request",
    reward: "500 USDC",
    deadline: "5 days left",
    proof: "PR URL + implementation notes",
    href: `${siteConfig.appUrl}tasks`,
  },
  {
    image: taskFeedbackImg,
    category: "Feedback",
    title: "Review a product workflow",
    reward: "100 USDC",
    deadline: "3 days left",
    proof: "Screenshots + written findings",
    href: `${siteConfig.appUrl}tasks`,
  },
  {
    image: taskDesignImg,
    category: "Design",
    title: "Polish a landing-page section",
    reward: "250 USDC",
    deadline: "7 days left",
    proof: "Preview link + before/after notes",
    href: `${siteConfig.appUrl}tasks`,
  },
];

const proofSteps = [
  {
    title: "Choose funded work",
    description: "Browse live tasks, bounties, categories, rewards, and deadlines.",
    icon: Search,
  },
  {
    title: "Submit proof",
    description: "Attach the requested PR, issue, screenshot, URL, recording, or media file.",
    icon: FileCheck2,
  },
  {
    title: "Get reviewed",
    description: "Task owners check the evidence against the scope before approving work.",
    icon: ShieldCheck,
  },
  {
    title: "Receive payout",
    description: "Accepted submissions release the funded reward to the contributor wallet.",
    icon: Wallet,
  },
];

const checklist = [
  "Use a public link when the task asks for code or social proof.",
  "Show screenshots or recordings when the result is visual.",
  "Match the task scope instead of recycling unrelated work.",
  "Include concise notes so reviewers can verify the submission quickly.",
];

export function WorkProofLoop() {
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
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-b"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <p className="text-primary font-semibold text-sm">WORK PROOF LOOP</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
            Post work. Submit proof. Get paid onchain.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Gibwork turns funded work into verifiable submissions. Teams post
            tasks and bounties, contributors submit the requested evidence, and
            accepted work releases the reward to a wallet.
          </p>

          <div className="mt-8 grid gap-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button className="group" asChild>
              <Link href={`${siteConfig.appUrl}tasks`} target="_blank">
                Explore funded work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`${siteConfig.appUrl}tasks/new`} target="_blank">
                Create a task
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={siteConfig.appUrl} target="_blank">
                Download mobile app
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-4">
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="grid md:grid-cols-3 gap-4"
          >
            {fundedWork.map((work) => (
              <Card key={work.title} className="overflow-hidden">
                <Link href={work.href} target="_blank" className="block h-full">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={work.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="secondary" className="rounded-md">
                        {work.category}
                      </Badge>
                      <span className="text-sm font-semibold">{work.reward}</span>
                    </div>
                    <CardTitle className="text-base leading-snug mt-3">
                      {work.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock3 className="size-4" />
                      <span>{work.deadline}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <ImageIcon className="size-4 mt-0.5 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">
                          Required proof:
                        </span>{" "}
                        {work.proof}
                      </span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </motion.div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="grid sm:grid-cols-2 gap-4"
          >
            {proofSteps.map((step, index) => (
              <Card key={step.title} className="bg-muted/40">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-background border">
                      <step.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Step {index + 1}
                      </p>
                      <h3 className="font-semibold mt-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
