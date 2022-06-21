import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import { ProblemDetails, RegisterRequest, User } from '@/lib/api/data-contracts'
import { Users } from '@/lib/api/Users'

interface RegisterUserResponse {
  data: User
  loading: boolean
  error: ProblemDetails | null
}

export const useRegisterUser = (
  requestData: RegisterRequest,
): RegisterUserResponse => {
  const responseData = ref<User>({
    admin: false,
    email: '',
    username: '',
  })
  const responseError = ref<ProblemDetails | null>(null)
  const responseLoading = ref(true)

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })
  userClient
    .usersRegisterCreate(requestData)
    .then((response) => {
      if (response.ok) {
        responseData.value = response.data
      } else {
        throw response.error
      }
      responseLoading.value = false
    })
    .catch((error: ProblemDetails) => {
      console.error(error) // eslint-disable-line no-console
      responseLoading.value = false
      responseError.value = error
    })

  return {
    data: responseData.value,
    error: responseError.value,
    loading: responseLoading.value,
  }
}

export default useRegisterUser
