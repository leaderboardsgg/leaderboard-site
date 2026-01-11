import { mountSuspended } from '@nuxt/test-utils/runtime'
import HideShowPassword from './HideShowPassword.vue'

describe('<HideShowPassword />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(HideShowPassword)

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('Visible eye, hidden eye, and the button', () => {
    it('should render without crashing', async () => {
      const wrapper = await mountSuspended(HideShowPassword)
      const passwordButton = wrapper.getByTestId('hide-show-password-button')
      const hiddenEyeIcon = wrapper.getByTestId('hidden-eye-icon')
      const visibleEyeIcon = wrapper.getByTestId('visible-eye-icon')

      expect(passwordButton.isVisible()).toBe(true)
      expect(hiddenEyeIcon.isVisible()).toBe(true)
      expect(visibleEyeIcon.isVisible()).toBe(true)
    })
  })

  describe('when clicking the button', () => {
    it('should toggle the state', async () => {
      const wrapper = await mountSuspended(HideShowPassword, {
        attachTo: document.body,
      })

      expect(wrapper.getByTestId('hidden-eye-icon').isVisible()).toBe(true)
      expect(wrapper.getByTestId('visible-eye-icon').isVisible()).toBe(false)

      await wrapper.getByTestId('hide-show-password-button').trigger('click')

      expect(wrapper.getByTestId('hidden-eye-icon').isVisible()).toBe(false)
      expect(wrapper.getByTestId('visible-eye-icon').isVisible()).toBe(true)
    })
  })

  describe('when the button is focus and the enter key up event is triggered', () => {
    it('should toggle the state', async () => {
      const wrapper = await mountSuspended(HideShowPassword, {
        attachTo: document.body,
      })

      expect(wrapper.getByTestId('hidden-eye-icon').isVisible()).toBe(true)
      expect(wrapper.getByTestId('visible-eye-icon').isVisible()).toBe(false)

      await wrapper
        .getByTestId('hide-show-password-button')
        .trigger('keyup.enter')

      expect(wrapper.getByTestId('hidden-eye-icon').isVisible()).toBe(false)
      expect(wrapper.getByTestId('visible-eye-icon').isVisible()).toBe(true)
    })
  })
})
