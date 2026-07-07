"use client";

import Image from "next/image";

/* ─── store button data ──────────────────────────────────────────────── */

const stores = [
  {
    href: "https://apps.apple.com/us/app/gibwork/id6757281508", // replace with real link
    sub: "Download on the",
    name: "App Store",
    icon: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <path
          d="M21.6 17.2c0-2.4 2-3.6 2.1-3.7-1.1-1.6-2.9-1.8-3.5-1.8-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.5 2.9 2.4 1.2-.1 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.2 2.8-2.4.9-1.3 1.2-2.7 1.2-2.7s-2.1-.8-2-3.8z"
          fill="white"
        />
        <path
          d="M19.3 10.2c.6-.8 1.1-1.9.9-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.9-1.3z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.gibwork.app", // replace with real link
    sub: "Get it on",
    name: "Google Play",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 466 511.98">
 <g id="Layer_x0020_1">
  <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
  <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>
  <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>
  <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
 </g>
</svg>

    ),
  },
  {
    href: "https://seeker.solana.com", // replace with real link
    sub: "Available on",
    name: "Solana Seeker",
    icon: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#9945FF" />
        <path d="M10 20.5h12l-2-3h-8l-2 3z" fill="white" opacity={0.6} />
        <path d="M16 11l-6 9.5h12L16 11z" fill="white" />
        <circle cx="16" cy="13" r="2" fill="#9945FF" />
      </svg>
    ),
  },
];

/* ─── component ──────────────────────────────────────────────────────── */

export default function MobileApp() {
  return (
    <section id="mobileapp" className="bg-white py-20 lg:py-28 px-6 font-sans">
      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── left: copy + store buttons ── */}
          <div>
            <p className="text-[11px] lg:text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">
              Now on mobile
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-black mb-4">
              Work from{" "}
              <em className="not-italic text-violet-600">anywhere.</em>
            </h2>

            <p className="text-base lg:text-lg text-neutral-500 leading-relaxed mb-10 max-w-sm">
              Your gigs, your wallet, your rewards — all in your pocket.
              Browse tasks, submit proof, and get paid on the go.
            </p>

            <div className="flex flex-col gap-3">
              {stores.map((store) => (
                <a
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 border border-neutral-200 rounded-2xl bg-white hover:border-violet-400 hover:bg-violet-50/40 transition-all duration-200"
                >
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    {store.icon}
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-400 leading-none mb-0.5">
                      {store.sub}
                    </p>
                    <p className="text-[15px] lg:text-base font-semibold text-black leading-tight">
                      {store.name}
                    </p>
                  </div>
                  <span className="ml-auto text-neutral-300 group-hover:text-violet-400 transition-colors text-lg">
                    ›
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── right: phone mockup ── */}
          <div className="flex justify-center order-first sm:order-last">
            <div className="relative w-48 lg:w-56">
              {/* notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-neutral-200 rounded-full z-10" />

              {/* phone shell */}
              <div className="w-full aspect-[9/19.5] rounded-[1rem] border-2 border-neutral-200 overflow-hidden bg-neutral-100">
                {/*
                  Replace the src below with your actual 1080×1920 poster image.
                  e.g. src="/images/app-poster.jpg"
                */}
                <Image
                  src="/mobilehome.png"
                  alt="Gibwork mobile app preview"
                  width={591}
                  height={1280}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // fallback placeholder shown until real image is added
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* placeholder — remove once real image is in */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-violet-50">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2Z" />
                      <circle cx="16" cy="14" r="1.5" fill="white" stroke="none" />
                    </svg>
                  </div>
                  <p className="text-xs text-neutral-400 font-medium">mobile app</p>
                </div>
              </div>

              {/* label pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-semibold tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                Gibwork App
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}