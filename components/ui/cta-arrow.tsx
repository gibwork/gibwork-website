import { ArrowRight } from "lucide-react";

/** Decorative CTA icon; render inside an element with the `group` class. */
export function CtaArrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-5 transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none"
    />
  );
}
