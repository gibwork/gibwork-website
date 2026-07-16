import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { MobileApp } from "@/components/mobile-app";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { CtaFaq } from "@/components/cta-faq";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* Nav is sticky z-50, always on top */}
      <Nav />

      {/* Hero: full-viewport sticky base layer */}
      <Hero />

      {/* All subsequent sections are z-10, scroll over the hero */}
      <LogoList />
      <LookingFor />
      <MobileApp />
      <Testimonial />
      <CtaFaq />
      <Footer />
    </div>
  );
}
