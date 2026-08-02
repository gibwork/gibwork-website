import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: "Gibwork | Find bounties. Get paid.",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  appleWebApp: { capable: true, title: siteConfig.name },
  other: {
    "apple-itunes-app": `app-id=${siteConfig.appStoreId}`,
  },
  openGraph: {
    title: "Gibwork | Find bounties. Get paid.",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    images: ["https://cdn.gib.work/metadata/default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gibwork | Find bounties. Get paid.",
    description: siteConfig.description,
    creator: `@${siteConfig.xHandle}`,
    images: ["https://cdn.gib.work/metadata/default.png"],
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
