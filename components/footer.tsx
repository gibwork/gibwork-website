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
          <div className="flex items-start flex-col">
            <div className="flex items-center gap-2">
              <Image alt="" src={logo} className="size-10 rounded-md bg-muted" />
              <p className="font-bold text-2xl">gibwork</p>
            </div>
            <h2 className="font-semibold text-2xl sm:text-3xl mt-4">Join our community</h2>
            <p className="text-muted-foreground sm:text-base text-sm">
              Meet like-minded people and find work opportunities easily.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div className="text-sm flex flex-col gap-2 items-start">
              <p className="font-semibold">Quick links</p>
              <Link
                href={"/#about"}
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                About
                <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>

              <Link
                href={"/#testimonial"}
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Testimonial
                <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              {/* <Link
                href={"/#team"}
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Team
                <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link> */}
              <Link
                href={"/#faq"}
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                FAQ
                <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
              <Link
                href={"https://docs.gib.work/"}
                 target="_blank"
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Docs
                <ArrowRight className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>
            </div>

            <div className="text-sm flex flex-col gap-2 items-start">
              <p className="font-semibold">Resources</p>
              <Link
                href={"https://legal.gib.work/privacy-policy.pdf"}
                 target="_blank"
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Privacy Policy
                <ExternalLink className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link>

              {/* <Link
                href={"#"}
                className="text-muted-foreground transition-all hover:text-foreground group"
              >
                Terms of Use
                <ExternalLink className="inline-block size-4 group-hover:scale-100 scale-0 transition-all ml-1" />
              </Link> */}
            </div>
          </div>
        </div>

        <div className="flex sm:items-end justify-between mt-12 w-full sm:flex-row flex-col gap-4">
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
            <Link href={siteConfig.xUrl} target="_blank" className="hover:scale-105 transition-all">
              <TwitterLogoMark className="size-5" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">Made with ♥ by gibwork</p>
        </div>
      </div>
    </footer>
  );
}
