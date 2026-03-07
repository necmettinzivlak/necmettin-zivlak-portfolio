import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
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

    return (
        <html lang={locale} className="dark" suppressHydrationWarning>
            <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="relative flex min-h-screen flex-col">
                            <Navbar />
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
