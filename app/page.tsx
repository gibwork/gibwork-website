import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { LogoList } from "@/components/logo-list";
import { HowItWorks } from "@/components/how-it-works";
import { LookingFor } from "@/components/looking-for";
import { Testimonial } from "@/components/testimonial";
import { CTA } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <Stats />
      <LogoList />
      <HowItWorks />
      <LookingFor />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}