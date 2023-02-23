// This file is to share things between different configs
// Such as to resolve an error like:
//
//  ERROR  Importing directly from a nuxt.config file is not allowed.
// Instead, use runtime config or a module. [importing nuxt.config.js from vitest.setup.ts]
import { type LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

import { Deutsch } from './i18n/de/index'
import { English } from './i18n/en/index'
import { Español } from './i18n/es/index'
import { Français } from './i18n/fr/index'
import { 日本語 } from './i18n/ja/index'

export const localeMessages = {
  de: Deutsch,
  en: English,
  es: Español,
  fr: Français,
  ja: 日本語,
}

export const supportedLocales = [
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
] satisfies LocaleObject[]
