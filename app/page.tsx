import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { PlatformMetrics } from "@/components/platform-metrics";
import { LiveTasksCarousel } from "@/components/live-tasks-carousel";
import { Leaderboards } from "@/components/leaderboards";
import { ReferralDashboard } from "@/components/referral-dashboard";
import { HowItWorks } from "@/components/how-it-works";
import { FloatingActionButton } from "@/components/floating-action-button";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <PlatformMetrics />
      <LiveTasksCarousel />
      <HowItWorks />
      <LogoList />
      <LookingFor />
      <Leaderboards />
      <ReferralDashboard />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
      <FloatingActionButton />
      <ScrollToTop />
    </div>
  );
}
