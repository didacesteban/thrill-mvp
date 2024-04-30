import commonjs from "@rollup/plugin-commonjs";
import inject from "@rollup/plugin-inject";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    commonjs({
      include: "tailwind.config.js",
      transformMixedEsModules: true,
    }),
    reactRefresh(),
  ],
  base: "thrill-mvp",
  build: {
    outDir: "target/dist",
    rollupOptions: {
      plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 8081,
    open: "/thrill-mvp/",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "tailwindConfig",
        replacement: path.resolve(__dirname, "tailwind.config.js"),
      },
    ],
  },
  optimizeDeps: {
    include: ["tailwindConfig"],
  },
});
