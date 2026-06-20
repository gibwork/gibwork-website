import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Self-contained store badges rendered as inline SVG so the landing page has no
 * dependency on remote image assets. Sized to sit side-by-side in a flex row.
 */

type BadgeProps = {
  href: string;
  className?: string;
};

export function AppStoreBadge({ href, className }: BadgeProps) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label="Download Gibwork on the App Store"
      className={cn("inline-block h-12", className)}
    >
      <svg
        viewBox="0 0 120 40"
        role="img"
        aria-hidden="true"
        className="h-full w-auto transition-transform hover:scale-[1.03]"
      >
        <rect x="0.5" y="0.5" width="119" height="39" rx="7" fill="#000000" />
        <rect
          x="0.5"
          y="0.5"
          width="119"
          height="39"
          rx="7"
          fill="none"
          stroke="#A6A6A6"
          strokeWidth="1"
        />
        <path
          fill="#FFFFFF"
          d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.16 5.07 5.07 0 0 0-4-2.16c-1.68-.18-3.3 1-4.16 1-.87 0-2.18-.98-3.6-.95a5.32 5.32 0 0 0-4.47 2.73c-1.93 3.35-.49 8.27 1.36 10.98.92 1.33 2 2.81 3.42 2.76 1.38-.06 1.9-.89 3.57-.89 1.65 0 2.13.89 3.58.85 1.48-.02 2.42-1.33 3.31-2.67a10.96 10.96 0 0 0 1.51-3.08 4.78 4.78 0 0 1-2.92-4.4Z"
        />
        <path
          fill="#FFFFFF"
          d="M22.04 12.21a4.87 4.87 0 0 0 1.11-3.49 4.96 4.96 0 0 0-3.21 1.66 4.64 4.64 0 0 0-1.14 3.36 4.1 4.1 0 0 0 3.24-1.53Z"
        />
        <text x="42" y="16" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="7">
          Download on the
        </text>
        <text
          x="42"
          y="30"
          fill="#FFFFFF"
          fontFamily="Arial, sans-serif"
          fontSize="15"
          fontWeight="600"
        >
          App Store
        </text>
      </svg>
    </Link>
  );
}

export function GooglePlayBadge({ href, className }: BadgeProps) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label="Get Gibwork on Google Play"
      className={cn("inline-block h-12", className)}
    >
      <svg
        viewBox="0 0 135 40"
        role="img"
        aria-hidden="true"
        className="h-full w-auto transition-transform hover:scale-[1.03]"
      >
        <rect x="0.5" y="0.5" width="134" height="39" rx="7" fill="#000000" />
        <rect
          x="0.5"
          y="0.5"
          width="134"
          height="39"
          rx="7"
          fill="none"
          stroke="#A6A6A6"
          strokeWidth="1"
        />
        <path
          fill="#00D2FF"
          d="M13.5 11.06a1.97 1.97 0 0 0-.46 1.39v15.1c0 .58.17 1.05.47 1.38l.05.05 8.46-8.46v-.2l-8.46-8.46-.06.05Z"
        />
        <path
          fill="#FFCE00"
          d="m24.84 23.34-2.82-2.82v-.2l2.82-2.82.07.04 3.34 1.9c.95.54.95 1.42 0 1.97l-3.34 1.9-.07.03Z"
        />
        <path
          fill="#FF3A44"
          d="m24.91 23.3-2.89-2.9-8.51 8.52c.31.33.83.37 1.42.04l9.98-5.66"
        />
        <path
          fill="#00F076"
          d="m24.91 17.5-9.98-5.67c-.59-.33-1.11-.29-1.42.04l8.51 8.52 2.89-2.89Z"
        />
        <text x="45" y="16" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="6.5">
          GET IT ON
        </text>
        <text
          x="45"
          y="30"
          fill="#FFFFFF"
          fontFamily="Arial, sans-serif"
          fontSize="15"
          fontWeight="600"
        >
          Google Play
        </text>
      </svg>
    </Link>
  );
}
