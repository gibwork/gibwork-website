import React, { useState } from 'react';

interface BountyOpportunity {
  id: string;
  title: string;
  category: 'Development' | 'Design' | 'Content' | 'Community';
  rewardUsdc: number;
  rewardSol: number;
  tags: string[];
  daysLeft: number;
}

const mockBounties: BountyOpportunity[] = [
  {
    id: "g-01",
    title: "Solana Anchor Smart Contract Security Optimization",
    category: "Development",
    rewardUsdc: 2500,
    rewardSol: 18.5,
    tags: ["Rust", "Anchor", "Solana"],
    daysLeft: 4
  },
  {
    id: "g-02",
    title: "DeFi App UI/UX Redesign & Interactive Component Kit",
    category: "Design",
    rewardUsdc: 1200,
    rewardSol: 9.0,
    tags: ["Figma", "Tailwind", "UI/UX"],
    daysLeft: 6
  },
  {
    id: "g-03",
    title: "Technical Documentation & On-Chain Bounty Guidebook",
    category: "Content",
    rewardUsdc: 850,
    rewardSol: 6.2,
    tags: ["Docs", "Markdown", "Ecosystem"],
    daysLeft: 3
  }
];

export const FeaturedOpportunities = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const categories = ['All', 'Development', 'Design', 'Content', 'Community'];

  const filtered = activeFilter === 'All' 
    ? mockBounties 
    : mockBounties.filter(b => b.category === activeFilter);

  return (
    <section className="py-20 bg-[#08090D] text-slate-100 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-purple-400 font-mono text-xs uppercase tracking-widest bg-purple-950/60 border border-purple-800/60 px-3 py-1 rounded-full">
              Live Opportunities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-white">
              Featured Opportunities
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 text-xs rounded-lg font-medium transition ${
                  activeFilter === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((bounty) => (
            <div
              key={bounty.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400">{bounty.category}</span>
                  <span className="text-[11px] font-semibold text-purple-400 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-800/40">
                    {bounty.daysLeft}d left
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-4 line-clamp-2">
                  {bounty.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {bounty.tags.map(t => (
                    <span key={t} className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                <div>
                  <div className="text-lg font-black text-emerald-400 font-mono">
                    ${bounty.rewardUsdc.toLocaleString()} USDC
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    ≈ {bounty.rewardSol} SOL
                  </div>
                </div>
                <a
                  href="https://gib.work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-800 hover:bg-purple-600 text-white text-xs font-semibold rounded-lg transition"
                >
                  Apply Task
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
