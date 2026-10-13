export function WorkRow({
    index,
    id,
    title,
    description,
    domain,
    context,
    tags,
    href,
}: {
    index: string
    id: string
    title: string
    description: string
    domain: string
    context: string
    tags: string[]
    href?: string
}) {
    const body = (
        <div className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-6">
            <p className="font-mono text-xs text-muted-foreground md:col-span-1">{index}</p>
            <div className="md:col-span-6">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-foreground transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                    {title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            </div>
            <div className="text-sm md:col-span-2">
                <p className="text-foreground">{domain}</p>
                <p className="mt-1 text-muted-foreground">{context}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:col-span-3">
                {tags.join(" · ")}
            </p>
        </div>
    )

    const className = "group block scroll-mt-24 border-t border-border last:border-b"

    if (!href) {
        return (
            <article id={id} className={className}>
                {body}
            </article>
        )
    }

    return (
        <a href={href} className={`${className} transition-colors hover:bg-muted/50`}>
            {body}
        </a>
    )
}
