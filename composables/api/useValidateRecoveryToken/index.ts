import { type ApiResponse, type optionalParameters } from 'composables/useApi'
import { Account } from 'lib/api/Account'

export async function useValidateRecoveryToken(
  recoveryToken: string,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts

  const account = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<void>(
    async () => await account.recoverDetail(recoveryToken),
    { onError, onOkay },
  )
}

export default useValidateRecoveryToken
