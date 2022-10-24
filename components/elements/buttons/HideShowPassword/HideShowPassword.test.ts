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
  describe('Visible eye, hidden eye, and the button', () => {
    test('should render without crashing', () => {
      expect(passwordButton.isVisible()).toBe(true)
      expect(hiddenEyeIcon.isVisible()).toBe(true)
      expect(visibleEyeIcon.isVisible()).toBe(true)
    })
  })

  describe('when clicking the button', () => {
    test('should toggle the state', async () => {
      expect(hiddenEyeIcon.html()).not.toContain('style="display: none;')
      expect(visibleEyeIcon.html()).toContain('style="display: none;')

      await passwordButton.trigger('click')

      expect(hiddenEyeIcon.html()).toContain('style="display: none;')
      expect(visibleEyeIcon.html()).not.toContain('style="display: none;')
    })
  })

  //  this contains the previous flip so we need to do the opposite
  describe('when the button is focus and the enter key up event is triggered', () => {
    test('should toggle the state', async () => {
      expect(hiddenEyeIcon.html()).toContain('style="display: none;')
      expect(visibleEyeIcon.html()).not.toContain('style="display: none;')

      await passwordButton.trigger('keyup.enter')

      expect(hiddenEyeIcon.html()).not.toContain('style="display: none;')
      expect(visibleEyeIcon.html()).toContain('style="display: none;')
    })
  })
})
