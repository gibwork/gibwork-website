"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const faqs = [
    {
      question: "What is Gibwork?",
      answer: "Gibwork is an on-chain freelance marketplace where you can post bounties, complete tasks, and get paid instantly in Solana."
    },
    {
      question: "How do payments work?",
      answer: "All payments are made directly on Solana blockchain. Instant and transparent — no middlemen."
    },
    {
      question: "Do you have mobile apps?",
      answer: "Yes! Native apps are available for both iOS and Android."
    },
    {
      question: "What kind of work can I find?",
      answer: "Development, design, writing, social media, marketing, video editing, open source bounties, and more."
    },
    {
      question: "Is it free to use?",
      answer: "Yes, posting and browsing is free. We only take a small platform fee on completed work."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to know about Gibwork</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
