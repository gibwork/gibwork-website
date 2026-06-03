import type { Metadata, ResolvingMetadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Gibwork | Onchain work marketplace · Paid in USDC",
    description:
      "Post GitHub bounties, complete paid tasks, or list your services and get paid in USDC on Solana. Available on web, iOS, and Android.",
    openGraph: {
      title: "Gibwork | Onchain work marketplace",
      description:
        "Bounties, tasks, and services paid in USDC on Solana. Available on iOS and Android.",
      images: [`https://cdn.gib.work/metadata/default.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gibwork | Onchain work marketplace",
      description:
        "Bounties, tasks, and services paid in USDC on Solana. Available on iOS and Android.",
      images: [`https://cdn.gib.work/metadata/default.png`],
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
