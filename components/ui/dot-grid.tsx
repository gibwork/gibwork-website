"use client";

/**
 * DotGrid - Subtle dot pattern background.
 * Clean, professional, non-distracting. No animations.
 */
export function DotGrid() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Fade edges so dots don't extend harshly to borders */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
