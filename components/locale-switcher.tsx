"use client";

import {
  getLocaleFromPathname,
  localizePath,
  messages,
  type Locale,
} from "@/lib/i18n";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);
  const copy = messages[locale].language;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function changeLocale(nextLocale: Locale) {
    const hash = window.location.hash;
    router.push(`${localizePath(pathname, nextLocale)}${hash}`);
  }

  return (
    <label className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="font-medium">{copy.label}</span>
      <select
        aria-label={copy.label}
        className="h-8 rounded-md border bg-background px-2 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        onChange={(event) => changeLocale(event.target.value as Locale)}
        value={locale}
      >
        <option value="en">{copy.english}</option>
        <option value="es">{copy.spanish}</option>
      </select>
    </label>
  );
}
