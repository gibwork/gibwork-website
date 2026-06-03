import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import HowItWorks from "@/components/hiw";
import MobileApp from "@/components/mobileapp";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <LogoList />
      {/* <LookingFor /> */}
      <Features/>
      <HowItWorks/>
      <MobileApp/>
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
