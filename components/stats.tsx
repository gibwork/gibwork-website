"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
    { value: 12400, prefix: "", suffix: "+", label: "Tasks Completed" },
    { value: 2100000, prefix: "$", suffix: "+", label: "Total Paid Out", isCompact: true },
    { value: 8500, prefix: "", suffix: "+", label: "Active Freelancers" },
    { value: 50, prefix: "", suffix: "+", label: "Partner Projects" },
];

function Counter({ value, prefix, suffix, isCompact }: { value: number, prefix: string, suffix: string, isCompact?: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                let formatted = "";
                if (isCompact) {
                    formatted = Intl.NumberFormat("en-US", { notation: "compact", compactDisplay: "short", maximumFractionDigits: 1 }).format(latest);
                } else {
                    formatted = Intl.NumberFormat("en-US").format(Math.floor(latest));
                }
                ref.current.textContent = prefix + formatted + suffix;
            }
        });
    }, [springValue, prefix, suffix, isCompact]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function Stats() {
    return (
        <section className="w-full border-y bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                        <p className="text-3xl sm:text-4xl font-bold text-violet-400">
                            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isCompact={stat.isCompact} />
                        </p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}