import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { HowItWorks } from "@/components/how-it-works";
import { MobileApp } from "@/components/mobile-app";
import { BuildWithAgents } from "@/components/build-with-agents";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <LogoList />
      <HowItWorks />
      <LookingFor />
      <MobileApp />
      <BuildWithAgents />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
