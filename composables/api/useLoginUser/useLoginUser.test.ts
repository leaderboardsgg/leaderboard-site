import { useLoginUser } from '.'

// const mockFailureUsersLoginCreate = vi.fn(() => Promise.resolve({ ok: false }))
const mockSuccessAccountLoginCreate = vi.fn(() =>
  Promise.resolve({ data: { token: 'token' }, ok: true }),
)
const mockSuccessUsersMeList = vi.fn(() => Promise.resolve({ ok: true }))
// const onErrorSpy = vi.fn()
const onOkaySpy = vi.fn()

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
          this.usersMeList = mockSuccessUsersMeList
        },
      }))
      vi.mock('lib/api/Account', () => ({
        Account: function Account() {
          this.loginCreate = mockSuccessAccountLoginCreate
        },
      }))

      await useLoginUser({ email, password }, { onOkay: onOkaySpy })

      expect(mockSuccessAccountLoginCreate).toBeCalledTimes(1)
      expect(mockSuccessAccountLoginCreate).toBeCalledWith({ email, password })

      expect(mockSuccessUsersMeList).toBeCalledTimes(1)
      expect(mockSuccessUsersMeList).toBeCalledWith({
        headers: { Authorization: 'Bearer token' },
      })

      expect(onOkaySpy).toBeCalledTimes(1)
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
