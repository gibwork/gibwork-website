"use client";

import { BadgeCheck, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const benefits = [
  "Access verified-only opportunities",
  "Stand out with a verified profile",
  "Get more submissions and lower bounty fees",
];

export function VerifiedMembership() {
  return (
    <motion.section
      id="verified-membership"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      aria-labelledby="verified-membership-title"
      className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <BadgeCheck aria-hidden="true" className="size-5" />
              VERIFIED MEMBERSHIP
            </motion.div>

            <motion.h2
              id="verified-membership-title"
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl font-semibold sm:text-4xl"
            >
              Make your work easier to find
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-3 text-muted-foreground sm:text-lg"
            >
              Verified membership gives contributors more ways to participate and
              helps their profile stand out when creators review work.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-6 grid gap-3 sm:grid-cols-3"
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-sm">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="shrink-0 lg:w-72">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BadgeCheck aria-hidden="true" className="size-5 text-primary" />
                  Choose your plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Compare Plus and Pro after signing in, then choose the benefits
                  that fit how you work.
                </p>
                <Button asChild className="group mt-5 w-full">
                  <Link
                    href="https://app.gib.work/account/subscription"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn about plans
                    <ArrowRight className="size-0 transition-all group-hover:ml-0 group-hover:size-5" />
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Sign in to view membership details.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
