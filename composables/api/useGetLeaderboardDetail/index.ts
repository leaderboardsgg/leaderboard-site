import { ref } from 'vue'
import { useApi } from 'composables/useApi'
import { Leaderboards } from 'lib/api/Leaderboards'
import type { ApiResponse, optionalParameters } from 'composables/useApi'
import type { LeaderboardViewModel } from 'lib/api/data-contracts'

export async function useGetLeaderboardDetail(
  leaderboardSlug: string,
  opts: optionalParameters<LeaderboardViewModel> = {},
): Promise<ApiResponse<LeaderboardViewModel>> {
  const { onError, onOkay } = opts
  const responseData = ref<LeaderboardViewModel>({
    categories: [],
    id: -1,
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
      onError,
      onOkay,
      responseData,
    },
  )
}

export default useGetLeaderboardDetail
