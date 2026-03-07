import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { getTranslations } from "next-intl/server"

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });
    return (
        <div className="container mx-auto px-4 py-12 md:px-8">
            <div className="max-w-[42rem] mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">{t('title')}</h1>
                <p className="mt-4 text-muted-foreground text-lg">
                    {t('description')}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
                <div>
                    <ContactForm />
                </div>
                <div>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}
