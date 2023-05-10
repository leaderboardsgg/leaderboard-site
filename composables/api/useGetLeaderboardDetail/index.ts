import { ref } from 'vue'
import { ApiResponse, useApi } from 'composables/useApi'
import { Leaderboards } from 'lib/api/Leaderboards'
import type { LeaderboardViewModel } from 'lib/api/data-contracts'

export const useGetLeaderboardDetail = async (
  leaderboardSlug: string,
): Promise<ApiResponse<LeaderboardViewModel>> => {
  const responseData = ref<LeaderboardViewModel>({
    name: '',
    rules: '',
    slug: '',
  })

  const leaderboardClient = new Leaderboards({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<LeaderboardViewModel>(
    async () => await leaderboardClient.leaderboardsDetail2(leaderboardSlug),
    {
      responseData,
    },
  )
}

export default useGetLeaderboardDetail
