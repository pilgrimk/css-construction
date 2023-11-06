/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'header-pattern': "url('./assets/pexels-bg-1.jpg')",
       'hero-bg': "url('./assets/remodeled-kitchen.jpg')",
      },      
    }
  },
  plugins: [],
}

