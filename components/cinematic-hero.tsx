"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button-variants"
import { profile } from "@/lib/portfolio"

export function CinematicHero({
    role,
    location,
    lead,
    availability,
    years,
    stack,
    viewWork,
    contact,
}: {
    role: string
    location: string
    lead: string
    availability: string
    years: string
    stack: string
    viewWork: string
    contact: string
}) {
    const ref = useRef<HTMLElement>(null)
    const reduce = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82])
    const y = useTransform(scrollYProgress, [0, 1], [0, -48])
    const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0])
    const line = useTransform(scrollYProgress, [0, 1], [0.08, 1])
    const glowX = useMotionValue(0)
    const glowY = useMotionValue(0)
    const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}px ${glowY}px, color-mix(in oklch, var(--signal) 42%, transparent), transparent 62%)`

    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)")
        if (!fine.matches || reduce) return
        const node = ref.current
        if (!node) return
        const move = (event: PointerEvent) => {
            const box = node.getBoundingClientRect()
            glowX.set(event.clientX - box.left)
            glowY.set(event.clientY - box.top)
        }
        node.addEventListener("pointermove", move)
        return () => node.removeEventListener("pointermove", move)
    }, [glowX, glowY, reduce])

    return (
        <section ref={ref} className="relative min-h-[100svh] md:h-[140vh]">
            <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden md:h-screen">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 55% 40% at 80% 0%, color-mix(in oklch, var(--signal) 34%, transparent), transparent 60%)",
                    }}
                />
                {reduce ? null : (
                    <motion.div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: glow }} />
                )}
                <motion.div
                    style={reduce ? undefined : { opacity: fade }}
                    className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-start px-5 pt-24 pb-24 md:px-6 md:pt-28 md:pb-10"
                >
                    <motion.p
                        className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
                        initial={reduce ? undefined : { opacity: 0, y: 12 }}
                        animate={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        {role}
                        <span className="px-3 text-foreground/30">/</span>
                        {location}
                    </motion.p>
                    <motion.h1
                        style={reduce ? undefined : { scale, y }}
                        className="mt-5 origin-left text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.86] font-medium tracking-[-0.055em]"
                    >
                        <MaskLine text="Necmettin" delay={0.05} />
                        <MaskLine text="Zivlak" delay={0.16} />
                    </motion.h1>
                    <motion.div
                        className="mt-8 grid items-end gap-8 md:grid-cols-12"
                        initial={reduce ? undefined : { opacity: 0, y: 18 }}
                        animate={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:col-span-7 md:text-lg">
                            {lead}
                        </p>
                        <div className="md:col-span-5">
                            <p className="flex items-center gap-2 text-sm">
                                <span className="relative inline-flex size-1.5" aria-hidden>
                                    <span className="signal-ping absolute inline-flex size-full rounded-full bg-signal" />
                                    <span className="relative size-1.5 rounded-full bg-signal" />
                                </span>
                                {availability}
                            </p>
                            <p className="mt-2 font-mono text-xs tracking-wide text-muted-foreground">
                                {years}
                                <span className="px-2">·</span>
                                {stack}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/projects"
                                    className={buttonVariants({ size: "lg", className: "h-11 rounded-full px-6" })}
                                >
                                    {viewWork}
                                </Link>
                                <Link
                                    href="/contact"
                                    className={buttonVariants({
                                        variant: "outline",
                                        size: "lg",
                                        className: "h-11 rounded-full border-foreground/20 px-6",
                                    })}
                                >
                                    {contact}
                                </Link>
                            </div>
                            <a
                                href={`mailto:${profile.email}`}
                                className="mt-5 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {profile.email}
                            </a>
                        </div>
                    </motion.div>
                    <motion.p
                        aria-hidden
                        className="mt-8 font-mono text-[10px] tracking-[0.32em] text-muted-foreground uppercase md:hidden"
                        animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        scroll
                    </motion.p>
                </motion.div>
                <div className="relative mx-auto h-px w-full max-w-6xl bg-foreground/15">
                    <motion.div
                        style={reduce ? undefined : { scaleX: line }}
                        className="h-full origin-left bg-foreground"
                    />
                </div>
            </div>
        </section>
    )
}

function MaskLine({ text, delay }: { text: string; delay: number }) {
    const reduce = useReducedMotion()

    if (reduce) {
        return <span className="block">{text}</span>
    }

    return (
        <span className="block overflow-hidden">
            <motion.span
                className="block"
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {text}
            </motion.span>
        </span>
    )
}
