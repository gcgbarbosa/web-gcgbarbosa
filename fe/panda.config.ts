import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,ts,svelte}'],

  // Files to exclude
  exclude: [],

  // No jsxFramework: Panda only emits the styled `styled-system/jsx` components for
  // react | preact | solid | vue | qwik. Svelte uses `css()` + `styled-system/patterns`.

  // Useful for theme customization
  theme: {
    extend: {}
  },

  // The output directory for your css system
  outdir: 'styled-system'
});
