import { getTranslations } from "next-intl/server"
import { SectionIntro } from "@/components/section-intro"
import { Frame } from "@/components/frame"
import { referenceKeys } from "@/lib/portfolio"

const schools = ["anadolu", "konya"] as const
const languages = ["tr", "en"] as const

export async function Background({ heading = true }: { heading?: boolean }) {
    const home = await getTranslations("Home")
    const t = await getTranslations("Background")

    return (
        <section className="border-t border-border py-16 md:py-24">
            {heading ? (
                <SectionIntro
                    kicker={home("bgIndex")}
                    title={home("bgTitle")}
                />
            ) : null}
            <Frame className={heading ? "mt-12 grid gap-12 md:grid-cols-2" : "grid gap-12 md:grid-cols-2"}>
                <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                        {t("education")}
                    </h3>
                    <div className="mt-4">
                        {schools.map((key) => (
                            <article key={key} className="border-t border-border py-5">
                                <p className="text-2xl font-medium tracking-[-0.03em]">{t(`schools.${key}.school`)}</p>
                                <p className="mt-1 text-sm text-foreground">{t(`schools.${key}.program`)}</p>
                                <p className="mt-2 text-sm text-muted-foreground">{t(`schools.${key}.period`)}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                        {t("languages")}
                    </h3>
                    <div className="mt-4">
                        {languages.map((key) => (
                            <article key={key} className="border-t border-border py-5">
                                <p className="text-2xl font-medium tracking-[-0.03em]">{t(`langs.${key}.name`)}</p>
                                <p className="mt-2 text-sm text-muted-foreground">{t(`langs.${key}.level`)}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </Frame>
            <Frame className="mt-12">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {t("references")}
                </h3>
                <div className="mt-4 grid gap-0 border-t border-border md:grid-cols-3">
                    {referenceKeys.map((key) => (
                        <article key={key} className="border-b border-border py-5 md:border-b-0 md:pr-8">
                            <p className="text-2xl font-medium tracking-[-0.03em]">{t(`refs.${key}.name`)}</p>
                            <p className="mt-2 text-sm text-muted-foreground">{t(`refs.${key}.role`)}</p>
                        </article>
                    ))}
                </div>
            </Frame>
        </section>
    )
}
