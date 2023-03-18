import { useLoginUser } from '.'

const mockSuccessUsersLoginCreate = vi.fn(() =>
  Promise.resolve({ data: { token: 'token' }, ok: true }),
)
const mockSuccessUsersMeList = vi.fn(() => Promise.resolve({ ok: true }))

describe('useLoginUser', () => {
  describe('when everything is successful', () => {
    const email = 'test@lb.gg'
    const password = 'Password1'

    it('creates a login session and returns the user information', async () => {
      vi.mock('lib/api/Users', () => ({
        Users: function Users() {
          this.usersLoginCreate = mockSuccessUsersLoginCreate
          this.usersMeList = mockSuccessUsersMeList
        },
      }))

      await useLoginUser({ email, password })

      expect(mockSuccessUsersLoginCreate).toBeCalledTimes(1)
      expect(mockSuccessUsersLoginCreate).toBeCalledWith({ email, password })

      expect(mockSuccessUsersMeList).toBeCalledTimes(1)
      expect(mockSuccessUsersMeList).toBeCalledWith({
        headers: { Authorization: 'Bearer token' },
      })
    })
  })
})
