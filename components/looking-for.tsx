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
import type { MarketplaceProof } from "@/lib/marketplace-proof";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
    amount,
  );
}

function formatDeadline(deadline: string | null) {
  if (!deadline) return "Explore marketplace";

  return `Ends ${new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(deadline))}`;
}

export function LookingFor({
  marketplaceProof,
}: {
  marketplaceProof: MarketplaceProof;
}) {
  return (
    <section
      id="marketplace"
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
              Get paid for your expertise
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              Browse funded opportunities, submit verifiable work, and receive
              onchain rewards when your submission is approved.
            </motion.p>

            {marketplaceProof.stats && (
              <motion.dl
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="mt-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {[
                  ["Open now", marketplaceProof.stats.openTasks],
                  [
                    "Available",
                    `$${formatAmount(marketplaceProof.stats.availableRewards)}`,
                  ],
                  ["Categories", marketplaceProof.stats.categories],
                  [
                    "Top reward",
                    `$${formatAmount(marketplaceProof.stats.highestReward)}`,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border bg-card p-3 text-center"
                  >
                    <dt className="text-xs text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-lg font-semibold">{value}</dd>
                  </div>
                ))}
              </motion.dl>
            )}

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-2 mt-8 w-full"
            >
              {marketplaceProof.tasks.map((task) => (
                <Link
                  key={task.id}
                  href={task.href}
                  target="_blank"
                  className="group"
                >
                  <Card className="flex items-center gap-4 p-4 transition-colors group-hover:border-foreground/30 group-focus-visible:ring-2 group-focus-visible:ring-ring">
                    <div className="relative aspect-square w-12 shrink-0 overflow-hidden rounded-full bg-muted">
                      <Image
                        alt=""
                        fill
                        src={task.tokenImageUrl ?? "/work-logo.png"}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 grow">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{task.category}</Badge>
                        {task.verifiedOnly && (
                          <Badge variant="outline">Verified only</Badge>
                        )}
                      </div>
                      <p className="mt-2 truncate font-semibold">{task.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {formatDeadline(task.deadline)}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center justify-end gap-2 font-semibold">
                      <p>
                        {task.amount === null
                          ? "View"
                          : `$${formatAmount(task.amount)}`}
                      </p>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Card>
                </Link>
              ))}
            </motion.div>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-4 text-center text-xs text-muted-foreground"
            >
              {marketplaceProof.isLive
                ? "Live funded work, refreshed every 15 minutes. Closed and expired listings are excluded."
                : "Marketplace preview shown while live listings are temporarily unavailable."}
            </motion.p>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
