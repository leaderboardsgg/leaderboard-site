import { localeMessages } from './configUtils'

export default defineI18nConfig((_nuxt) => ({
  fallbackLocale: 'en',
  legacy: false,
  locale: 'en',
  // TODO: can this be cleaner via some sort of iteration? (not sure)
  messages: localeMessages,
}))
