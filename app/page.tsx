import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { LiveWorkPreview } from "@/components/live-work-preview";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <LogoList />
      <LookingFor />
      <LiveWorkPreview />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
