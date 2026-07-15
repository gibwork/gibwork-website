// components/referral-section.tsx
"use client";

import Marquee from "./ui/marquee";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { ArrowUpRight } from "lucide-react";

type Payout = { user: string; amount: string };

const row1: Payout[] = [
  { user: "kodakz", amount: "5.30" },
  { user: "anthony", amount: "3.20" },
  { user: "gibwork", amount: "1.25" },
  { user: "dbabefloxy", amount: "0.40" },
  { user: "anthony", amount: "0.40" },
  { user: "gaurangrode9904", amount: "0.20" },
  { user: "d3rek", amount: "0.20" },
  { user: "freddyunchain", amount: "0.20" },
  { user: "abdulbasit", amount: "0.20" },
];

const row2: Payout[] = [
  { user: "dhul", amount: "0.20" },
  { user: "anthony", amount: "0.15" },
  { user: "clockmek", amount: "0.10" },
  { user: "siamthegreat", amount: "0.10" },
  { user: "siamthegreat", amount: "0.10" },
  { user: "connectwithkesh", amount: "0.10" },
  { user: "clockmek", amount: "0.10" },
  { user: "insiderx", amount: "0.10" },
  { user: "kodakz", amount: "5.30" },
];

function PayoutCard({ user, amount }: Payout) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 whitespace-nowrap">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 border border-violet-100 text-sm font-semibold text-violet-700 uppercase">
        {user.slice(0, 1)}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-black">@{user}</span>
        <span className="text-xs text-neutral-500">
          received <span className="text-violet-600 font-semibold">${amount}</span>
        </span>
      </div>
    </div>
  );
}

export default function ReferralSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      className="bg-white py-20 lg:py-28 px-6 font-sans "
    >
      <div className="mx-auto max-w-4xl lg:max-w-5xl text-center">
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-[11px] font-semibold uppercase tracking-widest text-violet-600 mb-3"
        >
          Referral Program
        </motion.p>

        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-black mb-4"
        >
          Grow the community,<br />get paid.
        </motion.h2>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-base lg:text-lg text-neutral-500 leading-relaxed max-w-md mx-auto mb-10"
        >
          Every person you bring to Gibwork who completes a task or gets paid
          earns you a cut too. No cap, no waiting period.
        </motion.p>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="relative mt-16 flex w-full flex-col gap-4 items-center justify-center overflow-hidden"
      >
        <Marquee pauseOnHover className="[--duration:28s]">
          {row1.map((p, i) => (
            <PayoutCard key={`${p.user}-${i}`} {...p} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:28s]">
          {row2.map((p, i) => (
            <PayoutCard key={`${p.user}-r2-${i}`} {...p} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
      </motion.div>
    </motion.section>
  );
}