import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import SignUpCard from './SignUpCard.vue'

describe('<SignUpCard />', () => {
  const SignUpCardWrapper = mount(SignUpCard)

  test('should render without crashing', () => {
    expect(SignUpCardWrapper.isVisible()).toBe(true)
  })

  // describe('when the close button is clicked', () => {
  //   test('should close the SignUpCard', () => {
  //     SignUpCardWrapper.get('[data-testId="close-button"]').trigger('click')

  //     expect(SignUpCardWrapper.isVisible())
  //   })
  // })

  // describe('when the hide/show button is clicked', () => {
  //   test('changes the password input type to be text', async () => {
  //     const { getByTestId } = stubbedRender(SignUpCard)
  //     const passwordInput: HTMLInputElement = getByTestId('password-input')
  //     const passwordConfirmInput: HTMLInputElement = getByTestId(
  //       'password-confirm-input',
  //     )

  //     expect(passwordInput.type).toBe('password')
  //     expect(passwordConfirmInput.type).toBe('password')

  //     await fireEvent.click(getByTestId('hide-show-button'))

  //     expect(passwordInput.type).toBe('text')
  //     expect(passwordConfirmInput.type).toBe('text')
  //   })
  // })

  // describe('when the login button is clicked', () => {
  //   test('emits the log in click event', async () => {
  //     const { emitted, getByTestId } = stubbedRender(SignUpCard)

  //     await fireEvent.click(getByTestId('login-button'))

  //     expect(emitted().logInClick).toBeTruthy()
  //   })
  // })

  // describe('when the sign up button is clicked', () => {
  //   const emailAddress = 'strongbad@homestarrunner.com'
  //   const password = 'homestarsux'
  //   const username = 'strongbad'

  //   test('emits the sign up click event', async () => {
  //     const { emitted, getByTestId } = stubbedRender(SignUpCard)

  //     await fireEvent.click(getByTestId('sign-up-button'))

  //     expect(emitted().signUpClick).toBeTruthy()
  //   })

  //   test('clears the state', async () => {
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

  //   test('calls the api', async () => {
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
  // })
})
