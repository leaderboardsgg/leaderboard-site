import { useRuntimeConfig } from '#imports'
import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import { Users } from 'lib/api/Users'
import type { UserViewModel } from 'lib/api/data-contracts'

export default async function useGetUser(
  userId: string,
  opts: optionalParameters<UserViewModel> = {},
): Promise<ApiResponse<UserViewModel>> {
  const { onError, onOkay } = opts

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<UserViewModel>(
    async () =>
      await userClient.getUser({
        id: userId,
      }),
    {
      onError,
      onOkay,
    },
  )
}
