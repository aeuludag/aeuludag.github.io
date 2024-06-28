import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // createHtmlPlugin(), <-- EVIL PLUGIN, DO NOT USE IT (it broke opening links in new tabs in dev mode.)
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
