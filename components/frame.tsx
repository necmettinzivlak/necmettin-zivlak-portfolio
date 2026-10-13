import { cn } from "@/lib/utils"

export function Frame({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
            {children}
        </div>
    )
}
