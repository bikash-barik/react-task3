/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('./assets/banner.png')",
        "imageContent-background": "url('./assets/swiss.jpg')",
      },
    },
  },
  plugins: [],
};
