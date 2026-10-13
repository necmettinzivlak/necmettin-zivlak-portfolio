"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { buttonVariants } from "@/components/ui/button-variants"

export function ClosingCta({
    title,
    note,
    email,
    action,
}: {
    title: string
    note: string
    email: string
    action: string
}) {
    const reduce = useReducedMotion()

    return (
        <section className="overflow-hidden border-t border-border">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-20 md:px-6 md:py-32">
                <motion.h2
                    className="max-w-4xl text-[clamp(2.7rem,9vw,6.5rem)] leading-[0.9] font-medium tracking-[-0.055em]"
                    initial={reduce ? undefined : { opacity: 0, y: 48 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {title}
                </motion.h2>
                <motion.div
                    className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between"
                    initial={reduce ? undefined : { opacity: 0, y: 20 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="max-w-md text-base leading-relaxed text-muted-foreground">{note}</p>
                    <div className="flex flex-col items-start gap-4">
                        <a
                            href={`mailto:${email}`}
                            className="text-lg underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground md:text-2xl"
                        >
                            {email}
                        </a>
                        <Link
                            href="/contact"
                            className={buttonVariants({
                                size: "lg",
                                className: "h-11 rounded-full px-6",
                            })}
                        >
                            {action}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
