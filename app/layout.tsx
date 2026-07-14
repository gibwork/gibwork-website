import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Gibwork | Find Talent, Find Work",
  description:
    "Gibwork connects skilled professionals with freelance work opportunities, offering seamless integration with all Solana tokens for secure and efficient transactions.",
  keywords: [
    "freelance",
    "crypto",
    "solana",
    "bounties",
    "gig work",
    "web3",
    "decentralized work",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gibwork",
    title: "Gibwork | Find Talent, Find Work",
    description:
      "Gibwork connects skilled professionals with freelance work opportunities, offering seamless integration with all Solana tokens for secure and efficient transactions.",
    images: [{ url: "https://cdn.gib.work/metadata/default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gibwork | Find Talent, Find Work",
    description:
      "Gibwork connects skilled professionals with freelance work opportunities.",
    images: ["https://cdn.gib.work/metadata/default.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col antialiased", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
