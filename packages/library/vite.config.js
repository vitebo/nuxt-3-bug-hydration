import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "Library",
      fileName: "library",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});