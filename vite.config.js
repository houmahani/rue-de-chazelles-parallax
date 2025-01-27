import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    glsl({
      include: [/\.glsl$/, /\.vert$/, /\.frag$/],
      defaultExtension: 'glsl',
    }),
  ],
  server: {
    hmr: true,
    overlay: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
})
