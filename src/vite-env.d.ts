/// <reference types="vite/client" />

// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        kunduppdrag: './kunduppdrag.html', 
        kontakt: './kontakt.html',
        omoss: './omoss.html',
        våratjänster: './varatjanster.html', // kan lääga till andra html filer här
      },
    },
  },
});
