import { useCurrentUser, useSessionToken } from '#imports'
import type { UserViewModel } from 'lib/api/data-contracts'
import useLogoutUser from '.'

let token = ''
const user: UserViewModel = {
  id: '575888bd-9702-41a9-9b75-fc87d785c22a',
  role: 'Confirmed',
  username: 'test',
  createdAt: '1984-01-01T00:00:00Z',
}

vi.mock('@vueuse/core', () => ({
  useLocalStorage: () => ({
    get value() {
      return token
    },
    set value(val) {
      token = val
    },
  }),
}))

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('useLogoutUser', () => {
  beforeEach(() => {
    fetchMock.mockIf(/.*\/[Uu]sers\/me/, () => JSON.stringify(user))
    token = 'auth-token'
  })

  // TODO: fix this
  it.skip('sets the `authToken` and `currentUser` back to the default values', async () => {
    const authToken = useSessionToken()
    const { data, refresh } = await useCurrentUser()

    expect(authToken.value).toEqual('auth-token')
    expect(data.value).toEqual(user)

    useLogoutUser()

    expect(authToken.value).toBeFalsy()

    await refresh()

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(data.value).to.be.empty
  })
})
