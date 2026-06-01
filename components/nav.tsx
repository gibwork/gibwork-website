"use client";

import { DiscordLogoMark } from "@/components/logo/discord";
import { TwitterLogoMark } from "@/components/logo/twitter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/work-logo.png";
import { YoutubeLogoMark } from "./logo/youtube";
import { siteConfig } from "@/lib/site-config";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_IN, FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Separator } from "./ui/separator";

const navLinks = [
  { label: "About", href: "/#about", external: false },
  { label: "How It Works", href: "/#looking-for", external: false },
  { label: "Testimonial", href: "/#testimonial", external: false },
  { label: "FAQ", href: "/#faq", external: false },
  { label: "Docs", href: "https://docs.gib.work/", external: true },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="z-10 border-b bg-background/80 backdrop-blur-sm sticky top-0">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 h-16 w-full flex justify-between items-center gap-2"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <Image alt="gibwork logo" src={logo} className="size-10 rounded-md" />
              <p className="font-bold text-3xl min-[420px]:block hidden">gibwork</p>
            </Link>

            {/* Desktop nav links */}
            <div className="lg:absolute lg:top-1/2 uppercase lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 md:flex hidden">
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant={"ghost"}
                  className="text-muted-foreground text-xs"
                >
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center">
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href={siteConfig.youtubeUrl} target="_blank">
                  <YoutubeLogoMark className="size-5" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href={siteConfig.discordUrl} target="_blank">
                  <DiscordLogoMark className="size-5" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href={siteConfig.xUrl} target="_blank">
                  <TwitterLogoMark className="size-5" />
                </Link>
              </Button>
            </div>

            <Button asChild className="group">
              <Link href={siteConfig.appUrl} target="_blank">
                Open App
                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
              </Link>
            </Button>

            {/* Mobile hamburger */}
            <Button
              size={"icon"}
              variant={"secondary"}
              className="md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed inset-0 bg-background z-50 overflow-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header row */}
              <div className="sm:px-6 px-4 h-16 flex justify-between items-center border-b">
                <Link
                  href={"/"}
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Image alt="gibwork logo" src={logo} className="size-10 rounded-md" />
                  <p className="font-bold text-xl min-[420px]:block hidden">gibwork</p>
                </Link>

                <div className="flex items-center gap-2">
                  <Button asChild className="group">
                    <Link href={siteConfig.appUrl} target="_blank">
                      Open App
                      <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
                    </Link>
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"secondary"}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="size-5" />
                  </Button>
                </div>
              </div>

              {/* Nav links */}
              <div className="flex flex-col sm:p-6 p-4 gap-1">
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    asChild
                    variant={"ghost"}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground uppercase justify-start text-base h-12"
                  >
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </Button>
                ))}
              </div>

              <Separator />

              {/* Social icons */}
              <div className="flex sm:p-6 p-4 gap-1">
                <Button size={"icon"} variant={"ghost"} asChild>
                  <Link href={siteConfig.youtubeUrl} target="_blank">
                    <YoutubeLogoMark className="size-5" />
                  </Link>
                </Button>
                <Button size={"icon"} variant={"ghost"} asChild>
                  <Link href={siteConfig.discordUrl} target="_blank">
                    <DiscordLogoMark className="size-5" />
                  </Link>
                </Button>
                <Button size={"icon"} variant={"ghost"} asChild>
                  <Link href={siteConfig.xUrl} target="_blank">
                    <TwitterLogoMark className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
