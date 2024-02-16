import { ApiResponse, optionalParameters, useApi } from 'composables/useApi'
import { Account } from 'lib/api/Account'
import type { RecoverAccountRequest } from 'lib/api/data-contracts'

export async function useRecoverAccount(
  requestData: RecoverAccountRequest,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts
  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<void>(
    async () => await account.recoverCreate(requestData),
    {
      onError,
      onOkay,
    },
  )
}

export default useRecoverAccount
