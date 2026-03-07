import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['en', 'tr', 'de', 'az'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
        '/projects': {
            en: '/projects',
            tr: '/projeler',
            de: '/projekte',
            az: '/layiheler'
        },
        '/experience': {
            en: '/experience',
            tr: '/deneyim',
            de: '/erfahrung',
            az: '/tecrube'
        },
        '/contact': {
            en: '/contact',
            tr: '/iletisim',
            de: '/kontakt',
            az: '/elaqe'
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
