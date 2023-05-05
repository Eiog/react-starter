import { resolve } from 'node:path'
import type { Plugin } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import WebfontDownload from 'vite-plugin-webfont-dl'
import ReactInspector from 'vite-plugin-react-inspector'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import Pages from 'vite-plugin-pages'

import mockApp from './api'

// https://vitejs.dev/config/
const vendorLibs: { match: string[]; output: string }[] = [
  {
    match: ['naive-ui'],
    output: 'naive-ui',
  },
]
// 分包
function configManualChunk(id: string) {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find((item) => {
      const reg = new RegExp(
        `[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`,
        'ig',
      )
      return reg.test(id)
    })
    return matchItem ? matchItem.output : null
  }
}
function mock(): Plugin {
  return {
    name: 'mock',
    configureServer: async (server) => {
    // mount mock server, `/api` is the base url
      server.middlewares.use('/api', mockApp)
    },
  }
}
// eslint-disable-next-line unused-imports/no-unused-vars
export default defineConfig(({ command, mode }) => {
  const { VITE_DEV_PORT } = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      mock(),
      Pages(),
      react(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // https://github.com/feat-agency/vite-plugin-webfont-dl
      WebfontDownload(),
      ReactInspector(),
      webUpdateNotice({
        logVersion: true,
      }),
      AutoImport({
        /* options */
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],
        imports: [
          'react',
          'react-i18next',
          'react-router',
          'react-router-dom',
        ],
        dirs: ['src/hooks', 'src/composables', 'src/stores', 'src/utils'],
        dts: 'src/typings/auto-import.d.ts',
        vueTemplate: true,
      }),
      // see unocss.config.ts for config
      Unocss(),
      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'react-starter',
          short_name: 'react-starter',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        devOptions: {
          enabled: process.env.SW_DEV === 'true',
          /* when using generateSW the PWA plugin will switch to classic */
          type: 'module',
          navigateFallback: 'index.html',
        },
      }),
    ],
    server: {
      port: Number(VITE_DEV_PORT),
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      open: false, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      proxy: {
        '/api': {
          target: 'https://mock.apifox.cn/m1/476417-0-default',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      minify: 'esbuild',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      // 在生产环境移除console.log
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // manualChunks: configManualChunk,
        },
      },
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, './src'), // 路径别名
      },
    },
  }
})
