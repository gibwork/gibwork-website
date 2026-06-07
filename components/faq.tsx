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
              Open the app and use the create flow to post an open-source bounty,
              task, or service request. Add scope, submission requirements, and a
              payout so contributors know what acceptance looks like.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What&apos;s the difference between a bounty and a task?
            </AccordionTrigger>
            <AccordionContent>
              A bounty is a GitHub issue with a monetary reward attached to accepted
              work. A task is a specific deliverable that can be completed with proof
              such as a link, screenshot, document, or other requested evidence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get paid for completed work?</AccordionTrigger>
            <AccordionContent>
              Once your work is approved by the creator, the funds are released to
              your noncustodial wallet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods does gibwork support?</AccordionTrigger>
            <AccordionContent>
              Gibwork supports wallet-based payouts, including crypto or stablecoins
              sent directly to your wallet after approval.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I use Gibwork on mobile?</AccordionTrigger>
            <AccordionContent>
              Yes. Gibwork is designed so contributors and creators can review
              opportunities, track submissions, and move work forward from the mobile
              app as well as the web experience.
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-4">
            <AccordionTrigger>Are there any fees for using gibwork?</AccordionTrigger>
            <AccordionContent>
              Gibwork charges a 5% service fee on transactions, the lowest in the industry!
            </AccordionContent>
          </AccordionItem> */}
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
