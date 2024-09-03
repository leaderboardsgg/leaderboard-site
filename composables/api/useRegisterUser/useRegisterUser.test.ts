import useRegisterUser from '.'

const mockSuccessRegister = vi.fn(() => Promise.resolve({ ok: true }))

describe('useRegisterUser', () => {
  describe('when everything is successful', () => {
    const email = 'test@lb.gg'
    const password = 'Password1'
    const username = 'test'

    it('registers a user, and returns the new user', async () => {
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.register = mockSuccessRegister
        },
      }))

      await useRegisterUser({
        email,
        password,
        username,
      })

      expect(mockSuccessRegister).toBeCalledTimes(1)
      expect(mockSuccessRegister).toBeCalledWith({
        email,
        password,
        username,
      })
    })
  })
})
