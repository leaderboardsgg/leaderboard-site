import { ref } from 'vue'
import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import { Leaderboards } from 'lib/api/Leaderboards'
import type { LeaderboardViewModel } from 'lib/api/data-contracts'
import { useRuntimeConfig } from '#imports'

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
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
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
