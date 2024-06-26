/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' ],
  theme: {
    extend: {
      colors: {
        'primary': '#28464c',
        'secondary': '#f8ffeb',
      }
    },
  },
  plugins: [],
}
