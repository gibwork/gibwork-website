import { siteConfig } from "@/lib/site-config";

export const REFERRAL_QUERY_PARAM = "ref" as const;

/**
 * Valid Gibwork referral codes consist of 1-64 ASCII alphanumeric characters,
 * underscores, or hyphens (e.g. "blackknighttech", "gib_work", "sol-dev-01").
 */
export const REFERRAL_CODE_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

export interface SearchParamsLike {
  get(name: string): string | null;
}

export type ReferralSearchRecord = Record<
  string,
  string | string[] | undefined
>;

export type ReferralInput =
  | string
  | URLSearchParams
  | SearchParamsLike
  | ReferralSearchRecord
  | null
  | undefined;

/**
 * Validates and sanitizes a raw referral parameter candidate.
 * Returns the trimmed referral code if valid, or null otherwise.
 */
export function sanitizeReferralCode(raw: unknown): string | null {
  if (typeof raw !== "string") {
    return null;
  }

  const trimmed = raw.trim();
  if (!trimmed || !REFERRAL_CODE_PATTERN.test(trimmed)) {
    return null;
  }

  return trimmed;
}

function isSearchParamsLike(value: unknown): value is SearchParamsLike {
  return (
    typeof value === "object" &&
    value !== null &&
    "get" in value &&
    typeof (value as SearchParamsLike).get === "function"
  );
}

/**
 * Extracts and validates the `ref` parameter from a query string, URL,
 * URLSearchParams / ReadonlyURLSearchParams instance, Next.js searchParams
 * record, or direct referral code string.
 *
 * Arbitrary non-referral query parameters are ignored.
 */
export function extractReferralCode(input?: ReferralInput): string | null {
  if (input == null) {
    return null;
  }

  if (isSearchParamsLike(input)) {
    return sanitizeReferralCode(input.get(REFERRAL_QUERY_PARAM));
  }

  if (typeof input === "object") {
    const rawValue = input[REFERRAL_QUERY_PARAM];
    const candidate = Array.isArray(rawValue) ? rawValue[0] : rawValue;
    return sanitizeReferralCode(candidate);
  }

  if (typeof input !== "string") {
    return null;
  }

  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      const parsedUrl = new URL(trimmed);
      return sanitizeReferralCode(
        parsedUrl.searchParams.get(REFERRAL_QUERY_PARAM)
      );
    } catch {
      return null;
    }
  }

  if (
    trimmed.startsWith("?") ||
    trimmed.includes("=") ||
    trimmed.includes("&")
  ) {
    const rawQuery = trimmed.startsWith("?") ? trimmed.slice(1) : trimmed;
    const params = new URLSearchParams(rawQuery);
    return sanitizeReferralCode(params.get(REFERRAL_QUERY_PARAM));
  }

  return sanitizeReferralCode(trimmed);
}

function resolveSafeBaseUrl(baseUrl: string = siteConfig.appUrl): URL {
  try {
    const parsed = new URL(baseUrl, siteConfig.appUrl);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return parsed;
    }
  } catch {
    // Fall back to canonical siteConfig.appUrl below
  }
  return new URL(siteConfig.appUrl);
}

/**
 * Builds the destination Gibwork App URL (`https://app.gib.work/`), preserving
 * a validated `ref` query parameter when present and falling back to the exact
 * default `siteConfig.appUrl` when absent or invalid.
 */
export function getAppHref(
  input?: ReferralInput,
  baseUrl: string = siteConfig.appUrl
): string {
  const url = resolveSafeBaseUrl(baseUrl);
  const referralCode = extractReferralCode(input);

  if (referralCode) {
    url.searchParams.set(REFERRAL_QUERY_PARAM, referralCode);
  }

  return url.toString();
}
