"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DotGrid } from "./ui/dot-grid";
import { motion } from "framer-motion";
import { SPRING_UP, SCALE_IN, STAGGER_CONTAINER } from "@/lib/framer-variants";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={STAGGER_CONTAINER}
      className="relative py-24 sm:py-32 border-y px-4 sm:px-6 flex items-center w-full max-w-7xl mx-auto justify-center flex-col overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 bg-[length:400%_400%] animate-gradient pointer-events-none" />

      <motion.h2
        variants={SPRING_UP}
        className="font-semibold text-3xl sm:text-4xl text-center"
      >
        Start exploring
      </motion.h2>
      <motion.p
        variants={SPRING_UP}
        className="text-center mt-2 text-muted-foreground"
      >
        Check out gibwork and create or complete your very first work.
      </motion.p>

      <motion.div variants={SCALE_IN}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Button asChild className="mt-8 group">
            <Link href={siteConfig.appUrl} target="_blank">
              Get Started
              <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <DotGrid />
    </motion.section>
  );
}
