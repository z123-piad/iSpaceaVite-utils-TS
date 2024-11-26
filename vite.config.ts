import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts', // 入口文件路徑
      name: 'Houttuynia', // 導出的全局變量名（自定義）
      fileName: 'houttuynia', // 导出文件的文件名（自定义）
    },
  },
})
