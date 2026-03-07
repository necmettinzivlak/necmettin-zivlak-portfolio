import { Hero } from '@/components/hero';
import { SkillsGrid } from '@/components/skills-grid';
import { HomeHighlights } from '@/components/home-highlights';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return (
        <main className="flex flex-col items-center justify-between">
            <Hero />
            <SkillsGrid />
            <HomeHighlights locale={locale} />
        </main>
    );
}
