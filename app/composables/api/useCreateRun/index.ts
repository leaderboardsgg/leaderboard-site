import { useRuntimeConfig } from '#imports'
import {
  useApi,
  type optionalParameters
} from 'composables/useApi'
import type { CreateRunPayload, ScoredRunViewModel, TimedRunViewModel } from 'lib/api/data-contracts'
import { Runs } from '~~/lib/api/Runs'

export async function useCreateRun(
  categoryId: number,
  requestData: CreateRunPayload,
  opts: optionalParameters<TimedRunViewModel | ScoredRunViewModel> = {},
) {
  const { onError, onOkay } = opts
  const runs = new Runs({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return useApi<TimedRunViewModel | ScoredRunViewModel>(
    async () => runs.createRun({ id: categoryId }, requestData),
    {
      onError,
      onOkay,
    },
  )
}

export default useCreateRun
