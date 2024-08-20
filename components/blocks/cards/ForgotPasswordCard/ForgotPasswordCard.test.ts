import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByTestId } from 'root/testUtils'
import ForgotPasswordCard from './ForgotPasswordCard.vue'

const mockSuccessAccountRecoverCreate = vi.fn(() =>
  Promise.resolve({ ok: true }),
)

afterEach(() => {
  vi.restoreAllMocks()
})

describe('<ForgotPasswordCard />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(ForgotPasswordCard)

    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.getCurrentComponent()).toBeTruthy()
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = await mountSuspended(ForgotPasswordCard)

      await getByTestId(wrapper, 'close-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the cancel button is clicked', () => {
    it('should emit the cancelClick event', async () => {
      const wrapper = await mountSuspended(ForgotPasswordCard)

      await getByTestId(wrapper, 'cancel-button').trigger('click')

      expect(wrapper.emitted().cancelClick).toBeTruthy()
    })
  })

  describe('when the reset password button is clicked', () => {
    describe('when everything is successful', () => {
      const username = 'strongbad'
      const emailAddress = `strongbad@homestarrunner.com`

      beforeEach(() => {
        vi.mock('lib/api/Account', () => ({
          Account: function Account() {
            this.recoverCreate = mockSuccessAccountRecoverCreate
          },
        }))
      })

      it('should emit the close event', async () => {
        const wrapper = await mountSuspended(ForgotPasswordCard)

        const emailInput = getByTestId(wrapper, 'email-input')
        await emailInput.setValue(emailAddress)

        const usernameInput = getByTestId(wrapper, 'username-input')
        await usernameInput.setValue(username)

        await getByTestId(wrapper, 'reset-password-button').trigger('click')

        expect(mockSuccessAccountRecoverCreate).toHaveBeenCalled()
        expect(wrapper.emitted().close).toBeTruthy()
      })
    })

    describe('when one or more fields are invalid', () => {
      it('should not emit the close event', async () => {
        const wrapper = await mountSuspended(ForgotPasswordCard)

        await getByTestId(wrapper, 'reset-password-button').trigger('click')

        expect(wrapper.emitted().close).toBeFalsy()
      })
    })
  })
})
