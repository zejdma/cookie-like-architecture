import { Sun, Moon, Laptop2 } from "lucide-react"
import { Button } from "../ui/button"

import { useTheme } from "~/shared/hooks/useTheme"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const icon = theme === "dark"
    ? <Moon className="w-4 h-4" />
    : theme === "light"
    ? <Sun className="w-4 h-4" />
    : <Laptop2 className="w-4 h-4" />

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="icon" className="ml-auto">
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="w-4 h-4 mr-2" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="w-4 h-4 mr-2" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop2 className="w-4 h-4 mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
