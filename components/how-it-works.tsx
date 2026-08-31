"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, UploadCloud, CheckCircle2, Wallet } from "lucide-react";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const steps = [
  {
    code: "STEP 01",
    icon: MapPin,
    title: "Post or Browse",
    text: "Set a reward and post the work, or find a listing that fits your skills.",
  },
  {
    code: "STEP 02",
    icon: UploadCloud,
    title: "Submit Your Work",
    text: "Complete the task and submit proof directly on the platform.",
  },
  {
    code: "STEP 03",
    icon: CheckCircle2,
    title: "Get Reviewed",
    text: "The creator checks the submission against the listed requirements.",
  },
  {
    code: "STEP 04",
    icon: Wallet,
    title: "Get Paid Instantly",
    text: "Funds release on approval \u2014 no invoices, no waiting on payroll.",
  },
];

const AUTO_ADVANCE_MS = 4500;

export function HowItWorks() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % steps.length);
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

  const step = steps[index];
  const Icon = step.icon;

  return (
    <section className="relative max-w-4xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground mt-2">
          From posting to payout, no middlemen, no waiting on invoices.
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex items-center flex-col sm:flex-row gap-4 sm:gap-0 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`icon-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full sm:w-56 h-56 shrink-0 rounded-lg bg-gradient-to-br from-primary to-purple-700 shadow-lg flex items-center justify-center sm:-mr-5 relative z-10"
            >
              <Icon className="size-16 text-primary-foreground" strokeWidth={1.5} />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex-1 w-full bg-card border rounded-lg shadow-sm p-6 sm:p-8 relative z-0 sm:ml-0 text-center sm:text-left"
            >
              <span className="text-primary font-semibold text-xs tracking-wide">{step.code}</span>
              <h3 className="text-2xl font-bold mt-3 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            type="button"
            onClick={() => goTo((index - 1 + steps.length) % steps.length)}
            aria-label="Previous step"
            className="size-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronLeft className="size-4" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="How it works steps">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to ${s.title}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo((index + 1) % steps.length)}
            aria-label="Next step"
            className="size-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
