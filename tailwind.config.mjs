/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        'anta': [ 'Anta', 'sans-serif' ],
        'sans': [ 'Saira', 'sans-serif' ],
        'serif': [ 'Trirong', 'serif' ],
        'mono': [ 'Fira Code', 'monospace' ],
      },
    },
  },
  plugins: [
    require( 'daisyui' ),
  ],
  daisyui: {
    themes: [ "forest" ],
  },
}
