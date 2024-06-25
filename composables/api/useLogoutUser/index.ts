import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'

export function useLogoutUser(): void {
  const authToken = useSessionToken()
  const currentUser = useCurrentUser()

  authToken.value = ''
  currentUser.value = {
    id: '',
    role: 'Banned',
    username: '',
  }
}

export default useLogoutUser
