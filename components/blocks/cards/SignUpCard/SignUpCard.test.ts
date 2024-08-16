import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByTestId, getHTMLElement } from 'root/testUtils'
import SignUpCard from './SignUpCard.vue'

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

      await getByTestId(wrapper, 'close-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  // TODO: Update this test once the inputs can be controlled together
  describe.skip('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      const passwordInputElement = getHTMLElement(
        getByTestId(wrapper, 'password-input'),
      ) as HTMLInputElement
      const passwordConfirmInputElement = getHTMLElement(
        getByTestId(wrapper, 'password-confirm-input'),
      ) as HTMLInputElement

      expect(passwordInputElement.type).toBe('password')
      expect(passwordConfirmInputElement.type).toBe('password')

      await getByTestId(wrapper, 'hide-show-button').trigger('click')

      expect(passwordInputElement.type).toBe('text')
      expect(passwordConfirmInputElement.type).toBe('text')
    })
  })

  describe('when the login button is clicked', () => {
    it('emits the log in click event', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      await getByTestId(wrapper, 'login-button').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('logInClick')
    })
  })

  describe('when the sign up button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'Homestarsux42'
    const username = 'strongbad'

    it.skip('emits the sign up click event', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      await getByTestId(wrapper, 'sign-up-button').trigger('click')

      expect(wrapper.emitted().signUpClick).toBeTruthy()
    })

    it.skip('clears the state', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      const emailInputElement = getHTMLElement(
        getByTestId(wrapper, 'email-input'),
      ) as HTMLInputElement
      const passwordInputElement = getHTMLElement(
        getByTestId(wrapper, 'password-input'),
      ) as HTMLInputElement
      const passwordConfirmInputElement = getHTMLElement(
        getByTestId(wrapper, 'password-confirm-input'),
      ) as HTMLInputElement
      const usernameInputElement = getHTMLElement(
        getByTestId(wrapper, 'username-input'),
      ) as HTMLInputElement

      await getByTestId(wrapper, 'email-input').setValue(emailAddress)
      await getByTestId(wrapper, 'username-input').setValue(username)
      await getByTestId(wrapper, 'password-input').setValue(password)
      await getByTestId(wrapper, 'password-confirm-input').setValue(password)

      expect(emailInputElement.value).toBe(emailAddress)
      expect(usernameInputElement.value).toBe(username)
      expect(passwordInputElement.value).toBe(password)
      expect(passwordConfirmInputElement.value).toBe(password)

      await getByTestId(wrapper, 'sign-up-button').trigger('click')

      expect(emailInputElement.value).toBe('')
      expect(usernameInputElement.value).toBe('')
      expect(passwordInputElement.value).toBe('')
      expect(passwordConfirmInputElement.value).toBe('')
    })

    it('calls the api', async () => {
      const wrapper = await mountSuspended(SignUpCard)

      await getByTestId(wrapper, 'email-input').setValue(emailAddress)
      await getByTestId(wrapper, 'username-input').setValue(username)
      await wrapper
        .get(`.password-input > [data-testid="password-input"]`)
        .setValue(password)
      await wrapper
        .get(`.password-input > [data-testid="password-confirm-input"]`)
        .setValue(password)
      await getByTestId(wrapper, 'sign-up-button').trigger('click')

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
