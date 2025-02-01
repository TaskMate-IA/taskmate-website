"use client"

import { useTheme } from "./ThemeProvider"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-10 h-10 rounded-full">
      {theme === "dark" ? <Sun className="h-[1.5rem] w-[1.3rem]" /> : <Moon className="h-[1.5rem] w-[1.3rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

