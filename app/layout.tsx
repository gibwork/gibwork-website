import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gib.work"),
  title: "Gibwork | Find Talent, Find Work",
  description:
    "Post work, fund it in escrow, and pay on approval. Gibwork connects builders, designers, and creators with paid tasks and open-source bounties on Solana.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gibwork — find talent, find work",
    description:
      "Post work, fund it in escrow, and pay on approval. Find paid tasks and open-source bounties on Gibwork.",
    url: "https://gib.work/",
    images: ["https://cdn.gib.work/metadata/default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gibwork — find talent, find work",
    description:
      "Post work, fund it in escrow, and pay on approval. Find paid tasks and open-source bounties on Gibwork.",
    images: ["https://cdn.gib.work/metadata/default.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
