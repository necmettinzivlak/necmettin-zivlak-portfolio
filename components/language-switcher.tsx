"use client"

import * as React from "react"
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Languages } from "lucide-react"

import { buttonVariants } from "@/components/ui/button-variants"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('Common');

    const handleLanguageChange = (newLocale: string) => {
        router.replace({ pathname }, { locale: newLocale });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({ variant: "outline", size: "icon" })}>
                <Languages className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{t('toggleLanguage')}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")} disabled={locale === "en"}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("tr")} disabled={locale === "tr"}>
                    Türkçe
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("de")} disabled={locale === "de"}>
                    Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("az")} disabled={locale === "az"}>
                    Azərbaycan
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
