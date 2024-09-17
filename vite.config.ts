import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "click-speech",
      fileName: () => `click-speech.js`,
      formats: ['cjs']
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'click-speech.css';
          return <string>assetInfo.name;
        },
      },
    },
  }
}) 