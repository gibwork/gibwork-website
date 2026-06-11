import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { ProductExperience } from "@/components/product-experience";
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
      <ProductExperience />
      <LookingFor />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
