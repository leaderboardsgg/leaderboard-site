import {
  type ApiResponse,
  type optionalParameters,
  useApi,
} from 'composables/useApi'
import { Account } from 'lib/api/Account'
import type { RegisterRequest, UserViewModel } from 'lib/api/data-contracts'

export async function useRegisterUser(
  requestData: RegisterRequest,
  opts: optionalParameters<UserViewModel> = {},
): Promise<ApiResponse<UserViewModel>> {
  const { onError, onOkay } = opts

  const accountClient = new Account({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<UserViewModel>(
    async () => await accountClient.registerCreate(requestData),
    {
      onError,
      onOkay,
    },
  )
}

export default useRegisterUser
