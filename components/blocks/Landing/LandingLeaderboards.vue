<script setup lang="ts">
import type { ApiResponse } from '~/composables/useApi'
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'
import { useLocalePath } from '#imports'
const localePath = useLocalePath()

interface LandingLeaderboardsProps {
  leaderboards: ApiResponse<LeaderboardViewModel[]>
}

defineProps<LandingLeaderboardsProps>()
</script>
<template>
  <div
    id="landing-leaderboards"
    class="grid w-full auto-rows-[1fr] grid-cols-1 items-start gap-4 align-middle lg:grid-cols-2"
  >
    <NuxtLink
      v-for="leaderboard in leaderboards.data"
      :key="leaderboard.id"
      class="mb-2 content-center bg-gray-200 px-8 py-8 hover:cursor-pointer hover:text-lbgreen"
      :to="
        localePath({
          name: 'board-slug',
          params: { slug: leaderboard.slug },
        })
      "
    >
      <span class="break-words font-bold">
        {{ leaderboard?.name }}
      </span>
    </NuxtLink>
  </div>
</template>
