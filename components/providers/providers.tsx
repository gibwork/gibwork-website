"use client";
import { PostHogProvider } from "./posthog-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="gibwork-ui-theme">
      <PostHogProvider>{children}</PostHogProvider>
    </ThemeProvider>
  );
}
