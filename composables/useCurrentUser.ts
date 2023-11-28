import type { UserViewModel } from 'lib/api/data-contracts'

export function useCurrentUser() {
  return useState<UserViewModel>('current_user', () => ({
    id: '',
    username: '',
  }))
}

export default useCurrentUser
