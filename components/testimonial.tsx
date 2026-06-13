"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ClientTweetCard from "./ui/client-tweet-card";

export function Testimonial() {
  const allTweetIds = [
    "1732524014407405834",
    "1858982833131581468",
    "1857194661867053478",
    "1816482399238115673",
    "1823431121906098583",
    "1765227347400143288",
    "1816549566055088458",
    "1872424711185187214",
    "1849158230645125562",
    "1852087693804495003",
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll tweets left as user scrolls through the section
  // Move from 0% to -60% of the row width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section
      id="testimonial"
      ref={sectionRef}
      className="relative z-40 bg-[#e1a2ec] rounded-t-3xl min-h-[250vh] w-full"
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-black text-sm tracking-widest uppercase">
              TESTIMONIALS
            </p>
            <h2 className="font-bold text-4xl sm:text-5xl mt-3 max-w-xl">
              Hear what our users have to say
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-lg">
              From freelancers finding their next gig to companies discovering top talent.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scroll strip driven by page scroll */}
        <div className="overflow-visible w-full">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-4 sm:pl-6 w-max"
          >
            {allTweetIds.map((id) => (
              <div key={id} className="w-[320px] sm:w-[380px] shrink-0">
                <ClientTweetCard id={id} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
