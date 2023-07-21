import { Account } from 'lib/api/Account'
import { UserViewModel, ValidationProblemDetails } from 'lib/api/data-contracts'
import { HttpResponse } from 'lib/api/http-client'
import type { RegisterRequest } from 'lib/api/data-contracts'

export async function useRegisterUser(
  requestData: RegisterRequest,
): Promise<HttpResponse<UserViewModel, void | ValidationProblemDetails>> {
  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await account.accountRegisterCreate(requestData)
}

export default useRegisterUser
