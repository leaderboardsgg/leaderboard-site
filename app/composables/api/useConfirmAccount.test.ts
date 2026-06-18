import useConfirmAccount from 'composables/api/useConfirmAccount'

const mockSuccessAccountConfirmation = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Account', () => ({
  Account: vi.fn().mockImplementation(function () {
    return { confirmAccount: mockSuccessAccountConfirmation }
  }),
}))

describe('useConfirmAccount', () => {
  describe('when everything is successful', () => {
    const confirmationCode = '123'

    it('creates a PUT request to confirm the account', async () => {
      await useConfirmAccount(confirmationCode)

      expect(mockSuccessAccountConfirmation).toBeCalledTimes(1)
      expect(mockSuccessAccountConfirmation).toBeCalledWith({
        id: confirmationCode,
      })
    })
  })
})
