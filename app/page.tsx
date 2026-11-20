import { Nav } from "@/components/nav";
import { LookingFor } from "@/components/looking-for";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      {/* Mobile App Section */}
      <div className="py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4">
          Now available on iOS & Android
        </h2>
        <p className="text-center mb-8">
          Work from anywhere, get paid instantly. The Gibwork mobile app puts the entire platform in your pocket.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            App Store
          </a>
          <a
            href="#"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Google Play
          </a>
        </div>
      </div>
      {/* End Mobile App Section */}
      <LogoList />
      <LookingFor />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}