import { Account } from 'lib/api/Account'
import type { ApiResponse, optionalParameters } from 'composables/useApi'
import type { RecoverAccountRequest } from 'lib/api/data-contracts'

export async function useRecoverAccount(
  requestData: RecoverAccountRequest,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts
  const account = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
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
