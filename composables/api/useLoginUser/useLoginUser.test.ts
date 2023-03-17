import { useLoginUser } from '.'

const mockSuccessUsersLoginCreate = vi.fn(() =>
  Promise.resolve({ data: { token: 'token' }, ok: true }),
)
const mockSuccessUsersMeList = vi.fn(() => Promise.resolve({ ok: true }))

describe('useLoginUser', () => {
  afterEach(() => vi.unmock('lib/api/Users'))

  describe('when everything is successful', () => {
    it('creates a login session and returns the user information', async () => {
      vi.mock('lib/api/Users', () => ({
        Users: function Users() {
          this.usersLoginCreate = mockSuccessUsersLoginCreate
          this.usersMeList = mockSuccessUsersMeList
        },
      }))

      await useLoginUser({ email: 'test@lb.gg', password: 'Password1' })

      expect(mockSuccessUsersLoginCreate).toBeCalledTimes(1)
      expect(mockSuccessUsersMeList).toBeCalledTimes(1)
    })
  })
})
