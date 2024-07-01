import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import { useSessionToken } from 'composables/useSessionToken'
import { Account } from 'lib/api/Account'

/**
 * Resends the account confirmation email for a newly-registered user.
 */
export default async function useResendAccountConfirmation(
  opts: optionalParameters<void> = {},
): Promise<ApiResponse<void>> {
  const { onError, onOkay } = opts
  const authToken = useSessionToken()
  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<void>(
    async () =>
      await account.confirmCreate({
        headers: {
          Authorization: `Bearer ${authToken.value}`,
        },
      }),
    {
      onError,
      onOkay,
    },
  )
}
