import useChangePassword from '.'

const mockSuccessChangePassword = vi.fn(() => Promise.resolve({ ok: true }))

describe('useChangePassword', () => {
  describe('when everything is successful', () => {
    const token = 'recoveryToken'
    const requestData = { password: 'Password1' }

    it('changes the password for the user', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.changePassword = mockSuccessChangePassword
        },
      }))

      await useChangePassword(token, requestData)

      expect(mockSuccessChangePassword).toBeCalledTimes(1)
      expect(mockSuccessChangePassword).toBeCalledWith({id: token}, requestData)
    })
  })
})
