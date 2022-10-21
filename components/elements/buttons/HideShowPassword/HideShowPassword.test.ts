import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import HideShowPassword from './HideShowPassword.vue'

describe('<HideShowPassword />', () => {
  const HideShowPasswordWrapper = mount(HideShowPassword)

  test('should render without crashing', () => {
    expect(HideShowPasswordWrapper.isVisible()).toBe(true)
  })

  const passwordButton = HideShowPasswordWrapper.get(
    '[data-testid="hide-show-password-button"]',
  )
  const hiddenEyeIcon = HideShowPasswordWrapper.get(
    '[data-testid="hidden-eye-icon"]',
  )
  const visibleEyeIcon = HideShowPasswordWrapper.get(
    '[data-testid="visible-eye-icon"]',
  )
  describe('Visible eye and hidden eye icons ', () => {
    test('should render', () => {
      expect(hiddenEyeIcon.isVisible()).toBe(true)
      expect(visibleEyeIcon.isVisible()).toBe(true)
    })
  })

  // ree work
  describe('when clicking the button', () => {
    test('should toggle the state', async () => {
      expect(hiddenEyeIcon.attributes('style')).toContain('display: block')
      expect(visibleEyeIcon.attributes('style')).toContain('display: none')

      await passwordButton.trigger('click')

      expect(hiddenEyeIcon.attributes('style')).toContain('display: none')
      expect(visibleEyeIcon.attributes('style')).toContain('display: block')
    })
  })

  describe('when the button is focus and the enter key up event is triggered', () => {
    test('should toggle the state', async () => {
      expect(hiddenEyeIcon.attributes).toContain('display: block')
      expect(visibleEyeIcon.attributes('style')).toContain('display: none')

      await passwordButton.trigger('keyup.enter')

      expect(hiddenEyeIcon.attributes('style')).toContain('display: none')
      expect(visibleEyeIcon.attributes('style')).toContain('display: block')
    })
  })
})
