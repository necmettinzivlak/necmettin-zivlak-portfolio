import { getTranslations } from "next-intl/server"
import { ClosingCta } from "@/components/closing-cta"
import { profile } from "@/lib/portfolio"

export async function ContactStrip() {
    const t = await getTranslations("Home")
    const hero = await getTranslations("Hero")

    return (
        <ClosingCta
            title={t("contactTitle")}
            note={t("contactNote")}
            email={profile.email}
            action={hero("contact")}
        />
    )
}
