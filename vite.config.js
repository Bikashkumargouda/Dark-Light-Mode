import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Dark-Light-Mode/", // Use your repository name here
  plugins: [react()],
  build: {
    outDir: "dist", // Default output directory for Vite, can change to 'build' if needed
  },
});
