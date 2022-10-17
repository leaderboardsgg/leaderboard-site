import { useCurrentUser, useSessionToken } from 'root/composables'

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
