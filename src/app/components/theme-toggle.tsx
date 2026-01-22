"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed bottom-8 right-8">
            <button
                className="p-2 text-[#616f89] hover:text-primary transition-colors cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                <span className="material-symbols-outlined text-[20px]">dark_mode</span>
            </button>
        </div>
    );
}
