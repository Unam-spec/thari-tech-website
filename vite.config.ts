import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/thari-tech-website/",
  plugins: [react()],
});
