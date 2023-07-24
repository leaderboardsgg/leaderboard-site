import type { UserViewModel } from 'lib/api/data-contracts'

export const useCurrentUser = () =>
  useState<UserViewModel>('current_user', () => ({
    id: '',
    username: '',
  }))

export default useCurrentUser
