import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { ProductHighlights } from "@/components/product-highlights";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <ProductHighlights />
      <LogoList />
      <LookingFor />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
