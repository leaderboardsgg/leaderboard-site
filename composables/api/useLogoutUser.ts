import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'

export const useLogoutUser = (): void => {
  const authToken = useSessionToken()
  const currentUser = useCurrentUser()

  authToken.value = ''
  currentUser.value = {
    admin: false,
    email: '',
    username: '',
  }
}

export default useLogoutUser
