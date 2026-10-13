"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"

export function ThemeToggle() {
    const { setTheme } = useTheme()
    const t = useTranslations("Common")

    const toggle = () => {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "light" : "dark")
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={t("toggleTheme")}
            className="relative inline-flex size-9 items-center justify-center text-foreground"
        >
            <Sun className="size-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
        </button>
    )
}
