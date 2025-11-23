import { ref } from 'vue'
import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import { Leaderboards } from 'lib/api/Leaderboards'
import type { LeaderboardViewModelListView } from 'lib/api/data-contracts'
import { useRuntimeConfig } from '#imports'

export default async function useGetLeaderboards(
  opts: optionalParameters<LeaderboardViewModelListView> = {},
): Promise<ApiResponse<LeaderboardViewModelListView>> {
  const { onError, onOkay } = opts
  const responseData = ref<LeaderboardViewModelListView>()

  const leaderboardClient = new Leaderboards({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<LeaderboardViewModelListView>(
    async () => await leaderboardClient.listLeaderboards({}),
    {
      onError,
      onOkay,
      responseData,
    },
  )
}
