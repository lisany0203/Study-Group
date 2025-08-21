// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router in src
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // For shared components in src
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
