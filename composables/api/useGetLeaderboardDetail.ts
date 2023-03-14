import { ref } from 'vue'
import { ApiResponse, useApi } from 'composables/useApi'
import { Leaderboards } from 'lib/api/Leaderboards'
import type { Leaderboard } from 'lib/api/data-contracts'

export const useGetLeaderboardDetail = async (
  leaderboardSlug: number,
): Promise<ApiResponse<Leaderboard>> => {
  const responseData = ref<Leaderboard>({
    name: '',
    rules: '',
    slug: '',
  })

  const leaderboardClient = new Leaderboards({
    baseUrl: useRuntimeConfig().public.BACKEND_BASE_URL,
  })

  return await useApi<Leaderboard>(
    async () => await leaderboardClient.leaderboardsDetail(leaderboardSlug),
    {
      responseData,
    },
  )
}

export default useGetLeaderboardDetail
