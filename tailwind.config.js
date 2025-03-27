/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'neon-100': '#e1fddd', //
        'neon-200': '#b9fdad', //
        'neon-300': '#99fd87', //
        'neon-400': '#69fe4e', //
        'neon-500': '#39ff14', // main color
        'neon-600': '#32d515', //
        'neon-700': '#2fb318', // for hovering
        'neon-800': '#28771a', //
        'neon-900': '#145109', //
        'grayish-800': '#121212', // for main background in dark mood
        'grayish-700': '#1e1e1e', // for bg in dark mood
        'grayish-600': '#2d2d2d', // for bg in dark mood
        'grayish-500': '#333333', //For main text in dark mood
        'grayish-400': '#6e7a8a', //For subtext in dark mood,
        'grayish-300': '#bdbdbd', //for subtext in light mood
        'grayish-200': '#faf7f5', //for sub bg in light mood
      },
    },
  },
  plugins: [],
}
