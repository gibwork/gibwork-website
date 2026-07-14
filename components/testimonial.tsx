"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import LazyTweetCard from "@/components/ui/lazy-tweet-card";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const tweetIds = [
  "1732524014407405834",
  "1765227347400143288",
  "1858982833131581468",
  "1816549566055088458",
  "1857194661867053478",
  "1872424711185187214",
  "1816482399238115673",
  "1849158230645125562",
  "1823431121906098583",
  "1852087693804495003",
];

export function Testimonial() {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setCanScrollBack(carousel.scrollLeft > 1);
    setCanScrollForward(
      carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateScrollControls();
    carousel.addEventListener("scroll", updateScrollControls, { passive: true });
    window.addEventListener("resize", updateScrollControls);

    return () => {
      carousel.removeEventListener("scroll", updateScrollControls);
      window.removeEventListener("resize", updateScrollControls);
    };
  }, [updateScrollControls]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>("li");
    if (!carousel || !card) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

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

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-6 flex items-center justify-center gap-2 sm:hidden"
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous testimonial"
              disabled={!canScrollBack}
              onClick={() => scrollCarousel(-1)}
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next testimonial"
              disabled={!canScrollForward}
              onClick={() => scrollCarousel(1)}
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </Button>
          </motion.div>
        </motion.div>

        <ul
          ref={carouselRef}
          aria-label="Gibwork user testimonials"
          className="flex w-full grow snap-x snap-mandatory items-start gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0"
        >
          {tweetIds.map((id) => (
            <li
              key={id}
              className="w-[min(22rem,calc(100vw-3rem))] shrink-0 snap-start sm:w-full"
            >
              <LazyTweetCard id={id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
