import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gib.work"),
  title: "Gibwork | Find Work. Get Paid Onchain.",
  description:
    "Discover paid tasks and GitHub bounties, submit work, and track approved stablecoin payouts on web, iOS, and Android.",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Gibwork | Find Work. Get Paid Onchain.",
    description:
      "Discover paid tasks and bounties on web, iOS, and Android.",
    url: "/",
    images: ["https://cdn.gib.work/metadata/default.png"],
  },
  other: {
    "apple-itunes-app": "app-id=6757281508",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
