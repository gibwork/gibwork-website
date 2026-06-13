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

const workDetails = [
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
  {
    image: "/tasks/image-03.png",
    title: "Use slug- to share a set of links on X or Reddit",
    amount: 100,
    token: "usdc",
  },
];

export function LookingFor() {
  return (
    <section className="sticky top-16 z-20 bg-[#F5E6D3] rounded-t-3xl min-h-screen flex flex-col justify-center py-24 sm:py-32 px-4 sm:px-6 w-full">
      <div className="max-w-5xl mx-auto w-full">
        <Tabs defaultValue="1" className="w-full flex flex-col items-center">
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <TabsList className="mx-auto rounded-full px-1 py-1 h-auto">
              <TabsTrigger className="rounded-full px-6 py-2.5 text-sm font-semibold" value="1">
                Looking for Help
              </TabsTrigger>
              <TabsTrigger className="rounded-full px-6 py-2.5 text-sm font-semibold" value="2">
                Looking for Work
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Tab 1: Looking for Help */}
          <TabsContent value="1" className="mt-12 w-full max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex flex-col items-center"
            >
              <motion.h2
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-4xl sm:text-5xl text-center font-bold"
              >
                Get help from an expert
              </motion.h2>

              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-center mt-4 text-muted-foreground text-lg max-w-xl"
              >
                Create work for others to complete and get the support you need to
                achieve your goals.
              </motion.p>

              <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="grid lg:grid-cols-3 gap-6 mt-12 lg:max-w-full max-w-3xl mx-auto w-full"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="https://cdn.gib.work/misc/open_source_bounty.png"
                    alt="Open Source Bounty"
                    className="h-48 w-full object-cover"
                    width={600}
                    height={300}
                  />
                  <CardHeader className="border-t pt-5 pb-6">
                    <CardTitle className="text-xl">Open Source Bounty</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Incentivize a pull request made from a Github issue.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="https://cdn.gib.work/misc/simple_task.png"
                    alt="Simple Task"
                    className="h-48 w-full object-cover"
                    width={600}
                    height={300}
                  />
                  <CardHeader className="border-t pt-5 pb-6">
                    <CardTitle className="text-xl">Simple Task</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Small tasks achievable in a few hours.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="https://cdn.gib.work/misc/services.png"
                    alt="Services"
                    className="h-48 w-full object-cover"
                    width={600}
                    height={300}
                  />
                  <CardHeader className="border-t pt-5 pb-6">
                    <CardTitle className="text-xl">Services</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Offer your skills and connect with users for custom services.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Tab 2: Looking for Work */}
          <TabsContent value="2" className="mt-12 w-full max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex flex-col items-center"
            >
              <motion.h2
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-4xl sm:text-5xl text-center font-bold"
              >
                Get paid for your expertise
              </motion.h2>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-center mt-4 text-muted-foreground text-lg max-w-xl"
              >
                Discover work opportunities that you could do, complete the work,
                and start earning.
              </motion.p>

              <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="flex flex-col gap-4 mt-12 w-full"
              >
                {workDetails.map((_detail) => (
                  <Card key={_detail.title} className="p-5 flex items-center gap-5 hover:shadow-md transition-shadow">
                    <div className="relative aspect-square rounded-full shrink-0 w-14 bg-muted overflow-hidden">
                      <Image
                        alt=""
                        fill
                        src={_detail.image}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="font-semibold grow truncate text-lg">{_detail.title}</p>

                    <div className="font-bold flex items-center justify-end gap-2 shrink-0 text-lg">
                      <p>{_detail.amount}</p>
                      <div className="relative aspect-square rounded-full w-9 bg-muted overflow-hidden">
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
      </div>
    </section>
  );
}
