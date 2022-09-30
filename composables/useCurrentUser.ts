import type { User } from 'root/lib/api/data-contracts'

export const useCurrentUser = () =>
  useState<User>('current_user', () => ({
    admin: false,
    email: '',
    username: '',
  }))

export default useCurrentUser
