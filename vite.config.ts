import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
  css: {
    postcss: "./postcss.config.tsx",
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${resolve(
          __dirname,
          "src/scss/_variables.scss"
        )}" as *;`,
      },
    },
  },
  assetsInclude: [
    "**/*.svg",
    "**/*.jpeg",
    "**/*.jpg",
    "**/*.png",
    "**/*.gif",
    "**/*.webp",
    "**/*.hbs",
  ],
});
