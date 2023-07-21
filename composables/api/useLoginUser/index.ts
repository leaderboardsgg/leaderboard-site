import { Account } from 'lib/api/Account'
import { HttpResponse } from 'lib/api/http-client'
import type {
  LoginRequest,
  LoginResponse,
  ProblemDetails,
} from 'lib/api/data-contracts'

export const useLoginUser = async (
  requestData: LoginRequest,
): Promise<HttpResponse<LoginResponse, ProblemDetails>> => {
  const account = new Account({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await account.accountLoginCreate(requestData)
}

export default useLoginUser
