import { getTranslations } from "next-intl/server"
import { SectionIntro } from "@/components/section-intro"
import { Frame } from "@/components/frame"
import { skillGroups } from "@/lib/portfolio"
import { SkillCloud } from "@/components/skill-cloud"

export async function Capabilities() {
    const home = await getTranslations("Home")
    const skills = await getTranslations("Skills")

    return (
        <section className="border-t border-border py-16 md:py-24">
            <SectionIntro
                kicker={home("capIndex")}
                title={home("capTitle")}
                note={home("capNote")}
            />
            <Frame>
                <SkillCloud
                    groups={skillGroups.map((group) => ({
                        key: group.key,
                        label: skills(`categories.${group.key}`),
                        items: group.items,
                    }))}
                />
            </Frame>
        </section>
    )
}
