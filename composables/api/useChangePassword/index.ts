import { ApiResponse, optionalParameters, useApi } from 'composables/useApi'
import { Account } from 'lib/api/Account'
import type { ChangePasswordRequest } from 'lib/api/data-contracts'

export async function useChangePassword(
  token: string,
  requestData: ChangePasswordRequest,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts
  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<void>(
    async () => await account.recoverCreate2(token, requestData),
    {
      onError,
      onOkay,
    },
  )
}

export default useChangePassword
