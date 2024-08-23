import { useSessionToken, useRuntimeConfig } from '#imports'
import {
  type ApiResponse,
  type optionalParameters,
  useApi,
} from 'composables/useApi'
import { Account } from 'lib/api/Account'
import type { LoginRequest, LoginResponse } from 'lib/api/data-contracts'

export default async function useLoginUser(
  requestData: LoginRequest,
  opts: optionalParameters<LoginResponse> = {},
): Promise<ApiResponse<LoginResponse>> {
  const { onError, onOkay } = opts
  const authToken = useSessionToken()

  const account = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<LoginResponse>(
    async () => await account.loginCreate(requestData),
    {
      onError,
      onOkay: async (d: LoginResponse) => {
        authToken.value = d.token
        if (onOkay) {
          await onOkay(d)
        }
      },
    },
  )
}
