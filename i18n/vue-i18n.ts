import type { VueI18nOptions } from 'vue-i18n';
import en from '@/i18n/en'

export default (): VueI18nOptions => ({
  fallbackLocale: 'en',
  locale: 'en',
  messages: {
    en,
  },
})
