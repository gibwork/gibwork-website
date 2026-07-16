"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket, X, MessageCircle, Users, Briefcase } from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/lib/site-config"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: Briefcase,
      label: "Browse Tasks",
      href: siteConfig.appUrl,
      color: "bg-blue-500"
    },
    {
      icon: Users,
      label: "Community",
      href: siteConfig.discordUrl,
      color: "bg-purple-500"
    },
    {
      icon: MessageCircle,
      label: "Support",
      href: siteConfig.discordUrl,
      color: "bg-green-500"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <>
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 mb-2"
              >
                <span className="bg-background px-3 py-1 rounded-md text-sm font-medium shadow-lg border">
                  {action.label}
                </span>
                <Button
                  size="icon"
                  className={`${action.color} hover:opacity-90 shadow-lg`}
                >
                  <action.icon className="h-5 w-5" />
                </Button>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full shadow-2xl hover:scale-105 transition-transform"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="rocket"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Rocket className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  )
}
