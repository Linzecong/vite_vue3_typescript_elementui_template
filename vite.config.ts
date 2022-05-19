import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, {
  AntDesignVueResolver,
} from 'vite-plugin-components'

const path = require('path')

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        AntDesignVueResolver(),
      ]
    }),
  ],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:5566/',
        changeOrigin: true,
        ws: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    cssCodeSplit: false,
  }

})