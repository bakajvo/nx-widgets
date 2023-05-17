/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/ui',

  server: {
    port: 3000,
    host: 'localhost',
  },

  preview: {
    port: 3000,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
    federation({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./index": "./src/index",
        "./hooks": "./src/hooks",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
