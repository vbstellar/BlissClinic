/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "royal-blue": {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bfe3fe",
          300: "#93d3fd",
          400: "#5fbafb",
          500: "#3a9bf7",
          600: "#3185ed",
          700: "#1c67d9",
          800: "#1d54b0",
          900: "#1e488a",
          950: "#172d54",
        },
      },
    },
  },
  plugins: [],
};
