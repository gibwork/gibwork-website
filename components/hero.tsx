"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import {
  SPRING_UP,
  SCALE_IN,
  STAGGER_CONTAINER,
} from "@/lib/framer-variants";

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={STAGGER_CONTAINER}
      className="relative flex pt-16 sm:pt-24 pb-24 sm:pb-32 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <motion.div variants={SPRING_UP} className="relative z-0">
        <h1 className="font-semibold text-5xl sm:text-6xl mt-4 inline-flex flex-wrap justify-center gap-x-[0.3em]">
          {["Find", "Talent,", "Find", "Work"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: 0.15 + i * 0.1,
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <motion.p
        variants={SPRING_UP}
        className="max-w-2xl mt-4 w-full sm:text-lg text-muted-foreground"
      >
        Whether you&apos;re searching for your next gig or seeking skilled individuals, our platform
        connects you with the perfect match.
      </motion.p>

      <motion.div variants={SCALE_IN}>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Button className="group mt-8" asChild>
            <Link href={siteConfig.appUrl} target="_blank">
              Get Started For Free
              <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={SPRING_UP}
        className="flex items-center gap-2 text-sm mt-4"
      >
        <span className="opacity-80">powered by</span>
        <motion.div whileHover={{ scale: 1.08 }} className="inline-block">
          <Link
            href={"https://solana.com/"}
            target="_blank"
          >
            <SolanaLogoType className="w-20 fill-foreground" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={SCALE_IN}
        className="mt-16 sm:mt-24 relative z-0"
      >
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <motion.div
          className="rounded-lg overflow-hidden border bg-muted w-full"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            alt="Gibwork dashboard preview"
            src={dashboard}
            priority
            placeholder="blur"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60" />
      </motion.div>
    </motion.section>
  );
}
