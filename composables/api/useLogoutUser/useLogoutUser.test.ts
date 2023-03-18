import { beforeEach } from 'vitest'
import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'
import { useLogoutUser } from '.'

const token = 'auth-token'
const user = {
  admin: false,
  email: 'test@lb.gg',
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
      admin: false,
      email: '',
      username: '',
    })
  })
})
