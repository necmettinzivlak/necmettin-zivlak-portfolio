"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "@/i18n/routing"

export type StageItem = {
    key: string
    index: string
    title: string
    description: string
    domain: string
    context: string
    tags: string[]
    href: string
}

const INTERVAL = 4500
const spring = { type: "spring" as const, stiffness: 210, damping: 26, mass: 0.9 }

export function FeaturedStage({
    kicker,
    title,
    note,
    action,
    viewLabel,
    items,
}: {
    kicker: string
    title: string
    note: string
    action: string
    viewLabel: string
    items: StageItem[]
}) {
    const reduce = useReducedMotion()
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)
    const [compact, setCompact] = useState(true)

    useEffect(() => {
        const query = window.matchMedia("(max-width: 767px)")
        const sync = () => setCompact(query.matches)
        sync()
        query.addEventListener("change", sync)
        return () => query.removeEventListener("change", sync)
    }, [])
    const safeActive = Math.min(active, Math.max(items.length - 1, 0))
    const current = items[safeActive]
    const timer = useRef(0)

    useEffect(() => {
        window.clearInterval(timer.current)
        if (reduce || paused || items.length < 2) return
        timer.current = window.setInterval(() => {
            setActive((value) => (value + 1) % items.length)
        }, INTERVAL)
        return () => window.clearInterval(timer.current)
    }, [items.length, paused, reduce])

    const step = (delta: number) => {
        setActive((value) => (value + delta + items.length) % items.length)
    }

    if (!current) return null

    return (
        <section
            className="relative py-16 md:py-28"
            onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setPaused(true)
            }}
            onPointerLeave={(event) => {
                if (event.pointerType === "mouse") setPaused(false)
            }}
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-12 md:gap-8 md:px-6">
                <div className="md:col-span-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        {kicker}
                    </p>
                    <h2 className="mt-3 text-4xl font-medium tracking-[-0.045em] md:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                        {note}
                    </p>
                    <div
                        role="radiogroup"
                        aria-label={title}
                        className="mt-7 flex flex-col gap-2"
                        onKeyDown={(event) => {
                            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                                event.preventDefault()
                                step(1)
                            }
                            if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                                event.preventDefault()
                                step(-1)
                            }
                        }}
                    >
                        {items.map((item, index) => {
                            const selected = index === safeActive
                            return (
                                <button
                                    key={item.key}
                                    type="button"
                                    role="radio"
                                    aria-checked={selected}
                                    onClick={() => setActive(index)}
                                    onPointerEnter={(event) => {
                                        if (event.pointerType === "mouse") setActive(index)
                                    }}
                                    className={`relative flex min-h-[4.25rem] items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3 text-left transition-colors duration-300 ${
                                        selected
                                            ? "border-foreground bg-foreground text-background"
                                            : "border-foreground/12 bg-background/50 text-foreground hover:border-foreground/35"
                                    }`}
                                >
                                    <span
                                        className={`font-mono text-[11px] tabular-nums ${
                                            selected ? "text-background/55" : "text-muted-foreground"
                                        }`}
                                    >
                                        {item.index}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block truncate text-base font-medium tracking-tight">
                                            {item.title}
                                        </span>
                                        <span
                                            className={`mt-0.5 block truncate text-xs ${
                                                selected ? "text-background/65" : "text-muted-foreground"
                                            }`}
                                        >
                                            {item.tags.slice(0, 3).join("  ·  ")}
                                        </span>
                                    </span>
                                    <ArrowUpRight
                                        className={`size-4 shrink-0 ${selected ? "text-background" : "text-muted-foreground"}`}
                                    />
                                    {selected && !reduce && !paused ? (
                                        <motion.span
                                            key={current.key}
                                            className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-background/50"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                                        />
                                    ) : null}
                                </button>
                            )
                        })}
                    </div>
                    <Link
                        href="/projects"
                        className="mt-5 inline-flex text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                        {action}
                    </Link>
                </div>

                <div className="relative md:col-span-7">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-8 top-6 bottom-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(90,120,180,0.22),transparent_68%)]"
                    />
                    <div className="relative mx-auto h-[32rem] w-full max-w-xl [perspective:1500px] sm:h-[38rem]">
                        {items.map((item, index) => {
                            const depth = (index - safeActive + items.length) % items.length
                            const front = depth === 0
                            return (
                                <motion.article
                                    key={item.key}
                                    aria-hidden={!front}
                                    className={`absolute top-[26%] right-[8%] left-0 origin-center sm:right-[12%] ${
                                        front ? "" : "cursor-pointer"
                                    }`}
                                    initial={false}
                                    animate={{
                                        x: depth * (compact ? 14 : 30),
                                        y: depth * (compact ? -20 : -36),
                                        rotate: -7 + depth * (compact ? 4 : 5.5),
                                        rotateY: depth * (compact ? 7 : 11),
                                        scale: 1 - depth * 0.035,
                                        z: front ? 48 : -depth * 36,
                                    }}
                                    transition={reduce ? { duration: 0 } : spring}
                                    style={{ zIndex: items.length - depth }}
                                    onClick={() => setActive(index)}
                                >
                                    <div className={front ? undefined : "pointer-events-none"}>
                                        <PreviewCard item={item} viewLabel={viewLabel} />
                                    </div>
                                </motion.article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

function PreviewCard({ item, viewLabel }: { item: StageItem; viewLabel: string }) {
    return (
        <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#101218] shadow-[0_40px_90px_-36px_rgba(0,0,0,0.75)]">
            <div className="m-2.5 overflow-hidden rounded-[1.15rem] bg-[#f4f5f7] text-[#12141c] sm:m-3">
                <div className="flex items-center gap-1.5 border-b border-black/8 bg-[#e8e9ee] px-3 py-2">
                    <span className="size-2 rounded-full bg-black/15" />
                    <span className="size-2 rounded-full bg-black/10" />
                    <span className="size-2 rounded-full bg-black/10" />
                    <span className="ml-2 truncate text-[10px] tracking-wide text-black/40">{item.title}</span>
                </div>
                <ProductScene projectKey={item.key} />
            </div>
            <div className="px-4 pt-1 pb-4 text-white sm:px-5 sm:pb-5">
                <p className="text-[11px] tracking-[0.18em] text-white/45 uppercase">{item.context}</p>
                <h3 className="mt-1 text-2xl font-medium tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/62">{item.description}</p>
                <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 flex-wrap gap-1.5">
                        {item.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a
                        href={item.href}
                        className="inline-flex shrink-0 items-center gap-1 text-sm text-white underline-offset-4 hover:underline"
                    >
                        {viewLabel}
                        <ArrowUpRight className="size-3.5" />
                    </a>
                </div>
            </div>
        </div>
    )
}

function ProductScene({ projectKey }: { projectKey: string }) {
    if (projectKey === "sadaapex") return <ChartScene />
    if (projectKey === "ulak") return <FleetScene />
    if (projectKey === "tahsildar") return <PayScene />
    if (projectKey === "acun") return <MapScene />
    return <ChartScene />
}

function ChartScene() {
    return (
        <div className="px-4 pt-4 pb-3 sm:px-5 sm:pt-5">
            <div className="flex items-end justify-between">
                <div>
                    <p className="text-[10px] tracking-[0.16em] text-black/40 uppercase">BTC / USDT</p>
                    <p className="mt-1 text-2xl font-medium tracking-[-0.04em]">64.820</p>
                </div>
                <p className="text-xs font-medium text-emerald-600">+2.4%</p>
            </div>
            <svg viewBox="0 0 280 78" className="mt-3 h-20 w-full sm:h-24" aria-hidden>
                <defs>
                    <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#12141c" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#12141c" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d="M0 58 C 24 58, 30 40, 52 42 S 84 22, 108 28 S 146 62, 170 48 S 214 12, 236 18 S 268 8, 280 14 V 78 H 0 Z"
                    fill="url(#chart-fill)"
                />
                <path
                    d="M0 58 C 24 58, 30 40, 52 42 S 84 22, 108 28 S 146 62, 170 48 S 214 12, 236 18 S 268 8, 280 14"
                    fill="none"
                    stroke="#12141c"
                    strokeWidth="2"
                />
            </svg>
        </div>
    )
}

function FleetScene() {
    const rows = [
        { plate: "34 TR 102", live: true },
        { plate: "42 ANK 18", live: true },
        { plate: "06 IST 77", live: false },
        { plate: "35 IZM 09", live: true },
    ]
    return (
        <div className="grid gap-1.5 px-3 py-3 sm:px-4 sm:py-4">
            {rows.map((row) => (
                <div
                    key={row.plate}
                    className="flex items-center gap-3 rounded-xl bg-white px-3 py-2"
                >
                    <span className={`size-1.5 rounded-full ${row.live ? "bg-emerald-500" : "bg-amber-500"}`} />
                    <span className="text-xs font-medium tracking-wide">{row.plate}</span>
                    <span className="ml-auto h-1 w-16 overflow-hidden rounded-full bg-black/8">
                        <span
                            className="block h-full rounded-full bg-[#151821]"
                            style={{ width: row.live ? "72%" : "38%" }}
                        />
                    </span>
                </div>
            ))}
        </div>
    )
}

function PayScene() {
    return (
        <div className="px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-[10px] tracking-[0.16em] text-black/40 uppercase">TRY</p>
            <p className="mt-1 text-3xl font-medium tracking-[-0.045em]">₺ 184.250</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
                {["128", "96%", "12"].map((value) => (
                    <div key={value} className="rounded-xl bg-white px-2.5 py-2.5">
                        <p className="text-sm font-medium">{value}</p>
                        <span className="mt-2 block h-1 w-8 rounded-full bg-[#151821]/80" />
                    </div>
                ))}
            </div>
        </div>
    )
}

function MapScene() {
    return (
        <div className="relative h-36 overflow-hidden sm:h-40">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(#e1e3ea 1px, transparent 1px), linear-gradient(90deg, #e1e3ea 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                }}
            />
            <svg viewBox="0 0 320 160" className="absolute inset-0 h-full w-full" aria-hidden>
                <path
                    d="M40 110 C 90 108, 110 70, 150 74 S 210 40, 250 48"
                    fill="none"
                    stroke="#12141c"
                    strokeWidth="2"
                    strokeDasharray="4 5"
                />
            </svg>
            <span className="absolute top-[30%] left-[28%] size-3 rounded-full bg-[#12141c] ring-4 ring-[#12141c]/15" />
            <span className="absolute top-[26%] left-[74%] size-3 rounded-full bg-[#3d6bff] ring-4 ring-[#3d6bff]/20" />
        </div>
    )
}
