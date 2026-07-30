import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { MobileApp } from "@/components/mobile-app";
import { siteConfig } from "@/lib/site-config";

const mobileAppStructuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Gibwork",
  operatingSystem: "iOS, Android",
  applicationCategory: "BusinessApplication",
  description:
    "Discover paid tasks and bounties, submit work, and track earnings from your phone.",
  downloadUrl: [siteConfig.appStoreUrl, siteConfig.playStoreUrl],
};

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileAppStructuredData),
        }}
      />
      <Nav />
      <Hero />
      <LogoList />
      <MobileApp />
      <LookingFor />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
