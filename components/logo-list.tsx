"use client";

import Marquee from "./ui/marquee";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Image from "next/image";
import zircon from "@/public/logo/zircon.png";
import magic from "@/public/logo/magic.png";
import realms from "@/public/logo/realms.png";
import decaf from "@/public/logo/decaf.svg";
import pubkey from "@/public/logo/pubkey.png";
import solanaFoundation from "@/public/logo/solana.png";
import blinksGG from "@/public/logo/blinksgg.png";
import deansList from "@/public/logo/deans-list.png";
import send from "@/public/logo/sendai.png";
import alldomains from "@/public/logo/alldomains.png";


export function LogoList() {
  return (
    <motion.section
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
      id="about"
      className="relative flex flex-col px-4 sm:px-6 py-16 sm:py-24 w-full mx-auto max-w-7xl border-y lg:text-left text-center"
    >
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-primary font-semibold text-sm"
      >
        BRANDS THAT TRUST US
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex lg:flex-row flex-col gap-x-16 mt-2 justify-between"
      >
        <p className="lg:w-96 text-3xl sm:text-4xl font-semibold shrink-0">
          Partners we have collaborated with
        </p>

        <p className="lg:max-w-3xl w-full text-muted-foreground lg:mt-0 mt-4">
          Gibwork is powered by a dedicated team of innovators and professionals committed to
          connecting talent with opportunities. Our team combines expertise in technology, design,
          and user experience to build and manage the platform, ensuring it serves the needs of both
          job seekers and employers. We strive to create a seamless experience that empowers users
          to find work or the right talent efficiently.
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden"
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          <Image alt="Solana Foundation" src={solanaFoundation} className="h-8 w-auto px-6" />
          <Image alt="send" src={send} className="h-8 w-auto px-4" />
          <Image alt="alldomains" src={alldomains} className="h-8 w-auto px-4" />
          <div className=" px-6 text-2xl font-medium">
            <Image alt="deansList" src={deansList} className="h-8 w-auto inline" /> Dean's List
          </div>
          <Image alt="magic" src={magic} className="h-8 w-auto px-6" />
          <Image alt="blinksgg" src={blinksGG} className="h-8 w-auto px-6" />
          <Image alt="realms" src={realms} className="h-8 w-auto px-6" />
          <Image alt="zircon" src={zircon} className="h-8 w-auto px-6" />
          <Image alt="decaf" src={decaf} className="h-8 w-auto px-6" />
          <Image alt="pubkey" src={pubkey} className="h-8 w-auto px-6" />

        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background"></div>
      </motion.div>
    </motion.section>
  );
}
