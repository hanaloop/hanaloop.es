/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}","./i18n/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '2.7rem'
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    
  },
  plugins: [],
}

