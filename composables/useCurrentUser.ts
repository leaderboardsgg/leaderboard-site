import { useCookie } from 'nuxt/app'
import type { UserViewModel } from 'lib/api/data-contracts'
import type { CookieRef } from 'nuxt/app'

export function useCurrentUser(): CookieRef<UserViewModel> {
  return useCookie('current_user', {
    default: () => ({
      id: '',
      username: '',
    }),
  })
}

export default useCurrentUser
