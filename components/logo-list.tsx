"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Marquee from "./ui/marquee";
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

const BG = "#fec76f";

export function LogoList() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Label: immediately visible as section enters
  const labelOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // Content: starts fading in early (10%) and fully visible by 30%
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="sticky top-16 z-10 rounded-t-3xl min-h-[140vh] flex flex-col w-full"
      style={{ backgroundColor: BG }}
    >
      {/* ── Label: top of section ── */}
      <motion.p
        style={{ opacity: labelOpacity }}
        className="pt-16 text-center font-black text-2xl sm:text-3xl tracking-widest uppercase text-black/70 w-full"
      >
        BRANDS THAT TRUST US
      </motion.p>

      {/* ── Content: sticky inner wrapper = always centered in the visible viewport ── */}
      <div className="sticky top-0 h-[calc(100vh-4rem)] flex items-center justify-center">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="flex flex-col items-center w-full max-w-7xl px-6 sm:px-10 gap-14"
        >
          {/* Heading + description */}
          <div className="flex lg:flex-row flex-col gap-x-20 gap-y-8 items-start justify-between w-full">
            <p className="text-4xl sm:text-5xl font-bold shrink-0 text-black leading-tight lg:w-[420px]">
              Partners we have<br />collaborated with
            </p>
            <p className="lg:max-w-lg w-full text-black/60 text-xl leading-relaxed">
              Gibwork is powered by a dedicated team of innovators committed to
              connecting talent with opportunities. We combine expertise in
              technology, design, and user experience to ensure a seamless
              experience for job seekers and employers alike.
            </p>
          </div>

          {/* Logo marquee */}
          <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              <Image alt="Solana Foundation" src={solanaFoundation} className="h-10 w-auto px-6 opacity-70 hover:opacity-100 transition-opacity" />
              <Image alt="send" src={send} className="h-10 w-auto px-5 opacity-70 hover:opacity-100 transition-opacity" />
              <Image alt="alldomains" src={alldomains} className="h-10 w-auto px-5 opacity-70 hover:opacity-100 transition-opacity" />
              <div className="px-6 text-2xl font-medium flex items-center gap-2 text-black/70 hover:text-black transition-colors">
                <Image alt="deansList" src={deansList} className="h-10 w-auto inline opacity-70" /> Dean&apos;s List
              </div>
              <Image alt="magic" src={magic} className="h-10 w-auto px-6 opacity-70 hover:opacity-100 transition-opacity" />
              <Image alt="blinksgg" src={blinksGG} className="h-10 w-auto px-6 opacity-70 hover:opacity-100 transition-opacity" />
              <Image alt="realms" src={realms} className="h-10 w-auto px-6 opacity-70 hover:opacity-100 transition-opacity" />
              <Image alt="zircon" src={zircon} className="h-10 w-auto px-6 opacity-70 hover:opacity-100 transition-opacity" />
              <Image alt="decaf" src={decaf} className="h-10 w-auto px-6 opacity-70 hover:opacity-100 transition-opacity" />
              <Image alt="pubkey" src={pubkey} className="h-10 w-auto px-6 opacity-70 hover:opacity-100 transition-opacity" />
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5" style={{ backgroundImage: `linear-gradient(to right, ${BG}, transparent)` }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5" style={{ backgroundImage: `linear-gradient(to left, ${BG}, transparent)` }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
