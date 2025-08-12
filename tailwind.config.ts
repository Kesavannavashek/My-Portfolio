import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
   './src/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cherry: ['var(--font-cherry-cream-soda)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
