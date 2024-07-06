export default function useLogoutUser() {
  useSessionToken().value = ''
}
