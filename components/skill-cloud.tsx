"use client"

import { motion, useReducedMotion } from "framer-motion"

export function SkillCloud({
    groups,
}: {
    groups: { key: string; label: string; items: readonly string[] }[]
}) {
    const reduce = useReducedMotion()

    return (
        <div className="mt-10 space-y-8">
            {groups.map((group, groupIndex) => (
                <div key={group.key}>
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        {group.label}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item, index) => (
                            <motion.li
                                key={item}
                                initial={reduce ? undefined : { opacity: 0, y: 12, scale: 0.92 }}
                                whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                                whileHover={reduce ? undefined : { y: -4 }}
                                viewport={{ once: true, margin: "-5% 0px" }}
                                transition={{
                                    duration: 0.45,
                                    delay: groupIndex * 0.04 + index * 0.025,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="rounded-full border border-foreground/15 bg-foreground/[0.04] px-3.5 py-2 text-sm"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
