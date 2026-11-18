import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { MobileApp } from "@/components/mobile-app";
import { CryptoPayments } from "@/components/crypto-payments";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <MobileApp />
      <CryptoPayments />
      <SocialProof />
      <LogoList />
      <LookingFor />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}