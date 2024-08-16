import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByTestId, getHTMLElement } from 'root/testUtils'
import HideShowPassword from './HideShowPassword.vue'

describe('<HideShowPassword />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(HideShowPassword)

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('Visible eye, hidden eye, and the button', () => {
    it('should render without crashing', async () => {
      const wrapper = await mountSuspended(HideShowPassword)
      const passwordButton = getByTestId(wrapper, 'hide-show-password-button')
      const hiddenEyeIcon = getByTestId(wrapper, 'hidden-eye-icon')
      const visibleEyeIcon = getByTestId(wrapper, 'visible-eye-icon')

      expect(passwordButton.isVisible()).toBe(true)
      expect(hiddenEyeIcon.isVisible()).toBe(true)
      expect(visibleEyeIcon.isVisible()).toBe(true)
    })
  })

  describe('when clicking the button', () => {
    it('should toggle the state', async () => {
      const wrapper = await mountSuspended(HideShowPassword)
      const hiddenEyeIconElement = getHTMLElement(
        getByTestId(wrapper, 'hidden-eye-icon'),
      )
      const visibleEyeIconElement = getHTMLElement(
        getByTestId(wrapper, 'visible-eye-icon'),
      )

      expect(hiddenEyeIconElement.style.display).not.toBe('none')
      expect(visibleEyeIconElement.style.display).toBe('none')

      await getByTestId(wrapper, 'hide-show-password-button').trigger('click')

      expect(hiddenEyeIconElement.style.display).toBe('none')
      expect(visibleEyeIconElement.style.display).not.toBe('none')
    })
  })

  describe('when the button is focus and the enter key up event is triggered', () => {
    it('should toggle the state', async () => {
      const wrapper = await mountSuspended(HideShowPassword)
      const hiddenEyeIconElement = getHTMLElement(
        getByTestId(wrapper, 'hidden-eye-icon'),
      )
      const visibleEyeIconElement = getHTMLElement(
        getByTestId(wrapper, 'visible-eye-icon'),
      )

      expect(hiddenEyeIconElement.style.display).not.toBe('none')
      expect(visibleEyeIconElement.style.display).toBe('none')

      await getByTestId(wrapper, 'hide-show-password-button').trigger(
        'keyup.enter',
      )

      expect(hiddenEyeIconElement.style.display).toBe('none')
      expect(visibleEyeIconElement.style.display).not.toBe('none')
    })
  })
})
