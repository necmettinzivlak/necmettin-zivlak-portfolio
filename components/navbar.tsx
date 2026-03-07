"use client"

import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from "next-intl"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { useState } from "react"
import { Menu, X, Code2 } from "lucide-react"

export function Navbar() {
    const t = useTranslations('Navigation')
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const navLinks = [
        { href: "/projects" as const, label: t('projects') },
        { href: "/experience" as const, label: t('experience') },
        { href: "/contact" as const, label: t('contact') },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between mx-auto md:px-8 px-4">

                {/* Logo */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Code2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="font-bold text-sm tracking-tight">N.Zivlak</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
                        {navLinks.map(({ href, label }) => {
                            const isActive = pathname === href
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`px-3 py-1.5 rounded-md transition-all ${isActive
                                        ? "text-foreground bg-muted font-semibold"
                                        : "text-foreground/60 hover:text-foreground hover:bg-muted/60"
                                        }`}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md px-4 pb-4 pt-2">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map(({ href, label }) => {
                            const isActive = pathname === href
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
                                        ? "text-foreground bg-muted font-semibold"
                                        : "text-foreground/60 hover:text-foreground hover:bg-muted/60"
                                        }`}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </header>
    )
}
