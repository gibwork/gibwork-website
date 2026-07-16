"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Zap, Users, ArrowRight, Loader2, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants"

interface Task {
  id: string
  title: string
  description?: string
  category: string
  budget: number
  timePosted: string
  applicants: number
  status: "open" | "in_progress" | "urgent"
  token: string
  url?: string
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Build DeFi Dashboard UI",
    description: "Create a modern, responsive dashboard for a DeFi platform with real-time data visualization.",
    category: "Development",
    budget: 2500,
    timePosted: "2m ago",
    applicants: 12,
    status: "urgent",
    token: "SOL",
    url: "https://app.gib.work/task/1"
  },
  {
    id: "2",
    title: "Design NFT Collection Artwork",
    description: "Design unique artwork for an NFT collection with 10,000 items.",
    category: "Design",
    budget: 1800,
    timePosted: "5m ago",
    applicants: 8,
    status: "open",
    token: "USDC",
    url: "https://app.gib.work/task/2"
  },
  {
    id: "3",
    title: "Write Smart Contract Audit",
    description: "Perform a comprehensive security audit of a new DeFi smart contract.",
    category: "Security",
    budget: 5000,
    timePosted: "8m ago",
    applicants: 5,
    status: "urgent",
    token: "SOL",
    url: "https://app.gib.work/task/3"
  },
  {
    id: "4",
    title: "Create Marketing Campaign",
    description: "Develop and execute a marketing strategy for a new crypto project launch.",
    category: "Marketing",
    budget: 1200,
    timePosted: "12m ago",
    applicants: 23,
    status: "open",
    token: "USDT",
    url: "https://app.gib.work/task/4"
  },
  {
    id: "5",
    title: "Develop Mobile App Prototype",
    description: "Build a high-fidelity prototype for a mobile wallet application.",
    category: "Development",
    budget: 3500,
    timePosted: "15m ago",
    applicants: 15,
    status: "in_progress",
    token: "SOL",
    url: "https://app.gib.work/task/5"
  }
]

const statusColors = {
  open: "bg-green-500/10 text-green-500 border-green-500/20",
  in_progress: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  urgent: "bg-red-500/10 text-red-500 border-red-500/20"
}

const statusIcons = {
  open: null,
  in_progress: <Clock className="h-3 w-3" />,
  urgent: <Zap className="h-3 w-3" />
}

export function LiveTasksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true)
        setError(null)
        // In a real implementation, you would fetch from the API
        // const response = await fetch('https://app.gib.work/api/tasks/latest')
        // const data = await response.json()
        // setTasks(data.slice(0, 5))
        
        // Simulating API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000))
        setTasks(mockTasks.slice(0, 5))
      } catch (err) {
        setError("Failed to load tasks. Using fallback data.")
        setTasks(mockTasks.slice(0, 5))
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()

    // Refresh tasks every 60 seconds
    const interval = setInterval(fetchTasks, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isLoading) return
    
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % tasks.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [tasks.length, isLoading])

  const nextTask = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % tasks.length)
  }

  const prevTask = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + tasks.length) % tasks.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8
    })
  }

  const currentTask = tasks[currentIndex]

  if (isLoading) {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="py-16 sm:py-24 px-4 sm:px-6 w-full mx-auto max-w-7xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real-Time Opportunities</h2>
        </div>
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </motion.section>
    )
  }

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
          <Zap className="h-4 w-4" />
          <span className="text-sm font-medium">Live Tasks</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real-Time Opportunities</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse live tasks posted by the community. New opportunities appear every minute.
        </p>
        {error && (
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-amber-600 bg-amber-50 dark:bg-amber-950 px-3 py-1 rounded-full">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl rounded-full opacity-20" />
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
          >
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={statusColors[currentTask.status]}>
                      {statusIcons[currentTask.status]}
                      <span className="ml-1 capitalize">{currentTask.status.replace("_", " ")}</span>
                    </Badge>
                    <Badge variant="secondary">{currentTask.category}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {currentTask.timePosted}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">{currentTask.title}</h3>
                {currentTask.description && (
                  <p className="text-muted-foreground mb-4">{currentTask.description}</p>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <DollarSign className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Budget</p>
                      <p className="font-semibold">{currentTask.budget} {currentTask.token}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Users className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Applicants</p>
                      <p className="font-semibold">{currentTask.applicants}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Zap className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Token</p>
                      <p className="font-semibold">{currentTask.token}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-orange-500/10">
                      <Clock className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">ID</p>
                      <p className="font-semibold">#{currentTask.id}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    {tasks.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1)
                          setCurrentIndex(index)
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-primary w-8"
                            : "bg-muted hover:bg-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTask}
                      className="p-2 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </button>
                    <button
                      onClick={nextTask}
                      className="p-2 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <a href={currentTask.url || "https://app.gib.work"} target="_blank" rel="noopener noreferrer">
                    View Task
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all ${
                index === currentIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
            >
              {task.category}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
