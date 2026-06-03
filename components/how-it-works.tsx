"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Briefcase, DollarSign, Shield, Zap, CheckCircle } from "lucide-react"
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants"

const steps = [
  {
    icon: Search,
    title: "Browse Tasks",
    description: "Explore available tasks from various categories including development, design, marketing, and more.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Briefcase,
    title: "Apply & Complete",
    description: "Submit your application and complete tasks with clear requirements and deadlines.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: CheckCircle,
    title: "Get Verified",
    description: "Submit your work for review and get verified by the task creator.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    icon: DollarSign,
    title: "Receive Payment",
    description: "Get paid instantly in your preferred token directly to your wallet.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  }
]

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Escrow-protected payments ensure you get paid for completed work."
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "No waiting periods - receive your earnings immediately upon approval."
  },
  {
    icon: DollarSign,
    title: "Multi-Token Support",
    description: "Work with SOL, USDC, USDT, and other popular tokens."
  }
]

export function HowItWorks() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Start earning in minutes with our simple 4-step process
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="border-2 hover:border-primary/50 transition-all h-full">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${step.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
