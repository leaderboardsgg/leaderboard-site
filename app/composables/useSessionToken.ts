import { useLocalStorage } from '@vueuse/core'

export default function useSessionToken() {
  return useLocalStorage<string>('session', '')
}
