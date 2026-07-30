"use client";

import {
  getLocaleFromPathname,
  localizePath,
  messages,
} from "@/lib/i18n";
import { usePathname } from "next/navigation";

export function useSiteCopy() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return {
    copy: messages[locale],
    locale,
    withLocale: (path: string) => localizePath(path, locale),
  };
}
