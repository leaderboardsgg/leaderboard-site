export const supportedLocales = [
  {
    code: 'de',
    language: 'de_DE',
    name: 'Deutsch',
    file: 'de.ts',
  },
  {
    code: 'en',
    language: 'en-US',
    name: 'English',
    file: 'en.ts',
  },
  {
    code: 'es',
    name: 'Español',
    file: 'es.ts',
  },
  {
    code: 'fr',
    language: 'fr_FR',
    name: 'Français',
    file: 'fr.ts',
  },
  {
    code: 'ja',
    language: 'ja_JP',
    name: '日本語',
    file: 'ja.ts',
  },
]

export interface LanguageIndexFile {
  welcome: string
  login?: string
  logout?: string
  needToConfirm?: string
  resendConfirmation?: string
  resendConfirmationError?: string
  confirmationReceived?: string
  confirmationReceivedText?: string
  signup?: string
  info?: string
}
