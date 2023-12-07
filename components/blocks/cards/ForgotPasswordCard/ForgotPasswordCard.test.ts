import { mount, enableAutoUnmount } from '@vue/test-utils'
import { getByTestId } from 'root/testUtils'
import ForgotPasswordCard from './ForgotPasswordCard.vue'

function getForgotPasswordCardWrapper() {
  return mount(ForgotPasswordCard)
}

enableAutoUnmount(afterEach)

describe('<ForgotPasswordCard />', () => {
  it('should render without crashing', () => {
    const wrapper = getForgotPasswordCardWrapper()

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = getForgotPasswordCardWrapper()

      await getByTestId(wrapper, 'close-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the cancel button is clicked', () => {
    it('should emit the cancelClick event', async () => {
      const wrapper = getForgotPasswordCardWrapper()

      await getByTestId(wrapper, 'cancel-button').trigger('click')

      expect(wrapper.emitted().cancelClick).toBeTruthy()
    })
  })

  describe('when the reset password button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = getForgotPasswordCardWrapper()

      await getByTestId(wrapper, 'reset-password-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })
})
