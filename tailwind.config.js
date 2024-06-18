/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('/header_bg.png')",
        "header-newimage": "url('/new_bg.png')",
        "header-newimage-lg": "url('/bg-dark-lg.jpeg')",
        "bg-secondary": "url('/Untitled-5 1.png')",
        "home-image": "url('/home.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "grey-100": "#EEEEEE",
        "grey-200": "#D9D9D9",
        "grey-500": "#4F4F4F",
        "red-500": "#FF0000",
        "teal-500": "#087E7A",
        "blue-500": "#4D8BC6",
      },
      fontFamily: {
        sans: ["campton", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
