import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]', // Это правило для именования статических файлов
      },
    },
    assetsInlineLimit: 0, // Отключаем инлайн ресурсов, чтобы все файлы, такие как изображения, копировались в папку assets
  },
  publicDir: 'public',  // Указываем папку для статики, которую Vite копирует
  resolve: {
    alias: {
      '@images': resolve(__dirname, 'src/images'), // Добавляем алиас для удобного доступа к папке изображений
    }
  }
})
