import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Smartphone,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExploreAsset = {
  symbol?: string;
  imageUrl?: string;
  price?: number;
};

type ExploreTask = {
  id: string;
  title: string;
  deadline?: string;
  tags?: string[] | string;
  type?: string;
  isOpen?: boolean;
  isHidden?: boolean;
  remainingAmount?: number;
  allowOnlyVerifiedSubmissions?: boolean;
  asset?: ExploreAsset;
  user?: {
    username?: string;
  };
};

type ExploreResponse = {
  results?: ExploreTask[];
};

type WorkItem = {
  id: string;
  title: string;
  href: string;
  reward: number;
  token: string;
  tokenImage: string;
  tag: string;
  deadline?: string;
  username?: string;
  verifiedOnly?: boolean;
};

const appUrl = siteConfig.appUrl.replace(/\/$/, "");

const fallbackWork: WorkItem[] = [
  {
    id: "b7c2a3c9-c412-4613-9cfb-d8a5f54d14b7",
    title: "Improve Gibwork Landing Page or Submit a GitHub Enhancement",
    href: `${appUrl}/tasks/b7c2a3c9-c412-4613-9cfb-d8a5f54d14b7`,
    reward: 350,
    token: "USDC",
    tokenImage: "/token-usdc.png",
    tag: "Development",
    deadline: "Jul 31",
    username: "gibwork",
    verifiedOnly: true,
  },
  {
    id: "df3f08ab-7124-4481-9a77-048eae91aa97",
    title: "Create video for Redcircle",
    href: `${appUrl}/tasks/df3f08ab-7124-4481-9a77-048eae91aa97`,
    reward: 250,
    token: "USDC",
    tokenImage: "/token-usdc.png",
    tag: "Social Media",
    deadline: "Jul 4",
    username: "redcircle",
  },
  {
    id: "7ed5d5d7-a448-4e2c-8d0b-f145b77ab082",
    title: "X Post Hunt on Discord",
    href: `${appUrl}/tasks/7ed5d5d7-a448-4e2c-8d0b-f145b77ab082`,
    reward: 175,
    token: "USDC",
    tokenImage: "/token-usdc.png",
    tag: "Misc",
    deadline: "Jul 21",
    username: "gibwork",
  },
];

function getTags(tags: ExploreTask["tags"]) {
  if (Array.isArray(tags)) {
    return tags;
  }

  if (typeof tags === "string") {
    return tags.split(",").map((tag) => tag.trim()).filter(Boolean);
  }

  return [];
}

function getTaskHref(task: ExploreTask) {
  const route = task.type === "bounties" ? "bounties" : "tasks";
  return `${appUrl}/${route}/${task.id}`;
}

function getDeadlineLabel(deadline?: string) {
  if (!deadline) {
    return undefined;
  }

  const date = new Date(deadline);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

async function getOpenWork(): Promise<WorkItem[]> {
  try {
    const response = await fetch("https://app.gib.work/api/explore", {
      next: { revalidate: 30 * 60 },
    });

    if (!response.ok) {
      return fallbackWork;
    }

    const data = (await response.json()) as ExploreResponse;
    const tasks = data.results ?? [];

    const openTasks = tasks
      .filter((task) => task.isOpen && !task.isHidden && (task.remainingAmount ?? 0) > 0)
      .sort((a, b) => (b.remainingAmount ?? 0) - (a.remainingAmount ?? 0))
      .slice(0, 3)
      .map((task) => ({
        id: task.id,
        title: task.title,
        href: getTaskHref(task),
        reward: task.remainingAmount ?? task.asset?.price ?? 0,
        token: task.asset?.symbol ?? "USDC",
        tokenImage: task.asset?.imageUrl ?? "/token-usdc.png",
        tag: getTags(task.tags)[0] ?? "Open Work",
        deadline: getDeadlineLabel(task.deadline),
        username: task.user?.username,
        verifiedOnly: task.allowOnlyVerifiedSubmissions,
      }));

    return openTasks.length > 0 ? openTasks : fallbackWork;
  } catch {
    return fallbackWork;
  }
}

export async function LiveWorkPreview() {
  const workItems = await getOpenWork();
  const totalVisibleReward = workItems.reduce((sum, item) => sum + item.reward, 0);

  return (
    <section
      id="live-work"
      className="relative w-full border-y bg-muted/30 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24">
          <Badge variant="secondary" className="gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            LIVE MARKETPLACE
          </Badge>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Funded work people can inspect before they start
          </h2>

          <p className="mt-4 max-w-xl text-muted-foreground">
            Gibwork brings tasks, open-source bounties, and service work into one
            mobile-friendly app where contributors can review rewards, deadlines,
            requirements, and submission proof from the same place.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border bg-background p-4">
              <WalletCards className="size-5 text-primary" />
              <p className="mt-3 text-2xl font-semibold">{totalVisibleReward}</p>
              <p className="text-sm text-muted-foreground">USDC previewed</p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <BadgeCheck className="size-5 text-primary" />
              <p className="mt-3 text-2xl font-semibold">{workItems.length}</p>
              <p className="text-sm text-muted-foreground">open examples</p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <Smartphone className="size-5 text-primary" />
              <p className="mt-3 text-2xl font-semibold">Mobile</p>
              <p className="text-sm text-muted-foreground">ready workflow</p>
            </div>
          </div>

          <Button asChild className="mt-8 group">
            <Link href={siteConfig.appUrl} target="_blank">
              Browse Open Work
              <ArrowRight className="size-0 transition-all group-hover:ml-0 group-hover:size-5" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          {workItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Card className="transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-muted">
                      <Image
                        alt=""
                        fill
                        sizes="44px"
                        src={item.tokenImage}
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 grow">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline">{item.tag}</Badge>
                        {item.verifiedOnly && (
                          <Badge variant="secondary">Verified submissions</Badge>
                        )}
                      </div>

                      <h3 className="mt-3 line-clamp-3 text-base font-semibold sm:text-lg">
                        {item.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        {item.username && <span>By @{item.username}</span>}
                        {item.deadline && (
                          <span className="inline-flex items-center gap-1">
                            <CalendarClock className="size-4" />
                            Due {item.deadline}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-lg font-semibold sm:text-xl">{item.reward}</p>
                      <p className="text-xs font-medium text-muted-foreground">{item.token}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
