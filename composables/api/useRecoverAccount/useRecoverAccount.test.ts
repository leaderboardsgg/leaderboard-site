const mockSuccessRecoverCreate = vi.fn(() => Promise.resolve({ ok: true }))

describe('useRecoverAccount', () => {
  describe('when everything is successful', () => {
    const requestData = { email: 'test@lb.gg', username: 'test' }

    it('kicks off the account recovery process', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.recoverCreate = mockSuccessRecoverCreate
        },
      }))

      await useRecoverAccount(requestData)

      expect(mockSuccessRecoverCreate).toBeCalledTimes(1)
      expect(mockSuccessRecoverCreate).toBeCalledWith(requestData)
    })
  })
})
