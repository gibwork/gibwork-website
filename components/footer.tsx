"use client";

import Link from "next/link";
import logo from "@/public/work-logo.png";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, ExternalLink, Download } from "lucide-react";
import { YoutubeLogoMark } from "./logo/youtube";
import { DiscordLogoMark } from "./logo/discord";
import { TwitterLogoMark } from "./logo/twitter";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative w-full sm:pb-12 sm:px-6">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-8 shadow-sm sm:border border-0 border-t sm:rounded-lg rounded-none flex flex-col">
        <div className="flex items-start gap-4 w-full justify-between lg:flex-row flex-col gap-y-12">
          <div className="flex items-start flex-col max-w-sm">
            <div className="flex items-center gap-2">
              <Image alt="" src={logo} className="size-10 rounded-md bg-muted" />
              <p className="font-bold text-2xl">gibwork</p>
            </div>
            <p className="text-muted-foreground mt-4">
              The onchain work marketplace on Solana. Post bounties, find work,
              and get paid in crypto — from anywhere in the world.
            </p>
            <div className="flex gap-3 mt-6">
              <Button size="sm" variant="outline" asChild className="gap-2">
                <Link href={siteConfig.appStoreUrl} target="_blank">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.92.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  iOS
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild className="gap-2">
                <Link href={siteConfig.playStoreUrl} target="_blank">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
                  </svg>
                  Android
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
            <div className="text-sm flex flex-col gap-2.5 items-start">
              <p className="font-semibold">Product</p>
              <Link
                href={siteConfig.appUrl}
                target="_blank"
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Open App
                <ArrowRight className="inline-block size-3.5 group-hover:translate-x-0.5 transition-all ml-1" />
              </Link>
              <Link
                href="/#features"
                className="text-muted-foreground transition-all hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="text-muted-foreground transition-all hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="/#mobile"
                className="text-muted-foreground transition-all hover:text-foreground"
              >
                Mobile App
              </Link>
              <Link
                href="https://docs.gib.work/"
                target="_blank"
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Documentation
                <ExternalLink className="inline-block size-3 ml-1 opacity-0 group-hover:opacity-50 transition-all" />
              </Link>
            </div>

            <div className="text-sm flex flex-col gap-2.5 items-start">
              <p className="font-semibold">Company</p>
              <Link
                href="/#about"
                className="text-muted-foreground transition-all hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/#testimonial"
                className="text-muted-foreground transition-all hover:text-foreground"
              >
                Testimonials
              </Link>
              <Link
                href="/#faq"
                className="text-muted-foreground transition-all hover:text-foreground"
              >
                FAQ
              </Link>
            </div>

            <div className="text-sm flex flex-col gap-2.5 items-start">
              <p className="font-semibold">Legal</p>
              <Link
                href="https://legal.gib.work/privacy-policy.pdf"
                target="_blank"
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Privacy Policy
                <ExternalLink className="inline-block size-3 ml-1 opacity-0 group-hover:opacity-50 transition-all" />
              </Link>
              <Link
                href="https://app.gib.work/terms"
                target="_blank"
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Terms of Service
                <ExternalLink className="inline-block size-3 ml-1 opacity-0 group-hover:opacity-50 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex sm:items-end justify-between mt-12 pt-6 border-t w-full sm:flex-row flex-col gap-4">
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.youtubeUrl}
              target="_blank"
              className="hover:scale-105 transition-all"
            >
              <YoutubeLogoMark className="size-5" />
            </Link>
            <Link
              href={siteConfig.discordUrl}
              target="_blank"
              className="hover:scale-105 transition-all"
            >
              <DiscordLogoMark className="size-5" />
            </Link>
            <Link
              href={siteConfig.xUrl}
              target="_blank"
              className="hover:scale-105 transition-all"
            >
              <TwitterLogoMark className="size-5" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Gibwork. Built on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
}
