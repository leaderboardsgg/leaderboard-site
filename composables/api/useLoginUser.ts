import { ref } from 'vue'
import { useRuntimeConfig, useState } from '#app'
import { LoginRequest, User } from '@/lib/api/data-contracts'
import { Users } from '@/lib/api/Users'

interface LoginUserResponse {
  loading: boolean
  error: string | null
}

export const useLoginUser = (requestData: LoginRequest): LoginUserResponse => {
  const responseLoading = ref(true)
  const responseError = ref<string | null>(null)
  const authToken = useState<string>('session_token')
  const currentUser = useState<User>('current_user', () => ({
    admin: false,
    email: '',
    username: '',
  }))

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })
  userClient
    .usersLoginCreate(requestData)
    .then((response) => {
      if (response.ok) {
        authToken.value = response?.data?.token
      } else {
        throw response?.error
      }
    })
    .then(() => {
      userClient
        .usersMeList({
          headers: { Authorization: `Bearer ${authToken.value}` },
        })
        .then((response) => {
          if (response.ok) {
            currentUser.value = response?.data
          } else {
            throw response?.error
          }
        })

      responseLoading.value = false
    })
    .catch((error) => {
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
