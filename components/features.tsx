"use client";

import { Link2, Crown, Headphones, Gift, Users } from "lucide-react";

const cards = [
  {
    icon: Link2,
    tag: "Transparency",
    title: "On-chain transparent txns",
    pill: "Solana · 0.4s",
    
  },
  {
    icon: Users,
    tag: "Community",
    title: "10k+ active freelancers",
    pill: "Growing daily",
    
  },
    {
    icon: Users,
    tag: "Opportunity",
    title: "$6000+ worth tasks completed",
    pill: "Growing daily",
    
  },
  {
    icon: Headphones,
    tag: "Support",
    title: "24×7 human support",
    pill: "Always online",
  },
  {
    icon: Crown,
    tag: "Premium",
    title: "Verified premium users",
    pill: "Exclusive access",
    
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28 px-6 font-sans">
      <div className="mx-auto max-w-4xl lg:max-w-5xl">

        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-600 mb-3">
            Why Gibwork
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-black mb-4">
            Built for trust.<br />Designed for speed.
          </h2>
          <p className="text-base lg:text-lg text-neutral-500 leading-relaxed max-w-md mx-auto">
            Everything you need to work, earn, and grow — backed by the blockchain.
          </p>
        </div>

        {/* 5 cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="border border-neutral-200 rounded-2xl p-6 bg-white hover:border-violet-300 transition-colors duration-200 flex flex-col"
              >
                <div
                  className={[
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-violet-50 border border-violet-100"
                  ].join(" ")}
                >
                  <Icon className={["w-5 h-5 text-violet-600"].join(" ")} />
                </div>
                <p className={["text-[10px] font-semibold uppercase tracking-widest mb-2 text-violet-500"].join(" ")}>
                  {card.tag}
                </p>
                <h3 className="text-sm font-semibold text-black leading-snug flex-1">
                  {card.title}
                </h3>
                <div
                  className={[
                    "inline-flex items-center gap-1.5 mt-5 rounded-full px-3 py-1.5 bg-violet-50 border border-violet-100"].join(" ")}
                >
                  <span className={["text-[11px] font-semibold text-violet-700"].join(" ")}>
                    {card.pill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}