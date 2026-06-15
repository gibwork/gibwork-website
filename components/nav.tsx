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
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_IN, FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Separator } from "./ui/separator";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeMenuButtonRef.current?.focus();

    const getFocusableElements = () => {
      const dialog = menuDialogRef.current;

      if (!dialog) {
        return [] as HTMLElement[];
      }

      return Array.from(
        dialog.querySelectorAll<HTMLElement>(
          [
            "a[href]",
            "button:not([disabled])",
            "textarea:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            '[tabindex]:not([tabindex="-1"])',
          ].join(",")
        )
      ).filter((element) => {
        const style = window.getComputedStyle(element);

        return (
          !element.hasAttribute("disabled") &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          element.getClientRects().length > 0
        );
      });
    };

    const focusFirstElement = () => {
      const [firstFocusableElement] = getFocusableElements();
      firstFocusableElement?.focus();
    };

    const focusLastElement = () => {
      const focusableElements = getFocusableElements();
      focusableElements.at(-1)?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      const dialog = menuDialogRef.current;

      if (!dialog || !event.target || dialog.contains(event.target as Node)) {
        return;
      }

      focusFirstElement();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
      document.body.style.overflow = previousBodyOverflow;

      if (previouslyFocusedElement?.isConnected) {
        previouslyFocusedElement.focus();
      } else {
        openMenuButtonRef.current?.focus();
      }
    };
  }, [isOpen]);

  return (
    <>
      <nav className=" z-10 border-b bg-background/80 backdrop-blur-sm sticky top-0">
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

            <div className="lg:absolute lg:top-1/2 uppercase lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 md:flex hidden">
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#about"}>About</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#testimonial"}>Testimonial</Link>
              </Button>
              {/* <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"https://jup.ag/swap/SOL-F7Hwf8ib5DVCoiuyGr618Y3gon429Rnd1r5F9R5upump"} target="_blank">Token</Link>
              </Button> */}
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#faq"}>FAQ</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"https://docs.gib.work/"} target="_blank">DOCS</Link>
              </Button>
            </div>
          </div>

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

            <Button
              size={"icon"}
              variant={"secondary"}
              className="md:hidden"
              ref={openMenuButtonRef}
              aria-label="Open mobile navigation"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-dialog"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuDialogRef}
            id="mobile-navigation-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
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
                    ref={closeMenuButtonRef}
                    size={"icon"}
                    variant={"secondary"}
                    aria-label="Close mobile navigation"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="size-5" aria-hidden="true" />
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
                  <Link href={"/#testimonial"}>Testimonial</Link>
                </Button>
                {/* <Button
                  asChild
                  variant={"ghost"}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground uppercase"
                >
                  <Link href={"/#team"}>Team</Link>
                </Button> */}
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
