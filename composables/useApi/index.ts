import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import { ProblemDetails, RegisterRequest, User } from '@/lib/api/data-contracts'
import { Users } from '@/lib/api/Users'

interface RegisterUserResponse {
  data: ProblemDetails | User
  loading: boolean
  error: string | null
}

export const useRegisterUser = (requestData: RegisterRequest): RegisterUserResponse => {
  const responseData = ref<ProblemDetails | User>({
    admin: false,
    email: '',
    username: '',
  })
  const responseLoading = ref(true)
  const responseError = ref<string | null>(null)

  const userClient = new Users({ baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL })
  userClient.usersRegisterCreate(requestData).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      responseData.value = response?.data
    } else {
      throw response?.error
    }
    responseLoading.value = false
  }).catch((error) => {
    console.error(error) // eslint-disable-line no-console
    responseError.value = error
  })

  return {
    data: responseData.value,
    error: responseError.value,
    loading: responseLoading.value,
  }
}

export default useRegisterUser
