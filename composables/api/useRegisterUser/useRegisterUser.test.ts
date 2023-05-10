import { useRegisterUser } from '.'

const mockSuccessUsersRegisterCreate = vi.fn(() =>
  Promise.resolve({ ok: true }),
)

describe('useRegisterUser', () => {
  describe('when everything is successful', () => {
    const email = 'test@lb.gg'
    const password = 'Password1'
    const username = 'test'

    it('registers a user, and returns the new user', async () => {
      vi.mock('lib/api/Users', () => ({
        Users: function Users() {
          this.usersRegisterCreate = mockSuccessUsersRegisterCreate
        },
      }))

      await useRegisterUser({
        email,
        password,
        passwordConfirm: password,
        username,
      })

      expect(mockSuccessUsersRegisterCreate).toBeCalledTimes(1)
      expect(mockSuccessUsersRegisterCreate).toBeCalledWith({
        email,
        password,
        passwordConfirm: password,
        username,
      })
    })
  })
})
