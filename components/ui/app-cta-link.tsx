"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAppHref, type ReferralInput } from "@/lib/referral";

/**
 * SSR-safe hook that resolves the Gibwork App URL with the current page's
 * validated `?ref=` attribution parameter when present.
 */
export function useAppHref(
  baseUrl: string = siteConfig.appUrl,
  explicitSearch?: ReferralInput
): string {
  const [clientSearch, setClientSearch] = React.useState<string>("");

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncFromLocation = () => {
      setClientSearch(window.location.search);
    };

    syncFromLocation();
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, []);

  const activeInput =
    explicitSearch !== undefined ? explicitSearch : clientSearch;

  return React.useMemo(
    () => getAppHref(activeInput, baseUrl),
    [activeInput, baseUrl]
  );
}

export interface AppCtaLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> {
  href?: string;
  referralSearch?: ReferralInput;
}

export const AppCtaLink = React.forwardRef<HTMLAnchorElement, AppCtaLinkProps>(
  (
    {
      href = siteConfig.appUrl,
      referralSearch,
      target = "_blank",
      children,
      ...props
    },
    ref
  ) => {
    const resolvedHref = useAppHref(href, referralSearch);

    return (
      <Link ref={ref} href={resolvedHref} target={target} {...props}>
        {children}
      </Link>
    );
  }
);

AppCtaLink.displayName = "AppCtaLink";
