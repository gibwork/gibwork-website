"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { GitPullRequest, CheckSquare, Users } from "lucide-react";

const workTypes = [
  {
    icon: GitPullRequest,
    image: "https://cdn.gib.work/misc/open_source_bounty.png",
    title: "Open Source Bounty",
    description: "Incentivize a pull request made from a GitHub issue. Reward developers for solving real problems.",
    border: "hover:border-violet-500/40",
  },
  {
    icon: CheckSquare,
    image: "https://cdn.gib.work/misc/simple_task.png",
    title: "Simple Task",
    description: "Small tasks achievable in a few hours. Perfect for quick wins and fast turnarounds.",
    border: "hover:border-emerald-500/40",
  },
  {
    icon: Users,
    image: "https://cdn.gib.work/misc/services.png",
    title: "Services",
    description: "Offer your skills and connect with users for ongoing, custom service arrangements.",
    border: "hover:border-blue-500/40",
  },
];

const workDetails = [
  { image: "/tasks/image-01.png", title: "Design gibwork's new landing page", amount: 500, token: "usdc" },
  { image: "/tasks/image-02.png", title: "Create developer challenges for Zircon", amount: 500, token: "usdc" },
  { image: "/tasks/image-03.png", title: "Use slug- to share a set of links on X or Reddit", amount: 100, token: "usdc" },
];

export function LookingFor() {
  return (
    <section className="relative max-w-6xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <Tabs defaultValue="1" className="w-full flex flex-col items-center">
        <TabsList className="mx-auto rounded-full">
          <TabsTrigger className="rounded-full px-6" value="1">Looking for Help</TabsTrigger>
          <TabsTrigger className="rounded-full px-6" value="2">Looking for Work</TabsTrigger>
        </TabsList>

        <TabsContent value="1" className="mt-12 w-full">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl text-center font-bold">Get help from an expert</h2>
            <p className="text-center mt-3 text-muted-foreground max-w-lg">
              Create work for others to complete and get the support you need to achieve your goals.
            </p>
            <div className="grid lg:grid-cols-3 gap-6 mt-12 w-full">
              {workTypes.map((type) => (
                <Card key={type.title} className={`overflow-hidden border transition-all duration-300 ${type.border} group cursor-pointer`}>
                  <div className="h-44 relative overflow-hidden">
                    <Image src={type.image} alt={type.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader className="border-t p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <type.icon className="size-4 text-muted-foreground shrink-0" />
                      <CardTitle className="text-base">{type.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="2" className="mt-12 w-full max-w-2xl">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl text-center font-bold">Get paid for your expertise</h2>
            <p className="text-center mt-3 text-muted-foreground">
              Discover work opportunities, complete the work, and start earning in crypto.
            </p>
            <div className="flex flex-col gap-3 mt-10 w-full">
              {workDetails.map((_detail) => (
                <Card key={_detail.title} className="p-4 flex items-center gap-4 hover:border-violet-500/40 transition-all duration-300">
                  <div className="relative aspect-square rounded-full shrink-0 w-12 bg-muted overflow-hidden">
                    <Image alt="" fill src={_detail.image} className="object-cover" />
                  </div>
                  <p className="font-medium grow truncate text-sm">{_detail.title}</p>
                  <div className="font-semibold flex items-center justify-end gap-2 shrink-0">
                    <p className="text-emerald-500">{_detail.amount}</p>
                    <div className="relative aspect-square rounded-full w-8 bg-muted overflow-hidden">
                      <Image alt="" fill src={`/token-${_detail.token}.png`} className="object-cover" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}