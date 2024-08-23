// TODO: This should be uncommented after 8.0.0-beta.11
import { defineI18nConfig } from '#imports'
import { localeMessages, supportedLocales } from './configUtils'

export default defineI18nConfig(() => ({
  availableLocales: supportedLocales,
  fallbackLocale: 'en',
  legacy: false,
  locale: 'en',
  // TODO: can this be cleaner via some sort of iteration? (not sure)
  messages: localeMessages,
}))
