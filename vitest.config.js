// vitest.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  //   resolve: {
  //     alias: {
  //       "@": path.resolve(__dirname, "./"), // Ensure this points to your src directory
  //     },
  //   },
  test: {
    environment: "jsdom",
    globals: true,

    // setupFiles: "./setupTests.js",
  },
});
