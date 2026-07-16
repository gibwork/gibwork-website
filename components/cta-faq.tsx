"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CtaFaq() {
    return (
        <section
            id="faq"
            className="sticky top-16 z-50 bg-[#f2f2f2] rounded-t-3xl min-h-screen flex items-center py-24 sm:py-32 px-4 sm:px-6 w-full"
        >
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left: Start Exploring CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="flex flex-col lg:sticky top-32"
                >
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="text-primary font-black text-sm tracking-widest uppercase mb-4"
                    >
                        GET STARTED
                    </motion.p>

                    <motion.h2
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="font-bold text-5xl sm:text-6xl leading-tight"
                    >
                        Start<br />exploring
                    </motion.h2>

                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-sm"
                    >
                        Check out gibwork and create or complete your very first work. Join thousands of professionals already on the platform.
                    </motion.p>

                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-10">
                        <Button asChild className="group text-base px-8 py-5">
                            <Link href={siteConfig.appUrl} target="_blank">
                                Get Started For Free
                                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right: FAQ Accordion */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="text-primary font-black text-sm tracking-widest uppercase mb-4"
                    >
                        FAQs
                    </motion.p>

                    <motion.h2
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="font-bold text-4xl sm:text-5xl mb-10 leading-tight"
                    >
                        Frequently asked questions
                    </motion.h2>

                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                        <Accordion type="single" collapsible className="space-y-1">
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-base font-semibold py-5">
                                    How do I create Work on Gibwork?
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground pb-5">
                                    Under the earnings display on the app&apos;s home page, click the
                                    &quot;Create&quot; buttons for creating Open Source Bounties and Tasks. These
                                    buttons guide you through the process of creating and posting jobs on the platform.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold py-5">
                                    What&apos;s the difference between a bounty and a task?
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground pb-5">
                                    A bounty is a Github issue with a monetary reward. A task is a
                                    specific, often smaller job that needs to be completed.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-base font-semibold py-5">
                                    How do I get paid for completed work?
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground pb-5">
                                    Once your work is approved by the creator, the funds will be released
                                    to your noncustodial wallet.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-base font-semibold py-5">
                                    What payment methods does gibwork support?
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground pb-5">
                                    We only support wallet transactions — depositing the winning amount
                                    directly to your wallet in the form of crypto or stablecoins.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-base font-semibold py-5">
                                    Are there any fees for using gibwork?
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground pb-5">
                                    Gibwork charges a minimal service fee on transactions — the lowest in the industry!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
