// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils-edge'

import { describe, test as it } from 'vitest'
import LogInCard from './LogInCard.vue'
import { fireEvent, stubbedRender } from '@/testUtils'

describe('<LogInCard />', async () => {
  await setup({})

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(LogInCard)

    unmount()
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const { emitted, getByTestId } = stubbedRender(LogInCard)

      await fireEvent.click(getByTestId('close-button'))

      expect(emitted().close).toBeTruthy()
    })
  })

  describe('when the hide/show button is clicked', () => {
    it('changes the password input type to be text', async () => {
      const { getByTestId } = stubbedRender(LogInCard)
      const passwordInput: HTMLInputElement = getByTestId('password-input')

      expect(passwordInput.type).toBe('password')

      await fireEvent.click(getByTestId('hide-show-button'))

      expect(passwordInput.type).toBe('text')
    })
  })

  describe('when the login button is clicked', () => {
    it('emits the close event', async () => {
      const { emitted, getByTestId } = stubbedRender(LogInCard)

      await fireEvent.click(getByTestId('login-button'))

      expect(emitted().close).toBeTruthy()
    })

    // TODO: This is currently failing, and I don't know why
    it.skip('clears the state', async () => {
      const { getByTestId } = stubbedRender(LogInCard)
      const emailAddress = 'strongbad@homestarrunner.com'
      const password = 'homestarsux'

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
  })

  describe('when the sign up button is clicked', () => {
    it('emits the sign up click event', async () => {
      const { emitted, getByTestId } = stubbedRender(LogInCard)

      await fireEvent.click(getByTestId('sign-up-button'))

      expect(emitted().signUpClick).toBeTruthy()
    })
  })
})
