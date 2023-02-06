import { type LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { mount } from '@vue/test-utils'
import { mockI18n } from 'root/vitest.setup'
import LanguageSelector from './LanguageSelector.vue'

const mockedI18n = mockI18n()
const locales = mockedI18n.locales as LocaleObject[]

describe('<LanguageSelector />', () => {
  const LanguageSelectorWrapper = mount(LanguageSelector)

  it('should render without crashing', () => {
    expect(LanguageSelectorWrapper.isVisible()).toBe(true)
  })

  it('should render a dropdown with all the locales as options', () => {
    for (const locale of locales) {
      expect(LanguageSelectorWrapper.html()).toContain(locale.name)
    }
  })
})
