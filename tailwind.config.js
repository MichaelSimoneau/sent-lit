/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // slate-900 - Professional/Legal Navy equivalent
          light: '#334155', // slate-700
          dark: '#020617', // slate-950
        },
        secondary: {
          DEFAULT: '#64748b', // slate-500 - Professional Gray
          light: '#94a3b8', // slate-400
        },
        accent: {
          DEFAULT: '#2563eb', // blue-600 - Trust/Action
          hover: '#1d4ed8', // blue-700
        }
      },
      fontFamily: {
        sans: ['System', 'sans-serif'],
        serif: ['Georgia', 'serif'], // For "Gore Vidal" intellectual feel in headings if needed
      }
    },
  },
  plugins: [],
};
