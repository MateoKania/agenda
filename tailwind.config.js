import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-gradient-to-b",
    "from-yellow-200",
    "to-blue-400",
    "from-blue-200",
    "to-gray-300",
    "from-gray-200",
    "to-gray-400",
    "from-gray-400",
    "to-gray-600",
    "from-blue-300",
    "to-gray-500",
    "from-blue-400",
    "to-gray-700",
    "from-gray-700",
    "to-black",
    "from-white",
    "to-blue-200",
    "from-gray-300",
    "to-gray-500",
    "bg-gray-200",
    "text-gray-800",
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
