import { useRuntimeConfig } from '#imports'
import { useApi, type ApiResponse, type optionalParameters } from 'composables/useApi'
import { Runs } from 'lib/api/Runs'
import type { TimedRunViewModel, ScoredRunViewModel } from 'lib/api/data-contracts'

export default async function useGetRun(
  runId: string,
  opts: optionalParameters<TimedRunViewModel | ScoredRunViewModel> = {},
): Promise<ApiResponse<TimedRunViewModel | ScoredRunViewModel>> {
  const { onError, onOkay } = opts

  const runsClient = new Runs({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return await useApi<TimedRunViewModel | ScoredRunViewModel>(
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
