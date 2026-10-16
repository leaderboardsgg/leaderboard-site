import { useRuntimeConfig } from '#imports'
import { useApi, type ApiResponse, type optionalParameters } from 'composables/useApi'
import { Runs } from 'lib/api/Runs'
import type { TimedRunViewModelFull, ScoredRunViewModelFull } from 'lib/api/data-contracts'

export default async function useGetRun(
  runId: string,
  opts: optionalParameters<TimedRunViewModelFull | ScoredRunViewModelFull> = {},
): Promise<ApiResponse<TimedRunViewModelFull | ScoredRunViewModelFull>> {
  const { onError, onOkay } = opts

  const runsClient = new Runs({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<TimedRunViewModelFull | ScoredRunViewModelFull>(
    async () =>
      await runsClient.getRun({
        id: runId,
      }),
    {
      onError,
      onOkay,
    },
  )
}
