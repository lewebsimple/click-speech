import type { Config } from 'tailwindcss'

// @ts-expect-error Detect if we are in development mode
const isDev = process.env.NODE_ENV === 'development';

export default {
  content: [
    // Add index.html in dev mode
    ...isDev ? ["./index.html"] : [],
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
