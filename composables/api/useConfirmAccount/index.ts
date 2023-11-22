import { ApiResponse, optionalParameters, useApi } from 'composables/useApi'
import { Account } from 'lib/api/Account'

export const useConfirmAccount = async (
  confirmationToken: string,
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> => {
  const { onError, onOkay } = opts

  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<void>(
    async () => await account.confirmUpdate(confirmationToken),
    { onError, onOkay },
  )
}

export default useConfirmAccount
