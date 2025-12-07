<script lang="ts" setup>
import type { LeaderboardViewModel } from '~~/lib/api/data-contracts';

interface HeaderProps {
  leaderboard: LeaderboardViewModel
}

const { leaderboard } = defineProps<HeaderProps>()
</script>

<template>
  <div class="flex w-full flex-col gap-6 bg-bg-content p-6">
    <h1 class="mb-4 text-xl font-semibold text-white">
      {{ leaderboard.name }}
    </h1>
    {{ leaderboard.info }}
  </div>
</template>
