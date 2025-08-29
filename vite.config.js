import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/my-owen-portfolio/",
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
});
