"use client"

import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "@/components/providers/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <FiMoon className="h-[1.2rem] w-[1.2rem] text-white transition-all" />
      ) : (
        <FiSun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
