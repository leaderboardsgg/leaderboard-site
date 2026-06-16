import useResendAccountConfirmation from '~/composables/api/useResendAccountConfirmation'
import useLoginUser from '~/composables/api/useLoginUser'

const mockSuccessLogin = vi.fn(() => Promise.resolve({ data: { token: 'token' }, ok: true }))
const mockSuccessResendConfirmation = vi.fn(() => Promise.resolve({ ok: true }))
const onOkaySpy = vi.fn()
const email = 'test@lb.gg'
const password = 'Password1'

vi.mock('lib/api/Account', () => ({
  Account: vi.fn().mockImplementation(function () {
    return {
      login: mockSuccessLogin,
      resendConfirmationEmail: mockSuccessResendConfirmation,
    }
  }),
}))

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('useResendAccountConfirmation', () => {
  describe('when everything is successful', () => {
    it('resends the account confirmation email', async () => {
      await useLoginUser({ email, password }, { onOkay: onOkaySpy })
      await useResendAccountConfirmation()

      expect(mockSuccessResendConfirmation).toBeCalledTimes(1)
      expect(mockSuccessResendConfirmation).toBeCalledWith({
        headers: { Authorization: 'Bearer token' },
      })
    })
  })
})
