import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint'
import topLevelAwait from 'vite-plugin-top-level-await'

import type { UserConfigExport } from 'vitest/config'
import { nuxtAliases } from './nuxt.config'

// Used in Vitest
const ViteConfig: UserConfigExport = {
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
    // Needed this on my machine to prevent this erroneous error of
    // ✘ [ERROR] Top-level await is not available in the configured
    // target environment ("chrome87", "edge88", "es2020", "firefox78", "safari13" + 2 overrides)
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  resolve: {
    alias: nuxtAliases,
  },
}

export default ViteConfig
