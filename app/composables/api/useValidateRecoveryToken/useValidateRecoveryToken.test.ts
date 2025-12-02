import useValidateRecoveryToken from '.'

const mockSuccessTestRecoveryToken = vi.fn(() => Promise.resolve({ ok: true }))

describe('useValidateRecoveryToken', () => {
  describe('when everything is successful', () => {
    const token = 'recoveryToken'

    it('validates the recovery token', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.testRecoveryToken = mockSuccessTestRecoveryToken
        },
      }))

      await useValidateRecoveryToken(token)

      expect(mockSuccessTestRecoveryToken).toBeCalledTimes(1)
      expect(mockSuccessTestRecoveryToken).toBeCalledWith({id: token})
    })
  })
})
