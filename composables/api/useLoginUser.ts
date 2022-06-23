import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import { useCurrentUser, useSessionToken } from '@/composables'
import type { LoginRequest, ProblemDetails } from '@/lib/api/data-contracts'
import { Users } from '@/lib/api/Users'

interface LoginUserResponse {
  loading: boolean
  error: ProblemDetails | null
}

export const useLoginUser = (requestData: LoginRequest): LoginUserResponse => {
  const responseLoading = ref(true)
  const responseError = ref<ProblemDetails | null>(null)
  const authToken = useSessionToken()
  const currentUser = useCurrentUser()

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })
  userClient
    .usersLoginCreate(requestData)
    .then((response) => {
      if (response.ok) {
        authToken.value = response.data.token
      } else {
        throw response.error
      }
    })
    .then(() => {
      userClient
        .usersMeList({
          headers: { Authorization: `Bearer ${authToken.value}` },
        })
        .then((response) => {
          if (response.ok) {
            currentUser.value = response.data
          } else {
            throw response.error
          }
        })

      responseLoading.value = false
    })
    .catch((error: ProblemDetails) => {
      console.error(error) // eslint-disable-line no-console
      responseLoading.value = false
      responseError.value = error
    })

  return {
    error: responseError.value,
    loading: responseLoading.value,
  }
}

export default useLoginUser
