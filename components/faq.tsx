"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Link from "next/link";

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
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="shrink-0 lg:w-80"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          FAQs
        </p>
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-left text-center">
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground mt-4">
          Everything you need to know about Gibwork. Can&apos;t find what
          you&apos;re looking for?{" "}
          <Link
            href="https://docs.gib.work/"
            target="_blank"
            className="text-primary hover:underline"
          >
            Check our docs
          </Link>{" "}
          or{" "}
          <Link
            href="https://discord.gg/TNXJjpRvqN"
            target="_blank"
            className="text-primary hover:underline"
          >
            join our Discord
          </Link>
          .
        </p>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grow lg:max-w-3xl"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Gibwork?</AccordionTrigger>
            <AccordionContent>
              Gibwork is an onchain work marketplace built on Solana. We connect
              freelancers with clients worldwide, enabling instant crypto
              payments for tasks, open-source bounties, and professional
              services. Whether you&apos;re looking to hire talent or find work,
              Gibwork streamlines the entire process with smart contract escrow
              and borderless payments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              Simply connect your Solana wallet (Phantom, Solflare, or any
              compatible wallet) at{" "}
              <Link
                href="https://app.gib.work"
                target="_blank"
                className="text-primary hover:underline"
              >
                app.gib.work
              </Link>
              . No email or password required. You can start browsing tasks
              immediately or create your first bounty in under a minute.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              What&apos;s the difference between a bounty and a task?
            </AccordionTrigger>
            <AccordionContent>
              A <strong>bounty</strong> is tied to a GitHub issue — perfect for
              open-source contributions. Developers submit pull requests, and
              payment is released when the PR is merged. A <strong>task</strong>{" "}
              is a standalone job posted directly on Gibwork, ideal for
              freelance work like design, social media, writing, or consulting.
              We also support
              <strong>private tasks</strong> for sensitive or exclusive work,
              and
              <strong>services</strong> for ongoing offerings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do payments work?</AccordionTrigger>
            <AccordionContent>
              When a task is created, funds are locked in a smart contract
              escrow. Once the work is submitted and approved by the creator,
              funds are released instantly to the freelancer&apos;s Solana
              wallet. All payments are on-chain, transparent, and non-custodial
              — we never hold your funds. You can pay and get paid in USDC, SOL,
              or any SPL token.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              What tokens and wallets are supported?
            </AccordionTrigger>
            <AccordionContent>
              Gibwork supports all SPL tokens on Solana, including USDC, SOL,
              and community tokens. We integrate with all major Solana wallets
              including Phantom, Solflare, Backpack, and any wallet that
              supports the Solana standard. Connect your wallet once and
              you&apos;re ready to create, submit, and receive payments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
            <AccordionContent>
              Yes! Gibwork is available on both{" "}
              <Link
                href="https://apps.apple.com/us/app/gibwork/id6757281508"
                target="_blank"
                className="text-primary hover:underline"
              >
                iOS
              </Link>{" "}
              and{" "}
              <Link
                href="https://play.google.com/store/apps/details?id=com.gibwork.app"
                target="_blank"
                className="text-primary hover:underline"
              >
                Android
              </Link>
              . Browse bounties, submit work, track your tasks, and receive push
              notifications — all from your phone. The mobile app connects
              directly to your wallet for seamless on-the-go payments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>What are Gibwork Plus and Pro?</AccordionTrigger>
            <AccordionContent>
              Gibwork Plus and Pro are premium subscription plans that unlock
              additional features. Benefits include a verified profile badge,
              access to verified-only tasks, unlimited submissions on your
              tasks, priority placement in search results, and higher
              visibility. Subscriptions are available monthly or annually and
              can be managed from your account settings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Are there any fees?</AccordionTrigger>
            <AccordionContent>
              Creating an account and browsing tasks is completely free. Gibwork
              charges a small platform fee on completed transactions to maintain
              and improve the platform. There are no subscription fees for the
              basic plan — you only pay when you successfully complete work or
              hire talent. Premium subscriptions (Plus/Pro) are optional.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
