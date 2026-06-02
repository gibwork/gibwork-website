"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LookingFor() {
  const categories = [
    "Development",
    "Design",
    "Writing",
    "Social Media",
    "Marketing",
    "Open Source",
    "Video Editing",
    "Data Entry"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            Find Work or Hire Talent
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to earn in Solana or need skilled professionals, 
            Gibwork connects you with quality opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-card border rounded-2xl p-6 text-center hover:border-primary transition-colors"
            >
              <div className="text-2xl mb-3">💼</div>
              <h3 className="font-semibold">{category}</h3>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="https://app.gib.work/explore" target="_blank">
              Browse Available Tasks
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <Link href="https://app.gib.work" target="_blank">
              Post a Bounty
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
