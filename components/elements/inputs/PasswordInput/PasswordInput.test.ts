import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getHTMLElement } from 'root/testUtils'
import PasswordInput from './PasswordInput.vue'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('<PasswordInput />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(PasswordInput)

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const wrapper = await mountSuspended(PasswordInput)
      const passwordInputElement = getHTMLElement(
        wrapper.get('input'),
      ) as HTMLInputElement

      expect(passwordInputElement.type).toBe('password')

      await wrapper.setProps({ showPassword: true })

      expect(passwordInputElement.type).toBe('text')
    })
  })
})
