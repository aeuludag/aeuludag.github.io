import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: "public/404.html",
          dest: "",
        },
      ],
    }),
  ],
});
