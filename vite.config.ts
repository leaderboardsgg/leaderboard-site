import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint'

// Used in Vitest
export const ViteConfig = {
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
}

export default defineConfig(ViteConfig)
