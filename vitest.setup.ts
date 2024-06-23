import { config } from '@vue/test-utils'
import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
import type { Ref } from 'vue'
import { reactive, isRef, toRef } from 'vue'
import { localeMessages, supportedLocales } from './configUtils'
import { NuxtI18nOptions } from '@nuxtjs/i18n'

const fetchMock = createFetchMock(vi)

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks()

const cookies = reactive<{ [key: string]: any }>({})
interface CookieOptions {
  default?: () => any
}

export const useCookieMock = vi.fn((key: string, opts?: CookieOptions) => {
  const cookie = toRef(cookies, key)
  if (cookie.value === undefined && opts?.default) {
    const initialValue = opts.default()
    if (isRef(initialValue)) {
      cookies[key] = initialValue
      return initialValue as Ref<any>
    }
    cookie.value = initialValue
  }
  return cookie
})
vi.stubGlobal('useCookie', useCookieMock)

// Stolen from here:
// https://zenn.dev/ninebolt6/articles/cadc924cb2416d
const payload = reactive<{ state: Record<string, any> }>({
  state: {},
})
export const useStateMock = vi.fn((key: string, init?: () => any) => {
  const state = toRef(payload.state, key)
  if (state.value === undefined && init) {
    const initialValue = init()
    if (isRef(initialValue)) {
      payload.state[key] = initialValue
      return initialValue as Ref<any>
    }
    state.value = initialValue
  }
  return state
})
vi.stubGlobal('useState', useStateMock)

vi.stubGlobal('useRuntimeConfig', () => ({
  public: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
  },
}))

export const mockI18n = vi.fn((options?: NuxtI18nOptions) => ({
  ...options,
  locale: options?.defaultLocale || 'en',
  locales: options?.locales || supportedLocales,
  vueI18n: {
    messages: localeMessages,
  },
}))
vi.stubGlobal('useI18n', mockI18n)

config.global.mocks = {
  $t: (key: string) => key,
}
