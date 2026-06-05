"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const createWorkDetails = [
  {
    image: "https://cdn.gib.work/misc/open_source_bounty.png",
    title: "Open Source Bounty",
    description: "Fund a GitHub issue and reward approved pull requests.",
    action: "Create bounty",
    href: siteConfig.createBountyUrl,
  },
  {
    image: "https://cdn.gib.work/misc/simple_task.png",
    title: "Public Task",
    description: "Publish focused work for the community to discover and complete.",
    action: "Create public task",
    href: siteConfig.createTaskUrl,
  },
  {
    image: "https://cdn.gib.work/misc/services.png",
    title: "Private Task",
    description: "Create invite-only work and share access with the people you choose.",
    action: "Create private task",
    href: siteConfig.createTaskUrl,
  },
];

const workDetails = [
  // { image: "/tasks/image-04.png", title: "Create a FAQ list for gibwork", amount: 1, token: "sol" },

  {
    image: "/tasks/image-01.png",
    title: "Design gibwork's new landing page",
    amount: 500,
    token: "usdc",
  },
  {
    image: "/tasks/image-02.png",
    title: "Create developer challenges for Zircon",
    amount: 500,
    token: "usdc",
  },
  // {
  //   image: "/tasks/image-04.png",
  //   title: "Share a link to your most used dApp",
  //   amount: 100,
  //   token: "usdc",
  // },
  {
    image: "/tasks/image-03.png",
    title: "Use slug- to share a set of links on X or Reddit",
    amount: 100,
    token: "usdc",
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
              Create public, private, or GitHub-linked work and get the support
              you need to achieve your goals.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid lg:grid-cols-3 gap-4 mt-8 lg:max-w-full max-w-3xl mx-auto"
            >
              {createWorkDetails.map((detail) => (
                <Link
                  key={detail.title}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`${detail.action} on Gibwork`}
                >
                  <Card className="h-full overflow-hidden transition-all group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-md">
                    <Image
                      src={detail.image}
                      alt={detail.title}
                      className="h-40 w-full object-cover"
                      width={100}
                      height={100}
                    />
                    <CardHeader className="border-t">
                      <CardTitle className="text-lg">{detail.title}</CardTitle>
                      <CardDescription>{detail.description}</CardDescription>
                      <span className="flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                        {detail.action}
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
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
              className="flex flex-col gap-2 mt-8 w-full"
            >
              {workDetails.map((_detail) => (
                <Card
                  key={_detail.title}
                  className="p-4 flex items-center gap-4"
                >
                  <div className="relative aspect-square rounded-full shrink-0 w-12 bg-muted overflow-hidden">
                    <Image
                      alt=""
                      fill
                      src={_detail.image}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="font-semibold grow truncate">{_detail.title}</p>

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
