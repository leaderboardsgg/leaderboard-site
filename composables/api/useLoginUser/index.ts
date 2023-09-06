import { ApiResponse, optionalParameters, useApi } from 'composables/useApi'
import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'
import { Account } from 'lib/api/Account'
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

  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  const users = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<LoginResponse>(
    async () => await account.loginCreate(requestData),
    {
      onError,
      onOkay: async (d: LoginResponse) => {
        authToken.value = d.token

        await useApi<UserViewModel>(
          async () =>
            await users.usersMeList({
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
