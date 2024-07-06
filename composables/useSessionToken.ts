export default function useSessionToken() {
  return useCookie('session_token', {
    default: () => '',
  })
}
