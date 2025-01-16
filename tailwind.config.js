/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          600: "#25262B",
          900: "#101113",
        },
        green: {
          500: "#1EB720",
        },
      },
    },
  },
  plugins: [],
};
