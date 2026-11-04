export interface WorkCategoryItem {
  id: string;
  title: string;
  description: string;
  bountyTag: string;
}

export const GIBWORK_CATEGORIES: ReadonlyArray<WorkCategoryItem> = [
  {
    id: "open-source-dev",
    title: "Open Source & Smart Contracts",
    description: "Ship Rust, Solana Anchor, TypeScript, and full-stack PRs paid in USDC & SOL.",
    bountyTag: "development",
  },
  {
    id: "design-ui",
    title: "Product & UI/UX Design",
    description: "Design web3 interfaces, landing pages, and brand assets with instant escrow release.",
    bountyTag: "design",
  },
  {
    id: "content-growth",
    title: "Technical Writing & Community",
    description: "Tutorials, developer documentation, translations, and ecosystem research.",
    bountyTag: "content",
  },
];
