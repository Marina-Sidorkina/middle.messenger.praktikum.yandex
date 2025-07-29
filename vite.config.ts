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
        additionalData: `@import "${resolve(
          __dirname,
          "src/scss/_variables.scss"
        )}";`,
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
