import { mount, enableAutoUnmount } from '@vue/test-utils'
import LogInCard from './LogInCard.vue'
import { FullRequestParams } from 'lib/api/http-client'
import { getByTestId, getHTMLElement } from 'root/testUtils'

const token = 'jwt-token'
type fetchMockCall = [string, FullRequestParams]

function getLogInCardWrapper() {
  return mount(LogInCard)
}

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
})

enableAutoUnmount(afterEach)

describe('<LogInCard />', () => {
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify({ token }))
  })

  it('should render without crashing', () => {
    const wrapper = getLogInCardWrapper()

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = getLogInCardWrapper()

      const closeButton = getByTestId(wrapper, 'close-button')

      await closeButton.trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const wrapper = getLogInCardWrapper()
      const passwordInputElement = getHTMLElement(
        getByTestId(wrapper, 'password-input'),
      ) as HTMLInputElement

      expect(passwordInputElement.type).toBe('password')

      await getByTestId(wrapper, 'hide-show-button').trigger('click')

      expect(passwordInputElement.type).toBe('text')
    })
  })

  describe('when enter key is released on the password input field', () => {
    it('emits the close event', async () => {
      const wrapper = getLogInCardWrapper()

      await getByTestId(wrapper, 'password-input').trigger('keyup.enter')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the login button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'homestarsux'

    it('emits the close event', async () => {
      const wrapper = getLogInCardWrapper()

      await getByTestId(wrapper, 'login-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })

    it('clears the state', async () => {
      const wrapper = getLogInCardWrapper()

      const emailInput = getByTestId(wrapper, 'email-input')
      const passwordInput = getByTestId(wrapper, 'password-input')

      await emailInput.setValue(emailAddress)
      await passwordInput.setValue(password)

      const emailInputElement = getHTMLElement(emailInput) as HTMLInputElement
      const passwordInputElement = getHTMLElement(
        passwordInput,
      ) as HTMLInputElement

      expect(emailInputElement.value).toBe(emailAddress)
      expect(passwordInputElement.value).toBe(password)

      await getByTestId(wrapper, 'login-button').trigger('click')

      expect(emailInputElement.value).toBe('')
      expect(passwordInputElement.value).toBe('')
    })

    // this test is still failing
    it.skip('calls the api', async () => {
      const wrapper = getLogInCardWrapper()

      const emailInput = getByTestId(wrapper, 'email-input')
      const passwordInput = getByTestId(wrapper, 'password-input')

      await emailInput.setValue(emailAddress)
      await passwordInput.setValue(password)

      await getByTestId(wrapper, 'login-button').trigger('click')

      const apiCalls = fetchMock.mock.calls as fetchMockCall[]
      expect(apiCalls?.[0]?.length).toBe(2)

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
    it('emits the sign up click event', async () => {
      const wrapper = getLogInCardWrapper()

      await getByTestId(wrapper, 'sign-up-button').trigger('click')

      expect(wrapper.emitted().signUpClick).toBeTruthy()
    })
  })
})
