import { useCurrentUser, useSessionToken } from '#imports'
import { confirmedUser } from 'mocks/data/api/users'
import { ref } from 'vue'
import useLogoutUser from '.'

const tokenRef = ref('')

vi.mock('@vueuse/core', () => ({
  useLocalStorage: () => tokenRef,
}))

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('useLogoutUser', () => {
  beforeEach(() => {
    tokenRef.value = 'auth-token'
  })

  it('sets the `authToken` and `currentUser` back to the default values', async () => {
    const authToken = useSessionToken()
    const { data, refresh } = await useCurrentUser()

    expect(authToken.value).toEqual('auth-token')
    expect(data.value).toEqual(confirmedUser)

    useLogoutUser()

    expect(authToken.value).toBeFalsy()

    await refresh()

    expect(data.value).toEqual({})
  })
})
