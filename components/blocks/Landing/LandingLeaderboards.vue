<script setup lang="ts">
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'
import { useLocalePath } from '#imports'
const localePath = useLocalePath()

interface LandingLeaderboardsProps {
  leaderboards: LeaderboardViewModel[]
}

defineProps<LandingLeaderboardsProps>()
</script>
<template>
  <div
    id="landing-leaderboards"
    class="mb-4 grid w-full grid-cols-1 content-start items-start gap-4 lg:grid-cols-2"
  >
    <NuxtLink
      v-for="leaderboard in leaderboards.data"
      :key="leaderboard.id"
      class="mb-2 h-full content-center rounded-lg bg-gray-200 p-8 text-blue-500 underline hover:cursor-pointer"
      :to="
        localePath({
          name: 'board-slug',
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
