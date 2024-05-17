import {
  type ApiResponse,
  type optionalParameters,
  useApi,
} from 'composables/useApi'
import { Account } from 'lib/api/Account'

/**
 * Resends the account confirmation email for a newly-registered user.
 */
export async function useResendAccountConfirmation(
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts
  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<void>(async () => await account.confirmCreate(), {
    onError,
    onOkay,
  })
}

export default useResendAccountConfirmation
