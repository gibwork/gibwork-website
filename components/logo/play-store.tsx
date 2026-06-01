import { cn } from "@/lib/utils";

export function PlayStoreLogo({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
    >
      <title>Google Play</title>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.41-.803V2.617c0-.311.144-.604.409-.803zm12.791 12.791l3.905-2.228c.687-.393.687-1.023 0-1.416l-3.905-2.228-2.618 2.618 2.618 2.618zm-2.425-2.425L4.512 2.716l9.463 9.463-9.463 9.463 9.463-9.463z" />
    </svg>
  );
}
