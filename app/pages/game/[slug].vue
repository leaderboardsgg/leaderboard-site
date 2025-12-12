<script setup lang="ts">
import { useRoute } from '#imports'
import { computedAsync } from '@vueuse/core'
import Loader from 'blocks/Loader/Loader.vue'
import CategorySelect from '~/components/blocks/RunsPage/CategorySelect/CategorySelect.vue'
import RunsHeader from '~/components/blocks/RunsPage/Header/Header.vue'
import RunsTable from '~/components/blocks/RunsPage/RunsTable/RunsTable.vue'
import {
  useGetCategoriesForLeaderboard,
  useGetLeaderboardBySlug,
} from '~/composables/api'
const {
  params: { slug },
  query: { category: categorySlug },
} = useRoute()

const {
  loading,
  error: leaderboardError,
  data,
} = await useGetLeaderboardBySlug(slug as string)

const categoriesData = computedAsync(
  async () => {
    if (data) {
      const response = await useGetCategoriesForLeaderboard({ id: data.id })
      if (response.data?.data) {
        return {
          categories: response.data.data,
          activeCategory:
            response.data.data.find((cat) => cat.slug === categorySlug) ||
            response.data.data.at(0),
        }
      }
    }
    return { categories: [], activeCategory: undefined }
  },
  {
    categories: [],
    activeCategory: undefined,
  },
)
</script>

<template>
  <div>
    <Loader v-if="loading" />
    <div v-else-if="leaderboardError !== null" class="bg-black p-6 text-white">
      <p>{{ leaderboardError.status ?? 500 }}</p>
      <p>
        {{
          leaderboardError.title ??
          'Something went wrong. Please refresh this page.'
        }}
      </p>
    </div>
    <div
      v-else-if="data !== undefined"
      class="flex flex-col gap-6 bg-black p-6 text-white"
    >
      <RunsHeader :leaderboard="data" />
      <CategorySelect
        v-if="
          categoriesData?.categories !== undefined &&
          categoriesData.activeCategory !== undefined
        "
        :categories="categoriesData.categories"
        :active-category="categoriesData.activeCategory"
      />
      <RunsTable
        v-if="categoriesData?.activeCategory !== undefined"
        :category="categoriesData.activeCategory"
      />
    </div>
  </div>
</template>
