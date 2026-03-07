import { ProjectCard } from "./project-card"
import { getTranslations } from "next-intl/server"
import { Link } from '@/i18n/routing'
import { buttonVariants } from "@/components/ui/button-variants"
import { ArrowRight, Sparkles } from "lucide-react"

export async function HomeHighlights({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'Projects' })

    const keys = ['marduk', 'ulak', 'alliveri', 'sarraf'] as const

    return (
        <section className="container mx-auto px-4 py-24 md:px-8 border-t">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        Featured Work
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {t('title')}
                    </h2>
                    <p className="mt-3 text-muted-foreground text-base max-w-md">
                        A selection of the most impactful platforms I&apos;ve shipped.
                    </p>
                </div>
                <Link
                    href="/projects"
                    className={buttonVariants({ variant: "outline", className: "gap-2 shrink-0 self-start sm:self-auto" })}
                >
                    View All
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                {keys.map((key) => (
                    <ProjectCard
                        key={key}
                        title={t(`items.${key}.title`)}
                        description={t(`items.${key}.description`)}
                        tags={t.raw(`items.${key}.tags`) as string[]}
                    />
                ))}
            </div>
        </section>
    )
}
