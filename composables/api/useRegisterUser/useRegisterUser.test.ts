const mockSuccessRegisterCreate = vi.fn(() => Promise.resolve({ ok: true }))

describe('useRegisterUser', () => {
  describe('when everything is successful', () => {
    const email = 'test@lb.gg'
    const password = 'Password1'
    const username = 'test'

    it('registers a user, and returns the new user', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.registerCreate = mockSuccessRegisterCreate
        },
      }))

      await useRegisterUser({
        email,
        password,
        username,
      })

      expect(mockSuccessRegisterCreate).toBeCalledTimes(1)
      expect(mockSuccessRegisterCreate).toBeCalledWith({
        email,
        password,
        username,
      })
    })
  })
})
