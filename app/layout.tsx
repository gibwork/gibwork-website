import type { Metadata, ResolvingMetadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: "Gibwork | Fund Outcomes, Find Work, Get Paid",
    description:
      "Post outcome-based tasks and open-source bounties, discover paid work, review submissions, and settle rewards globally with Gibwork.",
    openGraph: {
      title: "Gibwork | Fund Outcomes, Find Work, Get Paid",
      description:
        "One transparent flow for posting work, submitting proof, reviewing results, and releasing rewards.",
      type: "website",
      url: "https://gib.work/",
      images: [`https://cdn.gib.work/metadata/default.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gibwork | Fund Outcomes, Find Work, Get Paid",
      description:
        "Find paid work or fund outcomes with transparent submissions and global rewards.",
      images: [`https://cdn.gib.work/metadata/default.png`],
    },
    alternates: {
      canonical: "https://gib.work/",
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
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
