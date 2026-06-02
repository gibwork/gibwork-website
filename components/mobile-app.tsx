"use client";

import Image from "next/image";
import gibworkImg from "@/public/gibwork.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function MobileApp() {
    return (
        <section className="sticky top-16 z-30 bg-primary rounded-t-3xl min-h-screen flex items-center overflow-hidden px-4 sm:px-6 py-24">
            {/* Right: full-bleed image taking 50% of section width */}
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
                <Image
                    alt="Gibwork mobile app"
                    src={gibworkImg}
                    fill
                    className="object-cover object-left"
                    sizes="50vw"
                />
                {/* Fade from primary on the left edge so text doesn't clash */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Text: left half only */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="flex flex-col text-white lg:text-left text-center lg:max-w-[46%]"
                >
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="font-black text-sm tracking-widest uppercase text-white/60 mb-4"
                    >
                        MOBILE EXPERIENCE
                    </motion.p>

                    <motion.h2
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="text-5xl sm:text-6xl font-bold leading-tight"
                    >
                        Enjoy the Mobile<br />Experience
                    </motion.h2>

                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="mt-6 text-white/70 text-xl leading-relaxed max-w-lg"
                    >
                        Access gibwork from anywhere. Find talent, post bounties, and complete
                        tasks — all from the palm of your hand, seamlessly.
                    </motion.p>

                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-10 flex flex-wrap gap-4 lg:justify-start justify-center">
                        {/* App Store Button */}
                        <Link href={"#"} target="_blank" className="flex items-center gap-3 bg-black hover:bg-black/80 text-white px-5 py-2.5 rounded-xl transition-colors border border-white/20">
                            <svg viewBox="0 0 384 512" className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none gap-0.5">
                                <span className="text-[10px] uppercase font-semibold text-white/80">Download on the</span>
                                <span className="text-xl font-bold tracking-tight">App Store</span>
                            </div>
                        </Link>

                        {/* Play Store Button */}
                        <Link href={"#"} target="_blank" className="flex items-center gap-3 bg-black hover:bg-black/80 text-white px-5 py-2.5 rounded-xl transition-colors border border-white/20">
                            <svg viewBox="0 0 512 512" className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18.3-10.6 18.3-30.2 0-40.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none gap-0.5">
                                <span className="text-[10px] uppercase font-semibold text-white/80">GET IT ON</span>
                                <span className="text-xl font-bold tracking-tight">Google Play</span>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Mobile: image below text */}
                <div className="lg:hidden mt-12 flex justify-center">
                    <Image
                        alt="Gibwork mobile app"
                        src={gibworkImg}
                        className="w-full max-w-xs rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
