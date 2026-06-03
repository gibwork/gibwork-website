"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Bell, CheckCircle, Smartphone, Wallet } from "lucide-react";

const features = [
  { icon: Bell, text: "Real-time push notifications for new bounties" },
  { icon: CheckCircle, text: "Submit work and get approvals on the go" },
  { icon: Wallet, text: "View your wallet balance and payment history" },
  { icon: Smartphone, text: "Full access to all task types — bounties, services, GitHub issues" },
];

const phoneTasks = [
  { title: "Design protocol logo", tag: "Design", amount: "300 USDC" },
  { title: "Fix GitHub issue #142", tag: "Dev", amount: "500 USDC" },
  { title: "Write smart contract docs", tag: "Writing", amount: "150 USDC" },
];

export function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="relative py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl border-y"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text side */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="flex-1 lg:text-left text-center"
        >
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-primary font-semibold text-sm"
          >
            MOBILE APP
          </motion.p>
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-semibold text-3xl sm:text-4xl mt-2"
          >
            Your Web3 work hub —{" "}
            <span className="text-primary">in your pocket</span>
          </motion.h2>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-muted-foreground mt-4 max-w-md lg:mx-0 mx-auto"
          >
            The gibwork mobile app lets you browse tasks, submit work, and receive crypto payments
            from anywhere. Stay on top of opportunities the moment they go live.
          </motion.p>

          <motion.ul
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 flex flex-col gap-4 lg:items-start items-center"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <li key={f.text} className="flex items-center gap-3 text-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shrink-0">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{f.text}</span>
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex items-center gap-4 mt-10 lg:justify-start justify-center flex-wrap"
          >
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border hover:bg-muted transition-colors text-sm font-medium"
            >
              <span className="text-2xl leading-none">🍎</span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border hover:bg-muted transition-colors text-sm font-medium"
            >
              <span className="text-2xl leading-none">▶</span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Phone mockup side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div
            className="w-64 rounded-[2.5rem] p-3 shadow-2xl border"
            style={{ background: "hsl(var(--foreground))" }}
          >
            <div
              className="rounded-[2rem] overflow-hidden p-4"
              style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
            >
              {/* Phone header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-sm">gibwork</span>
                <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                  3 new
                </span>
              </div>

              {/* Task cards */}
              <div className="flex flex-col gap-2">
                {phoneTasks.map((task) => (
                  <div
                    key={task.title}
                    className="p-3 rounded-xl bg-muted border text-left"
                  >
                    <p className="text-xs font-medium leading-tight mb-2">{task.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {task.tag}
                      </span>
                      <span className="text-xs font-bold text-primary">{task.amount}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA bar */}
              <div className="mt-3 bg-primary rounded-xl p-3 text-center">
                <p className="text-xs font-semibold text-primary-foreground">
                  Start earning crypto →
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
