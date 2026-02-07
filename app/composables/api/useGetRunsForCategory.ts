import { useRuntimeConfig } from '#app'
import { ref } from 'vue'
import useApi, { type optionalParameters } from '~/composables/useApi'
import { Runs } from '~~/lib/api/Runs'
import type { GetRunsForCategoryParams, RunViewModelListView } from '~~/lib/api/data-contracts'

export default async function useGetRunsForCategory(
  params: GetRunsForCategoryParams,
  opts: optionalParameters<RunViewModelListView> = {},
) {
  const { onError, onOkay } = opts
  const responseData = ref<RunViewModelListView>()

  const client = new Runs({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return useApi<RunViewModelListView>(
    async () => client.getRunsForCategory(params),
    {
      onError,
      onOkay,
      responseData,
    },
  )
}
