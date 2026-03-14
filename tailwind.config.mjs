/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: '#6C63FF',
        'accent-light': '#8B83FF',
        surface: '#0A0A0F',
        'surface-light': '#12121A',
      },
    },
  },
  plugins: [],
};
