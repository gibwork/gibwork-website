"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  UploadCloud, 
  Eye, 
  Wallet, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

import task1Img from "@/public/tasks/image-01.png";
import task2Img from "@/public/tasks/image-02.png";
import task3Img from "@/public/tasks/image-03.png";
import usdcLogo from "@/public/token-usdc.png";

const steps = [
  {
    step: 1,
    title: "Choose Funded Work",
    description: "Browse tasks funded in USDC or SOL that match your skills.",
    icon: Search,
  },
  {
    step: 2,
    title: "Submit Proof",
    description: "Submit a GitHub PR, public URL, or upload your media file.",
    icon: UploadCloud,
  },
  {
    step: 3,
    title: "Get Reviewed",
    description: "Project maintainers review your submission to verify quality.",
    icon: Eye,
  },
  {
    step: 4,
    title: "Receive Wallet Payout",
    description: "Get rewards sent directly to your connected Solana wallet.",
    icon: Wallet,
  },
];

const fallbackTasks = [
  {
    image: task1Img,
    category: "Development",
    title: "Add React Native boilerplate features",
    amount: "150",
    token: "USDC",
    deadline: "5 days left",
    proofType: "GitHub PR",
  },
  {
    image: task2Img,
    category: "Design",
    title: "Design branding guidelines for Gibwork",
    amount: "200",
    token: "USDC",
    deadline: "3 days left",
    proofType: "Figma Link",
  },
  {
    image: task3Img,
    category: "Content",
    title: "Create tutorial video for wallet setup",
    amount: "75",
    token: "USDC",
    deadline: "7 days left",
    proofType: "Video Upload",
  },
];

export function WorkProofLoop() {
  return (
    <section className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

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
        className="flex flex-col items-center text-center"
      >
        {/* Category/Intro Badge */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant="secondary" className="px-3 py-1 mb-4 border border-primary/20 bg-primary/5 text-primary rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="size-3.5 fill-primary/10" />
            Verifiable Work & Payouts
          </Badge>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl"
        >
          Post work. Submit proof. <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Get paid onchain.</span>
        </motion.h2>

        {/* Intro Copy */}
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="max-w-3xl mt-6 text-muted-foreground sm:text-lg leading-relaxed"
        >
          Gibwork turns work into verifiable submissions. Projects fund tasks or open-source bounties. 
          Contributors submit proof such as a PR, issue, screenshot, public URL, or media file. 
          Once approved, the reward is released to the contributor wallet.
        </motion.p>

        {/* 4-Step Proof Loop */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="w-full mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center relative group">
                  {/* Connector Arrow (Desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-4 translate-x-1/2 z-10 text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-300">
                      <ChevronRight className="size-6" />
                    </div>
                  )}

                  {/* Connector Arrow (Mobile) */}
                  {idx < steps.length - 1 && (
                    <div className="block md:hidden mt-4 text-muted-foreground/40">
                      <ChevronDown className="size-6" />
                    </div>
                  )}

                  {/* Step Icon Container */}
                  <div className="size-20 rounded-2xl bg-card border border-border/80 flex items-center justify-center shadow-sm relative group-hover:border-primary/40 group-hover:shadow-md group-hover:shadow-primary/5 transition-all duration-300">
                    <div className="absolute -top-2 -left-2 size-6 rounded-md bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shadow-sm">
                      {item.step}
                    </div>
                    <IconComp className="size-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Step Text */}
                  <h3 className="mt-5 font-bold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[200px] leading-snug">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Live / Fallback Funded Task Cards Section */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="w-full mt-24"
        >
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold">Featured Funded Tasks</h3>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Real-world tasks waiting for your contributions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {fallbackTasks.map((task, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full bg-card"
              >
                {/* Task Image */}
                <div className="h-44 w-full relative bg-muted overflow-hidden shrink-0">
                  <Image 
                    src={task.image} 
                    alt={task.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Card Content */}
                <CardHeader className="p-5 pb-3 grow flex flex-col justify-between">
                  <div>
                    <Badge variant="outline" className="text-xs bg-muted/50 rounded-full font-medium">
                      {task.category}
                    </Badge>
                    <CardTitle className="text-base font-bold mt-3 leading-snug line-clamp-2">
                      {task.title}
                    </CardTitle>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/60">
                    {/* USDC Payout badge */}
                    <div className="flex items-center gap-1.5">
                      <Image 
                        src={usdcLogo} 
                        alt="USDC Token" 
                        className="size-5 rounded-full shrink-0" 
                      />
                      <span className="font-extrabold text-sm">{task.amount} {task.token}</span>
                    </div>

                    <div className="text-xs text-muted-foreground font-medium">
                      {task.deadline}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-5 pb-5 pt-0 shrink-0">
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5 bg-muted/40 p-2 rounded-lg font-medium">
                    <span className="font-bold text-primary">Required Proof:</span>
                    <span>{task.proofType}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quality Checklist Card */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="w-full max-w-3xl mt-20"
        >
          <div className="border border-border/80 bg-muted/20 rounded-2xl p-6 sm:p-8 text-left shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
              <ShieldCheck className="size-8" />
            </div>

            <div className="w-full">
              <h4 className="font-bold text-lg sm:text-xl">Submission Quality Checklist</h4>
              <p className="text-muted-foreground text-sm mt-1">To ensure fast reviews and payouts, follow these submission guidelines:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm font-medium">
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="size-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Provide verifiable public links (GitHub, live URL)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="size-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Attach high-res screenshots or recordings</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <CheckCircle2 className="size-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Meet all specific task criteria details</span>
                </li>
                <li className="flex items-start gap-2 text-red-500/90 dark:text-red-400">
                  <XCircle className="size-4.5 text-red-500 shrink-0 mt-0.5" />
                  <span>No spam, placeholder, or recycled content</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Dual Call to Action */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="flex flex-col sm:flex-row gap-4 mt-16 w-full justify-center"
        >
          <Button asChild size="lg" className="group shadow-md shadow-primary/10">
            <Link href={siteConfig.appUrl} target="_blank">
              Explore Funded Work
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href={`${siteConfig.appUrl}tasks/new`} target="_blank">
              Create a Task
            </Link>
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}
