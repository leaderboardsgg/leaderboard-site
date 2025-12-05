import { mountSuspended } from '@nuxt/test-utils/runtime'
import PasswordInput from './PasswordInput.vue'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('<PasswordInput />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(PasswordInput, {
      props: { showPassword: false },
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const wrapper = await mountSuspended(PasswordInput, {
        props: { showPassword: false },
      })
      const passwordInputElement = wrapper.get('input')
        .element as HTMLInputElement

      expect(passwordInputElement.type).toBe('password')

      await wrapper.setProps({ showPassword: true })

      expect(passwordInputElement.type).toBe('text')
    })
  })
})
