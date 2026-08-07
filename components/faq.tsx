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
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I create Work on Gibwork?</AccordionTrigger>
            <AccordionContent>
              From the home page, choose Create to post an open-source bounty or a task. The guided flow helps you describe the work, set the reward, and publish it for contributors.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What&apos;s the difference between a bounty and a task?
            </AccordionTrigger>
            <AccordionContent>
              A bounty is a Github issue with a monetary reward.  A task is a
              specific, often smaller job that needs to be completed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get paid for completed work?</AccordionTrigger>
            <AccordionContent>
              Once the creator approves your completed work, the reward is released to your Gibwork balance. Work is funded in escrow before you start, so the reward is available for release when the work is accepted.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods does gibwork support?</AccordionTrigger>
            <AccordionContent>
              Work is funded and paid in SPL tokens on Solana. USDC and SOL are common options, and you can connect a wallet when you are ready to manage on-chain funds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do I need a crypto wallet to get started?</AccordionTrigger>
            <AccordionContent>
              No. You can sign up with email or a supported social sign-in without bringing a wallet. You can connect a wallet later if you want to manage on-chain funds directly.
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-5">
            <AccordionTrigger>Are there any fees for using gibwork?</AccordionTrigger>
            <AccordionContent>
              Gibwork charges a 5% service fee on transactions, the lowest in the industry!
            </AccordionContent>
          </AccordionItem> */}
          {/* <AccordionItem value="item-7">
            <AccordionTrigger>What is the purpose of the $WORK token?</AccordionTrigger>
            <AccordionContent>
              The $WORK Token provide access to a range of utilities within the platform, which could include community voting rights and participation in allocation of rewards funded by operational revenue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Where can I get $WORK?</AccordionTrigger>
            <AccordionContent>
              You can seamlessly swap any SPL token for $WORK by using the platform at <a className="text-violet-600" href="https://jup.ag/swap/SOL-WORK">https://jup.ag/swap/SOL-WORK</a>.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
