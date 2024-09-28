// @ts-nocheck

import { content, plugin } from 'flowbite-react/tailwind'
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import mobileHover from 'tailwind-mobile-hover'
import { gridAreas } from 'tailwindcss-grid-areas'
import touch from 'tailwindcss-touch'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: {
    extract,
    files: ['./src/**/*.{js,ts,jsx,tsx,mdx}', content()],
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      fontFamily: { 
        reddit: 'var(--font-reddit)',
      },
    },
  },
  plugins: [
    fluid,
    mobileHover,
    touch(),
    plugin(),
    gridAreas({
      home: {
        base: ['movie-carousel', 'movie-list', 'movie-grid'],
        md: ['movie-carousel movie-carousel movie-list', 'movie-grid movie-grid movie-grid'],
      },
    }),
  ],
}

export default tailwindConfig
