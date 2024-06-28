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
      animation: {
        type: 'type 4s ease-in-out .12s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },

    },
  },
  plugins: [
    require( 'daisyui' ),
    require( '@tailwindcss/typography' ),
  ],
  daisyui: {
    themes: [ "forest" ],
  },
}
