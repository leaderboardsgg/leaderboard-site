import { mountSuspended } from '@nuxt/test-utils/runtime'
import LogInCard from './LogInCard.vue'
import * as apiComposables from 'composables/api'

const token = 'jwt-token'
const mockSuccessAccountLogin = vi.fn(() =>
  Promise.resolve({ data: { token }, ok: true }),
)
const mockSuccessMe = vi.fn(() =>
  Promise.resolve({
    data: { id: 1, username: 'admin' },
    ok: true,
  }),
)

afterEach(() => {
  vi.restoreAllMocks()
})

describe('<LogInCard />', () => {
  beforeEach(() => {
    vi.mock('lib/api/Account', () => ({
      Account: function Account() {
        this.login = mockSuccessAccountLogin
      },
    }))
    vi.mock('lib/api/Users', () => ({
      Users: function Users() {
        this.me = mockSuccessMe
      },
    }))
  })

  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(LogInCard)

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = await mountSuspended(LogInCard)

      await wrapper.getByTestId('close-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when enter key is released on the password input field', () => {
    it('emits the close event', async () => {
      const wrapper = await mountSuspended(LogInCard)

      await wrapper.getByTestId('password-input').trigger('keyup.enter')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the login button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'homestarsux'

    it('emits the close event', async () => {
      const wrapper = await mountSuspended(LogInCard)

      await wrapper.getByTestId('email-input').setValue(emailAddress)
      await wrapper.getById('password').setValue(password)
      await wrapper.getByTestId('login-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })

    it('clears the state', async () => {
      const wrapper = await mountSuspended(LogInCard)

      const emailInput = wrapper.getByTestId('email-input')
      const passwordInput = wrapper.getById('password')

      await emailInput.setValue(emailAddress)
      await passwordInput.setValue(password)

      const emailInputElement = emailInput.element as HTMLInputElement
      const passwordInputElement = passwordInput.element as HTMLInputElement

      expect(emailInputElement.value).toBe(emailAddress)
      expect(passwordInputElement.value).toBe(password)

      await wrapper.getByTestId('login-button').trigger('click')

      expect(emailInputElement.value).toBe('')
      expect(passwordInputElement.value).toBe('')
    })

    it('calls the api', async () => {
      const useLoginUserSpy = vi.spyOn(apiComposables, 'useLoginUser')

      const wrapper = await mountSuspended(LogInCard)

      await wrapper.getByTestId('email-input').setValue(emailAddress)
      await wrapper.getById('password').setValue(password)

      await wrapper.getByTestId('login-button').trigger('click')

      expect(useLoginUserSpy).toBeCalledTimes(1)
      expect(mockSuccessAccountLogin).toBeCalledTimes(1)
    })
  })

  describe('when the forgot password button is clicked', () => {
    it('emits the forgot password click event', async () => {
      const wrapper = await mountSuspended(LogInCard)

      await wrapper.getByTestId('forgot-password-button').trigger('click')

      expect(wrapper.emitted().forgotPasswordClick).toBeTruthy()
    })
  })

  describe('when the sign up button is clicked', () => {
    it('emits the sign up click event', async () => {
      const wrapper = await mountSuspended(LogInCard)

      await wrapper.getByTestId('sign-up-button').trigger('click')

      expect(wrapper.emitted().signUpClick).toBeTruthy()
    })
  })
})
