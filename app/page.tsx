import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { getFeaturedWork } from "@/lib/gibwork-api";

export default async function Home() {
  const featuredWork = await getFeaturedWork();

  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <LogoList />
      <LookingFor featuredWork={featuredWork} />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
