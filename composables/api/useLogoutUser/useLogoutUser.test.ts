import { beforeEach } from 'vitest'
import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'
import { useLogoutUser } from '.'

const token = 'auth-token'
const user = {
  id: 'uuid-1234-23-111',
  username: 'test',
}

describe('useLogoutUser', () => {
  beforeEach(() => {
    useCurrentUser().value = user
    useSessionToken().value = token
  })

  it('sets the `authToken` and `currentUser` back to the default values', () => {
    const authToken = useSessionToken()
    const currentUser = useCurrentUser()

    expect(authToken.value).toEqual(token)
    expect(currentUser.value).toEqual(user)

    useLogoutUser()

    expect(authToken.value).toEqual('')
    expect(currentUser.value).toEqual({
      id: '',
      username: '',
    })
  })
})
