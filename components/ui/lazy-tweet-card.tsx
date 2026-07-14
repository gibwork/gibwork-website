"use client";

import { useEffect, useRef, useState } from "react";

import ClientTweetCard from "@/components/ui/client-tweet-card";
import { TweetSkeleton } from "@/components/ui/tweet-card";
import { cn } from "@/lib/utils";

type LazyTweetCardProps = {
  id: string;
  className?: string;
};

/**
 * Defers react-tweet's network request until the card is close to the viewport.
 * This is especially useful in the mobile carousel, where most cards begin off
 * screen and should not compete with the landing page's critical resources.
 */
export default function LazyTweetCard({
  id,
  className,
}: LazyTweetCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldLoad(true);
        observer.disconnect();
      },
      {
        // Start fetching shortly before a vertical scroll reaches the card,
        // while keeping horizontally clipped mobile cards truly on demand.
        rootMargin: "400px 0px",
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("min-h-44 w-full", className)}
      data-testid="lazy-testimonial"
      data-loaded={shouldLoad ? "true" : "false"}
    >
      {shouldLoad ? (
        <ClientTweetCard
          id={id}
          className="min-w-0 w-full"
          fallback={<TweetSkeleton className="min-w-0" />}
        />
      ) : (
        <div role="status" aria-label="Testimonial loading when visible">
          <TweetSkeleton className="min-w-0" aria-hidden="true" />
          <span className="sr-only">Testimonial loading when visible</span>
        </div>
      )}
    </div>
  );
}
