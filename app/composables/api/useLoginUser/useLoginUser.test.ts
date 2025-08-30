import { useSessionToken } from '#imports'
import useLoginUser from '.'

// const mockFailureUsersLoginCreate = vi.fn(() => Promise.resolve({ ok: false }))
const mockSuccessAccountLogin = vi.fn(() =>
  Promise.resolve({ data: { token: 'token' }, ok: true }),
)
const mockSuccessMe = vi.fn(() =>
  Promise.resolve({
    data: {
      id: '05864eb1-540a-4b32-ad57-17871f2519f3',
      role: 'Confirmed',
      username: 'foo',
      createdAt: '1984-01-01T00:00:00Z',
    },
    ok: true,
  }),
)
// const onErrorSpy = vi.fn()
const onOkaySpy = vi.fn((_) => {})

const password = 'Password1'
const email = 'test@lb.gg'

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('useLoginUser', () => {
  describe('when everything is successful', () => {
    it('creates a login session and returns the user information', async () => {
      vi.mock('lib/api/Users', () => ({
        Users: function Users() {
          this.me = mockSuccessMe
        },
      }))
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.login = mockSuccessAccountLogin
        },
      }))

      await useLoginUser({ email, password }, { onOkay: onOkaySpy })

      expect(mockSuccessAccountLogin).toBeCalledTimes(1)
      expect(mockSuccessAccountLogin).toBeCalledWith({ email, password })

      expect(onOkaySpy).toBeCalledTimes(1)
      expect(useSessionToken().value).toBeTruthy()
    })
  })

  // TODO: skip this for now
  // describe('when the API call failed', () => {
  //   it('calls the `onError` callback', async () => {
  //     vi.mock('lib/api/Users', () => ({
  //       Users: function Users() {
  //         this.usersLoginCreate = mockFailureUsersLoginCreate
  //         // this.usersMeList = mockSuccessUsersMeList
  //       },
  //     }))

  //     await useLoginUser({ email, password }, { onError: onErrorSpy })

  //     expect(mockFailureUsersLoginCreate).toBeCalledTimes(1)
  //     expect(mockFailureUsersLoginCreate).toBeCalledWith({ email, password })

  //     expect(onErrorSpy).toBeCalledTimes(1)
  //   })
  // })
})
