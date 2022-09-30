// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils'

import { ref } from 'vue'
import { describe, test } from 'vitest'
import LogInCard from './LogInCard.vue'
import { fireEvent, stubbedRender } from 'root/testUtils'
import { FullRequestParams } from 'root/lib/api/http-client'

const token = 'jwt-token'

type fetchMockCall = [string, FullRequestParams]

vi.mock('#app', () => ({
  useRuntimeConfig: () => ({
    public: {
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
  }),
  useState: vi.fn(ref),
}))

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
})

describe('<LogInCard />', async () => {
  await setup({})
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify({ token }))
  })

  test('should render without crashing', () => {
    const { unmount } = stubbedRender(LogInCard)

    unmount()
  })

  describe('when the close button is clicked', () => {
    test('should emit the close event', async () => {
      const { emitted, getByTestId } = stubbedRender(LogInCard)

      await fireEvent.click(getByTestId('close-button'))

      expect(emitted().close).toBeTruthy()
    })
  })

  describe('when the hide/show button is clicked', () => {
    test('changes the password input type to be text', async () => {
      const { getByTestId } = stubbedRender(LogInCard)
      const passwordInput: HTMLInputElement = getByTestId('password-input')

      expect(passwordInput.type).toBe('password')

      await fireEvent.click(getByTestId('hide-show-button'))

      expect(passwordInput.type).toBe('text')
    })
  })

  describe('when enter key is released on the password input field', () => {
    test('emits the close event', async () => {
      const { emitted, getByTestId } = stubbedRender(LogInCard)

      await fireEvent.type(getByTestId('password-input'), '{enter}')

      expect(emitted().close).toBeTruthy()
    })
  })

  describe('when the login button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'homestarsux'

    test('emits the close event', async () => {
      const { emitted, getByTestId } = stubbedRender(LogInCard)

      await fireEvent.click(getByTestId('login-button'))

      expect(emitted().close).toBeTruthy()
    })

    test('clears the state', async () => {
      const { getByTestId } = stubbedRender(LogInCard)

      const emailInput: HTMLInputElement = getByTestId('email-input')
      const passwordInput: HTMLInputElement = getByTestId('password-input')

      await fireEvent.type(emailInput, emailAddress)
      await fireEvent.type(passwordInput, password)

      expect(emailInput.value).toBe(emailAddress)
      expect(passwordInput.value).toBe(password)

      await fireEvent.click(getByTestId('login-button'))

      expect(emailInput.value).toBe('')
      expect(passwordInput.value).toBe('')
    })

    test('calls the api', async () => {
      const { getByTestId } = stubbedRender(LogInCard)

      const emailInput: HTMLInputElement = getByTestId('email-input')
      const passwordInput: HTMLInputElement = getByTestId('password-input')

      await fireEvent.type(emailInput, emailAddress)
      await fireEvent.type(passwordInput, password)

      await fireEvent.click(getByTestId('login-button'))

      const apiCalls = fetchMock.mock.calls as fetchMockCall[]
      expect(apiCalls.length).toBe(2)

      const loginApiCall = apiCalls[0]
      expect(loginApiCall?.[0]).toBe(
        `${process.env.BACKEND_BASE_URL}/api/Users/login`,
      )
      expect(loginApiCall?.[1].method).toBe('POST')
      expect(loginApiCall?.[1].body).toEqual(
        JSON.stringify({
          email: emailAddress,
          password,
        }),
      )

      const meApiCall = apiCalls[1]
      expect(meApiCall?.[0]).toBe(
        `${process.env.BACKEND_BASE_URL}/api/Users/me`,
      )
      expect(meApiCall?.[1].method).toBe('GET')

      const headers = meApiCall?.[1]?.headers as Record<string, string>
      expect(headers).toBeDefined()
      expect(Object.keys(headers)).toContain('Authorization')
      expect(headers.Authorization).toEqual(`Bearer ${token}`)
    })
  })

  describe('when the sign up button is clicked', () => {
    test('emits the sign up click event', async () => {
      const { emitted, getByTestId } = stubbedRender(LogInCard)

      await fireEvent.click(getByTestId('sign-up-button'))

      expect(emitted().signUpClick).toBeTruthy()
    })
  })
})
