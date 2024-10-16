import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    assetsInlineLimit: 0, // Убедись, что файлы не инлайнатся
  },
  publicDir: 'src/images'  // Указание, где лежат статические файлы
})
