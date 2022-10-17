import { ref } from 'vue'
import { useCurrentUser } from 'composables/useCurrentUser'
import { useSessionToken } from 'composables/useSessionToken'
import type { LoginRequest, ProblemDetails } from 'lib/api/data-contracts'
import { Users } from 'lib/api/Users'
import { isProblemDetails } from 'lib/helpers'

interface LoginUserResponse {
  loading: boolean
  error: ProblemDetails | null
}

export const useLoginUser = async (
  requestData: LoginRequest,
): Promise<LoginUserResponse> => {
  const responseLoading = ref(true)
  const responseError = ref<ProblemDetails | null>(null)
  const authToken = useSessionToken()
  const currentUser = useCurrentUser()

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  try {
    const authResponse = await userClient.usersLoginCreate(requestData)

    if (authResponse.ok) {
      authToken.value = authResponse.data.token

      const userResponse = await userClient.usersMeList({
        headers: { Authorization: `Bearer ${authToken.value}` },
      })

      if (userResponse.ok) {
        currentUser.value = userResponse.data
      } else {
        responseError.value = userResponse.error
      }
    } else {
      responseError.value = authResponse.error
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
    error: responseError.value,
    loading: responseLoading.value,
  }
}

export default useLoginUser
