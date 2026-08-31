"use client";

import { useEffect, useRef, useState } from "react";
import ClientTweetCard from "./ui/client-tweet-card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

// Curated set of real tweets to cycle through in the featured stack.
const stackTweetIds = [
  "1732524014407405834",
  "1858982833131581468",
  "1857194661867053478",
  "1765227347400143288",
  "1816549566055088458",
  "1872424711185187214",
];

const AUTO_ADVANCE_MS = 6000;

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % stackTweetIds.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => {
    setIndex(i);
    startTimer();
  };

  return (
    <section
      id="testimonial"
      className="relative py-16 sm:py-24 px-4 sm:px-6 flex flex-col mx-auto w-full max-w-7xl"
    >
      <div className="flex lg:items-center gap-x-12 gap-y-12 lg:flex-row flex-col">
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
          className="lg:w-96 shrink-0 lg:text-left text-center"
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

        <div className="grow w-full flex flex-col items-center">
          <div className="relative w-full max-w-[420px]">
            {/* Stacked "peek" cards behind the active tweet — purely decorative,
                gives the deck-of-cards depth without rendering extra tweet
                embeds (those hit the Twitter API per card, so keep it to one
                live embed at a time). */}
            <div
              aria-hidden="true"
              className="absolute inset-x-3 top-3 h-full rounded-xl border bg-card/60"
              style={{ transform: "scale(0.96)", zIndex: 0 }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-6 top-6 h-full rounded-xl border bg-card/30"
              style={{ transform: "scale(0.92)", zIndex: -1 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={stackTweetIds[index]}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.97 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ClientTweetCard id={stackTweetIds[index]} className="w-full max-w-full" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => goTo((index - 1 + stackTweetIds.length) % stackTweetIds.length)}
              aria-label="Previous testimonial"
              className="size-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {stackTweetIds.map((id, i) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo((index + 1) % stackTweetIds.length)}
              aria-label="Next testimonial"
              className="size-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
