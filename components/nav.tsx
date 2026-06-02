"use client";

import { DiscordLogoMark } from "@/components/logo/discord";
import { XLogoMark } from "@/components/logo/x";
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
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="z-50 border-b bg-background/80 backdrop-blur-sm sticky top-0">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 h-16 w-full flex justify-between items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <Image alt="" src={logo} className="size-10 rounded-md" />
              <p className="font-bold text-3xl min-[420px]:block hidden">gibwork</p>
            </Link>

            <div className="lg:absolute lg:top-1/2 uppercase lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex hidden">
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#about"}>About</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#how-it-works"}>How it works</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#mobile-app"}>Mobile</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#faq"}>FAQ</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"https://docs.gib.work/"} target="_blank">DOCS</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center">
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  aria-label="Gibwork on YouTube"
                >
                  <YoutubeLogoMark className="size-5" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link
                  href={siteConfig.discordUrl}
                  target="_blank"
                  aria-label="Gibwork on Discord"
                >
                  <DiscordLogoMark className="size-5" />
                </Link>
              </Button>

              <Button size={"icon"} variant={"ghost"} asChild>
                <Link
                  href={siteConfig.xUrl}
                  target="_blank"
                  aria-label="Gibwork on X"
                >
                  <XLogoMark className="size-5" />
                </Link>
              </Button>
              <ThemeToggle />
            </div>

            <Button asChild className="group">
              <Link href={siteConfig.appUrl} target="_blank">
                Open App
                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
              </Link>
            </Button>

            <Button
              size={"icon"}
              variant={"secondary"}
              className="lg:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed inset-0 bg-background z-50 overflow-auto"
          >
            <div className="flex flex-col">
              <div className="sm:px-6 px-4 h-16 flex justify-between items-center">
                <Link href={"/"} className="flex items-center gap-2">
                  <Image alt="" src={logo} className="size-10 rounded-md" />
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

              <div className="flex items-end flex-col sm:p-6 p-4">
                <Button
                  asChild
                  variant={"ghost"}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground uppercase"
                >
                  <Link href={"/#about"}>About</Link>
                </Button>
                <Button
                  asChild
                  variant={"ghost"}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground uppercase"
                >
                  <Link href={"/#how-it-works"}>How it works</Link>
                </Button>
                <Button
                  asChild
                  variant={"ghost"}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground uppercase"
                >
                  <Link href={"/#mobile-app"}>Mobile</Link>
                </Button>
                <Button
                  asChild
                  variant={"ghost"}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground uppercase"
                >
                  <Link href={"/#faq"}>FAQ</Link>
                </Button>
              </div>

              <Separator />

              <div className="flex justify-end sm:p-6 p-4">
                <Button size={"icon"} variant={"ghost"} asChild>
                  <Link
                    href={siteConfig.youtubeUrl}
                    target="_blank"
                    aria-label="Gibwork on YouTube"
                  >
                    <YoutubeLogoMark className="size-5" />
                  </Link>
                </Button>
                <Button size={"icon"} variant={"ghost"} asChild>
                  <Link
                    href={siteConfig.discordUrl}
                    target="_blank"
                    aria-label="Gibwork on Discord"
                  >
                    <DiscordLogoMark className="size-5" />
                  </Link>
                </Button>

                <Button size={"icon"} variant={"ghost"} asChild>
                  <Link
                    href={siteConfig.xUrl}
                    target="_blank"
                    aria-label="Gibwork on X"
                  >
                    <XLogoMark className="size-5" />
                  </Link>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
