import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.tsx',
      fileName: 'index',
      formats: [
        'es'
      ]
    }
  },
  plugins: [vue(),vueJsx({})]
})
