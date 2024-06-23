import type { CookieRef } from 'nuxt/app'

export function useSessionToken(): CookieRef<string> {
  return useCookie<string>('session_token')
}

export default useSessionToken
