import { mount } from '@vue/test-utils'
import { supportedLocales } from 'configUtils'
import LanguageSelector from './LanguageSelector.vue'

describe('<LanguageSelector />', () => {
  const LanguageSelectorWrapper = mount(LanguageSelector)

  it('should render without crashing', () => {
    expect(LanguageSelectorWrapper.isVisible()).toBe(true)
  })

  it('should render a dropdown with all the locales as options', () => {
    for (const locale of supportedLocales) {
      expect(LanguageSelectorWrapper.html()).toContain(locale.name)
    }
  })
})
