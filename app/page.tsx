import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Stats } from "@/components/stats";
import { MobileApp } from "@/components/mobile-app";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <LogoList />
      <Stats />
      <Features />
      <LookingFor />
      <HowItWorks />
      <MobileApp />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
