import { ExperienceTimeline } from "@/components/experience-timeline"
import { getTranslations } from "next-intl/server"

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Experience' });
    return (
        <div className="container mx-auto px-4 py-12 md:px-8">
            <div className="max-w-[42rem] mb-12">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">{t('title')}</h1>
                <p className="mt-4 text-muted-foreground text-lg">
                    {t('description')}
                </p>
            </div>
            <div className="max-w-2xl">
                <ExperienceTimeline />
            </div>
        </div>
    )
}
