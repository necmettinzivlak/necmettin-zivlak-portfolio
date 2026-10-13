import { Link } from "@/i18n/routing"
import { Frame } from "@/components/frame"

export function SectionIntro({
    kicker,
    title,
    note,
    href,
    action,
}: {
    kicker: string
    title: string
    note?: string
    href?: "/projects" | "/experience" | "/contact"
    action?: string
}) {
    return (
        <Frame className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    {kicker}
                </p>
                <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                    {title}
                </h2>
                {note ? (
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {note}
                    </p>
                ) : null}
            </div>
            {href && action ? (
                <Link
                    href={href}
                    className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                    {action}
                </Link>
            ) : null}
        </Frame>
    )
}
