import { Hero } from '@/components/hero';
import { ProofBar } from '@/components/proof-bar';
import { SelectedWork } from '@/components/selected-work';
import { SectionIntro } from '@/components/section-intro';
import { Frame } from '@/components/frame';
import { HomeTimeline } from '@/components/home-timeline';
import { Capabilities } from '@/components/capabilities';
import { Background } from '@/components/background';
import { ContactStrip } from '@/components/contact-strip';
import { previewExperienceKeys } from '@/lib/portfolio';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const home = await getTranslations({ locale, namespace: 'Home' });
    const experience = await getTranslations({ locale, namespace: 'Experience.items' });
    const rows = previewExperienceKeys.map((key) => ({
        key,
        period: experience(`${key}.period`),
        company: experience(`${key}.company`),
        role: experience(`${key}.role`),
    }));

    return (
        <>
            <Hero />
            <ProofBar />
            <SelectedWork locale={locale} />
            <section className="border-t border-border py-16 md:py-24">
                <SectionIntro
                    kicker={home('expIndex')}
                    title={home('expTitle')}
                    note={home('expNote')}
                    href="/experience"
                    action={home('fullExp')}
                />
                <Frame>
                    <HomeTimeline rows={rows} />
                </Frame>
            </section>
            <Capabilities />
            <Background />
            <ContactStrip />
        </>
    );
}
