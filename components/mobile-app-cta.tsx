"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import Image from "next/image";

export function MobileAppCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 w-full mx-auto max-w-7xl px-4 sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              Take <span className="text-primary">Gib.work</span> Everywhere.
            </h2>
          </motion.div>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Never miss a bounty. Manage your Solana tasks, track payments, and communicate with founders directly from your pocket with the brand new Gib.work mobile app.
          </motion.p>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="h-14 px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all w-full sm:w-auto flex gap-3">
              <Apple className="size-6" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Download on the</span>
                <span className="text-base font-bold">App Store</span>
              </div>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-muted-foreground/30 hover:bg-muted w-full sm:w-auto flex gap-3">
              <Play className="size-6" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Get it on</span>
                <span className="text-base font-bold">Google Play</span>
              </div>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative flex justify-center"
        >
          {/* Mockup Frame Container */}
          <div className="relative w-[300px] h-[600px] sm:w-[340px] sm:h-[680px] bg-black rounded-[3rem] p-4 shadow-2xl ring-1 ring-white/10 ring-inset">
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
              <div className="w-1/3 h-5 bg-black rounded-b-3xl"></div>
            </div>
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-background to-muted border border-white/5 relative flex items-center justify-center">
               <div className="flex flex-col items-center justify-center space-y-4">
                 <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center backdrop-blur-md">
                   <div className="size-8 rounded-full bg-primary animate-pulse"></div>
                 </div>
                 <p className="font-semibold text-muted-foreground text-sm tracking-widest uppercase">Gib.work Mobile</p>
               </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-24 bg-background border border-primary/20 p-4 rounded-2xl shadow-xl backdrop-blur-md"
          >
             <div className="flex items-center gap-3">
               <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">$</div>
               <div>
                 <p className="text-sm font-bold text-foreground">Bounty Paid</p>
                 <p className="text-xs text-muted-foreground">+500 USDC</p>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
