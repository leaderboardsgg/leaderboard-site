import {
  type ApiResponse,
  type optionalParameters,
  useApi,
} from 'composables/useApi'
import { Users } from 'lib/api/Users'
import type { UserViewModel } from 'lib/api/data-contracts'

export async function useGetUserDetail(
  userId: string,
  opts: optionalParameters<UserViewModel> = {},
): Promise<ApiResponse<UserViewModel>> {
  const { onError, onOkay } = opts

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<UserViewModel>(
    async () => await userClient.usersDetail(userId),
    {
      onError,
      onOkay,
    },
  )
}

export default useGetUserDetail
