"use client"

import { useMemo, useState } from "react"
import { useTranslations } from "next-intl"
import { Frame } from "@/components/frame"
import { WorkRow } from "@/components/work-row"
import { domains, type Domain } from "@/lib/portfolio"

export type WorkIndexItem = {
    key: string
    title: string
    description: string
    tags: string[]
    domain: Domain
    domainLabel: string
    context: string
}

export function WorkIndex({ items }: { items: WorkIndexItem[] }) {
    const t = useTranslations("Projects")
    const [active, setActive] = useState<Domain | "all">("all")

    const visible = useMemo(
        () => (active === "all" ? items : items.filter((item) => item.domain === active)),
        [active, items],
    )

    const filters = ["all", ...domains] as const

    return (
        <div>
            <div className="border-b border-border">
                <Frame className="flex flex-wrap gap-x-6 gap-y-3 py-4">
                    <span className="sr-only">{t("filterLabel")}</span>
                    {filters.map((filter) => {
                        const selected = active === filter
                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActive(filter)}
                                aria-pressed={selected}
                                className={selected
                                    ? "border-b border-foreground pb-1 text-sm text-foreground"
                                    : "border-b border-transparent pb-1 text-sm text-muted-foreground transition-colors hover:text-foreground"}
                            >
                                {t(`domains.${filter}`)}
                            </button>
                        )
                    })}
                </Frame>
            </div>
            <Frame>
                {visible.map((item, index) => (
                    <WorkRow
                        key={item.key}
                        index={String(index + 1).padStart(2, "0")}
                        id={item.key}
                        title={item.title}
                        description={item.description}
                        domain={item.domainLabel}
                        context={item.context}
                        tags={item.tags}
                    />
                ))}
            </Frame>
        </div>
    )
}
