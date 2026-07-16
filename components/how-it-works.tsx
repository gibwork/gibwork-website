"use client";

import { Wallet, ClipboardList, BadgeDollarSign } from "lucide-react";

const steps = [
    {
        icon: Wallet,
        step: "01",
        title: "Connect Your Wallet",
        description: "Sign in with any Solana wallet — no email or password needed. Your wallet is your identity.",
        color: "text-violet-500",
        border: "border-violet-500/20",
        bg: "bg-violet-500/10",
    },
    {
        icon: ClipboardList,
        step: "02",
        title: "Post or Browse Work",
        description: "Create a bounty, task, or service — or browse hundreds of open opportunities posted by projects.",
        color: "text-emerald-500",
        border: "border-emerald-500/20",
        bg: "bg-emerald-500/10",
    },
    {
        icon: BadgeDollarSign,
        step: "03",
        title: "Get Paid Instantly",
        description: "Once work is approved, funds are released straight to your wallet in any Solana token.",
        color: "text-blue-500",
        border: "border-blue-500/20",
        bg: "bg-blue-500/10",
    },
];

export function HowItWorks() {
    return (
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <p className="text-violet-500 font-semibold text-sm tracking-widest uppercase">How It Works</p>
                <h2 className="font-bold text-3xl sm:text-4xl mt-2 text-center animate-gradient bg-gradient-to-r from-violet-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent pb-1">Simple. Fast. Onchain.</h2>
                <p className="text-muted-foreground mt-3 text-center max-w-xl">
                    From wallet connection to payment — everything happens in minutes, not days.
                </p>

                <div className="grid lg:grid-cols-3 gap-8 mt-16 w-full">
                    {steps.map((step) => (
                        <div key={step.step} className={`group relative flex flex-col gap-4 p-8 rounded-2xl border ${step.border} bg-muted/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-muted/40 cursor-pointer`}>
                            <span className="text-5xl font-black text-muted/10 absolute top-6 right-8 group-hover:scale-110 group-hover:text-muted/30 transition-all duration-500">{step.step}</span>
                            <div className={`${step.bg} ${step.border} border w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className={`size-5 ${step.color}`} />
                            </div>
                            <h3 className="font-bold text-xl">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}