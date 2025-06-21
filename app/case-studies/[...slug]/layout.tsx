import { Metadata } from "next";
import { getCaseStudyBySlug } from "@/data/case-studies";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const slug = params.slug.join("/");
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Gibwork",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${caseStudy.title} | Gibwork Case Study`,
    description: caseStudy.description,
    openGraph: {
      images: [caseStudy.imageSrc],
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
    },
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-grow">{children}</main>
    </>
  );
}
