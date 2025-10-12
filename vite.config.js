/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,       // allow test, expect, etc. globally
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // optional
  },
});
