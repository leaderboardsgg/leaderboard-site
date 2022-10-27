/* eslint-disable no-console */
import { mount } from '@vue/test-utils'

import LogInCard from './LogInCard.vue'
import { FullRequestParams } from 'root/lib/api/http-client'

const token = 'jwt-token'
type fetchMockCall = [string, FullRequestParams]

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
})

describe('<LogInCard />', () => {
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify({ token }))
  })

  const LogInCardWrapper = mount(LogInCard)

  it('should render without crashing', () => {
    expect(LogInCardWrapper.isVisible()).toBe(true)
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = mount(LogInCard)

      const closeButton = wrapper.get('[data-testid="close-button"]')

      await closeButton.trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const wrapper = mount(LogInCard)
      const passwordInput = wrapper.get('[data-testid="password-input"]')

      expect(passwordInput.attributes('type')).toBe('password')

      await wrapper.get('[data-testid="hide-show-button"]').trigger('click')

      expect(passwordInput.attributes('type')).toBe('text')
    })
  })

  describe('when enter key is released on the password input field', () => {
    it('emits the close event', async () => {
      const wrapper = mount(LogInCard)

      await wrapper.get('[data-testid="password-input"]').trigger('keyup.enter')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the login button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'homestarsux'

    it('emits the close event', async () => {
      const wrapper = mount(LogInCard)

      await wrapper.get('[data-testid="login-button"]').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })

    it('clears the state', async () => {
      const wrapper = mount(LogInCard)

      const emailInput = wrapper.get('[data-testid="email-input"]')
      const passwordInput = wrapper.get('[data-testid="password-input"]')

      await emailInput.setValue(emailAddress)
      await passwordInput.setValue(password)

      const emailInputElement = emailInput.getRootNodes()[0] as HTMLInputElement
      const passwordInputElement =
        passwordInput.getRootNodes()[0] as HTMLInputElement

      expect(emailInputElement.value).toBe(emailAddress)
      expect(passwordInputElement.value).toBe(password)

      await wrapper.get('[data-testid="login-button"]').trigger('click')

      expect(emailInputElement.value).toBe('')
      expect(passwordInputElement.value).toBe('')
    })

    // this test is still failing
    it.skip('calls the api', async () => {
      const wrapper = mount(LogInCard)

      const emailInput = wrapper.get('[data-testid="email-input"]')
      const passwordInput = wrapper.get('[data-testid="password-input"]')

      await emailInput.setValue(emailAddress)
      await passwordInput.setValue(password)

      await wrapper.get('[data-testid="login-button"]').trigger('click')

      const apiCalls = fetchMock.mock.calls as fetchMockCall[]
      console.log(apiCalls)
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
      const wrapper = mount(LogInCard)

      await wrapper.get('[data-testid="sign-up-button"]').trigger('click')

      expect(wrapper.emitted().signUpClick).toBeTruthy()
    })
  })
})
