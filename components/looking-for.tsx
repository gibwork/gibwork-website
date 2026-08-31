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

// NOTE: this is a static snapshot mirroring what's live on app.gib.work right
// now. Once there's an endpoint for open bounties, swap this for a fetch
// (e.g. in a server component, or client-side with SWR/React Query) so the
// list stays current instead of going stale like the old demo data did.
const workDetails = [
  {
    image: "/tasks/image-01.png",
    title: "Download, Rate & Review RafTech App",
    amount: 12,
    token: "usdc",
  },
  {
    image: "/tasks/image-02.png",
    title: "Sign Up On VeryChat App",
    amount: 3.5,
    token: "usdc",
  },
  {
    image: "/tasks/image-03.png",
    title: "Test Geiger Bot onboarding bounty",
    amount: 20,
    token: "usdc",
  },
  {
    image: "/tasks/image-04.png",
    title: "Share How You Got Started with BASIS",
    amount: 150,
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
                  alt=""
                  aria-hidden="true"
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
                  alt=""
                  aria-hidden="true"
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
                  alt=""
                  aria-hidden="true"
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
              className="text-center mt-2 text-muted-foreground flex items-center justify-center"
            >
              <span className="live-dot" aria-hidden="true" />
              Live bounties on gibwork right now
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
                      aria-hidden="true"
                      fill
                      src={_detail.image}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="font-semibold grow truncate">{_detail.title}</p>

                  <div className="font-semibold flex items-center justify-end gap-2 shrink-0">
                    <p>
                      {_detail.amount} {_detail.token.toUpperCase()}
                    </p>
                    <div className="relative aspect-square rounded-full w-8 bg-muted overflow-hidden">
                      <Image
                        alt=""
                        aria-hidden="true"
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
