// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specifies the files where Tailwind should look for class names to generate the necessary CSS.
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Defines a custom, professional color palette inspired by modern development environments.
      colors: {
        'navy': '#0a192f',          // Main background color, a deep, dark blue.
        'light-navy': '#112240',    // Lighter background for cards and panels.
        'lightest-navy': '#233554', // Used for borders or hover states.
        'slate': '#8892b0',         // Default text color for paragraphs and secondary text.
        'light-slate': '#a8b2d1',   // A lighter text color for less important info.
        'lightest-slate': '#ccd6f6', // The main text color used for headings.
        'green': '#64ffda',         // An accent color for links, buttons, and highlights to draw attention.
      },
      // Defines custom animations to add subtle, professional motion to the site.
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      // Defines the keyframes that power the custom animations.
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)', // Starts slightly lower and faded out.
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)', // Ends in its natural position and fully visible.
          },
        },
      },
      // Sets custom font families for a more polished and professional look.
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A clean, modern sans-serif font for general text.
        mono: ['Fira Code', 'monospace'], // A popular monospaced font for code-like text.
      },
    },
  },
  // No extra plugins are needed for this design.
  plugins: [],
};