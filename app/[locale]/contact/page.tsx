import { PageHeader } from "@/components/page-header"
import { Frame } from "@/components/frame"
import { ContactForm } from "@/components/contact-form"
import { profile } from "@/lib/portfolio"
import { getTranslations } from "next-intl/server"

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });
    const nav = await getTranslations({ locale, namespace: 'Navigation' });
    const hero = await getTranslations({ locale, namespace: 'Hero' });

    return (
        <>
            <PageHeader
                kicker={nav('contact')}
                title={t('title')}
                description={t('description')}
            />
            <Frame className="grid gap-16 py-16 md:grid-cols-12 md:py-20">
                <aside className="min-w-0 md:col-span-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                        {t('asideTitle')}
                    </p>
                    <a
                        href={`mailto:${profile.email}`}
                        className="mt-4 block text-3xl leading-tight font-medium tracking-[-0.04em] text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                        <span className="block">{profile.email.split("@")[0]}</span>
                        <span className="block">@{profile.email.split("@")[1]}</span>
                    </a>
                    <a href={profile.phoneHref} className="mt-4 inline-block text-sm text-foreground hover:underline underline-offset-4">
                        {profile.phone}
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">{hero('location')}</p>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {t('asideBody')}
                    </p>
                    <div className="mt-8 flex flex-col gap-2 text-sm">
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4">
                            GitHub
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4">
                            LinkedIn
                        </a>
                    </div>
                </aside>
                <div className="min-w-0 md:col-span-7">
                    <ContactForm />
                </div>
            </Frame>
        </>
    )
}
