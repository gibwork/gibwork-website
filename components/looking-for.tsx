"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Megaphone, Palette, PenLine } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const opportunityTypes = [
  {
    icon: Code2,
    title: "Development",
    description: "Open-source fixes, integrations, prototypes, and product improvements.",
  },
  {
    icon: Palette,
    title: "Design & creative",
    description: "Brand systems, interfaces, illustrations, and product experiences.",
  },
  {
    icon: PenLine,
    title: "Content & research",
    description: "Writing, research, feedback, documentation, and product testing.",
  },
  {
    icon: Megaphone,
    title: "Growth & community",
    description: "Campaigns, outreach, community support, and launch activities.",
  },
];

export function LookingFor() {
  return (
    <section className="relative max-w-5xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <Tabs defaultValue="1" className="w-full flex flex-col items-center">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TabsList className="mx-auto rounded-full">
            <TabsTrigger className="rounded-full px-4" value="1">
              Looking for Help
            </TabsTrigger>
            <TabsTrigger className="rounded-full px-4" value="2">
              Looking for Work
            </TabsTrigger>
          </TabsList>
        </motion.div>
        <TabsContent value="1" className="mt-8 w-full max-w-7xl">
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
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl text-center font-semibold"
            >
              Get help from an expert
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              Create work for others to complete and get the support you need to
              achieve your goals.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid gap-4 mt-8 md:grid-cols-3 lg:max-w-full max-w-3xl mx-auto"
            >
              {/* <Card className="overflow-hidden">
                <div className="h-32 sm:h-40 bg-muted" />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Ask a Question</CardTitle>
                  <CardDescription>
                    Tap into the network of experts to answer your question fast.
                  </CardDescription>
                </CardHeader>
              </Card> */}

              <Card className="overflow-hidden transition-transform hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-violet-500 to-indigo-500" />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Open Source Bounty</CardTitle>
                  <CardDescription>
                    Fund a GitHub issue and reward the pull request that solves it.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden transition-transform hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-fuchsia-500 to-pink-500" />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Simple Task</CardTitle>
                  <CardDescription>
                    Post a focused deliverable with clear requirements and a funded reward.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden transition-transform hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Services</CardTitle>
                  <CardDescription>
                    Connect with specialists for custom work and ongoing support.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
        <TabsContent value="2" className="mt-8 w-full max-w-3xl">
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
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl text-center font-semibold"
            >
              Get paid for your expertise
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              Discover work opportunities that you could do, complete the work,
              and start earning.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid gap-3 mt-8 w-full sm:grid-cols-2"
            >
              {opportunityTypes.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="p-5 flex items-start gap-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                  </div>
                </Card>
              ))}
            </motion.div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-7">
              <Button asChild className="group">
                <Link href={siteConfig.appUrl} target="_blank">
                  Browse active bounties
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
