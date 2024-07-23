import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByClass } from 'root/testUtils'
import resetPassword from 'pages/reset-password.vue'

vi.stubGlobal('definePageMeta', () => {})

describe.skip('/reset-password?code=<RESET_PASSWORD_CODE>', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(resetPassword)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render the loader', async () => {
    const wrapper = await mountSuspended(resetPassword)
    expect(getByClass(wrapper, 'loader__container').isVisible()).toBe(true)
  })
})
