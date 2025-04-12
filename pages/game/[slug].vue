<script setup lang="ts">
import { createError, useRoute } from '#imports'
import Loader from 'blocks/Loader/Loader.vue'
import CategoryInfo from '~/components/RunsPage/CategoryInfo/CategoryInfo.vue'
import Header from '~/components/RunsPage/Header/Header.vue'
import RunsTable from '~/components/RunsPage/RunsTable/RunsTable.vue'
import {
  useGetLeaderboardBySlug,
  useGetCategoryBySlug,
} from '~/composables/api'
const {
  params: { slug },
  query: { category: categorySlug },
} = useRoute()

const {
  loading,
  error: leaderboardError,
  data,
} = await useGetLeaderboardBySlug((slug as string) ?? '')

const { data: category } = await useGetCategoryBySlug({
  id: data!.id,
  slug: categorySlug as string,
})

if (leaderboardError?.status === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Board Not Found',
    fatal: true,
  })
}
</script>

<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="flex flex-col gap-6 bg-black p-6 text-white">
      <Header
        :leaderboard="data"
        :active-category-slug="categorySlug as string"
      />
      <div
        v-if="category != null"
        class="flex gap-6 bg-bg-content text-[var(--text-colour)]"
      >
        <RunsTable :category="category" />
        <CategoryInfo :category="category" />
      </div>
    </div>
  </div>
</template>
