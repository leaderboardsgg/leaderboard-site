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
  query: { categorySlug },
} = useRoute()

const {
  loading,
  error: leaderboardError,
  data,
} = await useGetLeaderboardBySlug(slug as string)

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
    <div v-else class="flex flex-col gap-6 bg-[var(--bg-base)] p-6">
      <Header :leaderboard="data" />
      <div
        v-if="category != null"
        class="flex gap-6 bg-[var(--bg-content)] text-[var(--text-colour)]"
      >
        <RunsTable :category="category" />
        <CategoryInfo :category="category" />
      </div>
    </div>
  </div>
</template>

<!-- TODO: To move these styles to a global style file. These styles should live in one. -->
<style lang="postcss">
:root {
  --bg-base: oklch(0.18 0.0101 285.36);
  --bg-content: oklch(0.22 0.0116 285.41);
  --text-colour: white;

  --table-row-bg: var(--bg-content);
  --table-row-bg-alt: oklch(0.24 0.017 285.06);

  .table-row-bg-alt {
    background-color: var(--table-row-bg-alt);
  }
}
</style>
