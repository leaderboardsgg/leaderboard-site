import { mountSuspended } from '@nuxt/test-utils/runtime'
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

      await wrapper.getByTestId('close-button').trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    })
  })

  describe('when the cancel button is clicked', () => {
    it('should emit the cancelClick event', async () => {
      const wrapper = await mountSuspended(ForgotPasswordCard)

      await wrapper.getByTestId('cancel-button').trigger('click')

      expect(wrapper.emitted().cancelClick).toBeTruthy()
    })
  })

  describe('when the reset password button is clicked', () => {
    describe('when everything is successful', () => {
      const username = 'strongbad'
      const emailAddress = `strongbad@homestarrunner.com`

      beforeEach(() => {
        vi.mock('lib/api/Account', () => ({
          Account: class Account {
            sendRecoveryEmail = mockSuccessAccountRecoverCreate
          },
        }))
      })

      it('should emit the close event', async () => {
        const wrapper = await mountSuspended(ForgotPasswordCard)

        await wrapper.getByTestId('email-input').setValue(emailAddress)
        await wrapper.getByTestId('username-input').setValue(username)
        await wrapper.getByTestId('reset-password-button').trigger('click')

        expect(mockSuccessAccountRecoverCreate).toHaveBeenCalled()
        expect(wrapper.emitted().close).toBeTruthy()
      })
    })

    describe('when one or more fields are invalid', () => {
      it('should not emit the close event', async () => {
        const wrapper = await mountSuspended(ForgotPasswordCard)

        await wrapper.getByTestId('reset-password-button').trigger('click')

        expect(wrapper.emitted().close).toBeFalsy()
      })
    })
  })
})
