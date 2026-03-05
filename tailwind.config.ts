import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A1135', // Navy Blue from header
        secondary: '#D32F2F', // Red accent from logo
        accent: '#008080', // Teal implied from description
        'background-light': '#F8FAFC',
        'background-dark': '#121212',
        'surface-light': '#FFFFFF',
        'surface-dark': '#1E1E1E',
        'text-light': '#333333',
        'text-dark': '#E0E0E0',
      },
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem', // Subtler border radius globally
        'xl': '0.5rem',
        '2xl': '0.75rem',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'flat': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
} satisfies Config
