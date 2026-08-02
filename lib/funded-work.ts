const GIBWORK_API = "https://api.gib.work";

type ExploreResponse = {
  results?: ExploreTask[];
};

type ExploreTask = {
  id?: string;
  title?: string;
  deadline?: string;
  isOpen?: boolean;
  remainingAmount?: number | string;
  asset?: {
    symbol?: string;
    price?: number | string;
  };
  tags?: string[];
  user?: {
    username?: string;
  };
};

type VaultResponse = {
  balance?: number | string;
  totalDeposited?: number | string;
  totalWithdrawn?: number | string;
  isAccountClosed?: boolean;
};

export type FundedWorkItem = {
  id: string;
  title: string;
  amount: number;
  symbol: string;
  deadline?: string;
  username?: string;
  escrowBalance: number;
  isAccountClosed: boolean;
};

function toNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

async function getJson<T>(url: string, init?: RequestInit): Promise<T | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        accept: "application/json",
        ...(init?.headers ?? {}),
      },
    });

    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Read-only funding check for the landing page. The vault endpoint is treated
 * as an observation, never as a guarantee that a participant will be paid.
 */
export async function getFundedWork(): Promise<FundedWorkItem[]> {
  const payload = await getJson<ExploreResponse>(
    `${GIBWORK_API}/explore?page=1&limit=50`,
    { next: { revalidate: 300 } },
  );

  const candidates = (payload?.results ?? [])
    .filter(
      (task) =>
        task.id &&
        task.title &&
        task.isOpen &&
        // Keep the public strip focused on build work; it must not encourage
        // visitors to use someone else's social accounts.
        task.tags?.some((tag) => ["Development", "JavaScript", "TypeScript", "Rust", "Solana"].includes(tag)),
    )
    .map((task) => ({
      task,
      amount: toNumber(task.remainingAmount),
    }))
    .filter(
      (candidate): candidate is { task: ExploreTask & { id: string; title: string }; amount: number } =>
        candidate.amount !== null && candidate.amount > 0,
    )
    .slice(0, 6);

  const checked: Array<FundedWorkItem | null> = await Promise.all(
    candidates.map(async ({ task, amount }) => {
      const vault = await getJson<VaultResponse>(`${GIBWORK_API}/vaults`, {
        method: "POST",
        body: JSON.stringify({ id: task.id, type: "task" }),
        headers: { "content-type": "application/json" },
        cache: "no-store",
      });

      const balance = toNumber(vault?.balance);
      if (balance === null || balance <= 0) return null;

      return {
        id: task.id,
        title: task.title,
        amount,
        symbol: task.asset?.symbol ?? "USDC",
        deadline: task.deadline,
        username: task.user?.username,
        escrowBalance: balance,
        isAccountClosed: vault?.isAccountClosed === true,
      } satisfies FundedWorkItem;
    }),
  );

  return checked.filter((item) => item !== null) as FundedWorkItem[];
}
