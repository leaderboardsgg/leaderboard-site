import { useSessionToken } from '#imports'

export default function useLogoutUser() {
  useSessionToken().value = ''
}
