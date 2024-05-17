import { useResendAccountConfirmation } from '.'

const mockSuccessResendAccount = vi.fn(() => Promise.resolve({ ok: true }))

describe('useResendAccountConfirmation', () => {
  describe('when everything is successful', () => {
    it('changes the password for the user', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.confirmCreate = mockSuccessResendAccount
        },
      }))

      await useResendAccountConfirmation()

      expect(mockSuccessResendAccount).toBeCalledTimes(1)
      expect(mockSuccessResendAccount).toBeCalledWith()
    })
  })
})
