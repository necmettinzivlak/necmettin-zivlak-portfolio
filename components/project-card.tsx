import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { Github } from "lucide-react"
import { useTranslations } from "next-intl"

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    githubUrl?: string
}

export function ProjectCard({ title, description, tags, githubUrl }: ProjectCardProps) {
    const t = useTranslations('Projects');
    return (
        <div className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 hover:border-primary/30">
            {/* Gradient top accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/40 rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="p-6 flex flex-col flex-grow gap-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                    {tags.map((tag) => (
                        <Badge
                            variant="secondary"
                            key={tag}
                            className="text-xs font-medium rounded-full px-2.5 py-0.5 bg-muted/80 text-muted-foreground border border-border/40"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Footer */}
                {githubUrl && (
                    <div className="pt-2 border-t border-border/30">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({ variant: "outline", size: "sm", className: "gap-2 text-xs" })}
                        >
                            <Github className="h-3.5 w-3.5" />
                            {t('source')}
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
