"use client";

import Link from "next/link";
import logo from "@/public/work-logo.png";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, ExternalLink } from "lucide-react";
import { YoutubeLogoMark } from "./logo/youtube";
import { DiscordLogoMark } from "./logo/discord";
import { TwitterLogoMark } from "./logo/twitter";

export function Footer() {
  return (
    <footer className="relative w-full sm:pb-12 sm:px-6">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-8 shadow-sm sm:border border-0 border-t sm:rounded-lg rounded-none flex flex-col">
        <div className="flex items-start gap-4 w-full justify-between gap-x-40 md:flex-row flex-col gap-y-12">
          <div className="flex items-start flex-col max-w-xs">
            <div className="flex items-center gap-2">
              <Image alt="" src={logo} className="size-10 rounded-md bg-muted" />
              <p className="font-bold text-2xl">gibwork</p>
            </div>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              The Web3-native marketplace for crypto bounties, open-source contributions,
              and skilled work — powered by Solana.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link href={siteConfig.youtubeUrl} target="_blank" className="hover:scale-105 transition-all">
                <YoutubeLogoMark className="size-5" />
              </Link>
              <Link href={siteConfig.discordUrl} target="_blank" className="hover:scale-105 transition-all">
                <DiscordLogoMark className="size-5" />
              </Link>
              <Link href={siteConfig.xUrl} target="_blank" className="hover:scale-105 transition-all">
                <TwitterLogoMark className="size-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12 sm:gap-20">
            <div className="text-sm flex flex-col gap-2 items-start">
              <p className="font-semibold">Product</p>
              <Link href={siteConfig.appUrl} target="_blank" className="text-muted-foreground transition-all hover:text-foreground group">
                Browse Tasks <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href={siteConfig.appUrl} target="_blank" className="text-muted-foreground transition-all hover:text-foreground group">
                Post a Task <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href="/#mobile-app" className="text-muted-foreground transition-all hover:text-foreground group">
                Mobile App <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href="/#how-it-works" className="text-muted-foreground transition-all hover:text-foreground group">
                How It Works <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
            </div>

            <div className="text-sm flex flex-col gap-2 items-start">
              <p className="font-semibold">Quick Links</p>
              <Link href="/#about" className="text-muted-foreground transition-all hover:text-foreground group">
                About <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href="/#testimonial" className="text-muted-foreground transition-all hover:text-foreground group">
                Testimonials <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href="/#faq" className="text-muted-foreground transition-all hover:text-foreground group">
                FAQ <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href="https://docs.gib.work/" target="_blank" className="text-muted-foreground transition-all hover:text-foreground group">
                Docs <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
            </div>

            <div className="text-sm flex flex-col gap-2 items-start">
              <p className="font-semibold">Resources</p>
              <Link href="https://legal.gib.work/privacy-policy.pdf" target="_blank" className="text-muted-foreground transition-all hover:text-foreground group">
                Privacy Policy <ExternalLink className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href="https://docs.gib.work/" target="_blank" className="text-muted-foreground transition-all hover:text-foreground group">
                API Docs <ExternalLink className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link href={siteConfig.discordUrl} target="_blank" className="text-muted-foreground transition-all hover:text-foreground group">
                Community <ExternalLink className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex sm:items-end justify-between mt-12 w-full sm:flex-row flex-col gap-4 border-t pt-6">
          <p className="text-xs text-muted-foreground">© 2024 gibwork. All rights reserved. Made with ♥ by the gibwork team.</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            Powered by <span className="font-semibold ml-1">◎ Solana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
