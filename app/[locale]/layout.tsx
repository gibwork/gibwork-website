import {
  isSupportedLocale,
  metadataForLocale,
  supportedLocales,
} from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export function generateStaticParams() {
  return supportedLocales
    .filter((locale) => locale !== "en")
    .map((locale) => ({ locale }));
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  return isSupportedLocale(params.locale)
    ? metadataForLocale(params.locale)
    : {};
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isSupportedLocale(params.locale) || params.locale === "en") {
    notFound();
  }

  return children;
}
