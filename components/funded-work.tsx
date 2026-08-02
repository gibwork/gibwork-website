import Link from "next/link";
import { ArrowUpRight, CircleCheck, Eye, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFundedWork, type FundedWorkItem } from "@/lib/funded-work";

function formatAmount(amount: number, symbol: string) {
  return `${new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(amount)} ${symbol}`;
}

function formatDeadline(deadline?: string) {
  if (!deadline) return "No deadline listed";
  const date = new Date(deadline);
  if (Number.isNaN(date.getTime())) return "Deadline listed in task";
  return `Due ${new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date)}`;
}

function WorkCard({ item }: { item: FundedWorkItem }) {
  return (
    <Card className="group flex h-full flex-col border-foreground/10 bg-background/70 transition-colors hover:border-primary/50">
      <CardHeader className="gap-3 pb-4">
        <div className="flex items-start justify-between gap-3">
          <Badge className="gap-1 border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" variant="outline">
            <CircleCheck className="size-3.5" aria-hidden="true" />
            Escrow observed
          </Badge>
          <span className="text-right text-sm font-semibold text-primary">
            {formatAmount(item.amount, item.symbol)}
          </span>
        </div>
        <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
        <CardDescription>
          {item.username ? `Posted by @${item.username} · ` : ""}
          {formatDeadline(item.deadline)}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4 pt-0">
        <div className="flex items-center gap-2 rounded-md bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>
            {formatAmount(item.escrowBalance, item.symbol)} visible in the read-only funding check.
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Funding is an observation, not a promise of award. Review eligibility and submission rules.
        </p>
        <Link
          href={`https://app.gib.work/tasks/${item.id}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          Inspect task <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  );
}

export async function FundedWork() {
  const items = await getFundedWork();

  return (
    <section className="relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-8 flex flex-col items-center text-center">
        <Badge variant="secondary" className="gap-2">
          <Eye className="size-3.5" aria-hidden="true" />
          Public funding check
        </Badge>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Find work with funding you can inspect
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Live cards read Gibwork&apos;s public task feed and read-only vault endpoint.
          A green badge means a positive balance was observed when this page rendered.
        </p>
      </div>

      {items.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => <WorkCard key={item.id} item={item} />)}
        </div>
      ) : (
        <Card className="mx-auto max-w-2xl border-dashed bg-background/60">
          <CardContent className="flex items-center gap-3 p-6 text-sm text-muted-foreground">
            <Eye className="size-5 shrink-0" aria-hidden="true" />
            No positive funding observations are available right now. Check the task feed directly for the latest work.
          </CardContent>
        </Card>
      )}
    </section>
  );
}
