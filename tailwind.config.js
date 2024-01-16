/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ob-bright": "var(--text-bright)",
        "ob-deep": {
          800: "var(--background-secondary)",
          900: "var(--background-primary)",
        },
      },
    },
  },
  plugins: [],
}
