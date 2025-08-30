import { useRuntimeConfig } from '#app'
import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import { Account } from 'lib/api/Account'

export async function useValidateRecoveryToken(
  recoveryToken: string,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts

  const account = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  return await useApi<void>(
    async () => await account.testRecoveryToken(recoveryToken),
    { onError, onOkay },
  )
}

export default useValidateRecoveryToken
