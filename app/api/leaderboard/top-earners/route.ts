import { NextResponse } from "next/server";

const leaderboards = {
  today: [
    { username: "@taskflare", totalEarnings: "$420", tasksCompleted: 9 },
    { username: "@nina_design", totalEarnings: "$310", tasksCompleted: 7 },
    { username: "@code_cody", totalEarnings: "$280", tasksCompleted: 6 },
  ],
  weekly: [
    { username: "@modular_mia", totalEarnings: "$8,600", tasksCompleted: 42 },
    { username: "@launch_lee", totalEarnings: "$7,300", tasksCompleted: 35 },
    { username: "@design_don", totalEarnings: "$6,900", tasksCompleted: 31 },
  ],
  alltime: [
    { username: "@crypto_ava", totalEarnings: "$42,800", tasksCompleted: 174 },
    { username: "@devsora", totalEarnings: "$36,250", tasksCompleted: 163 },
    { username: "@ui_zen", totalEarnings: "$28,100", tasksCompleted: 139 },
  ],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get("period") || "alltime";
  return NextResponse.json({ topEarners: leaderboards[period as keyof typeof leaderboards] ?? leaderboards.alltime });
}
