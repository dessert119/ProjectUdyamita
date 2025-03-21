import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/auth/github": "http://localhost:5000",
    },
  },
  plugins: [react()], // Removed componentTagger()
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
