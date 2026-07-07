// components/membership-section.tsx
"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

type Cycle = "monthly" | "annual";
type Tier = "plus" | "pro";

const plans: Record<Tier, {
  name: string;
  tagline: string;
  price: Record<Cycle, string>;
  billedNote: Record<Cycle, string | null>;
  cta: string;
  perks: string[];
}> = {
  plus: {
    name: "Plus",
    tagline: "Unlock verified only opportunities.",
    price: { monthly: "4.99", annual: "3.33" },
    billedNote: { monthly: null, annual: "Billed annually at $39.99." },
    cta: "Upgrade to Plus",
    perks: [
      "Verified profile badge",
      "Access verified only tasks",
      "Submissions appear first",
      "Unlimited submissions on your tasks",
      "More payouts",
      "Priority support",
    ],
  },
  pro: {
    name: "Pro",
    tagline: "Unlock more, earn more, and submit with priority.",
    price: { monthly: "29.99", annual: "20.00" },
    billedNote: { monthly: "Earn this back with just 1-2 tasks.", annual: "Billed annually at $239.99." },
    cta: "Go Pro",
    perks: [
      "Everything in Plus",
      "Higher visibility on premium tasks",
      "Priority access to new features",
      "Top placement in submissions",
      "Dedicated priority support",
    ],
  },
};

export default function MembershipSection() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [tier, setTier] = useState<Tier>("plus");
  const plan = plans[tier];

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28 px-5 sm:px-6 font-sans">
      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-600 mb-3">
          Membership
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* left: heading, switchers, price, cta */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-black mb-3">
              Choose your plan
            </h2>
            <p className="text-base lg:text-lg text-neutral-500 leading-relaxed mb-8">
              Unlock more ways to earn and submit with priority.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center rounded-full border border-neutral-200 p-1 bg-neutral-50">
                {(["plus", "pro"] as Tier[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={[
                      "px-4 sm:px-5 py-2 rounded-full text-sm font-semibold capitalize transition-colors",
                      tier === t ? "bg-white text-black shadow-sm" : "text-neutral-500",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="inline-flex items-center rounded-full border border-neutral-200 p-1 bg-neutral-50">
                <button
                  onClick={() => setCycle("monthly")}
                  className={[
                    "px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-colors",
                    cycle === "monthly" ? "bg-white text-black shadow-sm" : "text-neutral-500",
                  ].join(" ")}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setCycle("annual")}
                  className={[
                    "px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5",
                    cycle === "annual" ? "bg-white text-black shadow-sm" : "text-neutral-500",
                  ].join(" ")}
                >
                  Annual
                  <span className="text-[10px] font-semibold text-violet-600 bg-violet-50 border border-violet-100 rounded-full px-1.5 py-0.5">
                    Save 33%
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl sm:text-5xl font-bold text-black">${plan.price[cycle]}</span>
              <span className="text-sm text-neutral-500 mb-1">/ mo</span>
            </div>
            <p className="text-xs text-neutral-400 mb-6 min-h-[1rem]">{plan.billedNote[cycle] ?? ""}</p>
            <Link href="https://app.gib.work/account/subscription">
            <button className="w-full rounded-full text-sm font-semibold py-3.5 mb-3 bg-violet-600 hover:bg-violet-700 text-white transition-colors">
              {plan.cta}
            </button>
            </Link>
            <p className="text-xs text-neutral-400 text-center">Cancel anytime, no lock-in.</p>
          </div>

          {/* right: perks */}
          <div className="pt-10 border-t border-neutral-200 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-500 mb-3">
              {plan.name} includes
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8 leading-snug">
              {plan.tagline}
            </h3>

            <ul className="space-y-4">
              {plan.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-base text-neutral-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-50 border border-violet-100 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-violet-600" />
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}