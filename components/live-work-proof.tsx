import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MarketplaceTask = {
  id: string;
  title: string;
  content?: string;
  deadline?: string;
  tags?: string[];
  type?: string;
  isOpen?: boolean;
  isHidden?: boolean;
  remainingAmount?: number;
  asset?: {
    symbol?: string;
  };
};

type MarketplaceResponse = {
  results?: MarketplaceTask[];
};

const fallbackTasks: MarketplaceTask[] = [
  {
    id: "sample-open-source-bounty",
    title: "Open source bounty with public PR proof",
    tags: ["Development"],
    type: "bounties",
    remainingAmount: 100,
    asset: { symbol: "USDC" },
  },
  {
    id: "sample-feedback-task",
    title: "Product feedback with annotated screenshots",
    tags: ["Feedback"],
    type: "tasks",
    remainingAmount: 40,
    asset: { symbol: "USDC" },
  },
  {
    id: "sample-social-task",
    title: "Public launch post with verification screenshots",
    tags: ["Social Media"],
    type: "tasks",
    remainingAmount: 75,
    asset: { symbol: "USDC" },
  },
];

const riskyPromoPattern =
  /guaranteed|profit regardless|safe, market-neutral|steady daily yield|whether.*crashes.*surges/i;

async function getLiveTasks() {
  try {
    const response = await fetch("https://app.gib.work/api/explore", {
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return fallbackTasks;
    }

    const data = (await response.json()) as MarketplaceResponse;

    const tasks = (data.results ?? [])
      .filter((task) => task.isOpen && !task.isHidden)
      .filter((task) => Number(task.remainingAmount ?? 0) > 0)
      .filter((task) => !riskyPromoPattern.test(`${task.title} ${task.content ?? ""}`))
      .slice(0, 6);

    return tasks.length > 0 ? tasks : fallbackTasks;
  } catch {
    return fallbackTasks;
  }
}

function formatReward(task: MarketplaceTask) {
  const amount = Number(task.remainingAmount ?? 0);
  const symbol = task.asset?.symbol ?? "USDC";

  if (!amount) {
    return "Funded task";
  }

  return `${amount} ${symbol}`;
}

function formatDeadline(deadline?: string) {
  if (!deadline) {
    return "Deadline varies";
  }

  return `Due ${deadline.slice(0, 10)}`;
}

function getTaskUrl(task: MarketplaceTask) {
  const path = task.type === "bounties" ? "bounties" : "tasks";

  return `https://app.gib.work/${path}/${task.id}`;
}

export async function LiveWorkProof() {
  const tasks = await getLiveTasks();

  return (
    <section className="relative max-w-6xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary">Live work proof</Badge>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          Funded work, visible before you sign in
        </h2>
        <p className="mt-3 text-muted-foreground">
          See the kind of public proof contributors submit: task links,
          screenshots, validation notes, or pull requests that sponsors can
          review before payout.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <Link
            key={task.id}
            href={getTaskUrl(task)}
            target="_blank"
            className="group"
          >
            <Card className="h-full transition-colors group-hover:border-primary">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline">{formatReward(task)}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDeadline(task.deadline)}
                  </span>
                </div>
                <CardTitle className="line-clamp-2 text-lg">
                  {task.title}
                </CardTitle>
                <CardDescription>
                  {(task.tags ?? [task.type ?? "Task"]).slice(0, 2).join(" / ")}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {["Choose a task", "Ship the artifact", "Submit public proof", "Get reviewed"].map(
          (step, index) => (
            <div
              key={step}
              className="rounded-lg border bg-background p-4 text-sm font-medium"
            >
              <span className="mr-2 text-muted-foreground">{index + 1}</span>
              {step}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
