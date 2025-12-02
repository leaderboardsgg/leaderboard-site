import { useRuntimeConfig } from '#imports'
import {
  type ApiResponse,
  type optionalParameters,
  useApi,
} from 'composables/useApi'
import { Account } from 'lib/api/Account'
import type { ChangePasswordRequest } from 'lib/api/data-contracts'

export async function useChangePassword(
  token: string,
  requestData: ChangePasswordRequest,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts
  const account = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  return await useApi<void>(
    async () => await account.changePassword({
      id: token
    }, requestData),
    {
      onError,
      onOkay,
    },
  )
}

export default useChangePassword
