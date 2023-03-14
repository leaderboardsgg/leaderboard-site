import { ref } from 'vue'
import { ApiResponse, useApi } from 'composables/useApi'
import { Users } from 'lib/api/Users'
import type { User } from 'lib/api/data-contracts'

export const useGetUserDetail = async (
  userId: string,
): Promise<ApiResponse<User>> => {
  const responseData = ref<User>({
    admin: false,
    email: '',
    username: '',
  })

  const userClient = new Users({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<User>(async () => await userClient.usersDetail(userId), {
    responseData,
  })
}

export default useGetUserDetail
