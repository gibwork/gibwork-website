import { siteConfig } from "@/lib/site-config";

export type FeaturedWork = {
  id: string;
  title: string;
  amount: number;
  token: string;
  imageUrl: string;
  tokenImageUrl: string;
  href: string;
  isLive: boolean;
};

const fallbackWork: FeaturedWork[] = [
  {
    id: "landing-page",
    title: "Design gibwork's new landing page",
    amount: 500,
    token: "USDC",
    imageUrl: "/tasks/image-01.png",
    tokenImageUrl: "/token-usdc.png",
    href: siteConfig.appUrl,
    isLive: false,
  },
  {
    id: "developer-challenges",
    title: "Create developer challenges for Zircon",
    amount: 500,
    token: "USDC",
    imageUrl: "/tasks/image-02.png",
    tokenImageUrl: "/token-usdc.png",
    href: siteConfig.appUrl,
    isLive: false,
  },
  {
    id: "share-links",
    title: "Use slug- to share a set of links on X or Reddit",
    amount: 100,
    token: "USDC",
    imageUrl: "/tasks/image-03.png",
    tokenImageUrl: "/token-usdc.png",
    href: siteConfig.appUrl,
    isLive: false,
  },
];

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isSafeImageUrl(value: string) {
  if (value.startsWith("/")) return true;

  try {
    const { hostname, protocol } = new URL(value);
    return (
      protocol === "https:" &&
      ["cdn.gib.work", "raw.githubusercontent.com"].includes(hostname)
    );
  } catch {
    return false;
  }
}

function parseWork(value: unknown): FeaturedWork | null {
  if (!isRecord(value) || !isRecord(value.asset)) return null;

  const { asset } = value;
  const type = value.type;
  const id = value.id;
  const title = value.title;
  const remainingAmount = value.remainingAmount;
  const token = asset.symbol;
  const tokenImageUrl = asset.imageUrl;

  if (
    value.isOpen !== true ||
    value.isHidden === true ||
    (type !== "tasks" && type !== "bounties") ||
    typeof id !== "string" ||
    !/^[a-f0-9-]{36}$/i.test(id) ||
    typeof title !== "string" ||
    title.trim().length === 0 ||
    typeof remainingAmount !== "number" ||
    !Number.isFinite(remainingAmount) ||
    remainingAmount <= 0 ||
    typeof token !== "string" ||
    !/^[a-z0-9._-]{1,12}$/i.test(token) ||
    typeof tokenImageUrl !== "string" ||
    !isSafeImageUrl(tokenImageUrl)
  ) {
    return null;
  }

  return {
    id,
    title: title.trim(),
    amount: remainingAmount,
    token,
    imageUrl: tokenImageUrl,
    tokenImageUrl,
    href: `${siteConfig.appUrl}${type}/${id}`,
    isLive: true,
  };
}

export async function getFeaturedWork(): Promise<FeaturedWork[]> {
  try {
    const response = await fetch(
      "https://api.gib.work/explore?page=1&limit=15",
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) return fallbackWork;

    const payload: unknown = await response.json();
    if (!isRecord(payload) || !Array.isArray(payload.results)) {
      return fallbackWork;
    }

    const liveWork = payload.results
      .map(parseWork)
      .filter((work): work is FeaturedWork => work !== null)
      .slice(0, 3);

    return liveWork.length === 3 ? liveWork : fallbackWork;
  } catch {
    return fallbackWork;
  }
}
