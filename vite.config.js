import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

export default defineConfig({
 resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  base: '/BON-VINTAGE/',
})
