<script setup lang="ts">
import type { ComputedRef } from '#imports'
import { computed, navigateTo, useRoute } from '#imports'
import Loader from 'blocks/Loader/Loader.vue'
import CategoryInfo from '~/components/blocks/RunsPage/CategoryInfo/CategoryInfo.vue'
import CategorySelect from '~/components/blocks/RunsPage/CategorySelect/CategorySelect.vue'
import RunsHeader from '~/components/blocks/RunsPage/Header/Header.vue'
import RunsTable from '~/components/blocks/RunsPage/RunsTable/RunsTable.vue'
import {
  useGetCategoriesForLeaderboard,
  useGetLeaderboardBySlug,
} from '~/composables/api'
import type { CategoryViewModel } from '~~/lib/api/data-contracts'

const {
  params: { slug },
  hash,
} = useRoute()

const {
  loading,
  error: leaderboardError,
  data,
} = await useGetLeaderboardBySlug(slug as string)

const categories = data
  ? await useGetCategoriesForLeaderboard({ id: data.id })
  : undefined

const categoriesDict: ComputedRef<Record<string, CategoryViewModel>> = computed(
  () =>
    categories?.data?.data?.reduce(
      (acc, cat) => ({
        ...acc,
        [cat.slug]: cat,
      }),
      {},
    ) || {},
)

const firstCategory = computed(() => categories?.data?.data?.at(0))

if (firstCategory.value && !hash) {
  navigateTo(`#${firstCategory.value.slug}`)
}

const activeCategory = computed(() => {
  const { hash } = useRoute()
  return categoriesDict.value[hash.replace('#', '')]
})

const errorStatus = computed(() => {
  const s = leaderboardError?.status ?? 500
  if (s >= 400 && s < 500) {
    return 'Game not found.'
  }
  return 'An error occurred.'
})
</script>

<template>
  <div>
    <Loader v-if="loading" />
    <div v-else-if="leaderboardError" class="bg-black p-6 text-white">
      {{ errorStatus }}
    </div>
    <div v-else-if="data" class="flex flex-col gap-6 bg-black p-6 text-white">
      <RunsHeader :leaderboard="data" />
      <div class="grid grid-cols-2 gap-6 p-6">
        <CategorySelect
          v-if="categories?.data?.data && activeCategory"
          :categories="categories.data.data"
          :active-category-slug="activeCategory.slug"
        />
        <CategoryInfo v-if="activeCategory" :category="activeCategory" />
      </div>
      <RunsTable v-if="activeCategory" :category="activeCategory" />
    </div>
  </div>
</template>
