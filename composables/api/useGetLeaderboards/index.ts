import { ref } from 'vue'
import {
  useApi,
  type ApiResponse,
  type optionalParameters,
} from 'composables/useApi'
import { Leaderboards } from 'lib/api/Leaderboards'
import type { LeaderboardViewModel } from 'lib/api/data-contracts'
import { useRuntimeConfig } from '#imports'

export default async function useGetLeaderboards(
  opts: optionalParameters<LeaderboardViewModel[]> = {},
): Promise<ApiResponse<LeaderboardViewModel[]>> {
  const { onError, onOkay } = opts
  const responseData = ref<LeaderboardViewModel[]>([
    {
      categories: [],
      id: -1,
      name: '',
      slug: '',
      info: '',
      createdAt: '',
      updatedAt: null,
      deletedAt: null,
    },
  ])

  const leaderboardClient = new Leaderboards({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<LeaderboardViewModel[]>(
    async () => await leaderboardClient.listLeaderboards({}),
    {
      onError,
      onOkay,
      responseData,
    },
  )
}
