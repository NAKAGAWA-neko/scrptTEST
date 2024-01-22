// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        data: "./data.html",
        uma: "./uma.html",
        jockey: "./jockey.html",
        quiz: "./quiz.html",
      },
      output: {
        dir: "dist",
      },
    },
  },
  publicDir: "public",
  base: "",
});
