import useResendAccountConfirmation from '.'
import useLoginUser from '../useLoginUser'

const mockSuccessLogin = vi.fn(() =>
  Promise.resolve({ data: { token: 'token' }, ok: true }),
)
const mockSuccessResendConfirmation = vi.fn(() => Promise.resolve({ ok: true }))
const onOkaySpy = vi.fn()
const email = 'test@lb.gg'
const password = 'Password1'

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('useResendAccountConfirmation', () => {
  describe('when everything is successful', () => {
    it('resends the account confirmation email', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.login = mockSuccessLogin
          this.resendConfirmationEmail = mockSuccessResendConfirmation
        },
      }))

      await useLoginUser({ email, password }, { onOkay: onOkaySpy })
      await useResendAccountConfirmation()

      expect(mockSuccessResendConfirmation).toBeCalledTimes(1)
      expect(mockSuccessResendConfirmation).toBeCalledWith({
        headers: { Authorization: 'Bearer token' },
      })
    })
  })
})
