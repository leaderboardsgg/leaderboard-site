<script setup lang="ts">
import { useLocalePath } from '#imports'
import type { LeaderboardViewModelListView } from '~/lib/api/data-contracts'
const localePath = useLocalePath()

interface LandingLeaderboardsProps {
  leaderboards?: LeaderboardViewModelListView
}

defineProps<LandingLeaderboardsProps>()
</script>
<template>
  <div
    id="landing-leaderboards"
    class="mb-4 grid w-full grid-cols-1 content-start items-start gap-4 lg:grid-cols-2"
  >
    <!-- TODO: Get design for no data edge case. Also get this whole page's new design. -->
    <div v-if="leaderboards == null">No data.</div>
    <NuxtLink
      v-for="leaderboard in leaderboards.data"
      v-else
      :key="leaderboard.id"
      class="mb-2 h-full content-center rounded-lg bg-gray-200 p-8 text-blue-500 underline hover:cursor-pointer"
      :to="
        localePath({
          name: 'game-slug',
          params: { slug: leaderboard.slug },
        })
      "
    >
      <span class="contents break-words font-bold">
        {{ leaderboard?.name }}
      </span>
    </NuxtLink>
  </div>
</template>
