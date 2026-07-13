"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownToLine, Bell, CheckCircle2, Search, WalletCards } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import logo from "@/public/work-logo.png";

const appBenefits = [
  {
    icon: Search,
    title: "Discover work",
    description: "Browse bounties across development, design, social, research, feedback, and more.",
  },
  {
    icon: CheckCircle2,
    title: "Submit from anywhere",
    description: "Review requirements, share your work, and follow every status update in one place.",
  },
  {
    icon: WalletCards,
    title: "Track your earnings",
    description: "See rewards and manage onchain payouts without invoices or payout delays.",
  },
];

function AppStoreMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
      <path d="M16.7 12.9c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.8-2.1c-1.6-.2-3.1.9-3.9.9-.8 0-2-1-3.4-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5a11 11 0 0 0 1.4-2.9 4.5 4.5 0 0 1-2.8-3.9ZM14 5.2A4.5 4.5 0 0 0 15 2a4.7 4.7 0 0 0-3 1.5 4.3 4.3 0 0 0-1.1 3.1A3.9 3.9 0 0 0 14 5.2Z" />
    </svg>
  );
}

function PlayStoreMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
      <path d="m3.7 2.5 10.9 9.4L3.7 21.5c-.4-.3-.7-.8-.7-1.4V3.9c0-.6.3-1.1.7-1.4Zm12.4 10.7 2.4 2.1-11.8 6.6 9.4-8.7Zm3.9-.1c.6.3 1 .8 1 1.4 0 .7-.4 1.2-1 1.5l-1.5.8-2.8-2.4 2.8-2.4 1.5 1.1ZM6.7 2l11.8 6.6-2.4 2.1L6.7 2Z" />
    </svg>
  );
}

function StoreButton({
  href,
  label,
  store,
  icon,
}: {
  href: string;
  label: string;
  store: string;
  icon: React.ReactNode;
}) {
  return (
    <Button asChild variant="outline" className="h-14 justify-start rounded-xl bg-foreground px-4 text-background hover:bg-foreground/90 hover:text-background">
      <Link href={href} target="_blank" aria-label={`${label} ${store}`}>
        {icon}
        <span className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-medium uppercase tracking-wide opacity-70">{label}</span>
          <span className="mt-1 text-sm">{store}</span>
        </span>
      </Link>
    </Button>
  );
}

export function PhoneMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative w-[15rem] rounded-[2.6rem] border-[7px] border-foreground bg-background p-2 shadow-2xl ${
        compact ? "translate-y-10 -rotate-3 sm:translate-y-12" : "rotate-3"
      }`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground" />
      <div className="min-h-[29rem] overflow-hidden rounded-[2rem] bg-muted/60">
        <div className="flex items-center justify-between border-b bg-background px-4 pb-3 pt-9">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="" className="size-7 rounded-lg" />
            <span className="text-sm font-bold">gibwork</span>
          </div>
          <Bell className="size-4 text-muted-foreground" />
        </div>

        {compact ? (
          <div className="space-y-3 p-4">
            <p className="text-xs font-medium text-muted-foreground">YOUR ACTIVITY</p>
            <div className="rounded-2xl bg-foreground p-4 text-background">
              <p className="text-xs opacity-70">Work, organized</p>
              <p className="mt-2 text-2xl font-semibold">3 submissions</p>
              <p className="mt-1 text-xs opacity-70">Track reviews and rewards in one place</p>
            </div>
            {[
              ["Submitted", "Landing page refresh"],
              ["In review", "Product feedback"],
              ["Paid", "Open-source fix"],
            ].map(([status, title]) => (
              <div key={title} className="rounded-xl border bg-background p-3 shadow-sm">
                <span className="text-[10px] font-semibold uppercase text-primary">{status}</span>
                <p className="mt-1 text-xs font-medium">{title}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 p-4">
            <div className="rounded-xl border bg-background px-3 py-2 text-xs text-muted-foreground">
              Search bounties and tasks
            </div>
            <div className="flex gap-2 overflow-hidden text-[10px]">
              <span className="rounded-full bg-foreground px-3 py-1 text-background">All</span>
              <span className="rounded-full border bg-background px-3 py-1">Development</span>
              <span className="rounded-full border bg-background px-3 py-1">Design</span>
            </div>
            {[
              ["Development", "Improve a product experience", "USDC"],
              ["Feedback", "Review a mobile flow", "USDC"],
              ["Design", "Create a launch asset", "USDC"],
            ].map(([category, title, token]) => (
              <div key={title} className="rounded-2xl border bg-background p-3 shadow-sm">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-semibold uppercase text-primary">{category}</span>
                  <span className="rounded-full bg-muted px-2 py-1 font-semibold">{token}</span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-[10px] text-muted-foreground">Clear scope · Onchain reward</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function MobileApp() {
  return (
    <motion.section
      id="mobile-app"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className="relative mx-auto grid w-full max-w-7xl items-center gap-14 overflow-hidden border-y px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
    >
      <div className="relative z-10">
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-sm font-semibold uppercase tracking-wide text-primary">
          Gibwork for iOS &amp; Android
        </motion.p>
        <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="mt-2 text-3xl font-semibold sm:text-5xl">
          Your work, one place.
        </motion.h2>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="mt-4 max-w-xl text-muted-foreground sm:text-lg">
          Browse bounties, submit work, follow reviews, and track your earnings wherever you are.
        </motion.p>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-8 space-y-5">
          {appBenefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
          <StoreButton href={siteConfig.appStoreUrl} label="Download on the" store="App Store" icon={<AppStoreMark />} />
          <StoreButton href={siteConfig.playStoreUrl} label="Get it on" store="Google Play" icon={<PlayStoreMark />} />
        </motion.div>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowDownToLine className="size-3.5" /> Free to download
        </motion.p>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="relative flex min-h-[36rem] min-w-0 items-start justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-muted to-background px-6 pt-10 sm:px-12"
        aria-label="Gibwork mobile app preview"
      >
        <div className="absolute inset-x-12 top-10 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex origin-top scale-[0.72] items-start justify-center gap-2 sm:scale-100 sm:gap-5">
          <PhoneMockup compact />
          <PhoneMockup />
        </div>
      </motion.div>
    </motion.section>
  );
}
