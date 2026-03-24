/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                border: "hsl(var(--border))",
                card: "hsl(var(--card))",
            },
            fontFamily: {
                headline: ["Space Grotesk", "sans-serif"],
                body: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"]
            },
            borderRadius: {
                lg: "0.5rem",
                xl: "1rem",
                "2xl": "1.5rem",
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                glow: "0 0 20px rgba(56, 189, 248, 0.5)",
            },
            animation: {
                "blob": "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)", opacity: 1 },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)", opacity: 0.8 },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)", opacity: 0.8 },
                    "100%": { transform: "translate(0px, 0px) scale(1)", opacity: 1 }
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/forms'),
    ],
}
