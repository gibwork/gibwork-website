"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Crown, TrendingUp, DollarSign } from "lucide-react"
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface LeaderboardEntry {
  rank: number
  address: string
  earnings: number
  tasksCompleted: number
  change?: number
}

const topEarners: LeaderboardEntry[] = [
  { rank: 1, address: "8xK2...4mNp", earnings: 125430, tasksCompleted: 234, change: 12 },
  { rank: 2, address: "3dF7...9kLq", earnings: 98750, tasksCompleted: 189, change: 8 },
  { rank: 3, address: "7aB2...5rTs", earnings: 87600, tasksCompleted: 167, change: -2 },
  { rank: 4, address: "2hG9...3vWx", earnings: 76500, tasksCompleted: 145, change: 5 },
  { rank: 5, address: "9cD4...8yZa", earnings: 65400, tasksCompleted: 132, change: 3 },
]

const topCreators: LeaderboardEntry[] = [
  { rank: 1, address: "5eJ8...2pQr", earnings: 234500, tasksCompleted: 456, change: 15 },
  { rank: 2, address: "1aK3...7sTu", earnings: 198700, tasksCompleted: 398, change: 10 },
  { rank: 3, address: "6bL9...4vWx", earnings: 176800, tasksCompleted: 345, change: -1 },
  { rank: 4, address: "4cM5...9yZa", earnings: 154300, tasksCompleted: 312, change: 7 },
  { rank: 5, address: "8dN6...3aBc", earnings: 132900, tasksCompleted: 287, change: 4 },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-5 w-5 text-yellow-500" />
    case 2:
      return <Trophy className="h-5 w-5 text-gray-400" />
    case 3:
      return <Medal className="h-5 w-5 text-amber-600" />
    default:
      return <Award className="h-5 w-5 text-muted-foreground" />
  }
}

const formatCurrency = (num: number) => {
  if (num >= 1000000) return "$" + (num / 1000000).toFixed(2) + "M"
  if (num >= 1000) return "$" + (num / 1000).toFixed(1) + "K"
  return "$" + num.toString()
}

export function Leaderboards() {
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
          <Trophy className="h-4 w-4" />
          <span className="text-sm font-medium">Leaderboards</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Top Performers</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Celebrating the highest earners and most active creators on the platform
        </p>
      </div>

      <Tabs defaultValue="earners" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="earners">Top Earners</TabsTrigger>
          <TabsTrigger value="creators">Top Creators</TabsTrigger>
        </TabsList>

        <TabsContent value="earners">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                Top Earners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topEarners.map((entry, index) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                      entry.rank === 1
                        ? "bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20"
                        : entry.rank === 2
                        ? "bg-gradient-to-r from-gray-400/10 to-transparent border border-gray-400/20"
                        : entry.rank === 3
                        ? "bg-gradient-to-r from-amber-600/10 to-transparent border border-amber-600/20"
                        : "bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background">
                        {getRankIcon(entry.rank)}
                      </div>
                      <div>
                        <p className="font-semibold">{entry.address}</p>
                        <p className="text-sm text-muted-foreground">
                          {entry.tasksCompleted} tasks completed
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{formatCurrency(entry.earnings)}</p>
                      {entry.change !== undefined && (
                        <div className={`flex items-center gap-1 text-sm ${
                          entry.change > 0 ? "text-green-500" : "text-red-500"
                        }`}>
                          <TrendingUp className={`h-3 w-3 ${entry.change < 0 ? "rotate-180" : ""}`} />
                          {Math.abs(entry.change)}%
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="creators">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                Top Creators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCreators.map((entry, index) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                      entry.rank === 1
                        ? "bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20"
                        : entry.rank === 2
                        ? "bg-gradient-to-r from-gray-400/10 to-transparent border border-gray-400/20"
                        : entry.rank === 3
                        ? "bg-gradient-to-r from-amber-600/10 to-transparent border border-amber-600/20"
                        : "bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background">
                        {getRankIcon(entry.rank)}
                      </div>
                      <div>
                        <p className="font-semibold">{entry.address}</p>
                        <p className="text-sm text-muted-foreground">
                          {entry.tasksCompleted} tasks created
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{formatCurrency(entry.earnings)}</p>
                      {entry.change !== undefined && (
                        <div className={`flex items-center gap-1 text-sm ${
                          entry.change > 0 ? "text-green-500" : "text-red-500"
                        }`}>
                          <TrendingUp className={`h-3 w-3 ${entry.change < 0 ? "rotate-180" : ""}`} />
                          {Math.abs(entry.change)}%
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.section>
  )
}
