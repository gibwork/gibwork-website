"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Cta() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join the on-chain freelance marketplace. Start earning or hiring today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://app.gib.work" target="_blank">
              Open Gibwork App
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link href="https://app.gib.work/explore" target="_blank">
              Browse Tasks
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-sm opacity-75">
          Available on Web • iOS • Android
        </p>
      </div>
    </section>
  );
}
