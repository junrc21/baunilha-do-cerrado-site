import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Palette
        wine: {
          50: "#fdf2f3",
          100: "#fce7e8",
          200: "#f9d0d3",
          300: "#f4aab0",
          400: "#ec7980",
          500: "#e04d57",
          600: "#c8303a",
          700: "#a8242e",
          800: "#7a111b",
          900: "#6f0f18",
          950: "#3d040a",
          DEFAULT: "#6A1018",
        },
        cream: {
          50: "#fdfaf6",
          100: "#f6efe8",
          200: "#f1e7dd",
          300: "#eadbcd",
          400: "#dcc9b4",
          DEFAULT: "#F6EFE8",
        },
        gold: {
          light: "#d4aa6a",
          DEFAULT: "#C89A57",
          dark: "#B88646",
          deeper: "#A6783F",
        },
        bark: {
          light: "#D9C7B4",
          DEFAULT: "#D8C1AA",
          dark: "#B8A090",
        },
        text: {
          dark: "#4B1F1D",
          medium: "#5A2A27",
          light: "#7A4A47",
        },
        // shadcn vars
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        elegant: "0 4px 24px rgba(74, 30, 28, 0.08)",
        "elegant-md": "0 8px 40px rgba(74, 30, 28, 0.12)",
        "elegant-lg": "0 16px 64px rgba(74, 30, 28, 0.15)",
        gold: "0 4px 24px rgba(200, 154, 87, 0.25)",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
