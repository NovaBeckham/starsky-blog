/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        98: "28rem",
        "12/10": "120%",
      },
      colors: {
        ob: "var(--text-accent)",
        "ob-bright": "var(--text-bright)",
        "ob-deep": {
          800: "var(--background-secondary)",
          900: "var(--background-primary)",
        },
      },
      boxShadow: {
        ob: "var(--accent-shadow)",
      },
    },
  },
  plugins: [],
}
