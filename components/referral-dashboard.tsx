"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, Gift, TrendingUp, Copy, Check } from "lucide-react"
import { useState } from "react"
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants"

interface ReferralData {
  totalReferrals: number
  totalEarnings: number
  activeReferrals: number
  pendingEarnings: number
  referralCode: string
  referralLink: string
}

const mockReferralData: ReferralData = {
  totalReferrals: 47,
  totalEarnings: 2340,
  activeReferrals: 32,
  pendingEarnings: 450,
  referralCode: "GIBWORK2024",
  referralLink: "https://gib.work/ref/GIBWORK2024"
}

export function ReferralDashboard() {
  const [copied, setCopied] = useState(false)
  const data = mockReferralData

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data.referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (num: number) => {
    if (num >= 1000) return "$" + (num / 1000).toFixed(1) + "K"
    return "$" + num.toString()
  }

  const stats = [
    {
      title: "Total Referrals",
      value: data.totalReferrals,
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      change: "+12 this week"
    },
    {
      title: "Total Earnings",
      value: formatCurrency(data.totalEarnings),
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      change: "+$340 this month"
    },
    {
      title: "Active Referrals",
      value: data.activeReferrals,
      icon: TrendingUp,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      change: "68% active rate"
    },
    {
      title: "Pending Earnings",
      value: formatCurrency(data.pendingEarnings),
      icon: Gift,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
 change: "Processing"
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
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
        >
          <Gift className="h-4 w-4" />
          <span className="text-sm font-medium">Referral Program</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Earn by Referring</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Share your referral link and earn rewards when others join the platform
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <Card className="border-2 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <CardTitle className="text-2xl">Your Referral Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Referral Code</p>
            <div className="flex items-center justify-between">
              <code className="text-lg font-mono font-bold">{data.referralCode}</code>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(data.referralCode)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }}
                className="ml-2"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Shareable Link</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={data.referralLink}
                readOnly
                className="flex-1 bg-background border rounded-md px-3 py-2 text-sm font-mono"
              />
              <Button onClick={copyToClipboard} size="sm">
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-blue-500" />
                <p className="font-semibold">Tier 1</p>
              </div>
              <p className="text-2xl font-bold">10%</p>
              <p className="text-sm text-muted-foreground">Commission</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <p className="font-semibold">Tier 2</p>
              </div>
              <p className="text-2xl font-bold">5%</p>
              <p className="text-sm text-muted-foreground">Commission</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="h-5 w-5 text-green-500" />
                <p className="font-semibold">Bonus</p>
              </div>
              <p className="text-2xl font-bold">$50</p>
              <p className="text-sm text-muted-foreground">Per 10 refs</p>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Start Referring Now
          </Button>
        </CardContent>
      </Card>
    </motion.section>
  )
}
