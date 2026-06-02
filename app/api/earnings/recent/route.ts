import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    recentEarnings: [
      "@sol-tasker earned $24.80 for completing a frontend task",
      "@designpix completed 3 tasks in the last hour",
      "New payout: $520.00 processed",
      "@growthgal earned $18.00 for campaign QA",
      "@devnoir completed a GitHub bounty",
      "@user01 earned $5.20 for product feedback",
    ],
  });
}
