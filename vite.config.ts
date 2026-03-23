import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Use a relative path or the alias to keep the string simple for TS
        additionalData: `@use "@/styles/_variables.scss" as *;`,
      },
    },
  },
});