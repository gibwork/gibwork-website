const MARKETPLACE_URL = "https://app.gib.work/api/explore";
const APP_URL = "https://app.gib.work/";

export type MarketplaceTask = {
  id: string;
  title: string;
  href: string;
  amount: number | null;
  token: string;
  tokenImageUrl: string | null;
  category: string;
  verifiedOnly: boolean;
  deadline: string | null;
};

export type MarketplaceStats = {
  openTasks: number;
  availableRewards: number;
  categories: number;
  highestReward: number;
};

export type MarketplaceProof = {
  tasks: MarketplaceTask[];
  stats: MarketplaceStats | null;
  isLive: boolean;
};

type ApiTask = {
  id?: unknown;
  title?: unknown;
  deadline?: unknown;
  tags?: unknown;
  isOpen?: unknown;
  isHidden?: unknown;
  allowOnlyVerifiedSubmissions?: unknown;
  remainingAmount?: unknown;
  asset?: {
    symbol?: unknown;
    imageUrl?: unknown;
  } | null;
  type?: unknown;
};

const fallbackTasks: MarketplaceTask[] = [
  {
    id: "fallback-development",
    title: "Explore funded development work",
    href: APP_URL,
    amount: null,
    token: "USDC",
    tokenImageUrl: "/token-usdc.png",
    category: "Development",
    verifiedOnly: false,
    deadline: null,
  },
  {
    id: "fallback-design",
    title: "Find design and creative tasks",
    href: APP_URL,
    amount: null,
    token: "USDC",
    tokenImageUrl: "/token-usdc.png",
    category: "Design",
    verifiedOnly: false,
    deadline: null,
  },
  {
    id: "fallback-open-source",
    title: "Browse open-source bounties",
    href: APP_URL,
    amount: null,
    token: "USDC",
    tokenImageUrl: "/token-usdc.png",
    category: "Open Source",
    verifiedOnly: false,
    deadline: null,
  },
];

function asNonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function asPositiveNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : null;
}

function normalizeTask(raw: ApiTask, now: number): MarketplaceTask | null {
  const id = asNonEmptyString(raw.id);
  const title = asNonEmptyString(raw.title);
  const deadline = asNonEmptyString(raw.deadline);
  const amount = asPositiveNumber(raw.remainingAmount);
  const deadlineTime = deadline ? Date.parse(deadline) : Number.NaN;

  if (
    !id ||
    !title ||
    raw.isOpen !== true ||
    raw.isHidden === true ||
    !amount ||
    !Number.isFinite(deadlineTime) ||
    deadlineTime <= now
  ) {
    return null;
  }

  const tags = Array.isArray(raw.tags)
    ? raw.tags.map(asNonEmptyString).filter((tag): tag is string => Boolean(tag))
    : [];
  const category = tags[0] ?? "General";
  const type = raw.type === "bounties" ? "bounties" : "tasks";

  return {
    id,
    title,
    href: `${APP_URL}${type}/${id}`,
    amount,
    token: asNonEmptyString(raw.asset?.symbol) ?? "Token",
    tokenImageUrl: asNonEmptyString(raw.asset?.imageUrl),
    category,
    verifiedOnly: raw.allowOnlyVerifiedSubmissions === true,
    deadline,
  };
}

function taskPriority(task: MarketplaceTask): number {
  // Keep the preview representative: technical/creative work should not be
  // crowded out by a run of social-only campaigns in the marketplace feed.
  const categoryPenalty = task.category.toLowerCase().includes("social") ? 2 : 0;
  const verificationBoost = task.verifiedOnly ? -1 : 0;
  return categoryPenalty + verificationBoost;
}

function pickDiverseTasks(tasks: MarketplaceTask[], limit: number) {
  const sorted = [...tasks].sort((a, b) => {
    const priority = taskPriority(a) - taskPriority(b);
    if (priority !== 0) return priority;

    const reward = (b.amount ?? 0) - (a.amount ?? 0);
    if (reward !== 0) return reward;

    return a.title.localeCompare(b.title);
  });

  const selected: MarketplaceTask[] = [];
  const categories = new Set<string>();

  for (const task of sorted) {
    const category = task.category.toLowerCase();
    if (!categories.has(category)) {
      selected.push(task);
      categories.add(category);
    }
    if (selected.length === limit) return selected;
  }

  for (const task of sorted) {
    if (!selected.some(({ id }) => id === task.id)) selected.push(task);
    if (selected.length === limit) break;
  }

  return selected;
}

export function selectMarketplaceProof(
  input: unknown,
  now = Date.now(),
): MarketplaceProof {
  const results =
    input &&
    typeof input === "object" &&
    Array.isArray((input as { results?: unknown }).results)
      ? ((input as { results: ApiTask[] }).results ?? [])
      : [];
  const eligible = results
    .map((task) => normalizeTask(task, now))
    .filter((task): task is MarketplaceTask => Boolean(task));

  if (!eligible.length) {
    return { tasks: fallbackTasks, stats: null, isLive: false };
  }

  const amounts = eligible.map(({ amount }) => amount ?? 0);

  return {
    tasks: pickDiverseTasks(eligible, 3),
    stats: {
      openTasks: eligible.length,
      availableRewards: amounts.reduce((sum, amount) => sum + amount, 0),
      categories: new Set(
        eligible.map(({ category }) => category.toLowerCase()),
      ).size,
      highestReward: Math.max(...amounts),
    },
    isLive: true,
  };
}

export async function getMarketplaceProof(): Promise<MarketplaceProof> {
  try {
    const response = await fetch(MARKETPLACE_URL, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`Marketplace returned ${response.status}`);

    return selectMarketplaceProof(await response.json());
  } catch {
    return { tasks: fallbackTasks, stats: null, isLive: false };
  }
}
