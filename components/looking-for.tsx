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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const workDetails = [
  {
    image: "/tasks/image-01.png",
    title: "Contribute to an open-source project",
    type: "Bounty",
  },
  {
    image: "/tasks/image-02.png",
    title: "Improve a product experience",
    type: "Development",
  },
  {
    image: "/tasks/image-03.png",
    title: "Create a launch-ready design",
    type: "Design",
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
              className="grid lg:grid-cols-3 gap-4 mt-8 lg:max-w-full max-w-3xl mx-auto"
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

              <Link href={siteConfig.appUrl} target="_blank" rel="noreferrer">
                <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <Image
                    src="https://cdn.gib.work/misc/open_source_bounty.png"
                    alt="Open-source bounty"
                    className="h-40 w-full object-cover"
                    width={480}
                    height={320}
                  />
                  <CardHeader className="border-t">
                    <CardTitle className="text-lg">
                      Open-source bounty
                    </CardTitle>
                    <CardDescription>
                      Fund a GitHub issue and reward an accepted contribution.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href={siteConfig.appUrl} target="_blank" rel="noreferrer">
                <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <Image
                    src="https://cdn.gib.work/misc/simple_task.png"
                    alt="A scoped task"
                    className="h-40 w-full object-cover"
                    width={480}
                    height={320}
                  />
                  <CardHeader className="border-t">
                    <CardTitle className="text-lg">Task</CardTitle>
                    <CardDescription>
                      Collect finished work against a clear brief and deadline.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href={siteConfig.appUrl} target="_blank" rel="noreferrer">
                <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <Image
                    src="https://cdn.gib.work/misc/services.png"
                    alt="Professional services"
                    className="h-40 w-full object-cover"
                    width={480}
                    height={320}
                  />
                  <CardHeader className="border-t">
                    <CardTitle className="text-lg">Services</CardTitle>
                    <CardDescription>
                      Find specialists for scoped projects or recurring support.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
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
              Find work that matches your strengths
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              Explore live opportunities across development, design, feedback,
              open source, and more.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-2 mt-8 w-full"
            >
              {workDetails.map((_detail) => (
                <Card
                  key={_detail.title}
                  className="p-4 flex items-center gap-4 transition-all hover:border-primary/40 hover:shadow-sm"
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

                  <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {_detail.type}
                  </span>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Button asChild className="mt-6 group">
                <Link href={siteConfig.appUrl} target="_blank" rel="noreferrer">
                  Browse live opportunities
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
