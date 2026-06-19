import { mountSuspended } from '@nuxt/test-utils/runtime'
import confirmAccount from 'pages/confirm-account.vue'

vi.stubGlobal('definePageMeta', () => {})

describe('/confirm-account?code=<CONFIRMATION_CODE>', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(confirmAccount)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render the loader', async () => {
    const wrapper = await mountSuspended(confirmAccount)
    expect(wrapper.getByClass('loader__container').isVisible()).toBe(true)
  })
})
