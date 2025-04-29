"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ClientTweetCard from "./ui/client-tweet-card";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Testimonial() {
  const leftTweetIds = [
    "1732524014407405834",
    "1858982833131581468",
    "1857194661867053478",
    "1816482399238115673",
    "1823431121906098583",
  ];

  const rightTweetIds = [
    "1765227347400143288",
    "1816549566055088458",
    "1872424711185187214",
    "1849158230645125562",
    "1852087693804495003",
  ];

  return (
    <section
      id="testimonial"
      className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl"
    >
      <div className="flex lg:items-start gap-x-12 gap-y-12 lg:flex-row flex-col">
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
          className="lg:w-96 shrink-0 lg:sticky top-24 lg:text-left text-center"
        >
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-primary font-semibold text-sm"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-semibold text-3xl sm:text-4xl mt-2"
          >
            Hear what our users have to say
          </motion.h2>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className=" mt-4 text-muted-foreground"
          >
            From freelancers finding their next gig to companies discovering top
            talent.
          </motion.p>
        </motion.div>

        <div className="overflow-auto flex items-start gap-2 pb-4 sm:hidden">
          {[...leftTweetIds, ...rightTweetIds].map((id) => {
            return (
              <ClientTweetCard
                key={id}
                id={id}
                className="shrink-0 max-w-[calc(100vw-96px)]"
              />
            );
          })}
        </div>

        <div className="grow hidden sm:grid sm:grid-cols-2 gap-6 w-full place-items-start">
          <div className="flex flex-col gap-6 w-full ">
            {leftTweetIds.map((id) => (
              <ClientTweetCard id={id} />
            ))}
          </div>

          <div className="flex flex-col gap-6 w-full ">
            {rightTweetIds.map((id) => (
              <ClientTweetCard id={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
