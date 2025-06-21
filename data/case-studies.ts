export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string[];
  date: string;
  readTime: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "solana-foundation",
    title: "How Gibwork Helped Solana Foundation",
    description:
      "Transforming open-source contributions and developer engagement through decentralized bounty management",
    imageSrc: `https://cdn.gib.work/metadata/default.png`,
    category: ["OSS"],
    date: "June 21, 2025",
    readTime: "5 min read",
  },
  {
    slug: "oss-bounty",
    title: "How Gibwork Helped Solana Foundation",
    description:
      "Transforming open-source contributions and developer engagement through decentralized bounty management",
    imageSrc: "https://cdn.gib.work/metadata/default.png",
    category: ["OSS", "X"],
    date: "June 21, 2025",
    readTime: "5 min read",
  },
  {
    slug: "oss-bounty",
    title: "How Gibwork Helped Solana Foundation",
    description:
      "Transforming open-source contributions and developer engagement through decentralized bounty management",
    imageSrc: "https://cdn.gib.work/metadata/default.png",
    category: ["OSS", "X"],
    date: "June 21, 2025",
    readTime: "5 min read",
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
