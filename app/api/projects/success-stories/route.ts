import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    stories: [
      {
        project: "DeFi growth sprint",
        testimonial: "Gibwork matched us with execution talent fast and helped us validate the launch with real feedback.",
        tasksCompleted: 18,
        engagementRate: "86%",
        completionTime: "24h",
      },
      {
        project: "Product launch research",
        testimonial: "We received actionable insights quickly and got paid contributors to handle the discovery work.",
        tasksCompleted: 12,
        engagementRate: "78%",
        completionTime: "36h",
      },
      {
        project: "UX audit campaign",
        testimonial: "The workflow made approvals easy and payouts immediate for contributors.",
        tasksCompleted: 9,
        engagementRate: "91%",
        completionTime: "18h",
      },
    ],
  });
}
