import { mount, enableAutoUnmount } from '@vue/test-utils'
import { getByClass } from 'root/testUtils'
import resetPassword from 'pages/reset-password.vue'

function getResetPasswordWrapper() {
  return mount(resetPassword)
}

vi.stubGlobal('definePageMeta', () => {})

enableAutoUnmount(afterEach)

describe('/reset-password?code=<RESET_PASSWORD_CODE>', () => {
  it('should render without crashing', () => {
    const wrapper = getResetPasswordWrapper()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render the loader', () => {
    const wrapper = getResetPasswordWrapper()
    expect(getByClass(wrapper, 'loader__container').isVisible()).toBe(true)
  })
})
