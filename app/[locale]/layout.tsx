import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Atmosphere } from '@/components/atmosphere';
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const newsreader = Newsreader({
    variable: "--font-newsreader",
    subsets: ["latin"],
    style: ["normal", "italic"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Hero' });
    return {
        title: t('title'),
        description: t('description'),
        icons: {
            icon: '/icon.svg',
            apple: '/apple-icon.svg',
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            locale,
            type: "website",
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();
    const t = await getTranslations({ locale, namespace: 'Common' });

    return (
        <html lang={locale} className={`${outfit.variable} ${newsreader.variable}`} suppressHydrationWarning>
            <body className="min-h-screen bg-background font-sans text-foreground antialiased">
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <a
                            href="#content"
                            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
                        >
                            {t('skip')}
                        </a>
                        <Atmosphere />
                        <div className="relative z-10 flex min-h-screen flex-col pb-20 md:pb-0">
                            <Navbar />
                            <main id="content" className="flex-1">{children}</main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
