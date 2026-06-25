"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
      aria-pressed={isLight}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-surface/60 text-foreground transition-all hover:border-electric/60 hover:text-electric"
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
