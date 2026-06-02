"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 pt-20 pb-16 text-center">
      
      <Badge variant="secondary" className="mb-6">
        <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        iOS & Android Apps Now Available
      </Badge>

      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight max-w-[90%]">
        Get Work Done.<br />Get Paid in Solana.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-muted-foreground px-4">
        On-chain freelance marketplace. Post bounties, complete tasks, and earn instantly.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">
        <Button size="lg" asChild className="w-full sm:w-auto">
          <Link href="https://app.gib.work" target="_blank">
            Open App
            <ArrowRight className="ml-2" />
          </Link>
        </Button>

        <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
          <Link href="https://app.gib.work/explore" target="_blank">
            Browse Bounties
          </Link>
        </Button>
      </div>

      <div className="mt-8 text-sm text-muted-foreground flex flex-wrap justify-center gap-x-6 gap-y-2">
        <div>📱 Mobile Apps</div>
        <div>⚡ Instant Payments</div>
        <div>🌐 Global Talent</div>
      </div>
    </section>
  );
}
