import { getTranslations } from "next-intl/server"
import { getPathname, routing } from "@/i18n/routing"
import { FeaturedStage, type StageItem } from "@/components/featured-stage"
import { featuredKeys, workItems } from "@/lib/portfolio"

type Locale = (typeof routing.locales)[number]

export async function SelectedWork({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "Projects" })
    const home = await getTranslations({ locale, namespace: "Home" })
    const safeLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale
    const projectsPath = getPathname({ locale: safeLocale, href: "/projects" })

    const items: StageItem[] = featuredKeys.map((key, index) => {
        const meta = workItems.find((item) => item.key === key)
        return {
            key,
            index: String(index + 1).padStart(2, "0"),
            title: t(`items.${key}.title`),
            description: t(`items.${key}.description`),
            domain: t(`domains.${meta?.domain ?? "markets"}`),
            context: meta ? t(`contexts.${meta.context}`) : "",
            tags: t.raw(`items.${key}.tags`) as string[],
            href: `${projectsPath}#${key}`,
        }
    })

    return (
        <FeaturedStage
            kicker={home("workIndex")}
            title={home("workTitle")}
            note={home("workNote")}
            action={home("allWork")}
            viewLabel={home("viewProject")}
            items={items}
        />
    )
}
