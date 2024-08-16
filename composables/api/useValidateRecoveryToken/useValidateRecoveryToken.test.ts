const mockSuccessRecoverDetail = vi.fn(() => Promise.resolve({ ok: true }))

describe('useValidateRecoveryToken', () => {
  describe('when everything is successful', () => {
    const token = 'recoveryToken'

    it('validates the recovery token', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.recoverDetail = mockSuccessRecoverDetail
        },
      }))

      await useValidateRecoveryToken(token)

      expect(mockSuccessRecoverDetail).toBeCalledTimes(1)
      expect(mockSuccessRecoverDetail).toBeCalledWith(token)
    })
  })
})
