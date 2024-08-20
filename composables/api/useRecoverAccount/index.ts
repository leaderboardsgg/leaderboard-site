import { Account } from 'lib/api/Account'
import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import type { RecoverAccountRequest } from 'lib/api/data-contracts'
import { useRuntimeConfig } from '#imports'

export async function useRecoverAccount(
  requestData: RecoverAccountRequest,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts
  const account = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  return await useApi<void>(
    async () => await account.recoverCreate(requestData),
    {
      onError,
      onOkay,
    },
  )
}

export default useRecoverAccount
