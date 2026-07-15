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
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-3xl mx-auto lg:mx-0 w-full"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I create Work on Gibwork?</AccordionTrigger>
            <AccordionContent>
              From the app home page, choose Create and select whether you want
              to post an open source bounty, a simple task, or a service
              request. Each flow helps you define the scope, reward,
              requirements, and proof contributors should submit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What&apos;s the difference between a bounty and a task?
            </AccordionTrigger>
            <AccordionContent>
              A bounty is outcome-based work with a reward pool, often used for
              open source, design, research, content, or competitive
              submissions. A task is usually a specific piece of work with clear
              completion requirements, such as testing an app, posting content,
              submitting feedback, or completing a GitHub issue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              How do submissions get reviewed and paid?
            </AccordionTrigger>
            <AccordionContent>
              Each task or bounty has its own requirements. Contributors submit
              proof of work, such as a GitHub PR, social post, screenshot,
              document, or other requested link. The creator reviews submissions
              and approves or selects winners according to the task rules.
              Approved rewards are released to the contributor&apos;s
              noncustodial wallet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I get paid for completed work?
            </AccordionTrigger>
            <AccordionContent>
              Once your work is approved by the creator, the funds are released
              to your noncustodial wallet in the token used for that task or
              bounty.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What payment methods does Gibwork support?
            </AccordionTrigger>
            <AccordionContent>
              Gibwork supports wallet transactions. Rewards are paid directly to
              a contributor&apos;s wallet as crypto or stablecoins.
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I apply for multiple jobs at the same time?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can apply for multiple jobs simultaneously, as long as you
              can manage the workload.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do I communicate with job creators?
            </AccordionTrigger>
            <AccordionContent>
              Communication happens through the platform&apos;s built-in messaging
              system.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
