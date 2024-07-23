import { beforeEach } from 'vitest'
import type { UserViewModel } from 'lib/api/data-contracts'

const token = 'auth-token'
const user: UserViewModel = {
  id: '575888bd-9702-41a9-9b75-fc87d785c22a',
  role: 'Confirmed',
  username: 'test',
}

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('useLogoutUser', () => {
  beforeEach(() => {
    fetchMock.mockIf(/.*\/api\/[Uu]sers\/me/, () => JSON.stringify(user))
    useSessionToken().value = token
  })

  it('sets the `authToken` and `currentUser` back to the default values', async () => {
    const authToken = useSessionToken()
    const { data, refresh } = await useCurrentUser()

    expect(authToken.value).toEqual(token)
    expect(data.value).toEqual(user)

    useLogoutUser()

    expect(authToken.value).toBeFalsy()

    await refresh()
    // eslint-disable-next-line no-unused-expressions
    expect(data.value).to.be.empty
  })
})
