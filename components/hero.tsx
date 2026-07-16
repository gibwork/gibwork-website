"use client";
import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SparklesText from "./ui/sparkles-text";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
export function Hero() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      className="relative flex pt-16 sm:pt-24 pb-24 sm:pb-32 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl overflow-hidden"
    >
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            particles: {
              color: { value: "#a8a29e" },
              links: { enable: false },
              move: { enable: true, speed: 1, outModes: { default: "bounce" } },
              number: { value: 80, density: { enable: true, width: 1920, height: 1080 } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
        />
      )}
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"}>
          <div className="size-1 rounded-full bg-muted-foreground mr-2" />
          Introducing gibwork
          <div className="size-1 rounded-full bg-muted-foreground ml-2" />
        </Badge>
      </motion.div>
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0">
        <SparklesText text="Connecting Talent With Opportunity" className="font-semibold text-4xl sm:text-5xl mt-4 max-w-4xl mx-auto leading-tight" />
      </motion.div>
      <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground">
        Whether you&apos;re searching for your next gig or seeking skilled individuals, our platform connects you with the perfect match.
      </motion.p>
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Button className="group mt-8" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Get Started For Free
            <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
          </Link>
        </Button>
      </motion.div>
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-2 text-sm mt-4">
        <span className="opacity-80">powered by</span>
        <Link href={"https://solana.com/"} target="_blank" className="hover:scale-105 transition-all">
          <SolanaLogoType className="w-20 fill-foreground" />
        </Link>
      </motion.div>
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-16 sm:mt-24 relative z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-purple-500 to-green-500 opacity-40 blur-[100px] -z-10 rounded-full" />
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12 relative z-10" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6 relative z-10" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full relative z-10">
          <Image alt="" src={dashboard} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 z-20 pointer-events-none" />
      </motion.div>
    </motion.section>
  );
}