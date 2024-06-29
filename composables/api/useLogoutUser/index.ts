import { useSessionToken } from 'composables/useSessionToken'

export function useLogoutUser(): void {
  const authToken = useSessionToken()
  authToken.value = ''
}

export default useLogoutUser
