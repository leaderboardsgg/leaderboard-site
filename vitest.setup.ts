import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
import { localeMessages } from './configUtils'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import type { CookieOptions } from 'nuxt/app'

const fetchMock = createFetchMock(vi)

fetchMock.enableMocks()

mockNuxtImport('useI18n', () => {
  return () => ({
    locale: ref('en'),
    locales: ref([
      {
        code: 'de',
        name: 'Deutsch',
      },
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'es',
        name: 'Español',
      },
      {
        code: 'fr',
        name: 'Français',
      },
      {
        code: 'ja',
        name: '日本語',
      },
    ]),
    messages: localeMessages,
  })
})

mockNuxtImport(
  'useCookie',
  () =>
    <T>(key: string | undefined, opts: CookieOptions<T>) =>
      useState(key, opts.default),
)
