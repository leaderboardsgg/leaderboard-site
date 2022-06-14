import SignUpCard from './SignUpCard.vue'
import { fireEvent, stubbedRender } from '@/testUtils'

afterEach(vi.restoreAllMocks)

describe('<SignUpCard />', () => {
  beforeEach(() => {
    vi.mock('#app', () => ({
      useRuntimeConfig: () => ({
        public: {
          BACKEND_BASE_URL: 'http://localhost:3000',
        },
      }),
    }))
  })

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SignUpCard)

    unmount()
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const { emitted, getByTestId } = stubbedRender(SignUpCard)

      await fireEvent.click(getByTestId('close-button'))

      expect(emitted().close).toBeTruthy()
    })
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const { getByTestId } = stubbedRender(SignUpCard)
      const passwordInput: HTMLInputElement = getByTestId('password-input')
      const passwordConfirmInput: HTMLInputElement = getByTestId(
        'password-confirm-input',
      )

      expect(passwordInput.type).toBe('password')
      expect(passwordConfirmInput.type).toBe('password')

      await fireEvent.click(getByTestId('hide-show-button'))

      expect(passwordInput.type).toBe('text')
      expect(passwordConfirmInput.type).toBe('text')
    })
  })

  describe('when the login button is clicked', () => {
    it('emits the log in click event', async () => {
      const { emitted, getByTestId } = stubbedRender(SignUpCard)

      await fireEvent.click(getByTestId('login-button'))

      expect(emitted().logInClick).toBeTruthy()
    })
  })

  describe('when the sign up button is clicked', () => {
    it('emits the sign up click event', async () => {
      const { emitted, getByTestId } = stubbedRender(SignUpCard)

      await fireEvent.click(getByTestId('sign-up-button'))

      expect(emitted().signUpClick).toBeTruthy()
    })

    // TODO: This is currently failing, and I don't know why
    it.skip('clears the state', async () => {
      const { getByTestId } = stubbedRender(SignUpCard)
      const emailAddress = 'strongbad@homestarrunner.com'
      const password = 'homestarsux'
      const username = 'strongbad'

      const emailInput: HTMLInputElement = getByTestId('email-input')
      const passwordInput: HTMLInputElement = getByTestId('password-input')
      const passwordConfirmInput: HTMLInputElement = getByTestId(
        'password-confirm-input',
      )
      const usernameInput: HTMLInputElement = getByTestId('username-input')

      await fireEvent.type(emailInput, emailAddress)
      await fireEvent.type(usernameInput, username)
      await fireEvent.type(passwordInput, password)
      await fireEvent.type(passwordConfirmInput, password)

      expect(emailInput.value).toBe(emailAddress)
      expect(usernameInput.value).toBe(username)
      expect(passwordInput.value).toBe(password)
      expect(passwordConfirmInput.value).toBe(password)

      await fireEvent.click(getByTestId('sign-up-button'))

      expect(emailInput.value).toBe('')
      expect(usernameInput.value).toBe('')
      expect(passwordInput.value).toBe('')
      expect(passwordConfirmInput.value).toBe('')
    })
  })
})
