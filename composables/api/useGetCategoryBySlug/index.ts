import { useRuntimeConfig } from '#app'
import { ref } from 'vue'
import useApi, { type optionalParameters } from '~/composables/useApi'
import { Categories } from '~/lib/api/Categories'
import type {
  CategoryViewModel,
  GetCategoryBySlugParams,
} from '~/lib/api/data-contracts'

export default async function useGetCategoryBySlug(
  params: GetCategoryBySlugParams,
  opts: optionalParameters<CategoryViewModel> = {},
) {
  const { onError, onOkay } = opts
  const responseData = ref<CategoryViewModel>()

  const client = new Categories({
    baseUrl: useRuntimeConfig().public.backendBaseUrl,
  })

  return useApi<CategoryViewModel>(
    async () => client.getCategoryBySlug(params),
    {
      onError,
      onOkay,
      responseData,
    },
  )
}
