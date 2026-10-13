export const profile = {
    name: "Necmettin Zivlak",
    email: "zivlaknecmettin@gmail.com",
    phone: "+90 549 207 15 21",
    phoneHref: "tel:+905492071521",
    github: "https://github.com/necmettinzivlak",
    linkedin: "https://www.linkedin.com/in/necmettinzivlak",
} as const

export const domains = ["markets", "operations", "commerce", "platforms"] as const

export type Domain = (typeof domains)[number]

export const contexts = ["sadaapex", "yerlem", "stechome", "terra"] as const

export type WorkContext = (typeof contexts)[number]

export type WorkItem = {
    key: string
    domain: Domain
    context: WorkContext
    featured?: boolean
}

export const workItems: WorkItem[] = [
    { key: "sadaapex", domain: "markets", context: "sadaapex", featured: true },
    { key: "ulak", domain: "operations", context: "yerlem", featured: true },
    { key: "tahsildar", domain: "operations", context: "yerlem", featured: true },
    { key: "acun", domain: "operations", context: "yerlem", featured: true },
    { key: "ilgen", domain: "operations", context: "yerlem" },
    { key: "iyekut", domain: "operations", context: "yerlem" },
    { key: "pusula", domain: "operations", context: "yerlem" },
    { key: "kimlik", domain: "operations", context: "yerlem" },
    { key: "fuel", domain: "operations", context: "yerlem" },
    { key: "pamir", domain: "operations", context: "yerlem" },
    { key: "buhara", domain: "commerce", context: "stechome" },
    { key: "demir", domain: "commerce", context: "stechome" },
    { key: "berlinEsnaf", domain: "platforms", context: "stechome" },
    { key: "getjob", domain: "platforms", context: "stechome" },
    { key: "umay", domain: "platforms", context: "terra" },
    { key: "yolbars", domain: "platforms", context: "terra" },
]

export const featuredKeys = ["sadaapex", "ulak", "tahsildar", "acun"] as const

export const experienceKeys = ["sadaapex", "yerlem", "stechome", "terra"] as const

export const previewExperienceKeys = ["sadaapex", "yerlem", "stechome"] as const

export const referenceKeys = ["ramazan", "cagri", "said"] as const

export const skillGroups = [
    {
        key: "frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "Redux Toolkit", "Zustand", "Tailwind CSS"],
    },
    {
        key: "mobile",
        items: ["Flutter", "Dart", "Riverpod", "React Native", "Clean Architecture"],
    },
    {
        key: "realtime",
        items: ["Canvas", "WebSockets", "Charting", "Mapbox", "Leaflet", "Google Maps"],
    },
    {
        key: "backend",
        items: ["Node.js", "Express", "PostgreSQL", "REST"],
    },
    {
        key: "tools",
        items: ["Git", "Docker", "Postman", "Figma", "CI/CD", "Agile"],
    },
] as const
