"use client";

import {
  Search,
  CheckCircle,
  Upload,
  Clock,
  PenLine,
  CreditCard,
  Globe,
  ClipboardCheck,
  Wallet,
  LucideIcon,
} from "lucide-react";

const earnSteps = [
  {
    icon: Search,
    label: "Browse tasks",
    desc: "Filter by skill, reward size, or deadline.",
  },
  {
    icon: CheckCircle,
    label: "Complete the work",
    desc: "Deliver quality output within the task guidelines.",
  },
  {
    icon: Upload,
    label: "Submit proof",
    desc: "Upload your deliverable for the creator to review.",
  },
  {
    icon: Clock,
    label: "Get paid instantly",
    desc: "Reward lands in your wallet on approval.",
    terminal: true,
  },
];

const createSteps = [
  {
    icon: PenLine,
    label: "Define your task",
    desc: "Set clear requirements, deadline, and reward amount.",
  },
  {
    icon: CreditCard,
    label: "Deposit funds",
    desc: "Reward locked in escrow — trusted by workers.",
  },
  {
    icon: Globe,
    label: "Publish & attract workers",
    desc: "Goes live to Gibwork's contributor network.",
  },
  {
    icon: ClipboardCheck,
    label: "Review & release",
    desc: "Approve and payment releases automatically.",
    terminal: true,
  },
];

/* ─── sub-components ─────────────────────────────────────────────────── */

interface Step {
  icon: LucideIcon;
  label: string;
  desc: string;
  terminal?: boolean;
}

function StepNode({
  step,
  variant,
  isLast,
}: {
  step: Step;
  variant: "earn" | "create";
  isLast: boolean;
}) {
  const Icon = step.icon;
  const isEarn = variant === "earn";

  const dotBase =
    "w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 transition-transform duration-300 hover:scale-110";

  const dotVariant = step.terminal
    ? isEarn
      ? "bg-violet-600 border border-violet-600"
      : "bg-black border border-black"
    : isEarn
    ? "bg-violet-50 border border-violet-200"
    : "bg-neutral-100 border border-neutral-200";

  const iconColor = step.terminal
    ? "text-white"
    : isEarn
    ? "text-violet-600"
    : "text-black";

  return (
    <div id="how-it-works" className="flex items-start gap-3">
      {/* icon column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`${dotBase} ${dotVariant}`}>
          <Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${iconColor}`} />
        </div>

        {/* animated vertical connector */}
        {!isLast && (
          <div className="relative w-0.5 h-8 lg:h-10 my-0.5 bg-neutral-100 rounded-full overflow-hidden">
            <span
              className={[
                "absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full",
                isEarn ? "bg-violet-500 shadow-[0_0_6px_#7c3aed]" : "bg-black",
                "animate-travel-y",
              ].join(" ")}
            />
          </div>
        )}
      </div>

      {/* text */}
      <div className="pt-1.5 pb-6 lg:pb-8">
        <p className="text-sm lg:text-base font-semibold text-black leading-tight">
          {step.label}
        </p>
        <p className="text-xs lg:text-sm text-neutral-500 mt-0.5 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

function Lane({
  title,
  steps,
  variant,
}: {
  title: string;
  steps: Step[];
  variant: "earn" | "create";
}) {
  const isEarn = variant === "earn";
  return (
    <div className="border border-neutral-200 rounded-2xl p-5 lg:p-7 bg-white">
      <p
        className={[
          "text-[10px] lg:text-xs font-semibold uppercase tracking-widest mb-4 pb-3 border-b border-neutral-100",
          isEarn ? "text-violet-600" : "text-black",
        ].join(" ")}
      >
        ↳ {title}
      </p>

      {steps.map((step, i) => (
        <StepNode
          key={step.label}
          step={step}
          variant={variant}
          isLast={i === steps.length - 1}
        />
      ))}
    </div>
  );
}

/* ─── animated SVG hub paths ─────────────────────────────────────────── */
function HubPaths() {
  return (
    <svg
      viewBox="0 0 560 80"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-16 sm:h-20 overflow-visible"
      aria-hidden="true"
    >
      {/* dashed paths */}
      <path
        d="M280 0 C280 30 160 42 100 72"
        fill="none"
        stroke="#ddd6fe"
        strokeWidth="2"
        strokeDasharray="8 5"
        className="animate-dash-flow"
      />
      <path
        d="M280 0 C280 30 400 42 460 72"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="2"
        strokeDasharray="8 5"
        className="animate-dash-flow"
      />

      {/* travelling dots — CSS offset-path */}
      <circle
        r="5"
        fill="#7c3aed"
        className="animate-travel-left"
        style={{
          filter: "drop-shadow(0 0 4px #7c3aed88)",
          offsetPath: "path('M280 0 C280 30 160 42 100 72')",
          animationDelay: "0s",
        } as React.CSSProperties}
      />
      <circle
        r="5"
        fill="#0a0a0a"
        className="animate-travel-right"
        style={{
          offsetPath: "path('M280 0 C280 30 400 42 460 72')",
          animationDelay: "0s",
        } as React.CSSProperties}
      />
    </svg>
  );
}

/* ─── main section ───────────────────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      {/* keyframe styles injected once */}
      <style>{`
        @keyframes dashFlow {
          from { stroke-dashoffset: 52; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes travelAlongPath {
          0%   { offset-distance: 0%;   opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes travelY {
          from { top: -8px; }
          to   { top: calc(100% + 8px); }
        }

        .animate-dash-flow   { animation: dashFlow 1.8s linear infinite; }
        .animate-travel-left { animation: travelAlongPath 1.8s linear infinite; }
        .animate-travel-right{ animation: travelAlongPath 1.8s linear infinite; }
        .animate-travel-y    { animation: travelY 1.8s linear infinite; position: absolute; }
      `}</style>

      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black">
            How Gibwork works
          </h2>
          <p className="mt-3 text-base lg:text-lg text-neutral-500">
            Earn rewards or grow your project — in just a few steps.
          </p>
        </div>

        {/* hub node */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-black border-2 border-violet-500 flex items-center justify-center">
              <Wallet className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <span className="text-[11px] lg:text-xs font-semibold uppercase tracking-widest text-violet-600">
              Connect wallet
            </span>
          </div>

          {/* animated branching paths */}
          <HubPaths />

          {/* two lanes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
            <Lane title="Earn rewards" steps={earnSteps} variant="earn" />
            <Lane title="Create tasks" steps={createSteps} variant="create" />
          </div>
        </div>
      </div>
    </section>
  );
}