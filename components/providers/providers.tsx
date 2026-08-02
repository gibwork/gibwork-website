"use client";
import { PostHogProvider } from "./posthog-provider";
import { MotionConfig } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <PostHogProvider>{children}</PostHogProvider>
    </MotionConfig>
  );
}
