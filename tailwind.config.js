// tailwind.config.js (ESM)
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // simplest: a hex works fine; /90 opacity modifiers also work
      colors: {
        brand: "#2563eb", // pick your brand color
      },
    },
  },
  plugins: [],
};
