import type { ApiResponse, optionalParameters } from 'composables/useApi'
import { Users } from 'lib/api/Users'
import type { UserViewModel } from 'lib/api/data-contracts'

export async function useGetUserDetail(
  userId: string,
  opts: optionalParameters<UserViewModel> = {},
): Promise<ApiResponse<UserViewModel>> {
  const { onError, onOkay } = opts

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
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
