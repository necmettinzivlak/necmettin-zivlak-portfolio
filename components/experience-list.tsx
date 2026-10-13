import { getTranslations } from "next-intl/server"
import { Reveal } from "@/components/reveal"

export async function ExperienceList({
    keys,
    dense = false,
}: {
    keys: readonly string[]
    dense?: boolean
}) {
    const t = await getTranslations("Experience.items")

    return (
        <div>
            {keys.map((key, index) => (
                <Reveal key={key} delay={index * 0.05}>
                <article className="grid gap-3 border-t border-foreground/10 py-8 last:border-b md:grid-cols-12 md:gap-6 md:py-12">
                    <p className="font-mono text-xs tracking-wide text-muted-foreground md:col-span-3">
                        {t(`${key}.period`)}
                    </p>
                    <div className="md:col-span-9">
                        <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">{t(`${key}.company`)}</h3>
                        <p className="mt-2 text-sm text-foreground">{t(`${key}.role`)}</p>
                        {dense ? null : (
                            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                                {t(`${key}.description`)}
                            </p>
                        )}
                    </div>
                </article>
                </Reveal>
            ))}
        </div>
    )
}
