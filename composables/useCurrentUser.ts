import type { User } from 'lib/api/data-contracts'

export const useCurrentUser = () =>
  useState<User>('current_user', () => ({
    admin: false,
    email: '',
    username: '',
  }))

export default useCurrentUser
