import { ref } from 'vue'
import { ApiResponse, optionalParameters, useApi } from 'composables/useApi'
import { Account } from 'lib/api/Account'
import type { RegisterRequest, UserViewModel } from 'lib/api/data-contracts'

export const useRegisterUser = async (
  requestData: RegisterRequest,
  opts: optionalParameters<UserViewModel> = {},
): Promise<ApiResponse<UserViewModel>> => {
  const { onError, onOkay } = opts
  const responseData = ref<UserViewModel>({
    id: '',
    username: '',
  })

  const accountClient = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<UserViewModel>(
    async () => await accountClient.registerCreate(requestData),
    {
      onError,
      onOkay,
      responseData,
    },
  )
}

export default useRegisterUser
