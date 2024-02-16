import { mount, enableAutoUnmount } from '@vue/test-utils'
import { getByTestId, getHTMLElement } from 'root/testUtils'
import PasswordInput from './PasswordInput.vue'

function getPasswordInputWrapper() {
  return mount(PasswordInput)
}

afterEach(() => {
  vi.restoreAllMocks()
})

enableAutoUnmount(afterEach)

describe('<PasswordInput />', () => {
  it('should render without crashing', () => {
    const wrapper = getPasswordInputWrapper()

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const wrapper = getPasswordInputWrapper()
      const passwordInputElement = getHTMLElement(
        wrapper.get('input'),
      ) as HTMLInputElement

      expect(passwordInputElement.type).toBe('password')

      await getByTestId(wrapper, 'hide-show-button').trigger('click')

      expect(passwordInputElement.type).toBe('text')
    })
  })
})
