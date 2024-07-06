import { Users } from 'lib/api/Users'
import type { UserViewModel } from 'lib/api/data-contracts'

export default function useCurrentUser() {
  return useAsyncData<Partial<UserViewModel>>(
    'current_user',
    async () => {
      const token = useSessionToken().value
      if (!token) {
        return {}
      }

      const users = new Users({
        baseUrl: useRuntimeConfig().public.backendBaseUrl,
      })

      const resp = await useApi<UserViewModel>(
        async () =>
          await users.usersMeList({
            headers: { Authorization: `Bearer ${token}` },
          }),
      )

      return resp.data ?? {}
    },
    {
      watch: [useSessionToken()],
    },
  )
}
