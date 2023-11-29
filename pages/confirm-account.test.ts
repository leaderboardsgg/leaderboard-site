import { mount, enableAutoUnmount } from '@vue/test-utils'
import { getByClass } from 'root/testUtils'
import confirmAccount from 'pages/confirm-account.vue'

function getConfirmAccountWrapper() {
  return mount(confirmAccount)
}

vi.stubGlobal('definePageMeta', () => {})

enableAutoUnmount(afterEach)

describe('/confirm-account?code=<CONFIRMATION_CODE>', () => {
  it('should render without crashing', () => {
    const wrapper = getConfirmAccountWrapper()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render the loader', () => {
    const wrapper = getConfirmAccountWrapper()
    expect(getByClass(wrapper, 'loader__container').isVisible()).toBe(true)
  })
})
