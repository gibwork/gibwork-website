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
import type { FeaturedWork } from "@/lib/gibwork-api";

type LookingForProps = {
  featuredWork: FeaturedWork[];
};

const rewardNumberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export function LookingFor({ featuredWork }: LookingForProps) {
  const isShowingLiveWork = featuredWork.every((work) => work.isLive);

  return (
    <section
      id="opportunities"
      className="relative max-w-5xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6"
    >
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

              <Card className="overflow-hidden">
                <Image
                  src="https://cdn.gib.work/misc/open_source_bounty.png"
                  alt="Open Source Bounty"
                  className="h-40 w-full "
                  width={100}
                  height={100}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Open Source Bounty</CardTitle>
                  <CardDescription>
                    Incentivize a pull request made from a Github issue.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden">
                <Image
                  src="https://cdn.gib.work/misc/simple_task.png"
                  alt="Open Source Bounty"
                  className="h-40 w-full "
                  width={100}
                  height={100}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Simple Task</CardTitle>
                  <CardDescription>
                    Small tasks achievable in a few hours.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="https://cdn.gib.work/misc/services.png"
                  alt="Open Source Bounty"
                  className="h-40 w-full "
                  width={100}
                  height={100}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Services</CardTitle>
                  <CardDescription>
                    Offer your skills and connect with users for custom
                    services.
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
              {isShowingLiveWork
                ? "Live funded opportunities"
                : "Explore funded work"}
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              {isShowingLiveWork
                ? "Browse open work from the marketplace, submit your best work, and get paid when it is approved."
                : "See the kinds of paid opportunities you can discover on Gibwork."}
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-2 mt-8 w-full"
            >
              {featuredWork.map((work) => (
                <Link
                  key={work.id}
                  href={work.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${work.title} on Gibwork`}
                  className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Card className="group p-4 flex items-center gap-4 transition-colors hover:bg-muted/50">
                    <div className="relative aspect-square rounded-full shrink-0 w-12 bg-muted overflow-hidden">
                      <Image
                        alt=""
                        fill
                        src={work.imageUrl}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="grow min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold truncate">{work.title}</p>
                        {work.isLive && (
                          <span className="inline-flex shrink-0 items-center gap-1 text-xs text-emerald-700">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            Open
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {work.isLive
                          ? "Funded on Gibwork"
                          : "Example opportunity"}
                      </p>
                    </div>

                    <div className="font-semibold flex items-center justify-end gap-2 shrink-0">
                      <p>{rewardNumberFormatter.format(work.amount)}</p>
                      <div className="relative aspect-square rounded-full w-8 bg-muted overflow-hidden">
                        <Image
                          alt={`${work.token} reward`}
                          fill
                          src={work.tokenImageUrl}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
