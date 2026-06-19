import { mountSuspended } from '@nuxt/test-utils/runtime'
import resetPassword from 'pages/reset-password.vue'

vi.stubGlobal('definePageMeta', () => {})

describe('/reset-password?code=<RESET_PASSWORD_CODE>', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(resetPassword)
    expect(wrapper.isVisible()).toBe(true)
  })
})
