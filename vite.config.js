import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vite.dev/config/
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


// /* eslint-disable no-undef */
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr';
// import path from 'node:path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   plugins: [react(), svgr()],
//   base: '/HealthyHub/',
// });