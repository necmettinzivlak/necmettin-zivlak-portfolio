"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button-variants"
import { useTranslations } from "next-intl"
import { Link } from '@/i18n/routing'
import { ArrowRight, Code2, Mail } from "lucide-react"

export function Hero() {
    const t = useTranslations('Hero')

    return (
        <section className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 text-center md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[52rem]"
            >
                {/* Availability badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Türkiye — Open to opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
                >
                    {t('title').split('|')[0].trim()}
                </motion.h1>

                {/* Title / Role */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 text-primary text-2xl sm:text-3xl font-bold tracking-tight"
                >
                    {t('title').split('|')[1]?.trim()}
                </motion.p>

                {/* Stack subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-3 text-muted-foreground sm:text-lg font-medium tracking-wide"
                >
                    {t('subtitle')}
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-8 leading-relaxed text-muted-foreground text-base sm:text-lg max-w-[44rem] mx-auto text-balance"
                >
                    {t('description')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="mt-10 flex justify-center gap-4 flex-wrap"
                >
                    <Link
                        href="/projects"
                        className={buttonVariants({ size: "lg", className: "px-8 gap-2 shadow-md" })}
                    >
                        <Code2 className="w-4 h-4" />
                        {t('viewProjects')}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/contact"
                        className={buttonVariants({ variant: "outline", size: "lg", className: "px-8 gap-2" })}
                    >
                        <Mail className="w-4 h-4" />
                        {t('contactMe')}
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}
