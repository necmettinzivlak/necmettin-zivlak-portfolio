import { getTranslations } from "next-intl/server"
import { Marquee } from "@/components/marquee"
import { skillGroups } from "@/lib/portfolio"

export async function ProofBar() {
    const t = await getTranslations("Home")
    const items = [
        t("proofFocusValue"),
        t("proofDomainValue"),
        t("proofStackValue"),
        t("proofLangValue"),
        ...skillGroups.flatMap((group) => group.items),
    ]

    return <Marquee items={items} />
}
