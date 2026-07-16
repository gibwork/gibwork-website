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
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#testimonial", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
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
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <Image alt="" src={logo} className="size-10 rounded-md" />
              <p className="font-bold text-3xl min-[420px]:block hidden">
                gibwork
              </p>
            </Link>

            <div className="lg:absolute lg:top-1/2 uppercase lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 hidden lg:flex">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant={"ghost"}
                  className="text-muted-foreground text-xs"
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button
                asChild
                variant={"ghost"}
                className="text-muted-foreground text-xs"
              >
                <Link href={"https://docs.gib.work/"} target="_blank">
                  Docs
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center">
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

            <Button
              size={"icon"}
              variant={"secondary"}
              className="lg:hidden"
              onClick={() => setIsOpen(true)}
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
            className="fixed inset-0 bg-background z-10 overflow-auto"
          >
            <div className="flex flex-col">
              <div className="sm:px-6 px-4 h-16 flex justify-between items-center">
                <Link href={"/"} className="flex items-center gap-2">
                  <Image alt="" src={logo} className="size-10 rounded-md" />
                  <p className="font-bold text-xl min-[420px]:block hidden">
                    gibwork
                  </p>
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
                  >
                    <X className="size-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-end flex-col sm:p-6 p-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant={"ghost"}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground uppercase"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <Button
                  asChild
                  variant={"ghost"}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground uppercase"
                >
                  <Link href={"https://docs.gib.work/"} target="_blank">
                    Docs
                  </Link>
                </Button>
              </div>

              <Separator />

              <div className="flex justify-end sm:p-6 p-4">
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
