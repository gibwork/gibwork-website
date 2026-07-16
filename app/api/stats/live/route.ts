import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalEarnedToday: "$12.4K",
    activeContributors: 92,
    tasksLast24h: 72,
    activeCampaigns: 18,
  });
}
