"use client"

import { motion, useReducedMotion } from "framer-motion"

export type TimelineRow = {
    key: string
    period: string
    company: string
    role: string
}

export function HomeTimeline({ rows }: { rows: TimelineRow[] }) {
    const reduce = useReducedMotion()

    return (
        <div className="relative mt-12">
            <motion.div
                aria-hidden
                className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-foreground/25"
                initial={reduce ? undefined : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            />
            <ol className="space-y-2">
                {rows.map((row, index) => (
                    <motion.li
                        key={row.key}
                        className="relative py-5 pl-10"
                        initial={reduce ? undefined : { opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                        whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-8% 0px" }}
                        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span
                            aria-hidden
                            className="absolute top-7 left-[7px] size-3.5 -translate-x-1/2 rounded-full border border-foreground bg-background"
                        />
                        <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                            {row.period}
                        </p>
                        <h3 className="mt-2 text-3xl font-medium tracking-[-0.045em] md:text-5xl">
                            {row.company}
                        </h3>
                        <p className="mt-2 text-sm text-foreground/80">{row.role}</p>
                    </motion.li>
                ))}
            </ol>
        </div>
    )
}
