import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/claudia-site/",
  // build: {
  //   outDir: "dist/claudia-site", // Specifica la sottocartella di output
  //   // rollupOptions: {
  //   //   output: {
  //   //     // Mantieni i percorsi relativi per gli asset
  //   //     assetFileNames: "assets/[name]-[hash][extname]",
  //   //     chunkFileNames: "assets/[name]-[hash].js",
  //   //     entryFileNames: "assets/[name]-[hash].js",
  //   //   },
  //   // },
  // },

  // resolve: {
  //   alias: {
  //     '@assets': `/claudia-site/assets`,
  //   },
  // },
  // server: {
  //   middlewareMode: false,
  // },
});
