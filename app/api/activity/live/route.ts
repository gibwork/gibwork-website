import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    activities: [
      "@cardo completed a task and earned $3.20",
      "New campaign launched: Web3 survey",
      "$500 distributed in the last 10 minutes",
      "@noma earned $12.00 for UX feedback",
      "@taskflow completed a GitHub bounty",
      "Live approval: dashboard task paid out",
    ],
  });
}
