"use client"

import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useLocale, useTranslations } from "next-intl"
import { ThemeToggle } from "./theme-toggle"
import { useEffect, useState } from "react"
import { Briefcase, House, Mail, Menu, PanelsTopLeft, X } from "lucide-react"
import { profile } from "@/lib/portfolio"

const locales = [
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
    { code: "de", label: "DE" },
    { code: "az", label: "AZ" },
] as const

export function Navbar() {
    const t = useTranslations('Navigation')
    const common = useTranslations('Common')
    const pathname = usePathname()
    const router = useRouter()
    const locale = useLocale()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navLinks = [
        { href: "/projects" as const, label: t('projects') },
        { href: "/experience" as const, label: t('experience') },
        { href: "/contact" as const, label: t('contact') },
    ]

    const tabs = [
        { href: "/" as const, label: t("home"), icon: House },
        { href: "/projects" as const, label: t("projects"), icon: PanelsTopLeft },
        { href: "/experience" as const, label: t("experience"), icon: Briefcase },
        { href: "/contact" as const, label: t("contact"), icon: Mail },
    ]

    useEffect(() => {
        setMobileOpen(false)
    }, [pathname])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const switchLocale = (next: string) => {
        router.replace({ pathname }, { locale: next })
    }

    return (
        <>
        <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled || mobileOpen ? "border-foreground/10 bg-background/75 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
                <Link href="/" className="text-sm font-medium tracking-tight text-foreground">
                    {profile.name}
                </Link>

                <nav className="hidden items-center gap-8 md:flex" aria-label={common('menu')}>
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={isActive
                                    ? "text-sm text-foreground underline decoration-foreground underline-offset-8"
                                    : "text-sm text-muted-foreground transition-colors hover:text-foreground"}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-2 sm:flex" aria-label={common('toggleLanguage')}>
                        {locales.map((item) => (
                            <button
                                key={item.code}
                                type="button"
                                onClick={() => switchLocale(item.code)}
                                className={locale === item.code
                                    ? "text-xs tracking-wide text-foreground"
                                    : "text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"}
                                aria-current={locale === item.code ? "true" : undefined}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <ThemeToggle />
                    <button
                        className="p-2 text-foreground md:hidden"
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? common('close') : common('menu')}
                    >
                        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </div>

            {mobileOpen ? (
                <div className="border-t border-border bg-background md:hidden">
                    <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4" aria-label={common('menu')}>
                        <Link href="/" className="border-b border-border py-3 text-base text-foreground">
                            {t("home")}
                        </Link>
                        {navLinks.map(({ href, label }) => {
                            const isActive = pathname === href
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    aria-current={isActive ? "page" : undefined}
                                    className="border-b border-border py-3 text-base text-foreground last:border-b-0"
                                >
                                    {label}
                                </Link>
                            )
                        })}
                        <div className="flex gap-4 pt-4 sm:hidden">
                            {locales.map((item) => (
                                <button
                                    key={item.code}
                                    type="button"
                                    onClick={() => switchLocale(item.code)}
                                    className={locale === item.code
                                        ? "text-xs tracking-wide text-foreground"
                                        : "text-xs tracking-wide text-muted-foreground"}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            ) : null}
        </header>
        <nav
            className="fixed inset-x-0 bottom-0 z-50 border-t border-foreground/10 bg-background/85 backdrop-blur-xl md:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            aria-label={common("menu")}
        >
            <div className="grid h-16 grid-cols-4">
                {tabs.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex flex-col items-center justify-center gap-1 text-[10px] tracking-wide ${
                                isActive ? "text-foreground" : "text-muted-foreground"
                            }`}
                        >
                            <Icon className="size-5" strokeWidth={isActive ? 2.25 : 1.75} />
                            {label}
                        </Link>
                    )
                })}
            </div>
        </nav>
        </>
    )
}
