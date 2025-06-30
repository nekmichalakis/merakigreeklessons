import * as React from "react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const themes = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "High Contrast", value: "high-contrast" },
]

export function ThemeDrawer() {
    const [open, setOpen] = React.useState(false)
    const [theme, setTheme] = React.useState<string>(() => {
        const classes = document.documentElement.classList
        if (classes.contains("dark")) return "dark"
        if (classes.contains("high-contrast")) return "high-contrast"
        return "light"
    })
    const radiosRef = React.useRef<Array<HTMLInputElement | null>>([])

    function selectTheme(newTheme: string) {
        const root = document.documentElement
        root.classList.remove("light", "dark", "high-contrast")
        if (newTheme !== "light") root.classList.add(newTheme)
        setTheme(newTheme)
        setOpen(false)
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
        const idx = themes.findIndex(t => t.value === theme)
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault()
            const next = (idx + 1) % themes.length
            setTheme(themes[next].value)
            radiosRef.current[next]?.focus()
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault()
            const prev = (idx - 1 + themes.length) % themes.length
            setTheme(themes[prev].value)
            radiosRef.current[prev]?.focus()
        } else if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            selectTheme(theme)
        }
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline">Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</Button>
            </SheetTrigger>
            <SheetContent side="left" className={'px-6'}>
                <SheetHeader>
                    <SheetTitle>Select Theme</SheetTitle>
                </SheetHeader>
                <div
                    className="mt-6 space-y-4"
                    role="radiogroup"
                    aria-label="Theme selection"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                >
                    {themes.map((t, i) => (
                        <label
                            key={t.value}
                            className="flex items-center gap-3 cursor-pointer"
                            role="radio"
                            aria-checked={theme === t.value}
                            tabIndex={theme === t.value ? 0 : -1}
                            onClick={() => selectTheme(t.value)}
                        >
                            <input
                                ref={el => {radiosRef.current[i] = el}}
                                type="radio"
                                name="theme"
                                value={t.value}
                                checked={theme === t.value}
                                onChange={() => setTheme(t.value)}
                                className="accent-primary"
                                aria-hidden="true"
                                tabIndex={-1}
                            />
                            <span>{t.label}</span>
                        </label>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
