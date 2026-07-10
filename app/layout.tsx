import type { Metadata, ResolvingMetadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const appItunesContent = `app-id=${siteConfig.iosAppId}, app-argument=${siteConfig.iosAppArgument}`;
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Gibwork",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS",
  url: siteConfig.baseUrl,
  sameAs: [siteConfig.xProfileUrl, siteConfig.youtubeUrl, siteConfig.discordUrl],
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    category: "Onchain work marketplace",
    priceCurrency: "USD",
  },
  potentialAction: [
    {
      "@type": "FindAction",
      name: "Find paid tasks",
      target: siteConfig.findTasksUrl,
    },
    {
      "@type": "CreateAction",
      name: "Post a task",
      target: siteConfig.postTaskUrl,
    },
  ],
};

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    metadataBase: new URL(siteConfig.baseUrl),
    applicationName: "Gibwork",
    title: "Gibwork | Fund Tasks, Submit Proof, Claim Rewards",
    description: siteConfig.description,
    alternates: {
      canonical: siteConfig.baseUrl,
    },
    keywords: [
      "Gibwork",
      "onchain work",
      "crypto bounties",
      "USDC tasks",
      "Solana rewards",
      "GitHub bounties",
    ],
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    category: "BusinessApplication",
    openGraph: {
      title: "Gibwork | Fund Tasks, Submit Proof, Claim Rewards",
      description: siteConfig.description,
      url: siteConfig.baseUrl,
      siteName: "Gibwork",
      type: "website",
      images: [
        {
          url: "https://cdn.gib.work/metadata/default.png",
          width: 1200,
          height: 630,
          alt: "Gibwork onchain work marketplace",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gibwork | Fund Tasks, Submit Proof, Claim Rewards",
      description: siteConfig.description,
      creator: `@${siteConfig.xHandle}`,
      images: ["https://cdn.gib.work/metadata/default.png"],
    },
    other: {
      "apple-itunes-app": appItunesContent,
    },
  };
}

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
