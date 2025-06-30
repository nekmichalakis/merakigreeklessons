import { Button } from "@/components/ui/button"
import * as React from "react";

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<string>(() => {
        const classes = document.documentElement.classList
        if (classes.contains("dark")) return "dark"
        if (classes.contains("high-contrast")) return "high-contrast"
        return "light"
    })

    function toggleTheme() {
        const root = document.documentElement
        root.classList.remove("light", "dark", "high-contrast")

        const newTheme =
            theme === "light" ? "dark" : theme === "dark" ? "high-contrast" : "light"

        if (newTheme !== "light") root.classList.add(newTheme)

        setTheme(newTheme)
    }

    return (
        <Button variant="outline" onClick={toggleTheme}>
            Current Theme: {theme} (Click to change)
        </Button>
    )
}
