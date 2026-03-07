"use client"

import { Briefcase } from "lucide-react"
import { useTranslations } from "next-intl"

export function ExperienceTimeline() {
    const t = useTranslations('Experience.items')
    const keys = ['marduk', 'yerlem', 'stechome', 'terra', 'freelance'] as const

    return (
        <div className="relative mt-6">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

            <div className="space-y-10">
                {keys.map((key) => (
                    <div key={key} className="relative flex gap-6 group">
                        {/* Timeline dot */}
                        <div className="relative z-10 flex-shrink-0 w-8 h-8 mt-1 flex items-center justify-center rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 shadow-sm">
                            <Briefcase className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>

                        {/* Content card */}
                        <div className="flex-grow rounded-xl border border-border/40 bg-background/60 backdrop-blur-sm px-5 py-4 group-hover:border-primary/30 group-hover:bg-muted/40 transition-all duration-300 group-hover:shadow-md">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                        {t(`${key}.company`)}
                                    </h3>
                                    <p className="text-sm font-medium text-primary/80 mt-0.5">
                                        {t(`${key}.role`)}
                                    </p>
                                </div>
                                <span className="flex-shrink-0 text-xs font-medium text-muted-foreground bg-muted/60 border border-border/40 rounded-full px-3 py-1 h-fit">
                                    {t(`${key}.period`)}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {t(`${key}.description`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
