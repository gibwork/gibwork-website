"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Ripple from "./ui/ripple";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

const faqs = [
  {
    id: "item-6",
    question: "How do I create Work on Gibwork?",
    answer:
      "Under the earnings display on the apps home page, click the \"Create\" buttons for creating Open Source Bounties and Task. These buttons guide you through the process of creating and posting jobs on the platform.",
  },
  {
    id: "item-1",
    question: "What's the difference between a bounty and a task?",
    answer:
      "A bounty is a Github issue with a monetary reward. A task is a specific, often smaller job that needs to be completed.",
  },
  {
    id: "item-2",
    question: "How do I get paid for completed work?",
    answer:
      "Once your work is approved by the creator, the funds will be released to your noncustodial wallet.",
  },
  {
    id: "item-3",
    question: "What payment methods does gibwork support?",
    answer:
      "We only support wallet transactions, i.e., depositing the winning amount directly to your wallet in the form of crypto or stablecoins.",
  },
];

export function Faq() {
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
      id="faq"
      className="relative py-16 sm:py-24 justify-between lg:flex-row flex-col gap-y-10 gap-x-16 px-4 sm:px-6 flex w-full max-w-7xl mx-auto"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="shrink-0 lg:sticky top-24 lg:text-left text-center lg:max-w-xs">
        <p className="text-primary font-semibold text-sm">FAQ</p>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-2">
          Questions, answered
        </h2>
        <p className="mt-4 text-muted-foreground">
          Can&apos;t find what you&apos;re looking for? Reach out on Discord and someone from the team will help.
        </p>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grow lg:max-w-3xl">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border rounded-lg bg-card px-5 transition-colors hover:border-primary/40 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="hover:no-underline py-5 [&>svg]:shrink-0">
                <span className="flex items-start gap-4 text-left">
                  <span className="text-primary font-mono text-sm mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-9">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
