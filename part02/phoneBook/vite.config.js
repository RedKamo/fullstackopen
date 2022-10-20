import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      "/api/persons": "https://fullstackopen-x8cj.vercel.app/api/persons",
      rewrite: (path) => path.replace(/^\/app/, ""),
    },
  },
  plugins: [react()],
});
