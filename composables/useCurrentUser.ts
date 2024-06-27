import type { UserViewModel } from 'lib/api/data-contracts'

export function useCurrentUser() {
  return useCookie<UserViewModel | undefined>('current_user')
}

export default useCurrentUser
