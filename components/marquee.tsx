"use client"

import { useReducedMotion } from "framer-motion"

export function Marquee({ items }: { items: string[] }) {
    const reduce = useReducedMotion()
    const loop = reduce ? items : [...items, ...items]

    return (
        <section className="overflow-hidden border-y border-foreground/10" aria-label={items[0]}>
            <div className={reduce ? "flex flex-wrap gap-x-8 gap-y-3 px-5 py-5" : "marquee-track flex w-max gap-10 py-5"}>
                {loop.map((item, index) => (
                    <span key={`${item}-${index}`} className="flex items-center gap-10 text-sm tracking-wide text-foreground/80">
                        {item}
                        <span aria-hidden className="size-1.5 rounded-full bg-signal" />
                    </span>
                ))}
            </div>
        </section>
    )
}
