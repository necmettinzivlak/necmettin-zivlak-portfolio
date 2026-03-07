"use client"

import { useTranslations } from "next-intl"

type Skill = {
    name: string
    icon: string
    color?: string
}

type SkillCategory = {
    key: "frontend" | "mobile" | "backend" | "tools"
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        key: "frontend",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
            { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
            { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        ],
    },
    {
        key: "mobile",
        skills: [
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        ],
    },
    {
        key: "backend",
        skills: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        ],
    },
    {
        key: "tools",
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        ],
    },
]

export function SkillsGrid() {
    const t = useTranslations("Skills")

    return (
        <section className="container mx-auto px-4 py-24 md:px-8 border-t">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">{t("description")}</p>
            </div>

            <div className="space-y-14">
                {skillCategories.map((cat) => (
                    <div key={cat.key}>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6 text-center">
                            {t(`categories.${cat.key}`)}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-5">
                            {cat.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/10 hover:border-primary/30 hover:bg-muted/60 cursor-default select-none"
                                    style={{ minWidth: 90 }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={36}
                                        height={36}
                                        className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                                        loading="lazy"
                                    />
                                    <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
