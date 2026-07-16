"use client";
import { Button } from "@/components/ui/button";
import { Briefcase, Search } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 w-full overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-gray-950 to-emerald-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col items-center text-center px-8 py-20 text-white">
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Get Started Today
          </p>
          <h2 className="font-bold text-4xl sm:text-5xl max-w-2xl leading-tight animate-gradient bg-gradient-to-r from-violet-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent pb-1">
            The future of work is onchain
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl text-lg">
            Post your first task or complete your first bounty — all payments secured on Solana.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
              <Link href={siteConfig.appUrl} target="_blank">
                Post Work
                <Briefcase className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              <Link href={siteConfig.appUrl} target="_blank">
                Find Work
                <Search className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}