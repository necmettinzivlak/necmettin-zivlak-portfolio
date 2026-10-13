import { Frame } from "@/components/frame"
import { Reveal } from "@/components/reveal"

export function PageHeader({
    kicker,
    title,
    description,
}: {
    kicker: string
    title: string
    description: string
}) {
    return (
        <header className="border-b border-foreground/10">
            <Frame className="py-20 md:py-28">
                <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        {kicker}
                    </p>
                    <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                        {title}
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        {description}
                    </p>
                </Reveal>
            </Frame>
        </header>
    )
}
