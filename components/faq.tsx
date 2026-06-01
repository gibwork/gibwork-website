"use client";

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
    value: "item-1",
    question: "How do I create work on Gibwork?",
    answer:
      "From the app's home page, click the \"Create\" button and choose between an Open Source Bounty (linked to a GitHub issue) or a Task (a standalone job). Fill in the details, set your reward amount in any Solana SPL token, and publish — funds are held in escrow until you approve the submission.",
  },
  {
    value: "item-2",
    question: "What's the difference between a bounty and a task?",
    answer:
      "A bounty is tied to a specific GitHub issue — contributors submit a pull request to claim the reward. A task is a standalone job that doesn't require a GitHub repo, useful for design work, writing, research, or any deliverable that can be reviewed off-chain.",
  },
  {
    value: "item-3",
    question: "How do I get paid for completed work?",
    answer:
      "Once the task or bounty creator approves your submission, the funds are released directly to your non-custodial Solana wallet. No withdrawal steps or intermediaries — it settles on-chain immediately.",
  },
  {
    value: "item-4",
    question: "What tokens does Gibwork support?",
    answer:
      "Gibwork supports any Solana SPL token — including USDC, SOL, and community tokens. The creator chooses the reward token when posting work, so you'll always know what you're earning before you start.",
  },
  {
    value: "item-5",
    question: "Can I post a private task only visible to specific people?",
    answer:
      "Yes. When creating a task you can mark it as private. Private tasks are only accessible to people you share the link with, making them ideal for contractor work, trusted contributor pools, or internal team bounties.",
  },
  {
    value: "item-6",
    question: "What are GitHub Tips?",
    answer:
      "GitHub Tips let open-source maintainers reward contributors directly for merged pull requests — even ones that weren't attached to a bounty. It's a lightweight way to say thank you with real crypto for valuable community contributions.",
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
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
