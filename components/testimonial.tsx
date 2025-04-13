"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ClientTweetCard from "./ui/client-tweet-card";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Testimonial() {

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
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className=" mt-4 text-muted-foreground">
            From freelancers finding their next gig to companies discovering top talent.
          </motion.p>
        </motion.div>

        <div className="overflow-auto flex items-start gap-2 pb-4 sm:hidden">
          <ClientTweetCard id="1857194661867053478" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1732524014407405834" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1765227347400143288" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1816482399238115673" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1823431121906098583" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1768321007704522992" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1823332680118751666" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1819853440723374151" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1849158230645125562" className="shrink-0 max-w-[calc(100vw-96px)]" />
          <ClientTweetCard id="1852087693804495003" className="shrink-0 max-w-[calc(100vw-96px)]" />
        </div>

        <div className="grow hidden sm:grid sm:grid-cols-2 gap-6 w-full place-items-start">

          <div className="flex flex-col gap-6 w-full ">
            <ClientTweetCard id="1732524014407405834" />
            <ClientTweetCard id="1858982833131581468" />
            <ClientTweetCard id="1857194661867053478" />
            <ClientTweetCard id="1816482399238115673" />
            {/* <ClientTweetCard id="1823431111650717787" /> */}
            <ClientTweetCard id="1823431121906098583" />
          </div>

          <div className="flex flex-col gap-6 w-full mt-8">
            <ClientTweetCard id="1765227347400143288" />
            <ClientTweetCard id="1816549566055088458" />
            <ClientTweetCard id="1768321007704522992" />
            <ClientTweetCard id="1849158230645125562" />
            <ClientTweetCard id="1852087693804495003" />
          </div>
        </div>
      </div>
    </section>
  );
}
