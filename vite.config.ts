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
        // We use path.resolve to find the exact file on your Mac
        additionalData: `@use "${path.resolve(__dirname, "src/styles/_variables.scss")}" as *;`,
        api: 'modern-compiler'
      },
    },
  },
});