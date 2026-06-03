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

type WorkDetail = {
  amount: number;
  category: string;
  closes: string;
  href: string;
  sponsor: string;
  title: string;
  token: string;
  tokenImageUrl: string;
};

type LookingForProps = {
  liveWorkDetails?: WorkDetail[];
};

const fallbackWorkDetails: WorkDetail[] = [
  // { image: "/tasks/image-04.png", title: "Create a FAQ list for gibwork", amount: 1, token: "sol" },

  {
    category: "Development",
    closes: "",
    href: "https://app.gib.work/",
    sponsor: "gibwork",
    title: "Design gibwork's new landing page",
    amount: 500,
    token: "USDC",
    tokenImageUrl: "/token-usdc.png",
  },
  {
    category: "Development",
    closes: "",
    href: "https://app.gib.work/",
    sponsor: "zircon",
    title: "Create developer challenges for Zircon",
    amount: 500,
    token: "USDC",
    tokenImageUrl: "/token-usdc.png",
  },
  // {
  //   image: "/tasks/image-04.png",
  //   title: "Share a link to your most used dApp",
  //   amount: 100,
  //   token: "usdc",
  // },
  {
    category: "Social Media",
    closes: "",
    href: "https://app.gib.work/",
    sponsor: "slug",
    title: "Use slug- to share a set of links on X or Reddit",
    amount: 100,
    token: "USDC",
    tokenImageUrl: "/token-usdc.png",
  },
];

export function LookingFor({ liveWorkDetails = [] }: LookingForProps) {
  const workDetails =
    liveWorkDetails.length > 0 ? liveWorkDetails : fallbackWorkDetails;

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
              Browse funded opportunities from the live marketplace, complete
              the work, and start earning.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-2 mt-8 w-full"
            >
              {workDetails.map((_detail) => (
                <Link
                  key={_detail.href}
                  href={_detail.href}
                  target="_blank"
                  className="group"
                >
                  <Card className="p-4 flex items-center gap-4 transition-colors group-hover:bg-muted/40">
                    <div className="relative aspect-square rounded-full shrink-0 w-12 bg-muted overflow-hidden">
                      <Image
                        alt={`${_detail.token} token`}
                        fill
                        src={_detail.tokenImageUrl}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="grow min-w-0">
                      <p className="font-semibold leading-snug sm:truncate">
                        {_detail.title}
                      </p>
                      <p className="text-sm leading-snug text-muted-foreground sm:truncate">
                        @{_detail.sponsor} · {_detail.category}
                        {_detail.closes ? ` · Closes ${_detail.closes}` : ""}
                      </p>
                    </div>

                    <div className="font-semibold flex items-center justify-end gap-2 shrink-0">
                      <p>{_detail.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {_detail.token}
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
              Live opportunities refresh from app.gib.work every five minutes.
            </motion.p>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
