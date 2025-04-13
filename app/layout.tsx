import type { Metadata, ResolvingMetadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import og from "@/public/og.png";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });
const gaId = process.env.GOOGLE_ANALYTICS_ID ?? "";

// export const metadata: Metadata = {
//   title: {
//     default: `${siteConfig.name}`,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: [],
//   creator: siteConfig.creator,
//   metadataBase: new URL(siteConfig.baseUrl),
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.baseUrl,
//     siteName: siteConfig.name,
//     images: og.src,
//   },
//   twitter: {
//     card: "summary_large_image",
//     creator: "@" + siteConfig.xHandle,
//   },
//   manifest: "/site.webmanifest",
//   icons: {
//     icon: {
//       url: "/favicon.ico",
//       rel: "icon",
//     },
//     apple: {
//       url: "/apple-touch-icon.png",
//       sizes: "180x180",
//       rel: "apple-touch-icon",
//     },
//     other: [
//       {
//         url: "/favicon-16x16.png",
//         type: "image/png",
//         sizes: "16x16",
//         rel: "icon",
//       },
//       {
//         url: "/favicon-32x32.png",
//         type: "image/png",
//         sizes: "32x32",
//         rel: "icon",
//       },
//       {
//         url: "/android-chrome-192x192.png",
//         type: "image/png",
//         sizes: "192x192",
//         rel: "android-touch-icon",
//       },
//       {
//         url: "/android-chrome-512x512.png",
//         type: "image/png",
//         sizes: "512x512",
//         rel: "android-chrome",
//       },
//     ],
//   },
// };

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Gibwork | Find Talent, Find Work",
    description: "Gibwork connects skilled professionals with freelance work opportunities, offering seamless integration with all Solana tokens for secure and efficient transactions.",
    openGraph: {
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
      <GoogleAnalytics gaId={gaId} />
      <body className={cn("flex min-h-screen flex-col", inter.className)}>{children}</body>
    </html>
  );
}
