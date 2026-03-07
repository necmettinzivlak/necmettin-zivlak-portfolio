import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function SocialLinks() {
    const links = [
        {
            name: "GitHub",
            url: "https://github.com/necmettinzivlak",
            icon: Github
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/necmettinzivlak",
            icon: Linkedin
        },
        {
            name: "Twitter",
            url: "https://twitter.com/necmettinzivlak",
            icon: Twitter
        },
        {
            name: "Email",
            url: "mailto:contact@necmettinzivlak.com",
            icon: Mail
        }
    ]

    return (
        <div className="flex flex-col gap-4 mt-12 bg-muted/30 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold tracking-tight">Connect with me</h3>
            <div className="flex gap-4 flex-wrap">
                {links.map((link) => {
                    const Icon = link.icon
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background hover:bg-muted text-foreground border rounded-full p-3 transition-colors flex items-center justify-center shadow-sm"
                            aria-label={link.name}
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
