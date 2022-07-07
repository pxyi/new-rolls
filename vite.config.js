import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  envPrefix: 'VUE_APP_',
  envDir: resolve(__dirname, './env'),
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@img', replacement: resolve(__dirname, './src/assets/images') },
    ],
    extensions: ['.js',  '.jsx', '.json', '.vue']
  },

  plugins: [createVuePlugin(/* options */)],
})