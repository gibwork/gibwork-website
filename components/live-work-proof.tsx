"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";

const fundedWork = [
  {
    title: "Improve Gibwork Landing Page or Submit a GitHub Enhancement",
    reward: "350 USDC",
    type: "Development",
    proof: "GitHub issue or PR",
    href: "https://app.gib.work/tasks/b7c2a3c9-c412-4613-9cfb-d8a5f54d14b7",
  },
  {
    title: "Create a Gibwork Product Walkthrough for New Users",
    reward: "300 USDC",
    type: "Content",
    proof: "Public video link",
    href: "https://app.gib.work/tasks/b614a67a-42da-44d8-9499-7e6f75cf5c54",
  },
  {
    title: "Testing & Referral Share",
    reward: "50 USDC",
    type: "Feedback",
    proof: "Notes and screenshots",
    href: "https://app.gib.work/tasks/d389b565-8c47-4de6-ac4f-22f9170223e7",
  },
];

const proofSteps = [
  "Choose a funded task",
  "Ship the requested artifact",
  "Submit public proof",
  "Wait for creator review",
];

const proofHints = [
  "Development: include issue, PR, validation notes, and screenshots.",
  "Content: include the public post, video, or campaign link.",
  "Feedback: include specific findings, annotated screenshots, and quick wins.",
];

export function LiveWorkProof() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant="secondary">Live work proof</Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-4">
            Funded work, visible before you sign in
          </h2>
          <p className="text-muted-foreground mt-3">
            See real task examples, understand the proof package, and decide
            whether there is work worth attempting today.
          </p>

          <div className="grid gap-3 mt-8">
            {proofSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid gap-4"
        >
          <div className="grid gap-3">
            {fundedWork.map((task) => (
              <Card key={task.title} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-base sm:text-lg">
                        {task.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary">{task.type}</Badge>
                        <Badge variant="outline">{task.reward}</Badge>
                        <Badge variant="outline">{task.proof}</Badge>
                      </div>
                    </div>
                    <Link
                      href={task.href}
                      target="_blank"
                      className="shrink-0 rounded-full border p-2 hover:bg-muted transition-colors"
                      aria-label={`Open task: ${task.title}`}
                    >
                      <ExternalLink className="size-4" />
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold">What strong submissions include</h3>
              <div className="grid gap-3 mt-4">
                {proofHints.map((hint) => (
                  <div key={hint} className="flex gap-3 text-sm">
                    <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground">{hint}</p>
                  </div>
                ))}
              </div>
              <Link
                href="https://app.gib.work/"
                target="_blank"
                className="inline-flex items-center gap-2 mt-5 font-semibold text-sm hover:underline"
              >
                Browse current work
                <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
