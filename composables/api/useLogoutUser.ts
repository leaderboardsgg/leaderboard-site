import { useState } from '#app'
import { User } from '@/lib/api/data-contracts'

export const useLogoutUser = (): void => {
  const authToken = useState<string>('session_token')
  const currentUser = useState<User>('current_user')

  authToken.value = ''
  currentUser.value = {
    admin: false,
    email: '',
    username: '',
  }
}

export default useLogoutUser
