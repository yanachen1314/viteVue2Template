import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 8070
  },
  plugins: [
    vue(),
    Components({
      // 自动注册的组件库，可以根据需要调整
      dirs: ['src/components'], // 自动导入的组件目录
      extensions: ['vue'], // 自动导入的文件类型
      deep: true, // 支持子目录
      resolvers: [
        ElementUiResolver(), // 自动导入 ElementUI 的组件
      ],
    }),
    AutoImport({
      imports: [
        'vue', // 自动导入 Vue API，如 ref、reactive 等
        'vue-router', // 自动导入 Vue Router API
      ],
      // 不生成类型声明文件，'src/auto-imports.d.js'
      dts: false,
    }),
  ],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      // @ 符号指向 src 目录
      "@": resolve(__dirname, "src"),
      // @@ 符号指向 src/common 通用目录
      // "@@": resolve(__dirname, "src/common")
    }
  },
})