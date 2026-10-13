import { getTranslations } from "next-intl/server"
import { CinematicHero } from "@/components/cinematic-hero"

export async function Hero() {
    const t = await getTranslations("Hero")

    return (
        <CinematicHero
            role={t("role")}
            location={t("location")}
            lead={t("lead")}
            availability={t("availability")}
            years={t("years")}
            stack={t("stack")}
            viewWork={t("viewWork")}
            contact={t("contact")}
        />
    )
}
