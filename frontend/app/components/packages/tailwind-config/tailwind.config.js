import tailwindForms from "@tailwindcss/forms";
import tailwindTypagraphy from "@tailwindcss/typography";
import tailwindAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    // app content
    // "./src/**/*.{ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    // include packages if not transpiling
    "../../packages/ui/**/*.{ts,tsx}",
    "../../packages/editor/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
        bottom: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      colors: {
        background: {
          primary: "var(--background-primary)",
          primaryTransparent: "var(--background-primary-transparent)",
          default: "var(--background-default)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          disabled: "var(--text-disabled)",
        },
        accent: {
          primary: "var(--accent-primary)",
          background: "var(--accent-background)",
        },
        menu: {
          text: "var(--menu-text)",
          backgroundSelected: "var(--background-selected)",
        },
        button: {
          text: {
            primary: "var(--button-text-primary)",
            secondary: "var(--button-text-secondary)",
          },
          background: {
            primary: "var(--button-background-primary)",
            secondary: "var(--button-background-secondary)",
          },
          border: {
            secondary: "var(--button-border-secondary)",
          },
        },
        border: {
          page: "var(--button-border-secondary)",
          textfield: "var(--button-border-secondary)",
        },

        //old styles
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--hover-button)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        dropdownsAccent: {
          DEFAULT: "var(--dropdowns-accent)",
          foreground: "var(--dropdowns-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindForms,
    tailwindTypagraphy,
    require("tailwind-scrollbar")({
      nocompatible: true,
    }),
  ],
};
