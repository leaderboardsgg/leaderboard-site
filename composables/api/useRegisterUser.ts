import { ref } from 'vue'
import { Users } from 'lib/api/Users'
import { isProblemDetails } from 'lib/helpers'
import type {
  ProblemDetails,
  RegisterRequest,
  User,
} from 'lib/api/data-contracts'

interface RegisterUserResponse {
  data: User
  loading: boolean
  error: ProblemDetails | null
}

export const useRegisterUser = async (
  requestData: RegisterRequest,
): Promise<RegisterUserResponse> => {
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

  try {
    const { data, ok, error } = await userClient.usersRegisterCreate(
      requestData,
    )

    if (ok) {
      responseData.value = data
    } else {
      responseError.value = error
    }
  } catch (e: unknown) {
    if (isProblemDetails(e)) {
      const error = e as ProblemDetails

      console.error(error) // eslint-disable-line no-console
      responseError.value = error
    }
  } finally {
    responseLoading.value = false
  }

  return {
    data: responseData.value,
    error: responseError.value,
    loading: responseLoading.value,
  }
}

export default useRegisterUser
