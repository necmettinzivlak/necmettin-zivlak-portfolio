import { PageHeader } from "@/components/page-header"
import { Frame } from "@/components/frame"
import { ExperienceList } from "@/components/experience-list"
import { Background } from "@/components/background"
import { experienceKeys } from "@/lib/portfolio"
import { getTranslations } from "next-intl/server"

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Experience' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });

    return (
        <>
            <PageHeader
                kicker={nav('experience')}
                title={t('title')}
                description={t('description')}
            />
            <Frame className="py-4 md:py-8">
                <ExperienceList keys={experienceKeys} />
            </Frame>
            <Background heading={false} />
        </>
    )
}
