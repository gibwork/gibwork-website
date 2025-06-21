import { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Case Studies | Gibwork",
  description: "Explore how Gibwork has helped companies and organizations transform their projects through our talent marketplace.",
  openGraph: {
    images: ["https://cdn.gib.work/metadata/default.png"],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
