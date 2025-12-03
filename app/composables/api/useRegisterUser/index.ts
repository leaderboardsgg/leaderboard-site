import { useRuntimeConfig } from '#imports'
import {
  type ApiResponse,
  type optionalParameters,
  useApi,
} from 'composables/useApi'
import { Account } from 'lib/api/Account'
import type { RegisterRequest } from 'lib/api/data-contracts'

export async function useRegisterUser(
  requestData: RegisterRequest,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts

  const accountClient = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<void>(
    async () => await accountClient.register(requestData),
    {
      onError,
      onOkay,
    },
  )
}

export default useRegisterUser
