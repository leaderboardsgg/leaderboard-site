import { mount } from '@vue/test-utils'

import SignUpCard from './SignUpCard.vue'

describe('<SignUpCard />', () => {
  const SignUpCardWrapper = mount(SignUpCard)

  it('should render without crashing', () => {
    expect(SignUpCardWrapper.isVisible()).toBe(true)
  })

  // describe('when the close button is clicked', () => {
  //   it('should close the SignUpCard', async () => {
  //     await SignUpCardWrapper.get('[data-testid="close-button"]').trigger(
  //       'click',
  //     )

  //     expect(SignUpCardWrapper.isVisible()).toBe(false)
  //   })
  // })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const passwordInput = SignUpCardWrapper.get(
        '[data-testid="password-input"]',
      )
      const passwordConfirmInput = SignUpCardWrapper.get(
        '[data-testid="password-confirm-input"]',
      )

      expect(passwordInput.attributes('type')).toBe('password')
      expect(passwordConfirmInput.attributes('type')).toBe('password')

      await SignUpCardWrapper.get('[data-testid="hide-show-button"]').trigger(
        'click',
      )

      expect(passwordInput.attributes('type')).toBe('text')
      expect(passwordConfirmInput.attributes('type')).toBe('text')
    })
  })

  describe('when the login button is clicked', () => {
    it('emits the log in click event', async () => {
      await SignUpCardWrapper.get('[data-testid="login-button"]').trigger(
        'click',
      )

      expect(SignUpCardWrapper.emitted()).toHaveProperty('logInClick')
    })
  })

  // describe('when the sign up button is clicked', () => {
  //   // const emailAddress = 'strongbad@homestarrunner.com'
  //   // const password = 'homestarsux'
  //   // const username = 'strongbad'

  //   it('emits the sign up click event', async () => {
  //     await SignUpCardWrapper.get('[data-testid="sign-up-button"]').trigger(
  //       'click',
  //     )

  //     expect(SignUpCardWrapper.emitted().signUpClick).toBeTruthy()
  //     // expect(emitted().signUpClick).toBeTruthy()
  //   })

  //   it('clears the state', async () => {
  //     const { getByTestId } = stubbedRender(SignUpCard)
  //     const emailInput: HTMLInputElement = getByTestId('email-input')
  //     const passwordInput: HTMLInputElement = getByTestId('password-input')
  //     const passwordConfirmInput: HTMLInputElement = getByTestId(
  //       'password-confirm-input',
  //     )
  //     const usernameInput: HTMLInputElement = getByTestId('username-input')
  //     await fireEvent.type(emailInput, emailAddress)
  //     await fireEvent.type(usernameInput, username)
  //     await fireEvent.type(passwordInput, password)
  //     await fireEvent.type(passwordConfirmInput, password)
  //     expect(emailInput.value).toBe(emailAddress)
  //     expect(usernameInput.value).toBe(username)
  //     expect(passwordInput.value).toBe(password)
  //     expect(passwordConfirmInput.value).toBe(password)
  //     await fireEvent.click(getByTestId('sign-up-button'))
  //     expect(emailInput.value).toBe('')
  //     expect(usernameInput.value).toBe('')
  //     expect(passwordInput.value).toBe('')
  //     expect(passwordConfirmInput.value).toBe('')
  //   })
  //   it('calls the api', async () => {
  //     const { getByTestId } = stubbedRender(SignUpCard)
  //     const emailInput: HTMLInputElement = getByTestId('email-input')
  //     const passwordInput: HTMLInputElement = getByTestId('password-input')
  //     const passwordConfirmInput: HTMLInputElement = getByTestId(
  //       'password-confirm-input',
  //     )
  //     const usernameInput: HTMLInputElement = getByTestId('username-input')
  //     await fireEvent.type(emailInput, emailAddress)
  //     await fireEvent.type(usernameInput, username)
  //     await fireEvent.type(passwordInput, password)
  //     await fireEvent.type(passwordConfirmInput, password)
  //     await fireEvent.click(getByTestId('sign-up-button'))
  //     const apiCall = fetchMock.mock.calls[0]
  //     expect(apiCall?.[0]).toEqual(
  //       `${process.env.BACKEND_BASE_URL}/api/Users/register`,
  //     )
  //     expect(apiCall?.[1]?.method).toEqual('POST')
  //     expect(apiCall?.[1]?.body).toEqual(
  //       JSON.stringify({
  //         email: emailAddress,
  //         password,
  //         passwordConfirm: password,
  //         username,
  //       }),
  //     )
  //   })
  //   })
})
