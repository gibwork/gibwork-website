"use client";

import { useState } from "react";
import { 
  Home, 
  Flame, 
  Send, 
  CheckCircle, 
  Clock, 
  Wallet, 
  Trophy, 
  Gift, 
  User, 
  Settings, 
  LogOut,
  Plus,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/public/work-logo.png";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Overview", active: true },
    { icon: Flame, label: "Live Tasks", count: 847, badge: true },
    { icon: Send, label: "Submitted Tasks", count: 12 },
    { icon: CheckCircle, label: "Completed Tasks", count: 156 },
    { icon: Clock, label: "Pending Tasks", count: 3, badge: true },
    { icon: Wallet, label: "Wallet", highlight: "$12,450" },
    { icon: Trophy, label: "Leaderboard", rank: "#42" },
    { icon: Gift, label: "Referral Program", count: 8 },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        size="icon"
        variant="ghost"
        className="md:hidden fixed top-20 left-4 z-50"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="size-6" />
      </Button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? "80px" : "280px",
        }}
        className={`
          fixed left-0 top-14 bottom-0 z-40
          bg-gradient-to-b from-background to-muted/30
          border-r border-border/50
          backdrop-blur-xl
          transition-all duration-300
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="size-6" />
          </Button>
        </div>

        {/* Collapse Toggle */}
        <div className="hidden md:flex justify-end p-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <Menu className="size-5" />
            ) : (
              <X className="size-5" />
            )}
          </Button>
        </div>

        {/* Logo */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-3">
            <Image alt="" src={logo} className="size-10 rounded-md" />
            {!isCollapsed && (
              <span className="font-bold text-xl">gibwork</span>
            )}
          </div>
        </div>

        {/* Quick Action Button */}
        {!isCollapsed && (
          <div className="px-4 mb-6">
            <Button className="w-full group" asChild>
              <a href={process.env.NEXT_PUBLIC_APP_URL || "https://app.gib.work"}>
                <Plus className="size-4 mr-2" />
                Find New Tasks
              </a>
            </Button>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-200
                ${item.active 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "hover:bg-accent hover:text-accent-foreground"
                }
              `}
            >
              <item.icon className="size-5 flex-shrink-0" />
              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left font-medium">{item.label}</span>
                  {item.count && (
                    <Badge variant={item.badge ? "destructive" : "secondary"} className="text-xs">
                      {item.count}
                    </Badge>
                  )}
                  {item.highlight && (
                    <span className="text-xs font-bold text-green-500">{item.highlight}</span>
                  )}
                  {item.rank && (
                    <Badge variant="outline" className="text-xs">
                      {item.rank}
                    </Badge>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-border/50">
          {!isCollapsed ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-sm font-bold text-background">
                  U
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">username</p>
                  <p className="text-xs text-muted-foreground truncate">$12,450 earned</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-500">Wallet Connected</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="flex-1">
                  <Settings className="size-4 mr-2" />
                  {!isCollapsed && "Settings"}
                </Button>
                <Button size="sm" variant="ghost" className="flex-1">
                  <LogOut className="size-4 mr-2" />
                  {!isCollapsed && "Logout"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-sm font-bold text-background">
                U
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          )}
        </div>
      </motion.aside>
    </>
  );
}
