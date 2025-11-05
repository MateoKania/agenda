import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    open: true,
    host: true,
    port: 5173,
  },
  plugins: [tailwindcss()],
});
