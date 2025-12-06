<script setup lang="ts">
import { useRoute } from '#imports'
import Loader from 'blocks/Loader/Loader.vue'
import CategoryInfo from '~/components/blocks/RunsPage/CategoryInfo/CategoryInfo.vue'
import Header from '~/components/blocks/RunsPage/Header/Header.vue'
import RunsTable from '~/components/blocks/RunsPage/RunsTable/RunsTable.vue'
import {
  useGetCategoryBySlug,
  useGetLeaderboardBySlug,
} from '~/composables/api'
import type { CategoryViewModel } from '~~/lib/api/data-contracts'
const {
  params: { slug },
  query: { category: categorySlug },
} = useRoute()

if (typeof slug !== 'string' || typeof categorySlug !== 'string') {
  throw new Error('Invalid game slug provided.')
}

const {
  loading,
  error: leaderboardError,
  data,
} = await useGetLeaderboardBySlug(slug)

let category: CategoryViewModel | undefined

if (data) {
  const { data: categoryData } = await useGetCategoryBySlug({
    id: data.id,
    slug: categorySlug,
  })
  category = categoryData
}
</script>

<template>
  <div>
    <Loader v-if="loading" />
    <div v-else-if="leaderboardError !== null" class="bg-black p-6 text-white">
      <span>{{ leaderboardError.status ?? 500 }}</span>
      <br />
      <span>{{
        leaderboardError.title ??
        'Something went wrong. Please refresh this page.'
      }}</span>
    </div>
    <div v-else-if="data !== undefined" class="flex flex-col gap-6 bg-black p-6 text-white">
      <Header :leaderboard="data" :active-category-slug="categorySlug" />
      <div v-if="category !== undefined" class="flex gap-6 bg-bg-content text-[var(--text-colour)]">
        <RunsTable :category="category" />
        <CategoryInfo :category="category" />
      </div>
    </div>
  </div>
</template>
