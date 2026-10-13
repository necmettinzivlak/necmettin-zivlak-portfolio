export function Atmosphere() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="wisp-slot wisp-a">
                <div className="wisp is-live" />
            </div>
            <div className="wisp-slot wisp-b">
                <div className="wisp is-live" />
            </div>
            <div className="wisp-slot wisp-c">
                <div className="wisp is-live" />
            </div>
            <div className="orb orb-a is-live" />
            <div className="orb orb-b is-live" />
        </div>
    )
}
