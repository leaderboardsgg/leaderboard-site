import { mountSuspended } from '@nuxt/test-utils/runtime'
import SignUpCard from './SignUpCard.vue'
import { useRuntimeConfig } from '#imports'

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
})

describe('<SignUpCard />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(SignUpCard)

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      await wrapper.getByTestId('close-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      const passwordInputElement = wrapper.getByTestId('password-input')
        .element as HTMLInputElement
      const passwordConfirmInputElement = wrapper.getByTestId(
        'password-confirm-input',
      ).element as HTMLInputElement

      expect(passwordInputElement.type).toBe('password')
      expect(passwordConfirmInputElement.type).toBe('password')

      await wrapper.getByTestId('hide-show-button').trigger('click')

      expect(passwordInputElement.type).toBe('text')
      expect(passwordConfirmInputElement.type).toBe('text')
    })
  })

  describe('when the login button is clicked', () => {
    it('emits the log in click event', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      await wrapper.getByTestId('login-button').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('logInClick')
    })
  })

  describe('when the sign up button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'Homestarsux42'
    const username = 'strongbad'

    it('emits the sign up click event', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      await wrapper.getByTestId('sign-up-button').trigger('click')

      await vi.waitFor(() => {
        expect(wrapper.emitted().signUpClick).toBeTruthy()
      })

      const emailInputElement = wrapper.getByTestId('email-input')
        .element as HTMLInputElement

      const passwordInputElement = wrapper.getByTestId('password-input')
        .element as HTMLInputElement

      const passwordConfirmInputElement = wrapper.getByTestId(
        'password-confirm-input',
      ).element as HTMLInputElement

      const usernameInputElement = wrapper.getByTestId('username-input')
        .element as HTMLInputElement

      await wrapper.getByTestId('email-input').setValue(emailAddress)
      await wrapper.getByTestId('username-input').setValue(username)
      await wrapper.getByTestId('password-input').setValue(password)
      await wrapper.getByTestId('password-confirm-input').setValue(password)

      expect(emailInputElement.value).toBe(emailAddress)
      expect(usernameInputElement.value).toBe(username)
      expect(passwordInputElement.value).toBe(password)
      expect(passwordConfirmInputElement.value).toBe(password)

      await wrapper.getByTestId('sign-up-button').trigger('click')

      await vi.waitFor(() => {
        expect(emailInputElement.value).toBe('')
        expect(usernameInputElement.value).toBe('')
        expect(passwordInputElement.value).toBe('')
        expect(passwordConfirmInputElement.value).toBe('')
      })
    })

    it('calls the api', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      await wrapper.getByTestId('email-input').setValue(emailAddress)
      await wrapper.getByTestId('username-input').setValue(username)
      await wrapper
        .get(`.password-input > [data-testid="password-input"]`)
        .setValue(password)
      await wrapper
        .get(`.password-input > [data-testid="password-confirm-input"]`)
        .setValue(password)
      await wrapper.getByTestId('sign-up-button').trigger('click')

      const config = useRuntimeConfig()
      const apiCall = fetchMock.mock.calls[0]
      expect(apiCall?.[0]).toEqual(
        `${config.public.backendBaseUrl}/Account/register`,
      )
      expect(apiCall?.[1]?.method).toEqual('POST')
      expect(apiCall?.[1]?.body).toEqual(
        JSON.stringify({
          email: emailAddress,
          password,
          username,
        }),
      )
    })
  })
})
