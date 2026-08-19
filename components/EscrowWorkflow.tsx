import React from 'react';

export const EscrowWorkflow = () => {
  const workflowCards = [
    {
      step: "Step 01",
      title: "Discover Web3 Bounties",
      description: "Browse verified engineering, design, and marketing tasks across top Solana ecosystems.",
      tag: "Live Discovery"
    },
    {
      step: "Step 02",
      title: "Lock Funds in Escrow",
      description: "Clients lock bounty funds into smart contracts before work begins to guarantee payment.",
      tag: "100% Guaranteed"
    },
    {
      step: "Step 03",
      title: "Submit & Review Work",
      description: "Submit proof-of-work directly on-chain with milestone tracking and instant feedback.",
      tag: "Automated QA"
    },
    {
      step: "Step 04",
      title: "Instant Multi-Token Settlement",
      description: "Receive instant payouts in USDC, SOL, or project tokens directly into your wallet.",
      tag: "Direct Settlement"
    }
  ];

  return (
    <section className="py-24 bg-[#0B0D13] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
              Trustless Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-white">
              How Gibwork Powers On-Chain Bounties
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md">
            A frictionless workflow designed for decentralized teams and global contributors with automated smart contract settlement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowCards.map((card, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-slate-400">{card.step}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{card.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-[11px] text-slate-500 font-mono">
                Verified on Solana Mainnet
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-semibold text-white">Ready to start earning?</h4>
            <p className="text-xs text-slate-400">Connect your wallet and pick up your first live task in minutes.</p>
          </div>
          <a
            href="https://gib.work"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition"
          >
            Explore Bounties
          </a>
        </div>
      </div>
    </section>
  );
};
