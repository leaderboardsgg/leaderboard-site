const mockSuccessRecoverCreate2 = vi.fn(() => Promise.resolve({ ok: true }))

describe('useChangePassword', () => {
  describe('when everything is successful', () => {
    const token = 'recoveryToken'
    const requestData = { password: 'Password1' }

    it('changes the password for the user', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.recoverCreate2 = mockSuccessRecoverCreate2
        },
      }))

      await useChangePassword(token, requestData)

      expect(mockSuccessRecoverCreate2).toBeCalledTimes(1)
      expect(mockSuccessRecoverCreate2).toBeCalledWith(token, requestData)
    })
  })
})
