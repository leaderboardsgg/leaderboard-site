import { ApiResponse, optionalParameters, useApi } from 'composables/useApi'
import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'
import { Users } from 'lib/api/Users'
import type {
  LoginRequest,
  LoginResponse,
  UserViewModel,
} from 'lib/api/data-contracts'

export const useLoginUser = async (
  requestData: LoginRequest,
  opts: optionalParameters<UserViewModel> = {},
): Promise<ApiResponse<LoginResponse>> => {
  const { onError, onOkay } = opts
  const authToken = useSessionToken()
  const currentUser = useCurrentUser()

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<LoginResponse>(
    async () => await userClient.usersLoginCreate(requestData),
    {
      onError,
      onOkay: async (d: LoginResponse) => {
        authToken.value = d.token

        await useApi<UserViewModel>(
          async () =>
            await userClient.usersMeList({
              headers: { Authorization: `Bearer ${d.token}` },
            }),
          {
            onError,
            onOkay,
            responseData: currentUser,
          },
        )
      },
    },
  )
}

export default useLoginUser
