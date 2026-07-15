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
        <Accordion type="single" collapsible defaultValue="item-6">
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I create Work on Gibwork?</AccordionTrigger>
            <AccordionContent>
              Open the app, connect your wallet, choose the work type, define the
              scope, fund the reward, and publish. Gibwork then keeps the work,
              submissions, comments, and payout state in one place.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What&apos;s the difference between a bounty and a task?
            </AccordionTrigger>
            <AccordionContent>
              A bounty is best for open-source work where a GitHub issue and pull
              request define success. A task is best for a standalone deliverable
              that can be reviewed directly on Gibwork.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get paid for completed work?</AccordionTrigger>
            <AccordionContent>
              After the creator approves your submission, the funded reward is
              released to your connected noncustodial wallet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods does gibwork support?</AccordionTrigger>
            <AccordionContent>
              Gibwork is wallet-native and supports stablecoin and token payments
              on Solana, including USDC and SOL depending on the work item.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is the mobile app available?</AccordionTrigger>
            <AccordionContent>
              Yes. Gibwork is available on mobile so contributors can browse work,
              track submissions, and follow payout status without staying at a
              desktop.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Who should use bounties instead of tasks?</AccordionTrigger>
            <AccordionContent>
              Use bounties when success can be verified by a merged pull request,
              public proof, or a clearly linked GitHub issue. Use tasks when the
              work is assigned, reviewed, and approved inside Gibwork.
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-5">
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
