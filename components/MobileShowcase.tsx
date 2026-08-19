import React from 'react';

export const MobileShowcase = () => {
  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm">Mobile First Experience</span>
          <h2 className="text-4xl font-bold mt-2">Take Gibwork Wherever You Go</h2>
          <p className="text-neutral-400 mt-4 text-lg">
            Stay updated with push notifications for new bounties, submit proof of work instantly, and receive on-chain payouts directly to your mobile wallet.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href="https://apps.apple.com/us/app/gibwork/id6757281508" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-neutral-200 transition"
            >
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.gibwork.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-neutral-800 text-white px-6 py-3 rounded-xl font-medium border border-neutral-700 hover:bg-neutral-700 transition"
            >
              Google Play
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-[460px] border-4 border-neutral-700 rounded-[36px] p-4 bg-neutral-900 shadow-2xl flex flex-col justify-between">
            <div className="text-center text-xs text-neutral-500">Gibwork Mobile App</div>
            <div className="p-4 bg-neutral-800/80 border border-neutral-700 rounded-2xl text-center">
              <span className="text-xs text-neutral-400 block mb-1">Instant Notification</span>
              <p className="text-sm font-semibold text-emerald-400">⚡ Payout Received: +50 USDC</p>
            </div>
            <div className="text-center text-xs text-neutral-600">iOS & Android Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};
