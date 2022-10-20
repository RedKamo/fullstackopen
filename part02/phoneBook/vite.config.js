import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      "/api/persons": "http://localhost:3001",
      rewrite: (path) => path.replace(/^\/app/, ""),
    },
  },
  plugins: [react()],
});
