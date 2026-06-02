import { Nav } from "@/components/nav";
import { LiveEarningsTicker } from "@/components/live-earnings-ticker";
import { Hero } from "@/components/hero";
import { LookingFor } from "@/components/looking-for";
import { Connection } from "@/components/connection";
import { Leaderboard } from "@/components/leaderboard";
import { ReviewsV2 } from "@/components/reviews-v2";
import { MobileApp } from "@/components/mobile-app";
import { Rewards } from "@/components/rewards";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <LiveEarningsTicker />
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <LookingFor />
        <Connection />
        <Leaderboard />
        <ReviewsV2 />
        <MobileApp />
        <Rewards />
        <CTA />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
