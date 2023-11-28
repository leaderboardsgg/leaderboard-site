export function useSessionToken() {
  return useState<string>('session_token')
}

export default useSessionToken
