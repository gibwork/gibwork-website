import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { getMarketplaceProof } from "@/lib/marketplace-proof";

export const revalidate = 900;

export default async function Home() {
  const marketplaceProof = await getMarketplaceProof();

  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <LogoList />
      <LookingFor marketplaceProof={marketplaceProof} />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
