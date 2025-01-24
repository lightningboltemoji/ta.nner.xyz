import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;
