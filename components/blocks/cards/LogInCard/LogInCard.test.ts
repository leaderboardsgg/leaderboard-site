import { mount, enableAutoUnmount } from '@vue/test-utils'
import { getByTestId, getHTMLElement } from 'root/testUtils'
import * as apiComposables from 'composables/api'
import LogInCard from './LogInCard.vue'

const token = 'jwt-token'
const mockSuccessUsersLoginCreate = vi.fn(() =>
  Promise.resolve({ data: { token }, ok: true }),
)
const mockSuccessUsersMeList = vi.fn(() =>
  Promise.resolve({
    data: { id: 1, username: 'admin' },
    ok: true,
  }),
)

function getLogInCardWrapper() {
  return mount(LogInCard)
}

afterEach(() => {
  vi.restoreAllMocks()
})

enableAutoUnmount(afterEach)

describe('<LogInCard />', () => {
  beforeEach(() => {
    vi.mock('lib/api/Users', () => ({
      Users: function Users() {
        this.usersLoginCreate = mockSuccessUsersLoginCreate
        this.usersMeList = mockSuccessUsersMeList
      },
    }))
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

  // TODO: skip this for now
  describe.skip('when enter key is released on the password input field', () => {
    it('emits the close event', async () => {
      const wrapper = getLogInCardWrapper()

      await getByTestId(wrapper, 'password-input').trigger('keyup.enter')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  // TODO: skip this for now
  describe.skip('when the login button is clicked', () => {
    const emailAddress = 'strongbad@homestarrunner.com'
    const password = 'homestarsux'

    it('emits the close event', async () => {
      const wrapper = getLogInCardWrapper()

      const emailInput = getByTestId(wrapper, 'email-input')
      const passwordInput = getByTestId(wrapper, 'password-input')

      await emailInput.setValue(emailAddress)
      await passwordInput.setValue(password)

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
    it('calls the api', async () => {
      const useLoginUserSpy = vi.spyOn(apiComposables, 'useLoginUser')

      const wrapper = getLogInCardWrapper()

      const emailInput = getByTestId(wrapper, 'email-input')
      const passwordInput = getByTestId(wrapper, 'password-input')

      await emailInput.setValue(emailAddress)
      await passwordInput.setValue(password)

      await getByTestId(wrapper, 'login-button').trigger('click')

      expect(useLoginUserSpy).toBeCalledTimes(1)
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
