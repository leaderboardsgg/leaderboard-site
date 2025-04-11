<script lang="ts" setup>
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'
import { useGetCategoriesForLeaderboard } from '~/composables/api'

interface LeaderboardInfoProps {
  leaderboard?: LeaderboardViewModel
}

const props = defineProps<LeaderboardInfoProps>()

const categories =
  props.leaderboard != null
    ? await useGetCategoriesForLeaderboard(
        {
          id: props.leaderboard.id,
        },
        {
          onError() {
            return null
          },
          onOkay(d) {
            return d
          },
        },
      )
    : undefined
</script>

<template>
  <div
    v-if="leaderboard != null"
    class="flex w-full flex-col gap-6 bg-[var(--bg-content)] p-6"
  >
    <h1 class="mb-4 text-xl font-bold text-white">{{ leaderboard.name }}</h1>
    <div v-if="categories!.data?.data != null" class="flex gap-6">
      <button
        v-for="cat of categories!.data.data"
        :key="cat.id"
        :class="true ? 'border-red-500 text-red-500' : ''"
        class="rounded border border-white px-6 py-3 text-white"
      >
        {{ cat.name }}
      </button>
    </div>
  </div>
</template>
