import { mount, enableAutoUnmount } from '@vue/test-utils'
import { supportedLocales } from 'configUtils'
import LanguageSelector from './LanguageSelector.vue'

function getLanguageSelectorWrapper() {
  return mount(LanguageSelector)
}

enableAutoUnmount(afterEach)

describe('<LanguageSelector />', () => {
  it('should render without crashing', () => {
    const LanguageSelectorWrapper = getLanguageSelectorWrapper()
    expect(LanguageSelectorWrapper.isVisible()).toBe(true)
  })

  it('should render a dropdown with all the locales as options', () => {
    const LanguageSelectorWrapper = getLanguageSelectorWrapper()
    for (const locale of supportedLocales) {
      expect(LanguageSelectorWrapper.html()).toContain(locale.name)
    }
  })
})
