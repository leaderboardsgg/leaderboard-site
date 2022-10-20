import eslintPlugin from 'vite-plugin-eslint'

import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

import type { UserConfigExport } from 'vitest/config'
import { nuxtAliases } from './nuxt.config'

// Used in Vitest
export const ViteConfig: UserConfigExport = {
  plugins: [
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        svg: FileSystemIconLoader('./assets/sprite/svg'),
      },
    }),
    Components({
      dts: true,
      resolvers: [
        IconResolver({
          customCollections: ['svg'],
        }),
      ],
    }),
    eslintPlugin({ fix: true, cache: true, failOnWarning: true }),
  ],
  resolve: {
    alias: nuxtAliases,
  },
}

export default ViteConfig
