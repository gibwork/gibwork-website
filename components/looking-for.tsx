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
import { useSiteCopy } from "./use-site-copy";

const workDetails = [
  // { image: "/tasks/image-04.png", title: "Create a FAQ list for gibwork", amount: 1, token: "sol" },

  {
    image: "/tasks/image-01.png",
    titleKey: "landing",
    amount: 500,
    token: "usdc",
  },
  {
    image: "/tasks/image-02.png",
    titleKey: "zircon",
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
    titleKey: "slug",
    amount: 100,
    token: "usdc",
  },
] as const;

export function LookingFor() {
  const { copy } = useSiteCopy();

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
              {copy.work.helpTab}
            </TabsTrigger>
            <TabsTrigger className="rounded-full px-4" value="2">
              {copy.work.workTab}
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
              {copy.work.helpHeading}
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              {copy.work.helpDescription}
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
                  alt={copy.work.bountyTitle}
                  className="h-40 w-full "
                  width={100}
                  height={100}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">{copy.work.bountyTitle}</CardTitle>
                  <CardDescription>
                    {copy.work.bountyDescription}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden">
                <Image
                  src="https://cdn.gib.work/misc/simple_task.png"
                  alt={copy.work.taskTitle}
                  className="h-40 w-full "
                  width={100}
                  height={100}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">{copy.work.taskTitle}</CardTitle>
                  <CardDescription>
                    {copy.work.taskDescription}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="https://cdn.gib.work/misc/services.png"
                  alt={copy.work.servicesTitle}
                  className="h-40 w-full "
                  width={100}
                  height={100}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">{copy.work.servicesTitle}</CardTitle>
                  <CardDescription>
                    {copy.work.servicesDescription}
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
              {copy.work.workHeading}
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              {copy.work.workDescription}
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-2 mt-8 w-full"
            >
              {workDetails.map((_detail) => (
                <Card
                  key={_detail.titleKey}
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

                  <p className="font-semibold grow truncate">
                    {copy.work.examples[_detail.titleKey]}
                  </p>

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
