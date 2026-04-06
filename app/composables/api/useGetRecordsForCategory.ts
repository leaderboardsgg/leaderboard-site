import { useRuntimeConfig } from '#app'
import { ref } from 'vue'
import useApi, { type optionalParameters } from '~/composables/useApi'
import { Runs } from '~~/lib/api/Runs'
import type {
  GetRunsForCategoryParams,
  RunViewModelListView,
} from '~~/lib/api/data-contracts'

export default async function useGetRecordsForCategory(
  params: GetRunsForCategoryParams,
  opts: optionalParameters<RunViewModelListView> = {},
) {
  const { onError, onOkay } = opts
  const responseData = ref<RunViewModelListView>()

  const client = new Runs({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return useApi<RunViewModelListView>(
    async () => client.getRecordsForCategory(params),
    {
      onError,
      onOkay,
      responseData,
    },
  )
}
