import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { Frame } from "@/components/frame"
import { profile } from "@/lib/portfolio"

export async function Footer() {
    const t = await getTranslations('Footer')
    const nav = await getTranslations('Navigation')
    const year = new Date().getFullYear()

    return (
        <footer className="mt-auto border-t border-border">
            <Frame className="grid gap-10 py-12 md:grid-cols-12">
                <div className="md:col-span-6">
                    <p className="text-2xl font-medium tracking-[-0.04em]">{profile.name}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{t('role')}</p>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {t('note')}
                    </p>
                </div>
                <nav className="flex flex-col gap-2 text-sm md:col-span-3">
                    <Link href="/projects" className="text-foreground hover:underline underline-offset-4">
                        {nav('projects')}
                    </Link>
                    <Link href="/experience" className="text-foreground hover:underline underline-offset-4">
                        {nav('experience')}
                    </Link>
                    <Link href="/contact" className="text-foreground hover:underline underline-offset-4">
                        {nav('contact')}
                    </Link>
                </nav>
                <div className="flex flex-col gap-2 text-sm md:col-span-3">
                    <a href={`mailto:${profile.email}`} className="text-foreground hover:underline underline-offset-4">
                        {profile.email}
                    </a>
                    <a href={profile.phoneHref} className="text-muted-foreground hover:text-foreground">
                        {profile.phone}
                    </a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        GitHub
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        LinkedIn
                    </a>
                </div>
            </Frame>
            <div className="border-t border-border">
                <Frame className="flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
                    <p>{t('builtBy')}</p>
                    <p>{year}</p>
                </Frame>
            </div>
        </footer>
    )
}
