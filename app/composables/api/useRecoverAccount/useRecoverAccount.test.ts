import useRecoverAccount from '.'

const mockSuccessRecover = vi.fn(() => Promise.resolve({ ok: true }))

describe('useRecoverAccount', () => {
  describe('when everything is successful', () => {
    const requestData = { email: 'test@lb.gg', username: 'test' }

    it('kicks off the account recovery process', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.sendRecoveryEmail = mockSuccessRecover
        },
      }))

      await useRecoverAccount(requestData)

      expect(mockSuccessRecover).toBeCalledTimes(1)
      expect(mockSuccessRecover).toBeCalledWith(requestData)
    })
  })
})
