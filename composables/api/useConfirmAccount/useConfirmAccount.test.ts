import { useConfirmAccount } from '.'

const mockSuccessAccountConfirmation = vi.fn(() =>
  Promise.resolve({ ok: true }),
)

describe('useConfirmUser', () => {
  describe('when everything is successful', () => {
    const confirmationCode = '123'

    it('creates a PUT request to confirm the account', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.confirmUpdate = mockSuccessAccountConfirmation
        },
      }))

      await useConfirmAccount(confirmationCode)

      expect(mockSuccessAccountConfirmation).toBeCalledTimes(1)
      expect(mockSuccessAccountConfirmation).toBeCalledWith(confirmationCode)
    })
  })
})
