import { useRuntimeConfig } from '#imports'
import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import { Leaderboards } from 'lib/api/Leaderboards'
import type { LeaderboardViewModelListView } from 'lib/api/data-contracts'
import { ref } from 'vue'

export default async function useGetLeaderboards(
  opts: optionalParameters<LeaderboardViewModelListView> = {},
): Promise<ApiResponse<LeaderboardViewModelListView>> {
  const { onError, onOkay } = opts
  const responseData = ref<LeaderboardViewModelListView>({
    data: [
      {
        id: -1,
        name: '',
        slug: '',
        info: '',
        createdAt: '',
        updatedAt: null,
        deletedAt: null,
        status: 'Published',
      },
    ],
    // Defaults defined in BE config - zysim
    limitDefault: 64,
    limitMax: 1024,
    total: 0,
  })

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
