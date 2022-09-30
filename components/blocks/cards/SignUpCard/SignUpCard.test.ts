// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils'

import { describe, test } from 'vitest'
import SignUpCard from './SignUpCard.vue'
import { fireEvent, stubbedRender } from 'root/testUtils'

vi.mock('#app', () => ({
  useRuntimeConfig: () => ({
    public: {
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
  }),
}))

// afterEach(fetchMock.resetMocks)

describe('<SignUpCard />', async () => {
  await setup({})
  test('should render without crashing', () => {
    const { unmount } = stubbedRender(SignUpCard)

    unmount()
  })

  describe('when the close button is clicked', () => {
    test('should emit the close event', async () => {
      const { emitted, getByTestId } = stubbedRender(SignUpCard)

      await fireEvent.click(getByTestId('close-button'))

      expect(emitted().close).toBeTruthy()
    })
  })

  describe('when the hide/show button is clicked', () => {
    test('changes the password input type to be text', async () => {
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
    test('emits the log in click event', async () => {
      const { emitted, getByTestId } = stubbedRender(SignUpCard)

      await fireEvent.click(getByTestId('login-button'))

      expect(emitted().logInClick).toBeTruthy()
    })
  })

  describe('when the sign up button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'homestarsux'
    const username = 'strongbad'

    test('emits the sign up click event', async () => {
      const { emitted, getByTestId } = stubbedRender(SignUpCard)

      await fireEvent.click(getByTestId('sign-up-button'))

      expect(emitted().signUpClick).toBeTruthy()
    })

    test('clears the state', async () => {
      const { getByTestId } = stubbedRender(SignUpCard)

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

    test('calls the api', async () => {
      const { getByTestId } = stubbedRender(SignUpCard)

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

      await fireEvent.click(getByTestId('sign-up-button'))

      const apiCall = fetchMock.mock.calls[0]
      expect(apiCall?.[0]).toEqual(
        `${process.env.BACKEND_BASE_URL}/api/Users/register`,
      )
      expect(apiCall?.[1]?.method).toEqual('POST')
      expect(apiCall?.[1]?.body).toEqual(
        JSON.stringify({
          email: emailAddress,
          password,
          passwordConfirm: password,
          username,
        }),
      )
    })
  })
})
