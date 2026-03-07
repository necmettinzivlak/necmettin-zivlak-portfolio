import { ProjectCard } from "@/components/project-card"
import { getTranslations } from "next-intl/server"

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });

    const keys = [
        'marduk', 'acun', 'ilgen', 'iyekut', 'pusula', 'kimlik', 'fuel', 'pamir',
        'tahsildar', 'ulak', 'berlinEsnaf', 'getjob', 'buhara', 'demir', 'umay',
        'yolbars', 'sarraf', 'aflying', 'wisitcard', 'alliveri'
    ] as const;

    return (
        <div className="container mx-auto px-4 py-12 md:px-8">
            <div className="max-w-[42rem] mb-12">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">{t('title')}</h1>
                <p className="mt-4 text-muted-foreground text-lg">
                    {t('description')}
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
                {keys.map((key) => (
                    <ProjectCard
                        key={key}
                        title={t(`items.${key}.title`)}
                        description={t(`items.${key}.description`)}
                        tags={t.raw(`items.${key}.tags`) as string[]}
                    />
                ))}
            </div>
        </div>
    )
}
