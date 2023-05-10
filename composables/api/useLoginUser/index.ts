import { ApiResponse, useApi } from 'composables/useApi'
import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'
import { Users } from 'lib/api/Users'
import type { LoginRequest, LoginResponse, User } from 'lib/api/data-contracts'

export const useLoginUser = async (
  requestData: LoginRequest,
): Promise<ApiResponse<LoginResponse>> => {
  const authToken = useSessionToken()
  const currentUser = useCurrentUser()

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<LoginResponse>(
    async () => await userClient.usersLoginCreate(requestData),
    {
      onOkay: async (d: LoginResponse) => {
        authToken.value = d.token

        await useApi<User>(
          async () =>
            await userClient.usersMeList({
              headers: { Authorization: `Bearer ${d.token}` },
            }),
          {
            responseData: currentUser,
          },
        )
      },
    },
  )
}

export default useLoginUser
