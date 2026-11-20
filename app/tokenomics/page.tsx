import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logoList";
import { LookingFor } from "@/components/lookingFor";
import { Testimonial } from "@/components/testimonial";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function page() {
    return (
        <>
            <Nav />
            <Hero />
            <LogoList />
            <LookingFor />
            <Testimonial />
            <CTA />
            <FAQ />
            <Footer />
        </>
    );
}