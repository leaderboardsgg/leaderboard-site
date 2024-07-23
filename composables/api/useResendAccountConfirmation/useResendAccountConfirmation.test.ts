const mockSuccessLogin = vi.fn(() =>
  Promise.resolve({ data: { token: 'token' }, ok: true }),
)
const mockSuccessResendAccount = vi.fn(() => Promise.resolve({ ok: true }))
const onOkaySpy = vi.fn()
const email = 'test@lb.gg'
const password = 'Password1'

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('useResendAccountConfirmation', () => {
  describe('when everything is successful', () => {
    it('changes the password for the user', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.loginCreate = mockSuccessLogin
          this.confirmCreate = mockSuccessResendAccount
        },
      }))

      await useLoginUser({ email, password }, { onOkay: onOkaySpy })
      await useResendAccountConfirmation()

      expect(mockSuccessResendAccount).toBeCalledTimes(1)
      expect(mockSuccessResendAccount).toBeCalledWith({
        headers: { Authorization: 'Bearer token' },
      })
    })
  })
})
