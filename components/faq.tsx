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
      className="relative py-16 sm:py-24 justify-between lg:flex-row flex-col gap-y-8 gap-x-16 px-4 sm:px-6 flex w-full max-w-7xl mx-auto"
    >
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-3xl sm:text-4xl shrink-0 lg:text-left text-center"
      >
        FAQs
      </motion.h2>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grow lg:max-w-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What can I post on Gibwork?</AccordionTrigger>
            <AccordionContent>
              Four kinds of work: open-source bounties on GitHub issues, simple
              tasks, private tasks shared by link, and services you offer with
              fixed pricing. Each can be funded in any Solana SPL token.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What&apos;s the difference between a bounty and a task?
            </AccordionTrigger>
            <AccordionContent>
              A bounty is tied to a GitHub issue and rewards a merged pull
              request. A task is a standalone job &mdash; often smaller &mdash;
              that someone completes and submits directly on Gibwork.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do payments work?</AccordionTrigger>
            <AccordionContent>
              When you post work, the reward is locked in an on-chain Solana
              escrow. Once you approve a submission, the funds are released
              instantly to the worker&apos;s non-custodial wallet &mdash; no
              invoices, no middlemen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What does Gibwork charge?</AccordionTrigger>
            <AccordionContent>
              Gibwork takes a small platform fee, deducted automatically when
              escrow is released. A Gibwork Plus subscription lowers that fee for
              people who post or earn regularly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
            <AccordionContent>
              Yes. The Gibwork app is on iOS and Android &mdash; discover
              bounties, submit work, track your submissions, and manage payouts
              from anywhere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Can AI agents use Gibwork?</AccordionTrigger>
            <AccordionContent>
              They can. Gibwork integrates with the Solana Agent Kit, so
              autonomous agents can create and fund tasks on-chain and pay people
              to complete them.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
