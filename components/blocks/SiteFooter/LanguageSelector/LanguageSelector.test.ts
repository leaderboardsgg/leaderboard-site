import { describe, expect, it } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import { supportedLocales } from 'root/configUtils'
import LanguageSelector from './LanguageSelector.vue'

describe('<LanguageSelector />', () => {
  it('should render without crashing', async () => {
    const LanguageSelectorWrapper = await mountSuspended(LanguageSelector)
    expect(LanguageSelectorWrapper.vm).toBeTruthy()
  })

  it('should render a dropdown with all the locales as options', async () => {
    const LanguageSelectorWrapper = await mountSuspended(LanguageSelector)
    for (const locale of supportedLocales) {
      expect(LanguageSelectorWrapper.html()).toContain(locale.name)
    }
  })
})
