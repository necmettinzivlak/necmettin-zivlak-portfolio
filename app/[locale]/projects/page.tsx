import { PageHeader } from "@/components/page-header"
import { WorkIndex, type WorkIndexItem } from "@/components/work-index"
import { workItems } from "@/lib/portfolio"
import { getTranslations } from "next-intl/server"

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });

    const items: WorkIndexItem[] = workItems.map((item) => ({
        key: item.key,
        title: t(`items.${item.key}.title`),
        description: t(`items.${item.key}.description`),
        tags: t.raw(`items.${item.key}.tags`) as string[],
        domain: item.domain,
        domainLabel: t(`domains.${item.domain}`),
        context: t(`contexts.${item.context}`),
    }))

    return (
        <>
            <PageHeader
                kicker={nav('projects')}
                title={t('title')}
                description={t('description')}
            />
            <WorkIndex items={items} />
        </>
    )
}
