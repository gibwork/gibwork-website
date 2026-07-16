import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    payoutsToCreators: "$4.9M",
    tasksCompleted: 7300,
    activeContributors: "2.3K",
    averageCompletionRate: "92%",
    totalRewardsDistributed: "$5.2M",
    activeCampaigns: 34,
  });
}
