import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const WORK_TOKEN_ADDRESS = "F7Hwf8ib5DVCoiuyGr618Y3gon429Rnd1r5F9R5upump";

export const metadata: Metadata = {
  title: "Tokenomics | Gibwork",
  description:
    "$WORK is the native token of the Gibwork platform. Learn about the token, where it trades, and what holding it unlocks.",
};

export default function Page() {
  return (
    <div className="flex flex-col z-0 relative min-h-screen">
      <Nav />

      <main className="grow w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          $WORK Tokenomics
        </h1>
        <p className="text-center mt-2 text-muted-foreground max-w-2xl mx-auto">
          $WORK is the native token of the Gibwork platform. It facilitates
          transactions on the platform, unlocks features for holders, and
          rewards active participation in the community.
        </p>

        <Card className="mt-10 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">Token address</CardTitle>
            <CardDescription className="font-mono break-all select-all">
              {WORK_TOKEN_ADDRESS}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <Button asChild>
            <Link
              href="https://docs.gib.work/work-token/tokenomics"
              target="_blank"
            >
              Read the docs
              <ExternalLink className="size-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant={"secondary"}>
            <Link
              href={`https://dexscreener.com/solana/${WORK_TOKEN_ADDRESS}`}
              target="_blank"
            >
              Chart on DexScreener
              <ExternalLink className="size-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant={"secondary"}>
            <Link
              href="https://www.coingecko.com/en/coins/work"
              target="_blank"
            >
              CoinGecko
              <ExternalLink className="size-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
