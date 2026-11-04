export interface CtaActionProps {
  href: string;
  external?: boolean;
}

export function triggerCtaNavigation({ href, external = false }: CtaActionProps): void {
  if (typeof window === "undefined" || !href) return;
  if (external) {
    window.open(href, "_blank", "noopener,noreferrer");
  } else {
    window.location.assign(href);
  }
}
