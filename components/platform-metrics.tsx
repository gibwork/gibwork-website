"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, DollarSign, TrendingUp, Activity, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants"

type TimePeriod = "daily" | "weekly" | "monthly"

interface MetricData {
  period: TimePeriod
  users: number
  tasks: number
  earnings: number
  activeUsers: number
  completionRate: number
  avgTime: string
}

const mockData: Record<TimePeriod, MetricData> = {
  daily: {
    period: "daily",
    users: 1247,
    tasks: 3421,
    earnings: 45890,
    activeUsers: 892,
    completionRate: 94,
    avgTime: "2.4h"
  },
  weekly: {
    period: "weekly",
    users: 8432,
    tasks: 23987,
    earnings: 312450,
    activeUsers: 6234,
    completionRate: 91,
    avgTime: "2.1h"
  },
  monthly: {
    period: "monthly",
    users: 32456,
    tasks: 98765,
    earnings: 1245678,
    activeUsers: 28934,
    completionRate: 89,
    avgTime: "1.9h"
  }
}

export function PlatformMetrics() {
  const [activePeriod, setActivePeriod] = useState<TimePeriod>("daily")
  const [currentData, setCurrentData] = useState<MetricData>(mockData.daily)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setCurrentData(mockData[activePeriod])
      setIsAnimating(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [activePeriod])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    return num.toString()
  }

  const formatCurrency = (num: number) => {
    if (num >= 1000000) return "$" + (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return "$" + (num / 1000).toFixed(1) + "K"
    return "$" + num.toString()
  }

  const metrics = [
    {
      title: "Total Users",
      value: formatNumber(currentData.users),
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Tasks Completed",
      value: formatNumber(currentData.tasks),
      icon: Briefcase,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Total Earnings",
      value: formatCurrency(currentData.earnings),
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Active Users",
      value: formatNumber(currentData.activeUsers),
      icon: Activity,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Completion Rate",
      value: currentData.completionRate + "%",
      icon: TrendingUp,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      title: "Avg. Completion Time",
      value: currentData.avgTime,
      icon: Clock,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    }
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Platform Metrics</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time insights into our platform's performance and community growth
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {(["daily", "weekly", "monthly"] as TimePeriod[]).map((period) => (
          <button
            key={period}
            onClick={() => setActivePeriod(period)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
              activePeriod === period
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      <motion.div
        key={activePeriod}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={metric.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <motion.div
                  key={`${activePeriod}-${index}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl sm:text-3xl font-bold"
                >
                  {metric.value}
                </motion.div>
              </CardContent>
            </Card>
          )
        })}
      </motion.div>
    </motion.section>
  )
}
