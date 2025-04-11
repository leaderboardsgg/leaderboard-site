import { useRuntimeConfig } from '#app'
import { ref } from 'vue'
import useApi, { type optionalParameters } from '~/composables/useApi'
import { Categories } from '~/lib/api/Categories'
import type {
  CategoryViewModelListView,
  GetCategoriesForLeaderboardParams,
} from '~/lib/api/data-contracts'

export default async function useGetCategoriesForLeaderboard(
  params: GetCategoriesForLeaderboardParams,
  opts: optionalParameters<CategoryViewModelListView> = {},
) {
  const { onError, onOkay } = opts
  const responseData = ref<CategoryViewModelListView>({
    data: [],
    limitDefault: 0,
    limitMax: 0,
    total: 0,
  })

  const client = new Categories({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return useApi<CategoryViewModelListView>(
    async () => client.getCategoriesForLeaderboard(params),
    {
      onError,
      onOkay,
      responseData,
    },
  )
}
