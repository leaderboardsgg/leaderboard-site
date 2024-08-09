import {
  type ApiResponse,
  type optionalParameters,
  useApi,
} from 'composables/useApi'
import { Account } from 'lib/api/Account'

export async function useConfirmAccount(
  confirmationToken: string,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts

  const account = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  return await useApi<void>(
    async () => await account.confirmUpdate(confirmationToken),
    { onError, onOkay },
  )
}

export default useConfirmAccount
