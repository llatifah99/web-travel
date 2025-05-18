/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-001541": "#001541",
        "blue-00317E": "#00317E",
        "yellow-FFB729": "#FFB729",
        "gray-D0D3D9": "#D0D3D9",
      },
    },
  },
  plugins: [],
};
