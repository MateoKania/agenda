import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-gradient-to-b from-yellow-200 to-blue-400 text-gray-800",
    "bg-gradient-to-b from-blue-200 to-gray-300 text-gray-800",
    "bg-gradient-to-b from-gray-200 to-gray-400",
    "bg-gradient-to-b from-gray-400 to-gray-600",
    "bg-gradient-to-b from-blue-300 to-gray-500",
    "bg-gradient-to-b from-blue-400 to-gray-700",
    "bg-gradient-to-b from-gray-700 to-black",
    "bg-gradient-to-b from-white to-blue-200",
    "bg-gradient-to-b from-gray-300 to-gray-500",
    "bg-gray-200",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1E40AF",
      },
    },
  },
  plugins: [daisyui],
};
